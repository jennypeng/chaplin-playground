CollectionView = require './base/collection-view'
#View = require './base/view'
ImageModel = require '../models/image'
PhotoView = require './photo'

module.exports = class ImagesCollectionView extends CollectionView
  autoRender: true
  itemView: PhotoView
  # listen:
  #   'addedToDOM' : 'onAddedToDOM'
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
    @collection.fetch reset: true, success: @onFetchSuccess, error: @onFetchError

  onFetchSuccess: (model, response, options) ->
    console.log("SUCESSS!")
  
  onFetchError: (model, response, options) ->
    console.log("FAILURE")

  clicked: ->
    #console.log("yooo")
    imageTitle = @$('input[name=imageTitle]').val()
    imageSrc = @$('input[name=imageSrc]').val()
    imageCaption = @$('input[name=imageCaption]').val()
    console.log("hefawefaewf " + imageCaption)
    image = {imageTitle: imageTitle, imageCaption: imageCaption, imageSrc: imageSrc} #for some reason if you put here, not in intialize it works
    @collection.push image

  # onAddedToDOM: ->
  #   imageTitle = @$('input[name=imageTitle]').val()
  #   imageSrc = @$('input[name=imageSrc]').val()
  #   imageCaption = @$('input[name=imageCaption]').val()
  #   vals = [imageTitle, imageCaption, imageSrc]
  # @model.set imageTitle: imageTitle
  # @model.set imageCaption: imageCaption
  # @model.set imageSrc: imageSrc

    
    

