$           = require 'jquery'

Application = require './application'
routes      = require './routes'

$ ->

  new Application {
    title: 'project',
    controllerSuffix: '',
    routes
  }
