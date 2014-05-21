Model = require './base/model'

module.exports = class ImageModel extends Model
  urlRoot: '/image' # need to set id in constructer to refer to user/id
  default: 
    imageTitle: 'No Title Avaliable'
    imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgE6ny6bi-_Lgk5BAB45hMVtN1aH-Thd2NKrRnqjWDxg7iG5PtxoQWhvc'
    imageCaption: 'No Caption Avaliable'
  validate: ->
    if attributes.imageSrc == ''
      console.log 'no image src'
  initialize: ->
    @on 'change', ->
      cap = model.get "imageCaption"
      console.log 'Changed image to' + cap
    #what's the difference between putting listeners here versus line above?

  edit:  ->
    console.log "editing from image.coffee"
    @.set imageCaption: 'testCaption'


