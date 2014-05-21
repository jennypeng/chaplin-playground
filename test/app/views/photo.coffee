$ = require 'jquery'
View = require './base/view'
mediator = require('chaplin').mediator

module.exports = class PhotoView extends View
  template: require '../templates/photo'
  autoRender: true
  className: 'container'
  events:
    'click button.editImage' : 'editImage'
  # listen:
  #   'addedToDOM' : 'onAddedToDOM'
  initialize: ->
    super
    @publishEvent 'newImage' # publish the new image event on initializiaitont aelfj
    @model.on 'change', ->
      console.log 'image has been changed!!!'
      @.render()
      #PLEASE WHY NOT RENDER
    console.log("model is ", @model)
    console.log("model collection ", @model.collection)
    
  editImage: ->
    console.log "editing image"
    console.log @model.edit
    @model.edit
    
  # onAddedToDOM: ->
  #   imageTitle = @$('input[name=imageTitle]').value
  #   imageSrc = @$('input[name=imageSrc]').value
  #   imageCaption = @$('input[name=imageCaption]').value
  #   @model.set imageTitle: imageTitle
  #   @model.set imageCaption: imageCaption
  #   @model.set imageSrc: imageSrc


