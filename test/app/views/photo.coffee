$ = require 'jquery'
View = require './base/view'

module.exports = class PhotoView extends View
  template: require '../templates/photo'
  autoRender: true
  className: 'container'
  # listen:
  #   'addedToDOM' : 'onAddedToDOM'
  initialize: ->
    super
    console.log("model is ", @model)
    console.log("model collection ", @model.collection)
    
  # onAddedToDOM: ->
  #   imageTitle = @$('input[name=imageTitle]').value
  #   imageSrc = @$('input[name=imageSrc]').value
  #   imageCaption = @$('input[name=imageCaption]').value
  #   @model.set imageTitle: imageTitle
  #   @model.set imageCaption: imageCaption
  #   @model.set imageSrc: imageSrc


