Collection = require './base/collection'
ImageModel      = require '../models/image' #image is the submodel of the collection photos

module.exports = class PhotosCollection extends Collection
  model: ImageModel
  url: '/photos.json' 
  # parse: (response) ->
  # 	console.log("parse returns", response.results)
  # 	return JSON.parse(response).objects;
