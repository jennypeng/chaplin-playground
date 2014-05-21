Model = require './base/model'

module.exports = class ImageModel extends Model
  initialize: ->
    console.log("instance of imageModel created", @.collection)

