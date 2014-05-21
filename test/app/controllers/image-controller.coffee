Controller    = require './base/controller'
FooterView    = require '../views/footer'
HeaderView    = require '../views/header'
HomePageView  = require '../views/home/home-page'
JumbotronView = require '../views/bootstrap/jumbotron'
ImagesCollectionView = require '../views/images-collection'
PhotosCollection = require '../models/photos'
ImageModel = require '../models/image'
Chaplin = require 'chaplin'

module.exports = class ImageController extends Controller
  beforeAction: -> #(params) for access to url param keys
    super
    #### What does at reuse take in as arguments?
    @reuse 'header', HeaderView, region: 'header'
    @reuse 'footer', FooterView, region: 'footer'

  index: ->
  	#every controller action should save the main view as @view, or self.view
    #for naming regions: @view = new MyView {region: 'sidebar'}
    #@photos = new Chaplin.Collection null, model: ImageModel
    @view = new ImagesCollectionView 
      region: 'main'
      collection: new PhotosCollection #collection: @photos  model: ImageModel
      #collection: new Chaplin.Collection [{imageTitle: 'cute dino', imageSrc: "http://imgur.com/gallery/1M2BpNc", imageCaption: 'wow'}]
    #@view.subview 'images-collection-content', new ImagesCollectionView region: 'main'

    @

