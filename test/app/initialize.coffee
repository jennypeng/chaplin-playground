$           = require 'jquery'

Application = require './application'
routes      = require './routes'

$ ->

  new Application {
    title: 'test',
    controllerSuffix: '-controller',
    routes
  }
