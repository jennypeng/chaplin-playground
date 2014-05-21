Controller    = require './base/controller'
StageModel = require '../models/stage'
Chaplin = require 'chaplin'
Stage1View = '../views/stage1'

module.exports = class StageController extends Controller
	index: ->
		console.log 'stage called'
		debugger
		@view = Stage1View
		#@view.subview 'stage1', new Stage1View region: 'first'
		#@view.subview 'stage2', new Stage2View region: 'second'
		@

