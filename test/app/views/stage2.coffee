$ = require 'jquery'
StageModel = require '../models/stage'
View = require './base/view'
mediator = require('chaplin').mediator

module.exports = class Stage1View extends View
	template: require '../templates/stage'
	autoRender: true
	className: 'stage2'
	model: StageModel

	initialize: ->
		console.log 'init stage1'
