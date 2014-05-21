CollectionView = require './base/collection-view'
$ = require 'jquery'
_ = require 'underscore'
#View = require './base/view'
ImageModel = require '../models/image'
PhotoView = require './photo'

module.exports = class ImagesCollectionView extends CollectionView
  autoRender: true
  itemView: PhotoView
  events:
    'click input.submit' : 'clicked'
    'click button.add' : 'clicked'
  className: 'collection-container'
  listSelector: '.photos'
  template: require '../templates/photos'
  initialize: ->
    super
    @collection.on 'add', ->
      @.render()
      console.log "something was added to the collection"

    @collection.on 'reset', ->
      @.render()
      console.log "something was reset"
    @collection.on 'change', ->
      @.render()
    $(document).on('scroll', _.bind(@.checkScroll, @))
    @collection.fetch reset: true, success: @onFetchSuccess, error: @onFetchError
  checkScroll: -> #this doesn't do anything 
    triggerPoint = 100 
    if @.el.scrollTop + @.el.clientHeight + triggerPoint > @.el.scrollHeight
      console.log 'reached point'
      @collection.page += 1
      console.log @collection.page
      @collection.fetch #refetch after images

  onFetchSuccess: (model, response, options) ->
    console.log("SUCESSS!")
  
  onFetchError: (model, response, options) ->
    console.log("FAILURE")

  clicked: ->
    #add validation later
    imageTitle = @$('input[name=imageTitle]').val()
    imageSrc = @$('input[name=imageSrc]').val()
    imageCaption = @$('input[name=imageCaption]').val()
    

    image = {imageTitle: imageTitle, imageCaption: imageCaption, imageSrc: imageSrc} #for some reason if you put here, not in intialize it works
    @collection.push image #

  # onAddedToDOM: ->
  #   imageTitle = @$('input[name=imageTitle]').val()
  #   imageSrc = @$('input[name=imageSrc]').val()
  #   imageCaption = @$('input[name=imageCaption]').val()
  #   vals = [imageTitle, imageCaption, imageSrc]
  # @model.set imageTitle: imageTitle
  # @model.set imageCaption: imageCaption
  # @model.set imageSrc: imageSrc

    
    

