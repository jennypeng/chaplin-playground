require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, Application, Backbone, Chaplin,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.jQuery = $ = require('jquery');

require('../bower_components/bootstrap/dist/js/bootstrap');

Backbone = require('backbone');

Backbone.$ = $;

Chaplin = require('chaplin');

module.exports = Application = (function(_super) {
  __extends(Application, _super);

  function Application() {
    return Application.__super__.constructor.apply(this, arguments);
  }

  return Application;

})(Chaplin.Application);


},{"../bower_components/bootstrap/dist/js/bootstrap":42,"backbone":"5kFNoY","chaplin":43,"jquery":"HlZQrA"}],2:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!doctype html>\n<!--[if IE 8]>    <html class=\"no-js lt-ie9\" lang=\"en\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n  <title>Chaplin Generator</title>\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <link rel=\"stylesheet\" href=\"/css/app.css\">\n</head>\n<body>\n  <script src=\"/js/vendor.js\"></script>\n  <script src=\"/js/app.js\"></script>\n</body>\n</html>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"PL6FY2":[function(require,module,exports){
var Chaplin, Controller, SiteView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

SiteView = require('../../views/site-view');

module.exports = Controller = (function(_super) {
  __extends(Controller, _super);

  function Controller() {
    return Controller.__super__.constructor.apply(this, arguments);
  }

  Controller.prototype.beforeAction = function() {
    return this.reuse('site', SiteView);
  };

  return Controller;

})(Chaplin.Controller);


},{"../../views/site-view":41,"chaplin":43}],"controllers/base/controller":[function(require,module,exports){
module.exports=require('PL6FY2');
},{}],"controllers/home-controller":[function(require,module,exports){
module.exports=require('r6AlbY');
},{}],"r6AlbY":[function(require,module,exports){
var Controller, FooterView, HeaderView, HomeController, HomePageView, JumbotronView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller');

FooterView = require('../views/footer');

HeaderView = require('../views/header');

HomePageView = require('../views/home/home-page');

JumbotronView = require('../views/bootstrap/jumbotron');

module.exports = HomeController = (function(_super) {
  __extends(HomeController, _super);

  function HomeController() {
    return HomeController.__super__.constructor.apply(this, arguments);
  }

  HomeController.prototype.beforeAction = function() {
    HomeController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  HomeController.prototype.index = function() {
    this.view = new JumbotronView({
      region: 'main'
    });
    this.view.subview('home-page-content', new HomePageView({
      region: 'main'
    }));
    return this;
  };

  return HomeController;

})(Controller);


},{"../views/bootstrap/jumbotron":35,"../views/footer":36,"../views/header":37,"../views/home/home-page":38,"./base/controller":"PL6FY2"}],"2KFWuv":[function(require,module,exports){
var Chaplin, Controller, FooterView, HeaderView, HomePageView, ImageController, ImageModel, ImagesCollectionView, JumbotronView, PhotosCollection,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller');

FooterView = require('../views/footer');

HeaderView = require('../views/header');

HomePageView = require('../views/home/home-page');

JumbotronView = require('../views/bootstrap/jumbotron');

ImagesCollectionView = require('../views/images-collection');

PhotosCollection = require('../models/photos');

ImageModel = require('../models/image');

Chaplin = require('chaplin');

module.exports = ImageController = (function(_super) {
  __extends(ImageController, _super);

  function ImageController() {
    return ImageController.__super__.constructor.apply(this, arguments);
  }

  ImageController.prototype.beforeAction = function() {
    ImageController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  ImageController.prototype.index = function() {
    this.view = new ImagesCollectionView({
      region: 'main',
      collection: new PhotosCollection
    });
    return this;
  };

  return ImageController;

})(Controller);


},{"../models/image":15,"../models/photos":16,"../views/bootstrap/jumbotron":35,"../views/footer":36,"../views/header":37,"../views/home/home-page":38,"../views/images-collection":39,"./base/controller":"PL6FY2","chaplin":43}],"controllers/image-controller":[function(require,module,exports){
module.exports=require('2KFWuv');
},{}],9:[function(require,module,exports){
var $, Application, routes;

$ = require('jquery');

Application = require('./application');

routes = require('./routes');

$(function() {
  return new Application({
    title: 'test',
    controllerSuffix: '-controller',
    routes: routes
  });
});


},{"./application":1,"./routes":17,"jquery":"HlZQrA"}],10:[function(require,module,exports){
var Chaplin, utils;

Chaplin = require('chaplin');

utils = Chaplin.utils.beget(Chaplin.utils);

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;


},{"chaplin":43}],11:[function(require,module,exports){
var Chaplin, Handlebars, register,
  __slice = [].slice;

Chaplin = require('chaplin');

Handlebars = require('hbsfy/runtime');

register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse;
  inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers["with"].call(this, context, options);
});

register('url', function() {
  var options, params, routeName, _i;
  routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
  return Chaplin.utils.reverse(routeName, params);
});


},{"chaplin":43,"hbsfy/runtime":"pu95bm"}],12:[function(require,module,exports){
var Chaplin, mediator;

Chaplin = require('chaplin');

mediator = module.exports = Chaplin.mediator;


},{"chaplin":43}],13:[function(require,module,exports){
var Chaplin, Collection, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

Model = require('./model');

module.exports = Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  Collection.prototype.model = Model;

  return Collection;

})(Chaplin.Collection);


},{"./model":14,"chaplin":43}],14:[function(require,module,exports){
var Chaplin, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

module.exports = Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  return Model;

})(Chaplin.Model);


},{"chaplin":43}],15:[function(require,module,exports){
var ImageModel, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('./base/model');

module.exports = ImageModel = (function(_super) {
  __extends(ImageModel, _super);

  function ImageModel() {
    return ImageModel.__super__.constructor.apply(this, arguments);
  }

  ImageModel.prototype.urlRoot = '/image';

  ImageModel.prototype["default"] = {
    imageTitle: 'No Title Avaliable',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgE6ny6bi-_Lgk5BAB45hMVtN1aH-Thd2NKrRnqjWDxg7iG5PtxoQWhvc',
    imageCaption: 'No Caption Avaliable'
  };

  ImageModel.prototype.validate = function() {
    if (attributes.imageSrc === '') {
      return console.log('no image src');
    }
  };

  ImageModel.prototype.initialize = function() {
    return this.on('change', function() {
      var cap;
      cap = model.get("imageCaption");
      return console.log('Changed image to' + cap);
    });
  };

  ImageModel.prototype.edit = function() {
    console.log("editing from image.coffee");
    return this.set({
      imageCaption: 'testCaption'
    });
  };

  return ImageModel;

})(Model);


},{"./base/model":14}],16:[function(require,module,exports){
var Collection, ImageModel, PhotosCollection,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Collection = require('./base/collection');

ImageModel = require('../models/image');

module.exports = PhotosCollection = (function(_super) {
  __extends(PhotosCollection, _super);

  function PhotosCollection() {
    return PhotosCollection.__super__.constructor.apply(this, arguments);
  }

  PhotosCollection.prototype.model = ImageModel;

  PhotosCollection.prototype.page = 1;

  PhotosCollection.prototype.url = function() {
    return '/photos' + this.page + '.json';
  };

  return PhotosCollection;

})(Collection);


},{"../models/image":15,"./base/collection":13}],17:[function(require,module,exports){
module.exports = function(match) {
  match('', 'home#index');
  return match('test', 'image#index');
};


},{}],"9RsPKC":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p>&copy; Company 2013</p>\n  </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/footer":[function(require,module,exports){
module.exports=require('9RsPKC');
},{}],"../templates/header":[function(require,module,exports){
module.exports=require('j00Jnv');
},{}],"j00Jnv":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Chaplin Bootstrap Example</a>\n</div>\n<div class=\"navbar-collapse collapse\">\n  <form class=\"navbar-form navbar-right\">\n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n  </form>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"s/yNEm":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/home":[function(require,module,exports){
module.exports=require('s/yNEm');
},{}],24:[function(require,module,exports){
var _ = require("underscore")
},{"underscore":44}],"rN5+ME":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <h1>Hello, world!</h1>\n  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n  <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/jumbotron":[function(require,module,exports){
module.exports=require('rN5+ME');
},{}],"DAW7G5":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"image-container\">\n  <h1>";
  if (helper = helpers.imageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <img src=\"";
  if (helper = helpers.imageSrc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageSrc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> \n  <p>";
  if (helper = helpers.imageCaption) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageCaption); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <button type=\"button\" class=\"editImage\"> edit </button>\n</div>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/photo":[function(require,module,exports){
module.exports=require('DAW7G5');
},{}],"../templates/photos":[function(require,module,exports){
module.exports=require('2+wKAI');
},{}],"2+wKAI":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"photos\"></div>\n<h1></h1>\n<form>\nTitle: <input type=\"text\" name=\"imageTitle\"><br>\nCaption: <input type=\"text\" name=\"imageCaption\"><br>\nImgSrc: <input type=\"text\" name=\"imageSrc\"><br>\n<button type=\"button\" class=\"add\">Click Me!</button>\n</form>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/site":[function(require,module,exports){
module.exports=require('cL1PB2');
},{}],"cL1PB2":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header id=\"header\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"></header>\n\n<div id=\"outer-page-container\"></div>\n\n<footer id=\"footer\"></footer>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],33:[function(require,module,exports){
var Chaplin, CollectionView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

View = require('./view');

module.exports = CollectionView = (function(_super) {
  __extends(CollectionView, _super);

  function CollectionView() {
    return CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.animationDuration = 0;

  CollectionView.prototype.useCssAnimation = true;

  CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

  return CollectionView;

})(Chaplin.CollectionView);


},{"./view":34,"chaplin":43}],34:[function(require,module,exports){
var Chaplin, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

require('../../lib/view-helper');

module.exports = View = (function(_super) {
  __extends(View, _super);

  function View() {
    return View.__super__.constructor.apply(this, arguments);
  }

  View.prototype.getTemplateFunction = function() {
    return this.template;
  };

  return View;

})(Chaplin.View);


},{"../../lib/view-helper":11,"chaplin":43}],35:[function(require,module,exports){
var JumboTronView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = JumboTronView = (function(_super) {
  __extends(JumboTronView, _super);

  function JumboTronView() {
    return JumboTronView.__super__.constructor.apply(this, arguments);
  }

  JumboTronView.prototype.autoRender = true;

  JumboTronView.prototype.className = 'jumbotron';

  JumboTronView.prototype.template = require('../../templates/jumbotron');

  return JumboTronView;

})(View);


},{"../../templates/jumbotron":"rN5+ME","../base/view":34}],36:[function(require,module,exports){
var FooterView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = FooterView = (function(_super) {
  __extends(FooterView, _super);

  function FooterView() {
    return FooterView.__super__.constructor.apply(this, arguments);
  }

  FooterView.prototype.autoRender = true;

  FooterView.prototype.className = 'container';

  FooterView.prototype.template = require('../templates/footer');

  return FooterView;

})(View);


},{"../templates/footer":"9RsPKC","./base/view":34}],37:[function(require,module,exports){
var HeaderView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = HeaderView = (function(_super) {
  __extends(HeaderView, _super);

  function HeaderView() {
    return HeaderView.__super__.constructor.apply(this, arguments);
  }

  HeaderView.prototype.autoRender = true;

  HeaderView.prototype.className = 'container';

  HeaderView.prototype.template = require('../templates/header');

  return HeaderView;

})(View);


},{"../templates/header":"j00Jnv","./base/view":34}],38:[function(require,module,exports){
var HomePageView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = HomePageView = (function(_super) {
  __extends(HomePageView, _super);

  function HomePageView() {
    return HomePageView.__super__.constructor.apply(this, arguments);
  }

  HomePageView.prototype.autoRender = true;

  HomePageView.prototype.className = 'container';

  HomePageView.prototype.template = require('../../templates/home');

  return HomePageView;

})(View);


},{"../../templates/home":"s/yNEm","../base/view":34}],39:[function(require,module,exports){
var $, CollectionView, ImageModel, ImagesCollectionView, PhotoView, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CollectionView = require('./base/collection-view');

$ = require('jquery');

_ = require('underscore');

ImageModel = require('../models/image');

PhotoView = require('./photo');

module.exports = ImagesCollectionView = (function(_super) {
  __extends(ImagesCollectionView, _super);

  function ImagesCollectionView() {
    return ImagesCollectionView.__super__.constructor.apply(this, arguments);
  }

  ImagesCollectionView.prototype.autoRender = true;

  ImagesCollectionView.prototype.itemView = PhotoView;

  ImagesCollectionView.prototype.events = {
    'click input.submit': 'clicked',
    'click button.add': 'clicked'
  };

  ImagesCollectionView.prototype.className = 'collection-container';

  ImagesCollectionView.prototype.listSelector = '.photos';

  ImagesCollectionView.prototype.template = require('../templates/photos');

  ImagesCollectionView.prototype.initialize = function() {
    ImagesCollectionView.__super__.initialize.apply(this, arguments);
    this.collection.on('add', function() {
      this.render();
      return console.log("something was added to the collection");
    });
    this.collection.on('reset', function() {
      this.render();
      return console.log("something was reset");
    });
    this.collection.on('change', function() {
      return this.render();
    });
    $(document).on('scroll', _.bind(this.checkScroll, this));
    return this.collection.fetch({
      reset: true,
      success: this.onFetchSuccess,
      error: this.onFetchError
    });
  };

  ImagesCollectionView.prototype.checkScroll = function() {
    var triggerPoint;
    triggerPoint = 100;
    if (this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
      console.log('reached point');
      this.collection.page += 1;
      console.log(this.collection.page);
      return this.collection.fetch;
    }
  };

  ImagesCollectionView.prototype.onFetchSuccess = function(model, response, options) {
    return console.log("SUCESSS!");
  };

  ImagesCollectionView.prototype.onFetchError = function(model, response, options) {
    return console.log("FAILURE");
  };

  ImagesCollectionView.prototype.clicked = function() {
    var image, imageCaption, imageSrc, imageTitle;
    imageTitle = this.$('input[name=imageTitle]').val();
    imageSrc = this.$('input[name=imageSrc]').val();
    imageCaption = this.$('input[name=imageCaption]').val();
    image = {
      imageTitle: imageTitle,
      imageCaption: imageCaption,
      imageSrc: imageSrc
    };
    return this.collection.push(image);
  };

  return ImagesCollectionView;

})(CollectionView);


},{"../models/image":15,"../templates/photos":"2+wKAI","./base/collection-view":33,"./photo":40,"jquery":"HlZQrA","underscore":44}],40:[function(require,module,exports){
var $, PhotoView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$ = require('jquery');

View = require('./base/view');

module.exports = PhotoView = (function(_super) {
  __extends(PhotoView, _super);

  function PhotoView() {
    return PhotoView.__super__.constructor.apply(this, arguments);
  }

  PhotoView.prototype.template = require('../templates/photo');

  PhotoView.prototype.autoRender = true;

  PhotoView.prototype.className = 'container';

  PhotoView.prototype.events = {
    'click button.editImage': 'editImage'
  };

  PhotoView.prototype.initialize = function() {
    PhotoView.__super__.initialize.apply(this, arguments);
    this.model.on('change', function() {
      console.log('image has been changed!!!');
      return this.render();
    });
    console.log("model is ", this.model);
    return console.log("model collection ", this.model.collection);
  };

  PhotoView.prototype.editImage = function() {
    console.log("editing image");
    console.log(this.model.edit);
    return this.model.edit;
  };

  return PhotoView;

})(View);


},{"../templates/photo":"DAW7G5","./base/view":34,"jquery":"HlZQrA"}],41:[function(require,module,exports){
var SiteView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = SiteView = (function(_super) {
  __extends(SiteView, _super);

  function SiteView() {
    return SiteView.__super__.constructor.apply(this, arguments);
  }

  SiteView.prototype.container = 'body';

  SiteView.prototype.id = 'site-container';

  SiteView.prototype.regions = {
    header: '#header',
    main: '#outer-page-container',
    footer: '#footer'
  };

  SiteView.prototype.template = require('../templates/site');

  return SiteView;

})(View);


},{"../templates/site":"cL1PB2","./base/view":34}],42:[function(require,module,exports){
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

},{}],43:[function(require,module,exports){
/*!
 * Chaplin 1.0.0
 *
 * Chaplin may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://chaplinjs.org
 */

(function(){

var loader = (function() {
  var modules = {};
  var cache = {};

  var dummy = function() {return function() {};};
  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, dummy(), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var loader = function(path) {
    if (cache.hasOwnProperty(path)) return cache[path];
    if (modules.hasOwnProperty(path)) return initModule(path, modules[path]);
    throw new Error('Cannot find module "' + path + '"');
  };

  loader.register = function(bundle, fn) {
    modules[bundle] = fn;
  };
  return loader;
})();

loader.register('chaplin/application', function(e, r, module) {
'use strict';

var Application, Backbone, Composer, Dispatcher, EventBroker, Layout, Router, mediator, _;

_ = loader('underscore');

Backbone = loader('backbone');

Dispatcher = loader('chaplin/dispatcher');

Layout = loader('chaplin/views/layout');

Composer = loader('chaplin/composer');

Router = loader('chaplin/lib/router');

EventBroker = loader('chaplin/lib/event_broker');

mediator = loader('chaplin/mediator');

module.exports = Application = (function() {

  Application.extend = Backbone.Model.extend;

  _.extend(Application.prototype, EventBroker);

  Application.prototype.title = '';

  Application.prototype.dispatcher = null;

  Application.prototype.layout = null;

  Application.prototype.router = null;

  Application.prototype.composer = null;

  Application.prototype.started = false;

  function Application(options) {
    if (options == null) {
      options = {};
    }
    this.initialize(options);
  }

  Application.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    if (this.started) {
      throw new Error('Application#initialize: App was already started');
    }
    this.initRouter(options.routes, options);
    this.initDispatcher(options);
    this.initLayout(options);
    this.initComposer(options);
    this.initMediator();
    return this.start();
  };

  Application.prototype.initDispatcher = function(options) {
    return this.dispatcher = new Dispatcher(options);
  };

  Application.prototype.initLayout = function(options) {
    var _ref;
    if (options == null) {
      options = {};
    }
    if ((_ref = options.title) == null) {
      options.title = this.title;
    }
    return this.layout = new Layout(options);
  };

  Application.prototype.initComposer = function(options) {
    if (options == null) {
      options = {};
    }
    return this.composer = new Composer(options);
  };

  Application.prototype.initMediator = function() {
    return mediator.seal();
  };

  Application.prototype.initRouter = function(routes, options) {
    this.router = new Router(options);
    return typeof routes === "function" ? routes(this.router.match) : void 0;
  };

  Application.prototype.start = function() {
    this.router.startHistory();
    this.started = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  Application.prototype.disposed = false;

  Application.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    properties = ['dispatcher', 'layout', 'router', 'composer'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      if (this[prop] != null) {
        this[prop].dispose();
      }
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Application;

})();

});;loader.register('chaplin/mediator', function(e, r, module) {
'use strict';

var Backbone, handlers, mediator, support, utils, _,
  __slice = [].slice;

Backbone = loader('backbone');

_ = loader('underscore');

support = loader('chaplin/lib/support');

utils = loader('chaplin/lib/utils');

mediator = {};

mediator.subscribe = Backbone.Events.on;

mediator.unsubscribe = Backbone.Events.off;

mediator.publish = Backbone.Events.trigger;

mediator._callbacks = null;

handlers = mediator._handlers = {};

mediator.setHandler = function(name, method, instance) {
  return handlers[name] = {
    instance: instance,
    method: method
  };
};

mediator.execute = function() {
  var args, handler, name, nameOrObj, silent;
  nameOrObj = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  silent = false;
  if (typeof nameOrObj === 'object') {
    silent = nameOrObj.silent;
    name = nameOrObj.name;
  } else {
    name = nameOrObj;
  }
  handler = handlers[name];
  if (handler) {
    return handler.method.apply(handler.instance, args);
  } else if (!silent) {
    throw new Error("mediator.execute: " + name + " handler is not defined");
  }
};

mediator.removeHandlers = function(instanceOrNames) {
  var handler, name, _i, _len;
  if (!instanceOrNames) {
    mediator._handlers = {};
  }
  if (utils.isArray(instanceOrNames)) {
    for (_i = 0, _len = instanceOrNames.length; _i < _len; _i++) {
      name = instanceOrNames[_i];
      delete handlers[name];
    }
  } else {
    for (name in handlers) {
      handler = handlers[name];
      if (handler.instance === instanceOrNames) {
        delete handlers[name];
      }
    }
  }
};

utils.readonly(mediator, 'subscribe', 'unsubscribe', 'publish', 'setHandler', 'execute', 'removeHandlers');

mediator.seal = function() {
  if (support.propertyDescriptors && Object.seal) {
    return Object.seal(mediator);
  }
};

utils.readonly(mediator, 'seal');

module.exports = mediator;

});;loader.register('chaplin/dispatcher', function(e, r, module) {
'use strict';

var Backbone, Dispatcher, EventBroker, mediator, utils, _;

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

module.exports = Dispatcher = (function() {

  Dispatcher.extend = Backbone.Model.extend;

  _.extend(Dispatcher.prototype, EventBroker);

  Dispatcher.prototype.previousRoute = null;

  Dispatcher.prototype.currentController = null;

  Dispatcher.prototype.currentRoute = null;

  Dispatcher.prototype.currentParams = null;

  Dispatcher.prototype.currentQuery = null;

  function Dispatcher() {
    this.initialize.apply(this, arguments);
  }

  Dispatcher.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.settings = _.defaults(options, {
      controllerPath: 'controllers/',
      controllerSuffix: '_controller'
    });
    return this.subscribeEvent('router:match', this.dispatch);
  };

  Dispatcher.prototype.dispatch = function(route, params, options) {
    var _ref, _ref1,
      _this = this;
    params = params ? _.extend({}, params) : {};
    options = options ? _.extend({}, options) : {};
    if (!(options.query != null)) {
      options.query = {};
    }
    if (options.forceStartup !== true) {
      options.forceStartup = false;
    }
    if (!options.forceStartup && ((_ref = this.currentRoute) != null ? _ref.controller : void 0) === route.controller && ((_ref1 = this.currentRoute) != null ? _ref1.action : void 0) === route.action && _.isEqual(this.currentParams, params) && _.isEqual(this.currentQuery, options.query)) {
      return;
    }
    return this.loadController(route.controller, function(Controller) {
      return _this.controllerLoaded(route, params, options, Controller);
    });
  };

  Dispatcher.prototype.loadController = function(name, handler) {
    var fileName, moduleName,
      _this = this;
    fileName = name + this.settings.controllerSuffix;
    moduleName = this.settings.controllerPath + fileName;
    if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
      return require([moduleName], handler);
    } else {
      return setTimeout(function() {
        return handler(require(moduleName));
      }, 0);
    }
  };

  Dispatcher.prototype.controllerLoaded = function(route, params, options, Controller) {
    var controller, prev, previous;
    if (this.nextPreviousRoute = this.currentRoute) {
      previous = _.extend({}, this.nextPreviousRoute);
      if (this.currentParams != null) {
        previous.params = this.currentParams;
      }
      if (previous.previous) {
        delete previous.previous;
      }
      prev = {
        previous: previous
      };
    }
    this.nextCurrentRoute = _.extend({}, route, prev);
    controller = new Controller(params, this.nextCurrentRoute, options);
    return this.executeBeforeAction(controller, this.nextCurrentRoute, params, options);
  };

  Dispatcher.prototype.executeAction = function(controller, route, params, options) {
    if (this.currentController) {
      this.publishEvent('beforeControllerDispose', this.currentController);
      this.currentController.dispose(params, route, options);
    }
    this.currentController = controller;
    this.currentParams = params;
    this.currentQuery = options.query;
    controller[route.action](params, route, options);
    if (controller.redirected) {
      return;
    }
    return this.publishEvent('dispatcher:dispatch', this.currentController, params, route, options);
  };

  Dispatcher.prototype.executeBeforeAction = function(controller, route, params, options) {
    var before, executeAction, promise,
      _this = this;
    before = controller.beforeAction;
    executeAction = function() {
      if (controller.redirected || _this.currentRoute && route === _this.currentRoute) {
        _this.nextPreviousRoute = _this.nextCurrentRoute = null;
        controller.dispose();
        return;
      }
      _this.previousRoute = _this.nextPreviousRoute;
      _this.currentRoute = _this.nextCurrentRoute;
      _this.nextPreviousRoute = _this.nextCurrentRoute = null;
      return _this.executeAction(controller, route, params, options);
    };
    if (!before) {
      executeAction();
      return;
    }
    if (typeof before !== 'function') {
      throw new TypeError('Controller#beforeAction: function expected. ' + 'Old object-like form is not supported.');
    }
    promise = controller.beforeAction(params, route, options);
    if (promise && promise.then) {
      return promise.then(executeAction);
    } else {
      return executeAction();
    }
  };

  Dispatcher.prototype.disposed = false;

  Dispatcher.prototype.dispose = function() {
    if (this.disposed) {
      return;
    }
    this.unsubscribeAllEvents();
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Dispatcher;

})();

});;loader.register('chaplin/composer', function(e, r, module) {
'use strict';

var Backbone, Composer, Composition, EventBroker, mediator, utils, _;

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

Composition = loader('chaplin/lib/composition');

EventBroker = loader('chaplin/lib/event_broker');

module.exports = Composer = (function() {

  Composer.extend = Backbone.Model.extend;

  _.extend(Composer.prototype, EventBroker);

  Composer.prototype.compositions = null;

  function Composer() {
    this.initialize.apply(this, arguments);
  }

  Composer.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.compositions = {};
    mediator.setHandler('composer:compose', this.compose, this);
    mediator.setHandler('composer:retrieve', this.retrieve, this);
    return this.subscribeEvent('dispatcher:dispatch', this.cleanup);
  };

  Composer.prototype.compose = function(name, second, third) {
    if (typeof second === 'function') {
      if (third || second.prototype.dispose) {
        if (second.prototype instanceof Composition) {
          return this._compose(name, {
            composition: second,
            options: third
          });
        } else {
          return this._compose(name, {
            options: third,
            compose: function() {
              var autoRender, disabledAutoRender;
              this.item = new second(this.options);
              autoRender = this.item.autoRender;
              disabledAutoRender = autoRender === void 0 || !autoRender;
              if (disabledAutoRender && typeof this.item.render === 'function') {
                return this.item.render();
              }
            }
          });
        }
      }
      return this._compose(name, {
        compose: second
      });
    }
    if (typeof third === 'function') {
      return this._compose(name, {
        compose: third,
        options: second
      });
    }
    return this._compose(name, second);
  };

  Composer.prototype._compose = function(name, options) {
    var composition, current, isPromise, returned;
    if (typeof options.compose !== 'function' && !(options.composition != null)) {
      throw new Error('Composer#compose was used incorrectly');
    }
    if (options.composition != null) {
      composition = new options.composition(options.options);
    } else {
      composition = new Composition(options.options);
      composition.compose = options.compose;
      if (options.check) {
        composition.check = options.check;
      }
    }
    current = this.compositions[name];
    isPromise = false;
    if (current && current.check(composition.options)) {
      current.stale(false);
    } else {
      if (current) {
        current.dispose();
      }
      returned = composition.compose(composition.options);
      isPromise = typeof (returned != null ? returned.then : void 0) === 'function';
      composition.stale(false);
      this.compositions[name] = composition;
    }
    if (isPromise) {
      return returned;
    } else {
      return this.compositions[name].item;
    }
  };

  Composer.prototype.retrieve = function(name) {
    var active;
    active = this.compositions[name];
    if (active && !active.stale()) {
      return active.item;
    } else {
      return void 0;
    }
  };

  Composer.prototype.cleanup = function() {
    var composition, name, _ref;
    _ref = this.compositions;
    for (name in _ref) {
      composition = _ref[name];
      if (composition.stale()) {
        composition.dispose();
        delete this.compositions[name];
      } else {
        composition.stale(true);
      }
    }
  };

  Composer.prototype.dispose = function() {
    var composition, name, _ref;
    if (this.disposed) {
      return;
    }
    this.unsubscribeAllEvents();
    mediator.removeHandlers(this);
    _ref = this.compositions;
    for (name in _ref) {
      composition = _ref[name];
      composition.dispose();
    }
    delete this.compositions;
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Composer;

})();

});;loader.register('chaplin/controllers/controller', function(e, r, module) {
'use strict';

var Backbone, Controller, EventBroker, mediator, utils, _,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

utils = loader('chaplin/lib/utils');

mediator = loader('chaplin/mediator');

module.exports = Controller = (function() {

  Controller.extend = Backbone.Model.extend;

  _.extend(Controller.prototype, Backbone.Events);

  _.extend(Controller.prototype, EventBroker);

  Controller.prototype.view = null;

  Controller.prototype.redirected = false;

  function Controller() {
    this.initialize.apply(this, arguments);
  }

  Controller.prototype.initialize = function() {};

  Controller.prototype.beforeAction = function() {};

  Controller.prototype.adjustTitle = function(subtitle) {
    return mediator.execute('adjustTitle', subtitle);
  };

  Controller.prototype.reuse = function(name) {
    var method;
    method = arguments.length === 1 ? 'retrieve' : 'compose';
    return mediator.execute.apply(mediator, ["composer:" + method].concat(__slice.call(arguments)));
  };

  Controller.prototype.compose = function() {
    throw new Error('Controller#compose was moved to Controller#reuse');
  };

  Controller.prototype.redirectTo = function(pathDesc, params, options) {
    this.redirected = true;
    return utils.redirectTo(pathDesc, params, options);
  };

  Controller.prototype.disposed = false;

  Controller.prototype.dispose = function() {
    var obj, prop;
    if (this.disposed) {
      return;
    }
    for (prop in this) {
      if (!__hasProp.call(this, prop)) continue;
      obj = this[prop];
      if (!(obj && typeof obj.dispose === 'function')) {
        continue;
      }
      obj.dispose();
      delete this[prop];
    }
    this.unsubscribeAllEvents();
    this.stopListening();
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Controller;

})();

});;loader.register('chaplin/models/collection', function(e, r, module) {
'use strict';

var Backbone, Collection, EventBroker, Model, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

Model = loader('chaplin/models/model');

utils = loader('chaplin/lib/utils');

module.exports = Collection = (function(_super) {

  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  _.extend(Collection.prototype, EventBroker);

  Collection.prototype.model = Model;

  Collection.prototype.serialize = function() {
    return this.map(utils.serialize);
  };

  Collection.prototype.disposed = false;

  Collection.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    this.trigger('dispose', this);
    this.reset([], {
      silent: true
    });
    this.unsubscribeAllEvents();
    this.stopListening();
    this.off();
    properties = ['model', 'models', '_byId', '_byCid', '_callbacks'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Collection;

})(Backbone.Collection);

});;loader.register('chaplin/models/model', function(e, r, module) {
'use strict';

var Backbone, EventBroker, Model, serializeAttributes, serializeModelAttributes, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

serializeAttributes = function(model, attributes, modelStack) {
  var delegator, key, otherModel, serializedModels, value, _i, _len, _ref;
  delegator = utils.beget(attributes);
  if (modelStack == null) {
    modelStack = {};
  }
  modelStack[model.cid] = true;
  for (key in attributes) {
    value = attributes[key];
    if (value instanceof Backbone.Model) {
      delegator[key] = serializeModelAttributes(value, model, modelStack);
    } else if (value instanceof Backbone.Collection) {
      serializedModels = [];
      _ref = value.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        otherModel = _ref[_i];
        serializedModels.push(serializeModelAttributes(otherModel, model, modelStack));
      }
      delegator[key] = serializedModels;
    }
  }
  delete modelStack[model.cid];
  return delegator;
};

serializeModelAttributes = function(model, currentModel, modelStack) {
  var attributes;
  if (model === currentModel || model.cid in modelStack) {
    return null;
  }
  attributes = typeof model.getAttributes === 'function' ? model.getAttributes() : model.attributes;
  return serializeAttributes(model, attributes, modelStack);
};

module.exports = Model = (function(_super) {

  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  _.extend(Model.prototype, EventBroker);

  Model.prototype.getAttributes = function() {
    return this.attributes;
  };

  Model.prototype.serialize = function() {
    return serializeAttributes(this, this.getAttributes());
  };

  Model.prototype.disposed = false;

  Model.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    this.trigger('dispose', this);
    this.unsubscribeAllEvents();
    this.stopListening();
    this.off();
    properties = ['collection', 'attributes', 'changed', '_escapedAttributes', '_previousAttributes', '_silent', '_pending', '_callbacks'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Model;

})(Backbone.Model);

});;loader.register('chaplin/views/layout', function(e, r, module) {
'use strict';

var $, Backbone, EventBroker, Layout, View, mediator, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

View = loader('chaplin/views/view');

$ = Backbone.$;

module.exports = Layout = (function(_super) {

  __extends(Layout, _super);

  Layout.prototype.el = 'body';

  Layout.prototype.keepElement = true;

  Layout.prototype.title = '';

  Layout.prototype.globalRegions = null;

  Layout.prototype.listen = {
    'beforeControllerDispose mediator': 'scroll'
  };

  function Layout(options) {
    if (options == null) {
      options = {};
    }
    this.openLink = __bind(this.openLink, this);

    this.globalRegions = [];
    this.title = options.title;
    if (options.regions) {
      this.regions = options.regions;
    }
    this.settings = _.defaults(options, {
      titleTemplate: function(data) {
        var st;
        st = data.subtitle ? "" + data.subtitle + " \u2013 " : '';
        return st + data.title;
      },
      openExternalToBlank: false,
      routeLinks: 'a, .go-to',
      skipRouting: '.noscript',
      scrollTo: [0, 0]
    });
    mediator.setHandler('region:show', this.showRegion, this);
    mediator.setHandler('region:register', this.registerRegionHandler, this);
    mediator.setHandler('region:unregister', this.unregisterRegionHandler, this);
    mediator.setHandler('region:find', this.regionByName, this);
    mediator.setHandler('adjustTitle', this.adjustTitle, this);
    Layout.__super__.constructor.apply(this, arguments);
    if (this.settings.routeLinks) {
      this.startLinkRouting();
    }
  }

  Layout.prototype.scroll = function() {
    var position;
    position = this.settings.scrollTo;
    if (position) {
      return window.scrollTo(position[0], position[1]);
    }
  };

  Layout.prototype.adjustTitle = function(subtitle) {
    var title,
      _this = this;
    if (subtitle == null) {
      subtitle = '';
    }
    title = this.settings.titleTemplate({
      title: this.title,
      subtitle: subtitle
    });
    setTimeout(function() {
      document.title = title;
      return _this.publishEvent('adjustTitle', subtitle, title);
    }, 50);
    return title;
  };

  Layout.prototype.startLinkRouting = function() {
    var route;
    route = this.settings.routeLinks;
    if (!route) {
      return;
    }
    if ($) {
      return this.$el.on('click', route, this.openLink);
    } else {
      return this.delegate('click', route, this.openLink);
    }
  };

  Layout.prototype.stopLinkRouting = function() {
    var route;
    route = this.settings.routeLinks;
    if ($) {
      if (route) {
        return this.$el.off('click', route);
      }
    } else {
      return this.undelegate('click', route, this.openLink);
    }
  };

  Layout.prototype.isExternalLink = function(link) {
    var _ref, _ref1;
    return link.target === '_blank' || link.rel === 'external' || ((_ref = link.protocol) !== 'http:' && _ref !== 'https:' && _ref !== 'file:') || ((_ref1 = link.hostname) !== location.hostname && _ref1 !== '');
  };

  Layout.prototype.openLink = function(event) {
    var el, external, href, isAnchor, skipRouting, type;
    if (utils.modifierKeyPressed(event)) {
      return;
    }
    el = $ ? event.currentTarget : event.delegateTarget;
    isAnchor = el.nodeName === 'A';
    href = el.getAttribute('href') || el.getAttribute('data-href') || null;
    if (!(href != null) || href === '' || href.charAt(0) === '#') {
      return;
    }
    skipRouting = this.settings.skipRouting;
    type = typeof skipRouting;
    if (type === 'function' && !skipRouting(href, el) || type === 'string' && ($ ? $(el).is(skipRouting) : Backbone.utils.matchesSelector(el, skipRouting))) {
      return;
    }
    external = isAnchor && this.isExternalLink(el);
    if (external) {
      if (this.settings.openExternalToBlank) {
        event.preventDefault();
        window.open(href);
      }
      return;
    }
    utils.redirectTo({
      url: href
    });
    event.preventDefault();
  };

  Layout.prototype.registerRegionHandler = function(instance, name, selector) {
    if (name != null) {
      return this.registerGlobalRegion(instance, name, selector);
    } else {
      return this.registerGlobalRegions(instance);
    }
  };

  Layout.prototype.registerGlobalRegion = function(instance, name, selector) {
    this.unregisterGlobalRegion(instance, name);
    return this.globalRegions.unshift({
      instance: instance,
      name: name,
      selector: selector
    });
  };

  Layout.prototype.registerGlobalRegions = function(instance) {
    var name, selector, version, _i, _len, _ref;
    _ref = utils.getAllPropertyVersions(instance, 'regions');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      version = _ref[_i];
      for (name in version) {
        selector = version[name];
        this.registerGlobalRegion(instance, name, selector);
      }
    }
  };

  Layout.prototype.unregisterRegionHandler = function(instance, name) {
    if (name != null) {
      return this.unregisterGlobalRegion(instance, name);
    } else {
      return this.unregisterGlobalRegions(instance);
    }
  };

  Layout.prototype.unregisterGlobalRegion = function(instance, name) {
    var cid, region;
    cid = instance.cid;
    return this.globalRegions = (function() {
      var _i, _len, _ref, _results;
      _ref = this.globalRegions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        region = _ref[_i];
        if (region.instance.cid !== cid || region.name !== name) {
          _results.push(region);
        }
      }
      return _results;
    }).call(this);
  };

  Layout.prototype.unregisterGlobalRegions = function(instance) {
    var region;
    return this.globalRegions = (function() {
      var _i, _len, _ref, _results;
      _ref = this.globalRegions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        region = _ref[_i];
        if (region.instance.cid !== instance.cid) {
          _results.push(region);
        }
      }
      return _results;
    }).call(this);
  };

  Layout.prototype.regionByName = function(name) {
    var reg, _i, _len, _ref;
    _ref = this.globalRegions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      reg = _ref[_i];
      if (reg.name === name && !reg.instance.stale) {
        return reg;
      }
    }
  };

  Layout.prototype.showRegion = function(name, instance) {
    var region;
    region = this.regionByName(name);
    if (!region) {
      throw new Error("No region registered under " + name);
    }
    return instance.container = region.selector === '' ? $ ? region.instance.$el : region.instance.el : region.instance.noWrap ? $ ? $(region.instance.container).find(region.selector) : region.instance.container.querySelector(region.selector) : region.instance[$ ? '$' : 'find'](region.selector);
  };

  Layout.prototype.dispose = function() {
    var prop, _i, _len, _ref;
    if (this.disposed) {
      return;
    }
    this.stopLinkRouting();
    _ref = ['globalRegions', 'title', 'route'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      prop = _ref[_i];
      delete this[prop];
    }
    mediator.removeHandlers(this);
    return Layout.__super__.dispose.apply(this, arguments);
  };

  return Layout;

})(View);

});;loader.register('chaplin/views/view', function(e, r, module) {
'use strict';

var $, Backbone, EventBroker, View, attach, bind, mediator, setHTML, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

EventBroker = loader('chaplin/lib/event_broker');

utils = loader('chaplin/lib/utils');

$ = Backbone.$;

bind = (function() {
  if (Function.prototype.bind) {
    return function(item, ctx) {
      return item.bind(ctx);
    };
  } else if (_.bind) {
    return _.bind;
  }
})();

setHTML = (function() {
  if ($) {
    return function(elem, html) {
      return elem.html(html);
    };
  } else {
    return function(elem, html) {
      return elem.innerHTML = html;
    };
  }
})();

attach = (function() {
  if ($) {
    return function(view) {
      var actual;
      actual = $(view.container);
      if (typeof view.containerMethod === 'function') {
        return view.containerMethod(actual, view.el);
      } else {
        return actual[view.containerMethod](view.el);
      }
    };
  } else {
    return function(view) {
      var actual;
      actual = typeof view.container === 'string' ? document.querySelector(view.container) : view.container;
      if (typeof view.containerMethod === 'function') {
        return view.containerMethod(actual, view.el);
      } else {
        return actual[view.containerMethod](view.el);
      }
    };
  }
})();

module.exports = View = (function(_super) {

  __extends(View, _super);

  _.extend(View.prototype, EventBroker);

  View.prototype.autoRender = false;

  View.prototype.autoAttach = true;

  View.prototype.container = null;

  View.prototype.containerMethod = $ ? 'append' : 'appendChild';

  View.prototype.regions = null;

  View.prototype.region = null;

  View.prototype.stale = false;

  View.prototype.noWrap = false;

  View.prototype.keepElement = false;

  View.prototype.subviews = null;

  View.prototype.subviewsByName = null;

  View.prototype.optionNames = ['autoAttach', 'autoRender', 'container', 'containerMethod', 'region', 'regions', 'noWrap'];

  function View(options) {
    var optName, optValue, region, render,
      _this = this;
    if (options) {
      for (optName in options) {
        optValue = options[optName];
        if (__indexOf.call(this.optionNames, optName) >= 0) {
          this[optName] = optValue;
        }
      }
    }
    render = this.render;
    this.render = function() {
      if (_this.disposed) {
        return false;
      }
      render.apply(_this, arguments);
      if (_this.autoAttach) {
        _this.attach.apply(_this, arguments);
      }
      return _this;
    };
    this.subviews = [];
    this.subviewsByName = {};
    if (this.noWrap) {
      if (this.region) {
        region = mediator.execute('region:find', this.region);
        if (region != null) {
          this.el = region.instance.container != null ? region.instance.region != null ? $(region.instance.container).find(region.selector) : region.instance.container : region.instance.$(region.selector);
        }
      }
      if (this.container) {
        this.el = this.container;
      }
    }
    View.__super__.constructor.apply(this, arguments);
    this.delegateListeners();
    if (this.model) {
      this.listenTo(this.model, 'dispose', this.dispose);
    }
    if (this.collection) {
      this.listenTo(this.collection, 'dispose', function(subject) {
        if (!subject || subject === _this.collection) {
          return _this.dispose();
        }
      });
    }
    if (this.regions != null) {
      mediator.execute('region:register', this);
    }
    if (this.autoRender) {
      this.render();
    }
  }

  View.prototype.delegate = function(eventName, second, third) {
    var bound, event, events, handler, list, selector;
    if (Backbone.utils) {
      return Backbone.utils.delegate(this, eventName, second, third);
    }
    if (typeof eventName !== 'string') {
      throw new TypeError('View#delegate: first argument must be a string');
    }
    if (arguments.length === 2) {
      handler = second;
    } else if (arguments.length === 3) {
      selector = second;
      if (typeof selector !== 'string') {
        throw new TypeError('View#delegate: ' + 'second argument must be a string');
      }
      handler = third;
    } else {
      throw new TypeError('View#delegate: ' + 'only two or three arguments are allowed');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('View#delegate: ' + 'handler argument must be function');
    }
    list = (function() {
      var _i, _len, _ref, _results;
      _ref = eventName.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push("" + event + ".delegate" + this.cid);
      }
      return _results;
    }).call(this);
    events = list.join(' ');
    bound = bind(handler, this);
    this.$el.on(events, selector || null, bound);
    return bound;
  };

  View.prototype._delegateEvents = function(events) {
    var bound, eventName, handler, key, match, selector, value;
    if (Backbone.View.prototype.delegateEvents.length === 2) {
      return Backbone.View.prototype.delegateEvents.call(this, events, true);
    }
    for (key in events) {
      value = events[key];
      handler = typeof value === 'function' ? value : this[value];
      if (!handler) {
        throw new Error("Method '" + value + "' does not exist");
      }
      match = key.match(/^(\S+)\s*(.*)$/);
      eventName = "" + match[1] + ".delegateEvents" + this.cid;
      selector = match[2];
      bound = bind(handler, this);
      this.$el.on(eventName, selector || null, bound);
    }
  };

  View.prototype.delegateEvents = function(events, keepOld) {
    var classEvents, _i, _len, _ref;
    if (!keepOld) {
      this.undelegateEvents();
    }
    if (events) {
      return this._delegateEvents(events);
    }
    _ref = utils.getAllPropertyVersions(this, 'events');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      classEvents = _ref[_i];
      if (typeof classEvents === 'function') {
        throw new TypeError('View#delegateEvents: functions are not supported');
      }
      this._delegateEvents(classEvents);
    }
  };

  View.prototype.undelegate = function(eventName, second, third) {
    var event, events, handler, list, selector;
    if (Backbone.utils) {
      return Backbone.utils.undelegate(this, eventName, second, third);
    }
    if (eventName) {
      if (typeof eventName !== 'string') {
        throw new TypeError('View#undelegate: first argument must be a string');
      }
      if (arguments.length === 2) {
        if (typeof second === 'string') {
          selector = second;
        } else {
          handler = second;
        }
      } else if (arguments.length === 3) {
        selector = second;
        if (typeof selector !== 'string') {
          throw new TypeError('View#undelegate: ' + 'second argument must be a string');
        }
        handler = third;
      }
      list = (function() {
        var _i, _len, _ref, _results;
        _ref = eventName.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          _results.push("" + event + ".delegate" + this.cid);
        }
        return _results;
      }).call(this);
      events = list.join(' ');
      return this.$el.off(events, selector || null);
    } else {
      return this.$el.off(".delegate" + this.cid);
    }
  };

  View.prototype.delegateListeners = function() {
    var eventName, key, method, target, version, _i, _len, _ref, _ref1;
    if (!this.listen) {
      return;
    }
    _ref = utils.getAllPropertyVersions(this, 'listen');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      version = _ref[_i];
      for (key in version) {
        method = version[key];
        if (typeof method !== 'function') {
          method = this[method];
        }
        if (typeof method !== 'function') {
          throw new Error('View#delegateListeners: ' + ("" + method + " must be function"));
        }
        _ref1 = key.split(' '), eventName = _ref1[0], target = _ref1[1];
        this.delegateListener(eventName, target, method);
      }
    }
  };

  View.prototype.delegateListener = function(eventName, target, callback) {
    var prop;
    if (target === 'model' || target === 'collection') {
      prop = this[target];
      if (prop) {
        this.listenTo(prop, eventName, callback);
      }
    } else if (target === 'mediator') {
      this.subscribeEvent(eventName, callback);
    } else if (!target) {
      this.on(eventName, callback, this);
    }
  };

  View.prototype.registerRegion = function(name, selector) {
    return mediator.execute('region:register', this, name, selector);
  };

  View.prototype.unregisterRegion = function(name) {
    return mediator.execute('region:unregister', this, name);
  };

  View.prototype.unregisterAllRegions = function() {
    return mediator.execute({
      name: 'region:unregister',
      silent: true
    }, this);
  };

  View.prototype.subview = function(name, view) {
    var byName, subviews;
    subviews = this.subviews;
    byName = this.subviewsByName;
    if (name && view) {
      this.removeSubview(name);
      subviews.push(view);
      byName[name] = view;
      return view;
    } else if (name) {
      return byName[name];
    }
  };

  View.prototype.removeSubview = function(nameOrView) {
    var byName, index, name, otherName, otherView, subviews, view;
    if (!nameOrView) {
      return;
    }
    subviews = this.subviews;
    byName = this.subviewsByName;
    if (typeof nameOrView === 'string') {
      name = nameOrView;
      view = byName[name];
    } else {
      view = nameOrView;
      for (otherName in byName) {
        otherView = byName[otherName];
        if (!(otherView === view)) {
          continue;
        }
        name = otherName;
        break;
      }
    }
    if (!(name && view && view.dispose)) {
      return;
    }
    view.dispose();
    index = utils.indexOf(subviews, view);
    if (index !== -1) {
      subviews.splice(index, 1);
    }
    return delete byName[name];
  };

  View.prototype.getTemplateData = function() {
    var data, source;
    data = this.model ? utils.serialize(this.model) : this.collection ? {
      items: utils.serialize(this.collection),
      length: this.collection.length
    } : {};
    source = this.model || this.collection;
    if (source) {
      if (typeof source.isSynced === 'function' && !('synced' in data)) {
        data.synced = source.isSynced();
      }
    }
    return data;
  };

  View.prototype.getTemplateFunction = function() {
    throw new Error('View#getTemplateFunction must be overridden');
  };

  View.prototype.render = function() {
    var el, html, templateFunc;
    if (this.disposed) {
      return false;
    }
    templateFunc = this.getTemplateFunction();
    if (typeof templateFunc === 'function') {
      html = templateFunc(this.getTemplateData());
      if (this.noWrap) {
        el = document.createElement('div');
        el.innerHTML = html;
        if (el.children.length > 1) {
          throw new Error('There must be a single top-level element when ' + 'using `noWrap`.');
        }
        this.undelegateEvents();
        this.setElement(el.firstChild, true);
      } else {
        setHTML(($ ? this.$el : this.el), html);
      }
    }
    return this;
  };

  View.prototype.attach = function() {
    if (this.region != null) {
      mediator.execute('region:show', this.region, this);
    }
    if (this.container && !document.body.contains(this.el)) {
      attach(this);
      return this.trigger('addedToDOM');
    }
  };

  View.prototype.disposed = false;

  View.prototype.dispose = function() {
    var prop, properties, subview, _i, _j, _len, _len1, _ref;
    if (this.disposed) {
      return;
    }
    this.unregisterAllRegions();
    _ref = this.subviews;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      subview = _ref[_i];
      subview.dispose();
    }
    this.unsubscribeAllEvents();
    this.off();
    if (this.keepElement) {
      this.undelegateEvents();
      this.undelegate();
      this.stopListening();
    } else {
      this.remove();
    }
    properties = ['el', '$el', 'options', 'model', 'collection', 'subviews', 'subviewsByName', '_callbacks'];
    for (_j = 0, _len1 = properties.length; _j < _len1; _j++) {
      prop = properties[_j];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return View;

})(Backbone.View);

});;loader.register('chaplin/views/collection_view', function(e, r, module) {
'use strict';

var $, Backbone, CollectionView, View, addClass, endAnimation, filterChildren, insertView, startAnimation, toggleElement, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

View = loader('chaplin/views/view');

utils = loader('chaplin/lib/utils');

$ = Backbone.$;

filterChildren = function(nodeList, selector) {
  var node, _i, _len, _results;
  if (!selector) {
    return nodeList;
  }
  _results = [];
  for (_i = 0, _len = nodeList.length; _i < _len; _i++) {
    node = nodeList[_i];
    if (Backbone.utils.matchesSelector(node, selector)) {
      _results.push(node);
    }
  }
  return _results;
};

toggleElement = (function() {
  if ($) {
    return function(elem, visible) {
      return elem.toggle(visible);
    };
  } else {
    return function(elem, visible) {
      return elem.style.display = (visible ? '' : 'none');
    };
  }
})();

addClass = (function() {
  if ($) {
    return function(elem, cls) {
      return elem.addClass(cls);
    };
  } else {
    return function(elem, cls) {
      return elem.classList.add(cls);
    };
  }
})();

startAnimation = (function() {
  if ($) {
    return function(elem, useCssAnimation, cls) {
      if (useCssAnimation) {
        return addClass(elem, cls);
      } else {
        return elem.css('opacity', 0);
      }
    };
  } else {
    return function(elem, useCssAnimation, cls) {
      if (useCssAnimation) {
        return addClass(elem, cls);
      } else {
        return elem.style.opacity = 0;
      }
    };
  }
})();

endAnimation = (function() {
  if ($) {
    return function(elem, duration) {
      return elem.animate({
        opacity: 1
      }, duration);
    };
  } else {
    return function(elem, duration) {
      elem.style.transition = "opacity " + (duration / 1000) + "s";
      return elem.opacity = 1;
    };
  }
})();

insertView = (function() {
  if ($) {
    return function(list, viewEl, position, length, itemSelector) {
      var children, childrenLength, insertInMiddle, isEnd, method;
      insertInMiddle = (0 < position && position < length);
      isEnd = function(length) {
        return length === 0 || position === length;
      };
      if (insertInMiddle || itemSelector) {
        children = list.children(itemSelector);
        childrenLength = children.length;
        if (children[position] !== viewEl) {
          if (isEnd(childrenLength)) {
            return list.append(viewEl);
          } else {
            if (position === 0) {
              return children.eq(position).before(viewEl);
            } else {
              return children.eq(position - 1).after(viewEl);
            }
          }
        }
      } else {
        method = isEnd(length) ? 'append' : 'prepend';
        return list[method](viewEl);
      }
    };
  } else {
    return function(list, viewEl, position, length, itemSelector) {
      var children, childrenLength, insertInMiddle, isEnd, last;
      insertInMiddle = (0 < position && position < length);
      isEnd = function(length) {
        return length === 0 || position === length;
      };
      if (insertInMiddle || itemSelector) {
        children = filterChildren(list.children, itemSelector);
        childrenLength = children.length;
        if (children[position] !== viewEl) {
          if (isEnd(childrenLength)) {
            return list.appendChild(viewEl);
          } else if (position === 0) {
            return list.insertBefore(viewEl, children[position]);
          } else {
            last = children[position - 1];
            if (list.lastChild === last) {
              return list.appendChild(viewEl);
            } else {
              return list.insertBefore(viewEl, last.nextElementSibling);
            }
          }
        }
      } else if (isEnd(length)) {
        return list.appendChild(viewEl);
      } else {
        return list.insertBefore(viewEl, list.firstChild);
      }
    };
  }
})();

module.exports = CollectionView = (function(_super) {

  __extends(CollectionView, _super);

  CollectionView.prototype.itemView = null;

  CollectionView.prototype.autoRender = true;

  CollectionView.prototype.renderItems = true;

  CollectionView.prototype.animationDuration = 500;

  CollectionView.prototype.useCssAnimation = false;

  CollectionView.prototype.animationStartClass = 'animated-item-view';

  CollectionView.prototype.animationEndClass = 'animated-item-view-end';

  CollectionView.prototype.listSelector = null;

  CollectionView.prototype.$list = null;

  CollectionView.prototype.fallbackSelector = null;

  CollectionView.prototype.$fallback = null;

  CollectionView.prototype.loadingSelector = null;

  CollectionView.prototype.$loading = null;

  CollectionView.prototype.itemSelector = void 0;

  CollectionView.prototype.filterer = null;

  CollectionView.prototype.filterCallback = function(view, included) {
    if ($) {
      view.$el.stop(true, true);
    }
    return toggleElement(($ ? view.$el : view.el), included);
  };

  CollectionView.prototype.visibleItems = null;

  CollectionView.prototype.optionNames = View.prototype.optionNames.concat(['renderItems', 'itemView']);

  function CollectionView(options) {
    this.renderAllItems = __bind(this.renderAllItems, this);

    this.toggleFallback = __bind(this.toggleFallback, this);

    this.itemsReset = __bind(this.itemsReset, this);

    this.itemRemoved = __bind(this.itemRemoved, this);

    this.itemAdded = __bind(this.itemAdded, this);
    this.visibleItems = [];
    CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.addCollectionListeners();
    if (options.filterer != null) {
      return this.filter(options.filterer);
    }
  };

  CollectionView.prototype.addCollectionListeners = function() {
    this.listenTo(this.collection, 'add', this.itemAdded);
    this.listenTo(this.collection, 'remove', this.itemRemoved);
    return this.listenTo(this.collection, 'reset sort', this.itemsReset);
  };

  CollectionView.prototype.getTemplateData = function() {
    var templateData;
    templateData = {
      length: this.collection.length
    };
    if (typeof this.collection.isSynced === 'function') {
      templateData.synced = this.collection.isSynced();
    }
    return templateData;
  };

  CollectionView.prototype.getTemplateFunction = function() {};

  CollectionView.prototype.render = function() {
    var listSelector;
    CollectionView.__super__.render.apply(this, arguments);
    listSelector = _.result(this, 'listSelector');
    if ($) {
      this.$list = listSelector ? this.$(listSelector) : this.$el;
    } else {
      this.list = listSelector ? this.find(this.listSelector) : this.el;
    }
    this.initFallback();
    this.initLoadingIndicator();
    if (this.renderItems) {
      return this.renderAllItems();
    }
  };

  CollectionView.prototype.itemAdded = function(item, collection, options) {
    return this.insertView(item, this.renderItem(item), options.at);
  };

  CollectionView.prototype.itemRemoved = function(item) {
    return this.removeViewForItem(item);
  };

  CollectionView.prototype.itemsReset = function() {
    return this.renderAllItems();
  };

  CollectionView.prototype.initFallback = function() {
    if (!this.fallbackSelector) {
      return;
    }
    if ($) {
      this.$fallback = this.$(this.fallbackSelector);
    } else {
      this.fallback = this.find(this.fallbackSelector);
    }
    this.on('visibilityChange', this.toggleFallback);
    this.listenTo(this.collection, 'syncStateChange', this.toggleFallback);
    return this.toggleFallback();
  };

  CollectionView.prototype.toggleFallback = function() {
    var visible;
    visible = this.visibleItems.length === 0 && (typeof this.collection.isSynced === 'function' ? this.collection.isSynced() : true);
    return toggleElement(($ ? this.$fallback : this.fallback), visible);
  };

  CollectionView.prototype.initLoadingIndicator = function() {
    if (!(this.loadingSelector && typeof this.collection.isSyncing === 'function')) {
      return;
    }
    if ($) {
      this.$loading = this.$(this.loadingSelector);
    } else {
      this.loading = this.find(this.loadingSelector);
    }
    this.listenTo(this.collection, 'syncStateChange', this.toggleLoadingIndicator);
    return this.toggleLoadingIndicator();
  };

  CollectionView.prototype.toggleLoadingIndicator = function() {
    var visible;
    visible = this.collection.length === 0 && this.collection.isSyncing();
    return toggleElement(($ ? this.$loading : this.loading), visible);
  };

  CollectionView.prototype.getItemViews = function() {
    var itemViews, name, view, _ref;
    itemViews = {};
    if (this.subviews.length > 0) {
      _ref = this.subviewsByName;
      for (name in _ref) {
        view = _ref[name];
        if (name.slice(0, 9) === 'itemView:') {
          itemViews[name.slice(9)] = view;
        }
      }
    }
    return itemViews;
  };

  CollectionView.prototype.filter = function(filterer, filterCallback) {
    var hasItemViews, included, index, item, view, _i, _len, _ref,
      _this = this;
    if (typeof filterer === 'function' || filterer === null) {
      this.filterer = filterer;
    }
    if (typeof filterCallback === 'function' || filterCallback === null) {
      this.filterCallback = filterCallback;
    }
    hasItemViews = (function() {
      var name;
      if (_this.subviews.length > 0) {
        for (name in _this.subviewsByName) {
          if (name.slice(0, 9) === 'itemView:') {
            return true;
          }
        }
      }
      return false;
    })();
    if (hasItemViews) {
      _ref = this.collection.models;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        item = _ref[index];
        included = typeof this.filterer === 'function' ? this.filterer(item, index) : true;
        view = this.subview("itemView:" + item.cid);
        if (!view) {
          throw new Error('CollectionView#filter: ' + ("no view found for " + item.cid));
        }
        this.filterCallback(view, included);
        this.updateVisibleItems(view.model, included, false);
      }
    }
    return this.trigger('visibilityChange', this.visibleItems);
  };

  CollectionView.prototype.renderAllItems = function() {
    var cid, index, item, items, remainingViewsByCid, view, _i, _j, _len, _len1, _ref;
    items = this.collection.models;
    this.visibleItems = [];
    remainingViewsByCid = {};
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      view = this.subview("itemView:" + item.cid);
      if (view) {
        remainingViewsByCid[item.cid] = view;
      }
    }
    _ref = this.getItemViews();
    for (cid in _ref) {
      if (!__hasProp.call(_ref, cid)) continue;
      view = _ref[cid];
      if (!(cid in remainingViewsByCid)) {
        this.removeSubview("itemView:" + cid);
      }
    }
    for (index = _j = 0, _len1 = items.length; _j < _len1; index = ++_j) {
      item = items[index];
      view = this.subview("itemView:" + item.cid);
      if (view) {
        this.insertView(item, view, index, false);
      } else {
        this.insertView(item, this.renderItem(item), index);
      }
    }
    if (items.length === 0) {
      return this.trigger('visibilityChange', this.visibleItems);
    }
  };

  CollectionView.prototype.renderItem = function(item) {
    var view;
    view = this.subview("itemView:" + item.cid);
    if (!view) {
      view = this.initItemView(item);
      this.subview("itemView:" + item.cid, view);
    }
    view.render();
    return view;
  };

  CollectionView.prototype.initItemView = function(model) {
    if (this.itemView) {
      return new this.itemView({
        autoRender: false,
        model: model
      });
    } else {
      throw new Error('The CollectionView#itemView property ' + 'must be defined or the initItemView() must be overridden.');
    }
  };

  CollectionView.prototype.insertView = function(item, view, position, enableAnimation) {
    var elem, included, length, list,
      _this = this;
    if (enableAnimation == null) {
      enableAnimation = true;
    }
    if (this.animationDuration === 0) {
      enableAnimation = false;
    }
    if (typeof position !== 'number') {
      position = this.collection.indexOf(item);
    }
    included = typeof this.filterer === 'function' ? this.filterer(item, position) : true;
    elem = $ ? view.$el : view.el;
    if (included && enableAnimation) {
      startAnimation(elem, this.useCssAnimation, this.animationStartClass);
    }
    if (this.filterer) {
      this.filterCallback(view, included);
    }
    length = this.collection.length;
    list = $ ? this.$list : this.list;
    insertView(list, elem, position, length, this.itemSelector);
    view.trigger('addedToParent');
    this.updateVisibleItems(item, included);
    if (included && enableAnimation) {
      if (this.useCssAnimation) {
        setTimeout((function() {
          return addClass(elem, _this.animationEndClass);
        }), 0);
      } else {
        endAnimation(elem, this.animationDuration);
      }
    }
    return view;
  };

  CollectionView.prototype.removeViewForItem = function(item) {
    this.updateVisibleItems(item, false);
    return this.removeSubview("itemView:" + item.cid);
  };

  CollectionView.prototype.updateVisibleItems = function(item, includedInFilter, triggerEvent) {
    var includedInVisibleItems, visibilityChanged, visibleItemsIndex;
    if (triggerEvent == null) {
      triggerEvent = true;
    }
    visibilityChanged = false;
    visibleItemsIndex = utils.indexOf(this.visibleItems, item);
    includedInVisibleItems = visibleItemsIndex !== -1;
    if (includedInFilter && !includedInVisibleItems) {
      this.visibleItems.push(item);
      visibilityChanged = true;
    } else if (!includedInFilter && includedInVisibleItems) {
      this.visibleItems.splice(visibleItemsIndex, 1);
      visibilityChanged = true;
    }
    if (visibilityChanged && triggerEvent) {
      this.trigger('visibilityChange', this.visibleItems);
    }
    return visibilityChanged;
  };

  CollectionView.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    properties = ['$list', '$fallback', '$loading', 'visibleItems'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    return CollectionView.__super__.dispose.apply(this, arguments);
  };

  return CollectionView;

})(View);

});;loader.register('chaplin/lib/route', function(e, r, module) {
'use strict';

var Backbone, Controller, EventBroker, Route, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

Controller = loader('chaplin/controllers/controller');

utils = loader('chaplin/lib/utils');

module.exports = Route = (function() {
  var escapeRegExp, optionalRegExp, paramRegExp, processTrailingSlash;

  Route.extend = Backbone.Model.extend;

  _.extend(Route.prototype, EventBroker);

  escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  optionalRegExp = /\((.*?)\)/g;

  paramRegExp = /(?::|\*)(\w+)/g;

  processTrailingSlash = function(path, trailing) {
    switch (trailing) {
      case true:
        if (path.slice(-1) !== '/') {
          path += '/';
        }
        break;
      case false:
        if (path.slice(-1) === '/') {
          path = path.slice(0, -1);
        }
    }
    return path;
  };

  function Route(pattern, controller, action, options) {
    var _ref;
    this.pattern = pattern;
    this.controller = controller;
    this.action = action;
    this.handler = __bind(this.handler, this);

    this.replaceParams = __bind(this.replaceParams, this);

    this.parseOptionalPortion = __bind(this.parseOptionalPortion, this);

    if (typeof this.pattern !== 'string') {
      throw new Error('Route: RegExps are not supported.\
        Use strings with :names and `constraints` option of route');
    }
    this.options = options ? _.extend({}, options) : {};
    if (this.options.name != null) {
      this.name = this.options.name;
    }
    if (this.name && this.name.indexOf('#') !== -1) {
      throw new Error('Route: "#" cannot be used in name');
    }
    if ((_ref = this.name) == null) {
      this.name = this.controller + '#' + this.action;
    }
    this.allParams = [];
    this.requiredParams = [];
    this.optionalParams = [];
    if (this.action in Controller.prototype) {
      throw new Error('Route: You should not use existing controller ' + 'properties as action names');
    }
    this.createRegExp();
    if (typeof Object.freeze === "function") {
      Object.freeze(this);
    }
  }

  Route.prototype.matches = function(criteria) {
    var invalidParamsCount, name, propertiesCount, property, _i, _len, _ref;
    if (typeof criteria === 'string') {
      return criteria === this.name;
    } else {
      propertiesCount = 0;
      _ref = ['name', 'action', 'controller'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        propertiesCount++;
        property = criteria[name];
        if (property && property !== this[name]) {
          return false;
        }
      }
      invalidParamsCount = propertiesCount === 1 && (name === 'action' || name === 'controller');
      return !invalidParamsCount;
    }
  };

  Route.prototype.reverse = function(params, query) {
    var name, queryString, raw, url, value, _i, _j, _len, _len1, _ref, _ref1;
    params = this.normalizeParams(params);
    if (params === false) {
      return false;
    }
    url = this.pattern;
    _ref = this.requiredParams;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      value = params[name];
      url = url.replace(RegExp("[:*]" + name, "g"), value);
    }
    _ref1 = this.optionalParams;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      name = _ref1[_j];
      if (value = params[name]) {
        url = url.replace(RegExp("[:*]" + name, "g"), value);
      }
    }
    raw = url.replace(optionalRegExp, function(match, portion) {
      if (portion.match(/[:*]/g)) {
        return "";
      } else {
        return portion;
      }
    });
    url = processTrailingSlash(raw, this.options.trailing);
    if (!query) {
      return url;
    }
    if (typeof query === 'object') {
      queryString = utils.queryParams.stringify(query);
      return url += queryString ? '?' + queryString : '';
    } else {
      return url += (query[0] === '?' ? '' : '?') + query;
    }
  };

  Route.prototype.normalizeParams = function(params) {
    var paramIndex, paramName, paramsHash, _i, _len, _ref;
    if (utils.isArray(params)) {
      if (params.length < this.requiredParams.length) {
        return false;
      }
      paramsHash = {};
      _ref = this.requiredParams;
      for (paramIndex = _i = 0, _len = _ref.length; _i < _len; paramIndex = ++_i) {
        paramName = _ref[paramIndex];
        paramsHash[paramName] = params[paramIndex];
      }
      if (!this.testConstraints(paramsHash)) {
        return false;
      }
      params = paramsHash;
    } else {
      if (params == null) {
        params = {};
      }
      if (!this.testParams(params)) {
        return false;
      }
    }
    return params;
  };

  Route.prototype.testConstraints = function(params) {
    var constraint, constraints, name;
    constraints = this.options.constraints;
    if (constraints) {
      for (name in constraints) {
        if (!__hasProp.call(constraints, name)) continue;
        constraint = constraints[name];
        if (!constraint.test(params[name])) {
          return false;
        }
      }
    }
    return true;
  };

  Route.prototype.testParams = function(params) {
    var paramName, _i, _len, _ref;
    _ref = this.requiredParams;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      paramName = _ref[_i];
      if (params[paramName] === void 0) {
        return false;
      }
    }
    return this.testConstraints(params);
  };

  Route.prototype.createRegExp = function() {
    var pattern,
      _this = this;
    pattern = this.pattern;
    pattern = pattern.replace(escapeRegExp, '\\$&');
    this.replaceParams(pattern, function(match, param) {
      return _this.allParams.push(param);
    });
    pattern = pattern.replace(optionalRegExp, this.parseOptionalPortion);
    pattern = this.replaceParams(pattern, function(match, param) {
      _this.requiredParams.push(param);
      return _this.paramCapturePattern(match);
    });
    return this.regExp = RegExp("^" + pattern + "(?=\\/?(?=\\?|$))");
  };

  Route.prototype.parseOptionalPortion = function(match, optionalPortion) {
    var portion,
      _this = this;
    portion = this.replaceParams(optionalPortion, function(match, param) {
      _this.optionalParams.push(param);
      return _this.paramCapturePattern(match);
    });
    return "(?:" + portion + ")?";
  };

  Route.prototype.replaceParams = function(s, callback) {
    return s.replace(paramRegExp, callback);
  };

  Route.prototype.paramCapturePattern = function(param) {
    if (param.charAt(0) === ':') {
      return '([^\/\?]+)';
    } else {
      return '(.*?)';
    }
  };

  Route.prototype.test = function(path) {
    var constraints, matched;
    matched = this.regExp.test(path);
    if (!matched) {
      return false;
    }
    constraints = this.options.constraints;
    if (constraints) {
      return this.testConstraints(this.extractParams(path));
    }
    return true;
  };

  Route.prototype.handler = function(pathParams, options) {
    var actionParams, params, path, query, route, _ref;
    options = options ? _.extend({}, options) : {};
    if (typeof pathParams === 'object') {
      query = utils.queryParams.stringify(options.query);
      params = pathParams;
      path = this.reverse(params);
    } else {
      _ref = pathParams.split('?'), path = _ref[0], query = _ref[1];
      if (!(query != null)) {
        query = '';
      } else {
        options.query = utils.queryParams.parse(query);
      }
      params = this.extractParams(path);
      path = processTrailingSlash(path, this.options.trailing);
    }
    actionParams = _.extend({}, params, this.options.params);
    route = {
      path: path,
      action: this.action,
      controller: this.controller,
      name: this.name,
      query: query
    };
    return this.publishEvent('router:match', route, actionParams, options);
  };

  Route.prototype.extractParams = function(path) {
    var index, match, matches, paramName, params, _i, _len, _ref;
    params = {};
    matches = this.regExp.exec(path);
    _ref = matches.slice(1);
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      match = _ref[index];
      paramName = this.allParams.length ? this.allParams[index] : index;
      params[paramName] = match;
    }
    return params;
  };

  return Route;

})();

});;loader.register('chaplin/lib/router', function(e, r, module) {
'use strict';

var Backbone, EventBroker, History, Route, Router, mediator, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

EventBroker = loader('chaplin/lib/event_broker');

History = loader('chaplin/lib/history');

Route = loader('chaplin/lib/route');

utils = loader('chaplin/lib/utils');

module.exports = Router = (function() {

  Router.extend = Backbone.Model.extend;

  _.extend(Router.prototype, EventBroker);

  function Router(options) {
    var isWebFile;
    this.options = options != null ? options : {};
    this.match = __bind(this.match, this);

    isWebFile = window.location.protocol !== 'file:';
    _.defaults(this.options, {
      pushState: isWebFile,
      root: '/',
      trailing: false
    });
    this.removeRoot = new RegExp('^' + utils.escapeRegExp(this.options.root) + '(#)?');
    this.subscribeEvent('!router:route', this.oldEventError);
    this.subscribeEvent('!router:routeByName', this.oldEventError);
    this.subscribeEvent('!router:changeURL', this.oldURLEventError);
    this.subscribeEvent('dispatcher:dispatch', this.changeURL);
    mediator.setHandler('router:route', this.route, this);
    mediator.setHandler('router:reverse', this.reverse, this);
    this.createHistory();
  }

  Router.prototype.oldEventError = function() {
    throw new Error('!router:route and !router:routeByName events were removed.\
  Use `Chaplin.utils.redirectTo`');
  };

  Router.prototype.oldURLEventError = function() {
    throw new Error('!router:changeURL event was removed.');
  };

  Router.prototype.createHistory = function() {
    return Backbone.history = new History();
  };

  Router.prototype.startHistory = function() {
    return Backbone.history.start(this.options);
  };

  Router.prototype.stopHistory = function() {
    if (Backbone.History.started) {
      return Backbone.history.stop();
    }
  };

  Router.prototype.findHandler = function(predicate) {
    var handler, _i, _len, _ref;
    _ref = Backbone.history.handlers;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      handler = _ref[_i];
      if (predicate(handler)) {
        return handler;
      }
    }
  };

  Router.prototype.match = function(pattern, target, options) {
    var action, controller, route, _ref;
    if (options == null) {
      options = {};
    }
    if (arguments.length === 2 && typeof target === 'object') {
      options = target;
      controller = options.controller, action = options.action;
      if (!(controller && action)) {
        throw new Error('Router#match must receive either target or ' + 'options.controller & options.action');
      }
    } else {
      controller = options.controller, action = options.action;
      if (controller || action) {
        throw new Error('Router#match cannot use both target and ' + 'options.controller / options.action');
      }
      _ref = target.split('#'), controller = _ref[0], action = _ref[1];
    }
    _.defaults(options, {
      trailing: this.options.trailing
    });
    route = new Route(pattern, controller, action, options);
    Backbone.history.handlers.push({
      route: route,
      callback: route.handler
    });
    return route;
  };

  Router.prototype.route = function(pathDesc, params, options) {
    var handler, path;
    if (typeof pathDesc === 'object') {
      path = pathDesc.url;
      if (!params && pathDesc.params) {
        params = pathDesc.params;
      }
    }
    params = params ? utils.isArray(params) ? params.slice() : _.extend({}, params) : {};
    if (path != null) {
      path = path.replace(this.removeRoot, '');
      handler = this.findHandler(function(handler) {
        return handler.route.test(path);
      });
      options = params;
      params = null;
    } else {
      options = options ? _.extend({}, options) : {};
      handler = this.findHandler(function(handler) {
        if (handler.route.matches(pathDesc)) {
          params = handler.route.normalizeParams(params);
          if (params) {
            return true;
          }
        }
        return false;
      });
    }
    if (handler) {
      _.defaults(options, {
        changeURL: true
      });
      handler.callback(path || params, options);
      return true;
    } else {
      throw new Error('Router#route: request was not routed');
    }
  };

  Router.prototype.reverse = function(criteria, params, query) {
    var handler, handlers, reversed, root, url, _i, _len;
    root = this.options.root;
    if ((params != null) && typeof params !== 'object') {
      throw new TypeError('Router#reverse: params must be an array or an ' + 'object');
    }
    handlers = Backbone.history.handlers;
    for (_i = 0, _len = handlers.length; _i < _len; _i++) {
      handler = handlers[_i];
      if (!(handler.route.matches(criteria))) {
        continue;
      }
      reversed = handler.route.reverse(params, query);
      if (reversed !== false) {
        url = root ? root + reversed : reversed;
        return url;
      }
    }
    throw new Error('Router#reverse: invalid route specified');
  };

  Router.prototype.changeURL = function(controller, params, route, options) {
    var navigateOptions, url;
    if (!((route.path != null) && options.changeURL)) {
      return;
    }
    url = route.path + (route.query ? "?" + route.query : "");
    navigateOptions = {
      trigger: options.trigger === true,
      replace: options.replace === true
    };
    return Backbone.history.navigate(url, navigateOptions);
  };

  Router.prototype.disposed = false;

  Router.prototype.dispose = function() {
    if (this.disposed) {
      return;
    }
    this.stopHistory();
    delete Backbone.history;
    this.unsubscribeAllEvents();
    mediator.removeHandlers(this);
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Router;

})();

});;loader.register('chaplin/lib/history', function(e, r, module) {
'use strict';

var Backbone, History, isExplorer, rootStripper, routeStripper, trailingSlash, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

routeStripper = /^[#\/]|\s+$/g;

rootStripper = /^\/+|\/+$/g;

isExplorer = /msie [\w.]+/;

trailingSlash = /\/$/;

History = (function(_super) {

  __extends(History, _super);

  function History() {
    return History.__super__.constructor.apply(this, arguments);
  }

  History.prototype.getFragment = function(fragment, forcePushState) {
    var root;
    if (!(fragment != null)) {
      if (this._hasPushState || !this._wantsHashChange || forcePushState) {
        fragment = this.location.pathname + this.location.search;
        root = this.root.replace(trailingSlash, '');
        if (!fragment.indexOf(root)) {
          fragment = fragment.substr(root.length);
        }
      } else {
        fragment = this.getHash();
      }
    }
    return fragment.replace(routeStripper, '');
  };

  History.prototype.start = function(options) {
    var atRoot, fragment, loc;
    if (Backbone.History.started) {
      throw new Error('Backbone.history has already been started');
    }
    Backbone.History.started = true;
    this.options = _.extend({}, {
      root: '/'
    }, this.options, options);
    this.root = this.options.root;
    this._wantsHashChange = this.options.hashChange !== false;
    this._wantsPushState = Boolean(this.options.pushState);
    this._hasPushState = Boolean(this.options.pushState && this.history && this.history.pushState);
    fragment = this.getFragment();
    this.root = ('/' + this.root + '/').replace(rootStripper, '/');
    if (this._hasPushState) {
      Backbone.$(window).on('popstate', this.checkUrl);
    } else if (this._wantsHashChange && 'onhashchange' in window) {
      Backbone.$(window).on('hashchange', this.checkUrl);
    } else if (this._wantsHashChange) {
      this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
    }
    this.fragment = fragment;
    loc = this.location;
    atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;
    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
      this.fragment = this.getFragment(null, true);
      this.location.replace(this.root + '#' + this.fragment);
      return true;
    } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
      this.fragment = this.getHash().replace(routeStripper, '');
      this.history.replaceState({}, document.title, this.root + this.fragment);
    }
    if (!this.options.silent) {
      return this.loadUrl();
    }
  };

  History.prototype.navigate = function(fragment, options) {
    var historyMethod, isSameFragment, url;
    if (fragment == null) {
      fragment = '';
    }
    if (!Backbone.History.started) {
      return false;
    }
    if (!options || options === true) {
      options = {
        trigger: options
      };
    }
    fragment = this.getFragment(fragment);
    url = this.root + fragment;
    if (this.fragment === fragment) {
      return false;
    }
    this.fragment = fragment;
    if (fragment.length === 0 && url !== '/') {
      url = url.slice(0, -1);
    }
    if (this._hasPushState) {
      historyMethod = options.replace ? 'replaceState' : 'pushState';
      this.history[historyMethod]({}, document.title, url);
    } else if (this._wantsHashChange) {
      this._updateHash(this.location, fragment, options.replace);
      isSameFragment = fragment !== this.getFragment(this.getHash(this.iframe));
      if ((this.iframe != null) && isSameFragment) {
        if (!options.replace) {
          this.iframe.document.open().close();
        }
        this._updateHash(this.iframe.location, fragment, options.replace);
      }
    } else {
      return this.location.assign(url);
    }
    if (options.trigger) {
      return this.loadUrl(fragment);
    }
  };

  return History;

})(Backbone.History);

module.exports = Backbone.$ ? History : Backbone.History;

});;loader.register('chaplin/lib/event_broker', function(e, r, module) {
'use strict';

var EventBroker, mediator,
  __slice = [].slice;

mediator = loader('chaplin/mediator');

EventBroker = {
  subscribeEvent: function(type, handler) {
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#subscribeEvent: ' + 'type argument must be a string');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('EventBroker#subscribeEvent: ' + 'handler argument must be a function');
    }
    mediator.unsubscribe(type, handler, this);
    return mediator.subscribe(type, handler, this);
  },
  unsubscribeEvent: function(type, handler) {
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#unsubscribeEvent: ' + 'type argument must be a string');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('EventBroker#unsubscribeEvent: ' + 'handler argument must be a function');
    }
    return mediator.unsubscribe(type, handler);
  },
  unsubscribeAllEvents: function() {
    return mediator.unsubscribe(null, null, this);
  },
  publishEvent: function() {
    var args, type;
    type = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#publishEvent: ' + 'type argument must be a string');
    }
    return mediator.publish.apply(mediator, [type].concat(__slice.call(args)));
  }
};

if (typeof Object.freeze === "function") {
  Object.freeze(EventBroker);
}

module.exports = EventBroker;

});;loader.register('chaplin/lib/support', function(e, r, module) {
'use strict';

var support;

support = {
  propertyDescriptors: (function() {
    var o;
    if (!(typeof Object.defineProperty === 'function' && typeof Object.defineProperties === 'function')) {
      return false;
    }
    try {
      o = {};
      Object.defineProperty(o, 'foo', {
        value: 'bar'
      });
      return o.foo === 'bar';
    } catch (error) {
      return false;
    }
  })()
};

module.exports = support;

});;loader.register('chaplin/lib/composition', function(e, r, module) {
'use strict';

var Backbone, Composition, EventBroker, has, _,
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

has = Object.prototype.hasOwnProperty;

module.exports = Composition = (function() {

  Composition.extend = Backbone.Model.extend;

  _.extend(Composition.prototype, Backbone.Events);

  _.extend(Composition.prototype, EventBroker);

  Composition.prototype.item = null;

  Composition.prototype.options = null;

  Composition.prototype._stale = false;

  function Composition(options) {
    if (options != null) {
      this.options = _.extend({}, options);
    }
    this.item = this;
    this.initialize(this.options);
  }

  Composition.prototype.initialize = function() {};

  Composition.prototype.compose = function() {};

  Composition.prototype.check = function(options) {
    return _.isEqual(this.options, options);
  };

  Composition.prototype.stale = function(value) {
    var item, name;
    if (value == null) {
      return this._stale;
    }
    this._stale = value;
    for (name in this) {
      item = this[name];
      if (item && item !== this && typeof item === 'object' && has.call(item, 'stale')) {
        item.stale = value;
      }
    }
  };

  Composition.prototype.disposed = false;

  Composition.prototype.dispose = function() {
    var obj, prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    for (prop in this) {
      if (!__hasProp.call(this, prop)) continue;
      obj = this[prop];
      if (obj && typeof obj.dispose === 'function') {
        if (obj !== this) {
          obj.dispose();
          delete this[prop];
        }
      }
    }
    this.unsubscribeAllEvents();
    this.stopListening();
    properties = ['redirected'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Composition;

})();

});;loader.register('chaplin/lib/sync_machine', function(e, r, module) {
'use strict';

var STATE_CHANGE, SYNCED, SYNCING, SyncMachine, UNSYNCED, event, _fn, _i, _len, _ref;

UNSYNCED = 'unsynced';

SYNCING = 'syncing';

SYNCED = 'synced';

STATE_CHANGE = 'syncStateChange';

SyncMachine = {
  _syncState: UNSYNCED,
  _previousSyncState: null,
  syncState: function() {
    return this._syncState;
  },
  isUnsynced: function() {
    return this._syncState === UNSYNCED;
  },
  isSynced: function() {
    return this._syncState === SYNCED;
  },
  isSyncing: function() {
    return this._syncState === SYNCING;
  },
  unsync: function() {
    var _ref;
    if ((_ref = this._syncState) === SYNCING || _ref === SYNCED) {
      this._previousSync = this._syncState;
      this._syncState = UNSYNCED;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  beginSync: function() {
    var _ref;
    if ((_ref = this._syncState) === UNSYNCED || _ref === SYNCED) {
      this._previousSync = this._syncState;
      this._syncState = SYNCING;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  finishSync: function() {
    if (this._syncState === SYNCING) {
      this._previousSync = this._syncState;
      this._syncState = SYNCED;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  abortSync: function() {
    if (this._syncState === SYNCING) {
      this._syncState = this._previousSync;
      this._previousSync = this._syncState;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  }
};

_ref = [UNSYNCED, SYNCING, SYNCED, STATE_CHANGE];
_fn = function(event) {
  return SyncMachine[event] = function(callback, context) {
    if (context == null) {
      context = this;
    }
    this.on(event, callback, context);
    if (this._syncState === event) {
      return callback.call(context);
    }
  };
};
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  event = _ref[_i];
  _fn(event);
}

if (typeof Object.freeze === "function") {
  Object.freeze(SyncMachine);
}

module.exports = SyncMachine;

});;loader.register('chaplin/lib/utils', function(e, r, module) {
'use strict';

var support, utils, _,
  __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

support = loader('chaplin/lib/support');

utils = {
  beget: (function() {
    var ctor;
    if (typeof Object.create === 'function') {
      return Object.create;
    } else {
      ctor = function() {};
      return function(obj) {
        ctor.prototype = obj;
        return new ctor;
      };
    }
  })(),
  indexOf: (function() {
    if (Array.prototype.indexOf) {
      return function(list, index) {
        return list.indexOf(index);
      };
    } else if (_.indexOf) {
      return _.indexOf;
    }
  })(),
  isArray: Array.isArray || _.isArray,
  serialize: function(data) {
    if (typeof data.serialize === 'function') {
      return data.serialize();
    } else if (typeof data.toJSON === 'function') {
      return data.toJSON();
    } else {
      throw new TypeError('utils.serialize: Unknown data was passed');
    }
  },
  readonly: (function() {
    var readonlyDescriptor;
    if (support.propertyDescriptors) {
      readonlyDescriptor = {
        writable: false,
        enumerable: true,
        configurable: false
      };
      return function() {
        var obj, prop, properties, _i, _len;
        obj = arguments[0], properties = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        for (_i = 0, _len = properties.length; _i < _len; _i++) {
          prop = properties[_i];
          readonlyDescriptor.value = obj[prop];
          Object.defineProperty(obj, prop, readonlyDescriptor);
        }
        return true;
      };
    } else {
      return function() {
        return false;
      };
    }
  })(),
  getPrototypeChain: function(object) {
    var chain, _ref, _ref1, _ref2;
    chain = [object.constructor.prototype];
    while (object = (_ref = (_ref1 = object.constructor) != null ? _ref1.__super__ : void 0) != null ? _ref : (_ref2 = object.constructor) != null ? _ref2.superclass : void 0) {
      chain.push(object);
    }
    return chain.reverse();
  },
  getAllPropertyVersions: function(object, property) {
    var proto, result, value, _i, _len, _ref;
    result = [];
    _ref = utils.getPrototypeChain(object);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      proto = _ref[_i];
      value = proto[property];
      if (value && __indexOf.call(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  },
  upcase: function(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  },
  escapeRegExp: function(str) {
    return String(str || '').replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  },
  modifierKeyPressed: function(event) {
    return event.shiftKey || event.altKey || event.ctrlKey || event.metaKey;
  },
  reverse: function(criteria, params, query) {
    return loader('chaplin/mediator').execute('router:reverse', criteria, params, query);
  },
  redirectTo: function(pathDesc, params, options) {
    return loader('chaplin/mediator').execute('router:route', pathDesc, params, options);
  },
  queryParams: {
    stringify: function(queryParams) {
      var arrParam, encodedKey, key, query, stringifyKeyValuePair, value, _i, _len;
      query = '';
      stringifyKeyValuePair = function(encodedKey, value) {
        if (value != null) {
          return '&' + encodedKey + '=' + encodeURIComponent(value);
        } else {
          return '';
        }
      };
      for (key in queryParams) {
        if (!__hasProp.call(queryParams, key)) continue;
        value = queryParams[key];
        encodedKey = encodeURIComponent(key);
        if (utils.isArray(value)) {
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            arrParam = value[_i];
            query += stringifyKeyValuePair(encodedKey, arrParam);
          }
        } else {
          query += stringifyKeyValuePair(encodedKey, value);
        }
      }
      return query && query.substring(1);
    },
    parse: function(queryString) {
      var current, field, pair, pairs, params, value, _i, _len, _ref;
      params = {};
      if (!queryString) {
        return params;
      }
      pairs = queryString.split('&');
      for (_i = 0, _len = pairs.length; _i < _len; _i++) {
        pair = pairs[_i];
        if (!pair.length) {
          continue;
        }
        _ref = pair.split('='), field = _ref[0], value = _ref[1];
        if (!field.length) {
          continue;
        }
        field = decodeURIComponent(field);
        value = decodeURIComponent(value);
        current = params[field];
        if (current) {
          if (current.push) {
            current.push(value);
          } else {
            params[field] = [current, value];
          }
        } else {
          params[field] = value;
        }
      }
      return params;
    }
  }
};

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;

});;loader.register('chaplin', function(e, r, module) {

module.exports = {
  Application: loader('chaplin/application'),
  mediator: loader('chaplin/mediator'),
  Dispatcher: loader('chaplin/dispatcher'),
  Controller: loader('chaplin/controllers/controller'),
  Composer: loader('chaplin/composer'),
  Composition: loader('chaplin/lib/composition'),
  Collection: loader('chaplin/models/collection'),
  Model: loader('chaplin/models/model'),
  Layout: loader('chaplin/views/layout'),
  View: loader('chaplin/views/view'),
  CollectionView: loader('chaplin/views/collection_view'),
  Route: loader('chaplin/lib/route'),
  Router: loader('chaplin/lib/router'),
  EventBroker: loader('chaplin/lib/event_broker'),
  support: loader('chaplin/lib/support'),
  SyncMachine: loader('chaplin/lib/sync_machine'),
  utils: loader('chaplin/lib/utils')
};

});
var regDeps = function(Backbone, _) {
  loader.register('backbone', function(exports, require, module) {
    module.exports = Backbone;
  });
  loader.register('underscore', function(exports, require, module) {
    module.exports = _;
  });
};

if (typeof define === 'function' && define.amd) {
  define(['backbone', 'underscore'], function(Backbone, _) {
    regDeps(Backbone, _);
    return loader('chaplin');
  });
} else if (typeof module === 'object' && module && module.exports) {
  regDeps(require('backbone'), require('underscore'));
  module.exports = loader('chaplin');
} else if (typeof require === 'function') {
  regDeps(window.Backbone, window._ || window.Backbone.utils);
  window.Chaplin = loader('chaplin');
} else {
  throw new Error('Chaplin requires Common.js or AMD modules');
}

})();
},{"backbone":"5kFNoY","underscore":44}],44:[function(require,module,exports){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.5.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed > result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array, using the modern version of the 
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from an array.
  // If **n** is not specified, returns a single random element from the array.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (arguments.length < 2 || guard) {
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, value, context) {
      var result = {};
      var iterator = value == null ? _.identity : lookupIterator(value);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) {
      return array[array.length - 1];
    } else {
      return slice.call(array, Math.max(array.length - n, 0));
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, "length").concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}]},{},[1,"PL6FY2","r6AlbY","2KFWuv",9,10,11,12,13,14,15,16,17,33,34,35,36,37,38,39,40,41,24,2,"9RsPKC","j00Jnv","s/yNEm","rN5+ME","DAW7G5","2+wKAI","cL1PB2"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvYXBwbGljYXRpb24uY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvYXNzZXRzL2luZGV4LmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL2NvbnRyb2xsZXJzL2Jhc2UvY29udHJvbGxlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvY29udHJvbGxlcnMvaW1hZ2UtY29udHJvbGxlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9pbml0aWFsaXplLmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL2xpYi91dGlscy5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9saWIvdmlldy1oZWxwZXIuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbWVkaWF0b3IuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbW9kZWxzL2Jhc2UvY29sbGVjdGlvbi5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9tb2RlbHMvYmFzZS9tb2RlbC5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9tb2RlbHMvaW1hZ2UuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbW9kZWxzL3Bob3Rvcy5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9yb3V0ZXMuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL2Zvb3Rlci5oYnMiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC90ZW1wbGF0ZXMvaGVhZGVyLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9ob21lLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9pbmRleC5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9qdW1ib3Ryb24uaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL3Bob3RvLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9waG90b3MuaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL3NpdGUuaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvYmFzZS9jb2xsZWN0aW9uLXZpZXcuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvYmFzZS92aWV3LmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3ZpZXdzL2Jvb3RzdHJhcC9qdW1ib3Ryb24uY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvZm9vdGVyLmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3ZpZXdzL2hlYWRlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9ob21lL2hvbWUtcGFnZS5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9pbWFnZXMtY29sbGVjdGlvbi5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9waG90by5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9zaXRlLXZpZXcuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9ib3dlcl9jb21wb25lbnRzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3Qvbm9kZV9tb2R1bGVzL2NoYXBsaW4vY2hhcGxpbi5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3Qvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUEsaUNBQUE7RUFBQTtpU0FBQTs7QUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBcEIsQ0FBQTs7QUFBQSxPQUdBLENBQVEsaURBQVIsQ0FIQSxDQUFBOztBQUFBLFFBS0EsR0FBYSxPQUFBLENBQVEsVUFBUixDQUxiLENBQUE7O0FBQUEsUUFNUSxDQUFDLENBQVQsR0FBYSxDQU5iLENBQUE7O0FBQUEsT0FPQSxHQUFhLE9BQUEsQ0FBUSxTQUFSLENBUGIsQ0FBQTs7QUFBQSxNQVNNLENBQUMsT0FBUCxHQUF1QjtBQUFOLGdDQUFBLENBQUE7Ozs7R0FBQTs7cUJBQUE7O0dBQTBCLE9BQU8sQ0FBQyxZQVRuRCxDQUFBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQSxJQUFBLDZCQUFBO0VBQUE7aVNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxRQUNBLEdBQVcsT0FBQSxDQUFRLHVCQUFSLENBRFgsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUVyQiwrQkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsdUJBQUEsWUFBQSxHQUFjLFNBQUEsR0FBQTtXQUNaLElBQUMsQ0FBQSxLQUFELENBQU8sTUFBUCxFQUFlLFFBQWYsRUFEWTtFQUFBLENBQWQsQ0FBQTs7b0JBQUE7O0dBRndDLE9BQU8sQ0FBQyxXQUhsRCxDQUFBOzs7Ozs7OztBQ0FBLElBQUEsK0VBQUE7RUFBQTtpU0FBQTs7QUFBQSxVQUFBLEdBQWdCLE9BQUEsQ0FBUSxtQkFBUixDQUFoQixDQUFBOztBQUFBLFVBQ0EsR0FBZ0IsT0FBQSxDQUFRLGlCQUFSLENBRGhCLENBQUE7O0FBQUEsVUFFQSxHQUFnQixPQUFBLENBQVEsaUJBQVIsQ0FGaEIsQ0FBQTs7QUFBQSxZQUdBLEdBQWdCLE9BQUEsQ0FBUSx5QkFBUixDQUhoQixDQUFBOztBQUFBLGFBSUEsR0FBZ0IsT0FBQSxDQUFRLDhCQUFSLENBSmhCLENBQUE7O0FBQUEsTUFNTSxDQUFDLE9BQVAsR0FBdUI7QUFFckIsbUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDJCQUFBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixJQUFBLGtEQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsVUFBakIsRUFBNkI7QUFBQSxNQUFBLE1BQUEsRUFBUSxRQUFSO0tBQTdCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxFQUFpQixVQUFqQixFQUE2QjtBQUFBLE1BQUEsTUFBQSxFQUFRLFFBQVI7S0FBN0IsRUFKWTtFQUFBLENBQWQsQ0FBQTs7QUFBQSwyQkFNQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsSUFBQSxJQUFDLENBQUEsSUFBRCxHQUFZLElBQUEsYUFBQSxDQUFjO0FBQUEsTUFBQSxNQUFBLEVBQVEsTUFBUjtLQUFkLENBQVosQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLElBQUksQ0FBQyxPQUFOLENBQWMsbUJBQWQsRUFBdUMsSUFBQSxZQUFBLENBQWE7QUFBQSxNQUFBLE1BQUEsRUFBUSxNQUFSO0tBQWIsQ0FBdkMsQ0FEQSxDQUFBO1dBR0EsS0FKSztFQUFBLENBTlAsQ0FBQTs7d0JBQUE7O0dBRjRDLFdBTjlDLENBQUE7Ozs7QUNBQSxJQUFBLDZJQUFBO0VBQUE7aVNBQUE7O0FBQUEsVUFBQSxHQUFnQixPQUFBLENBQVEsbUJBQVIsQ0FBaEIsQ0FBQTs7QUFBQSxVQUNBLEdBQWdCLE9BQUEsQ0FBUSxpQkFBUixDQURoQixDQUFBOztBQUFBLFVBRUEsR0FBZ0IsT0FBQSxDQUFRLGlCQUFSLENBRmhCLENBQUE7O0FBQUEsWUFHQSxHQUFnQixPQUFBLENBQVEseUJBQVIsQ0FIaEIsQ0FBQTs7QUFBQSxhQUlBLEdBQWdCLE9BQUEsQ0FBUSw4QkFBUixDQUpoQixDQUFBOztBQUFBLG9CQUtBLEdBQXVCLE9BQUEsQ0FBUSw0QkFBUixDQUx2QixDQUFBOztBQUFBLGdCQU1BLEdBQW1CLE9BQUEsQ0FBUSxrQkFBUixDQU5uQixDQUFBOztBQUFBLFVBT0EsR0FBYSxPQUFBLENBQVEsaUJBQVIsQ0FQYixDQUFBOztBQUFBLE9BUUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQVJWLENBQUE7O0FBQUEsTUFVTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsb0NBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDRCQUFBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixJQUFBLG1EQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsVUFBakIsRUFBNkI7QUFBQSxNQUFBLE1BQUEsRUFBUSxRQUFSO0tBQTdCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxFQUFpQixVQUFqQixFQUE2QjtBQUFBLE1BQUEsTUFBQSxFQUFRLFFBQVI7S0FBN0IsRUFKWTtFQUFBLENBQWQsQ0FBQTs7QUFBQSw0QkFNQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBSUwsSUFBQSxJQUFDLENBQUEsSUFBRCxHQUFZLElBQUEsb0JBQUEsQ0FDVjtBQUFBLE1BQUEsTUFBQSxFQUFRLE1BQVI7QUFBQSxNQUNBLFVBQUEsRUFBWSxHQUFBLENBQUEsZ0JBRFo7S0FEVSxDQUFaLENBQUE7V0FNQSxLQVZLO0VBQUEsQ0FOUCxDQUFBOzt5QkFBQTs7R0FENkMsV0FWL0MsQ0FBQTs7Ozs7O0FDQUEsSUFBQSxzQkFBQTs7QUFBQSxDQUFBLEdBQWMsT0FBQSxDQUFRLFFBQVIsQ0FBZCxDQUFBOztBQUFBLFdBRUEsR0FBYyxPQUFBLENBQVEsZUFBUixDQUZkLENBQUE7O0FBQUEsTUFHQSxHQUFjLE9BQUEsQ0FBUSxVQUFSLENBSGQsQ0FBQTs7QUFBQSxDQUtBLENBQUUsU0FBQSxHQUFBO1NBRUksSUFBQSxXQUFBLENBQVk7QUFBQSxJQUNkLEtBQUEsRUFBTyxNQURPO0FBQUEsSUFFZCxnQkFBQSxFQUFrQixhQUZKO0FBQUEsSUFHZCxRQUFBLE1BSGM7R0FBWixFQUZKO0FBQUEsQ0FBRixDQUxBLENBQUE7Ozs7QUNBQSxJQUFBLGNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxLQUtBLEdBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFkLENBQW9CLE9BQU8sQ0FBQyxLQUE1QixDQUxSLENBQUE7OztFQVdBLE1BQU0sQ0FBQyxLQUFNO0NBWGI7O0FBQUEsTUFhTSxDQUFDLE9BQVAsR0FBaUIsS0FiakIsQ0FBQTs7OztBQ0FBLElBQUEsNkJBQUE7RUFBQSxrQkFBQTs7QUFBQSxPQUFBLEdBQWEsT0FBQSxDQUFRLFNBQVIsQ0FBYixDQUFBOztBQUFBLFVBQ0EsR0FBYSxPQUFBLENBQVEsZUFBUixDQURiLENBQUE7O0FBQUEsUUFPQSxHQUFXLFNBQUMsSUFBRCxFQUFPLEVBQVAsR0FBQTtTQUNULFVBQVUsQ0FBQyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLEVBQWhDLEVBRFM7QUFBQSxDQVBYLENBQUE7O0FBQUEsUUFjQSxDQUFTLE1BQVQsRUFBaUIsU0FBQyxPQUFELEVBQVUsT0FBVixHQUFBO0FBQ2YsRUFBQSxJQUFHLENBQUEsT0FBQSxJQUFlLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBakIsQ0FBeUIsT0FBekIsQ0FBbEI7V0FDRSxPQUFPLENBQUMsT0FBUixDQUFnQixJQUFoQixFQURGO0dBQUEsTUFBQTtXQUdFLE9BQU8sQ0FBQyxFQUFSLENBQVcsT0FBWCxFQUhGO0dBRGU7QUFBQSxDQUFqQixDQWRBLENBQUE7O0FBQUEsUUFxQkEsQ0FBUyxTQUFULEVBQW9CLFNBQUMsT0FBRCxFQUFVLE9BQVYsR0FBQTtBQUNsQixNQUFBLE9BQUE7QUFBQSxFQUFBLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBbEIsQ0FBQTtBQUFBLEVBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0IsT0FBTyxDQUFDLEVBRDFCLENBQUE7QUFBQSxFQUVBLE9BQU8sQ0FBQyxFQUFSLEdBQWEsT0FGYixDQUFBO1NBR0EsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFELENBQUssQ0FBQyxJQUF4QixDQUE2QixJQUE3QixFQUFtQyxPQUFuQyxFQUE0QyxPQUE1QyxFQUprQjtBQUFBLENBQXBCLENBckJBLENBQUE7O0FBQUEsUUE0QkEsQ0FBUyxLQUFULEVBQWdCLFNBQUEsR0FBQTtBQUNkLE1BQUEsOEJBQUE7QUFBQSxFQURlLDBCQUFXLHVHQUFXLHlCQUNyQyxDQUFBO1NBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFkLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLEVBRGM7QUFBQSxDQUFoQixDQTVCQSxDQUFBOzs7O0FDQUEsSUFBQSxpQkFBQTs7QUFBQSxPQUFBLEdBQVcsT0FBQSxDQUFRLFNBQVIsQ0FBWCxDQUFBOztBQUFBLFFBQ0EsR0FBVyxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsUUFEcEMsQ0FBQTs7OztBQ0FBLElBQUEsMEJBQUE7RUFBQTtpU0FBQTs7QUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FBVixDQUFBOztBQUFBLEtBQ0EsR0FBVSxPQUFBLENBQVEsU0FBUixDQURWLENBQUE7O0FBQUEsTUFHTSxDQUFDLE9BQVAsR0FBdUI7QUFFckIsK0JBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHVCQUFBLEtBQUEsR0FBTyxLQUFQLENBQUE7O29CQUFBOztHQUZ3QyxPQUFPLENBQUMsV0FIbEQsQ0FBQTs7OztBQ0FBLElBQUEsY0FBQTtFQUFBO2lTQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFBTiwwQkFBQSxDQUFBOzs7O0dBQUE7O2VBQUE7O0dBQW9CLE9BQU8sQ0FBQyxNQUY3QyxDQUFBOzs7O0FDQUEsSUFBQSxpQkFBQTtFQUFBO2lTQUFBOztBQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsY0FBUixDQUFSLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsK0JBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHVCQUFBLE9BQUEsR0FBUyxRQUFULENBQUE7O0FBQUEsdUJBQ0EsVUFBQSxHQUNFO0FBQUEsSUFBQSxVQUFBLEVBQVksb0JBQVo7QUFBQSxJQUNBLFFBQUEsRUFBVSxpSEFEVjtBQUFBLElBRUEsWUFBQSxFQUFjLHNCQUZkO0dBRkYsQ0FBQTs7QUFBQSx1QkFLQSxRQUFBLEdBQVUsU0FBQSxHQUFBO0FBQ1IsSUFBQSxJQUFHLFVBQVUsQ0FBQyxRQUFYLEtBQXVCLEVBQTFCO2FBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFaLEVBREY7S0FEUTtFQUFBLENBTFYsQ0FBQTs7QUFBQSx1QkFRQSxVQUFBLEdBQVksU0FBQSxHQUFBO1dBQ1YsSUFBQyxDQUFBLEVBQUQsQ0FBSSxRQUFKLEVBQWMsU0FBQSxHQUFBO0FBQ1osVUFBQSxHQUFBO0FBQUEsTUFBQSxHQUFBLEdBQU0sS0FBSyxDQUFDLEdBQU4sQ0FBVSxjQUFWLENBQU4sQ0FBQTthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksa0JBQUEsR0FBcUIsR0FBakMsRUFGWTtJQUFBLENBQWQsRUFEVTtFQUFBLENBUlosQ0FBQTs7QUFBQSx1QkFjQSxJQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaLENBQUEsQ0FBQTtXQUNBLElBQUMsQ0FBQyxHQUFGLENBQU07QUFBQSxNQUFBLFlBQUEsRUFBYyxhQUFkO0tBQU4sRUFGSztFQUFBLENBZFAsQ0FBQTs7b0JBQUE7O0dBRHdDLE1BRjFDLENBQUE7Ozs7QUNBQSxJQUFBLHdDQUFBO0VBQUE7aVNBQUE7O0FBQUEsVUFBQSxHQUFhLE9BQUEsQ0FBUSxtQkFBUixDQUFiLENBQUE7O0FBQUEsVUFDQSxHQUFrQixPQUFBLENBQVEsaUJBQVIsQ0FEbEIsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUNyQixxQ0FBQSxDQUFBOzs7O0dBQUE7O0FBQUEsNkJBQUEsS0FBQSxHQUFPLFVBQVAsQ0FBQTs7QUFBQSw2QkFDQSxJQUFBLEdBQU0sQ0FETixDQUFBOztBQUFBLDZCQUVBLEdBQUEsR0FBSyxTQUFBLEdBQUE7QUFDSixXQUFPLFNBQUEsR0FBWSxJQUFDLENBQUMsSUFBZCxHQUFxQixPQUE1QixDQURJO0VBQUEsQ0FGTCxDQUFBOzswQkFBQTs7R0FEOEMsV0FIaEQsQ0FBQTs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsS0FBRCxHQUFBO0FBRWYsRUFBQSxLQUFBLENBQU0sRUFBTixFQUFVLFlBQVYsQ0FBQSxDQUFBO1NBQ0EsS0FBQSxDQUFNLE1BQU4sRUFBYyxhQUFkLEVBSGU7QUFBQSxDQUFqQixDQUFBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBLElBQUEsNkJBQUE7RUFBQTtpU0FBQTs7QUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FBVixDQUFBOztBQUFBLElBQ0EsR0FBVSxPQUFBLENBQVEsUUFBUixDQURWLENBQUE7O0FBQUEsTUFHTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsbUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDJCQUFBLGlCQUFBLEdBQW1CLENBQW5CLENBQUE7O0FBQUEsMkJBQ0EsZUFBQSxHQUFpQixJQURqQixDQUFBOztBQUFBLDJCQUdBLG1CQUFBLEdBQXFCLElBQUksQ0FBQSxTQUFFLENBQUEsbUJBSDNCLENBQUE7O3dCQUFBOztHQUQ0QyxPQUFPLENBQUMsZUFIdEQsQ0FBQTs7OztBQ0FBLElBQUEsYUFBQTtFQUFBO2lTQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsT0FDQSxDQUFRLHVCQUFSLENBREEsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUVyQix5QkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsaUJBQUEsbUJBQUEsR0FBcUIsU0FBQSxHQUFBO1dBQ25CLElBQUMsQ0FBQSxTQURrQjtFQUFBLENBQXJCLENBQUE7O2NBQUE7O0dBRmtDLE9BQU8sQ0FBQyxLQUg1QyxDQUFBOzs7O0FDQUEsSUFBQSxtQkFBQTtFQUFBO2lTQUFBOztBQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsY0FBUixDQUFQLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsa0NBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDBCQUFBLFVBQUEsR0FBWSxJQUFaLENBQUE7O0FBQUEsMEJBQ0EsU0FBQSxHQUFXLFdBRFgsQ0FBQTs7QUFBQSwwQkFFQSxRQUFBLEdBQVUsT0FBQSxDQUFRLDJCQUFSLENBRlYsQ0FBQTs7dUJBQUE7O0dBRDJDLEtBRjdDLENBQUE7Ozs7QUNBQSxJQUFBLGdCQUFBO0VBQUE7aVNBQUE7O0FBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxhQUFSLENBQVAsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUF1QjtBQUNyQiwrQkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsdUJBQUEsVUFBQSxHQUFZLElBQVosQ0FBQTs7QUFBQSx1QkFDQSxTQUFBLEdBQVcsV0FEWCxDQUFBOztBQUFBLHVCQUVBLFFBQUEsR0FBVSxPQUFBLENBQVEscUJBQVIsQ0FGVixDQUFBOztvQkFBQTs7R0FEd0MsS0FGMUMsQ0FBQTs7OztBQ0FBLElBQUEsZ0JBQUE7RUFBQTtpU0FBQTs7QUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLGFBQVIsQ0FBUCxDQUFBOztBQUFBLE1BRU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLCtCQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSx1QkFBQSxVQUFBLEdBQVksSUFBWixDQUFBOztBQUFBLHVCQUNBLFNBQUEsR0FBVyxXQURYLENBQUE7O0FBQUEsdUJBRUEsUUFBQSxHQUFVLE9BQUEsQ0FBUSxxQkFBUixDQUZWLENBQUE7O29CQUFBOztHQUR3QyxLQUYxQyxDQUFBOzs7O0FDQUEsSUFBQSxrQkFBQTtFQUFBO2lTQUFBOztBQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsY0FBUixDQUFQLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsaUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHlCQUFBLFVBQUEsR0FBWSxJQUFaLENBQUE7O0FBQUEseUJBQ0EsU0FBQSxHQUFXLFdBRFgsQ0FBQTs7QUFBQSx5QkFFQSxRQUFBLEdBQVUsT0FBQSxDQUFRLHNCQUFSLENBRlYsQ0FBQTs7c0JBQUE7O0dBRDBDLEtBRjVDLENBQUE7Ozs7QUNBQSxJQUFBLGlFQUFBO0VBQUE7aVNBQUE7O0FBQUEsY0FBQSxHQUFpQixPQUFBLENBQVEsd0JBQVIsQ0FBakIsQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FESixDQUFBOztBQUFBLENBRUEsR0FBSSxPQUFBLENBQVEsWUFBUixDQUZKLENBQUE7O0FBQUEsVUFJQSxHQUFhLE9BQUEsQ0FBUSxpQkFBUixDQUpiLENBQUE7O0FBQUEsU0FLQSxHQUFZLE9BQUEsQ0FBUSxTQUFSLENBTFosQ0FBQTs7QUFBQSxNQU9NLENBQUMsT0FBUCxHQUF1QjtBQUNyQix5Q0FBQSxDQUFBOzs7O0dBQUE7O0FBQUEsaUNBQUEsVUFBQSxHQUFZLElBQVosQ0FBQTs7QUFBQSxpQ0FDQSxRQUFBLEdBQVUsU0FEVixDQUFBOztBQUFBLGlDQUVBLE1BQUEsR0FDRTtBQUFBLElBQUEsb0JBQUEsRUFBdUIsU0FBdkI7QUFBQSxJQUNBLGtCQUFBLEVBQXFCLFNBRHJCO0dBSEYsQ0FBQTs7QUFBQSxpQ0FLQSxTQUFBLEdBQVcsc0JBTFgsQ0FBQTs7QUFBQSxpQ0FNQSxZQUFBLEdBQWMsU0FOZCxDQUFBOztBQUFBLGlDQU9BLFFBQUEsR0FBVSxPQUFBLENBQVEscUJBQVIsQ0FQVixDQUFBOztBQUFBLGlDQVFBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixJQUFBLHNEQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsVUFBVSxDQUFDLEVBQVosQ0FBZSxLQUFmLEVBQXNCLFNBQUEsR0FBQTtBQUNwQixNQUFBLElBQUMsQ0FBQyxNQUFGLENBQUEsQ0FBQSxDQUFBO2FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx1Q0FBWixFQUZvQjtJQUFBLENBQXRCLENBREEsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixTQUFBLEdBQUE7QUFDdEIsTUFBQSxJQUFDLENBQUMsTUFBRixDQUFBLENBQUEsQ0FBQTthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQVosRUFGc0I7SUFBQSxDQUF4QixDQUxBLENBQUE7QUFBQSxJQVFBLElBQUMsQ0FBQSxVQUFVLENBQUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsU0FBQSxHQUFBO2FBQ3ZCLElBQUMsQ0FBQyxNQUFGLENBQUEsRUFEdUI7SUFBQSxDQUF6QixDQVJBLENBQUE7QUFBQSxJQVVBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsUUFBZixFQUF5QixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQyxXQUFULEVBQXNCLElBQXRCLENBQXpCLENBVkEsQ0FBQTtXQVdBLElBQUMsQ0FBQSxVQUFVLENBQUMsS0FBWixDQUFrQjtBQUFBLE1BQUEsS0FBQSxFQUFPLElBQVA7QUFBQSxNQUFhLE9BQUEsRUFBUyxJQUFDLENBQUEsY0FBdkI7QUFBQSxNQUF1QyxLQUFBLEVBQU8sSUFBQyxDQUFBLFlBQS9DO0tBQWxCLEVBWlU7RUFBQSxDQVJaLENBQUE7O0FBQUEsaUNBcUJBLFdBQUEsR0FBYSxTQUFBLEdBQUE7QUFDWCxRQUFBLFlBQUE7QUFBQSxJQUFBLFlBQUEsR0FBZSxHQUFmLENBQUE7QUFDQSxJQUFBLElBQUcsSUFBQyxDQUFDLEVBQUUsQ0FBQyxTQUFMLEdBQWlCLElBQUMsQ0FBQyxFQUFFLENBQUMsWUFBdEIsR0FBcUMsWUFBckMsR0FBb0QsSUFBQyxDQUFDLEVBQUUsQ0FBQyxZQUE1RDtBQUNFLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxJQUFaLElBQW9CLENBRHBCLENBQUE7QUFBQSxNQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLFVBQVUsQ0FBQyxJQUF4QixDQUZBLENBQUE7YUFHQSxJQUFDLENBQUEsVUFBVSxDQUFDLE1BSmQ7S0FGVztFQUFBLENBckJiLENBQUE7O0FBQUEsaUNBNkJBLGNBQUEsR0FBZ0IsU0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixPQUFsQixHQUFBO1dBQ2QsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBRGM7RUFBQSxDQTdCaEIsQ0FBQTs7QUFBQSxpQ0FnQ0EsWUFBQSxHQUFjLFNBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsT0FBbEIsR0FBQTtXQUNaLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQURZO0VBQUEsQ0FoQ2QsQ0FBQTs7QUFBQSxpQ0FtQ0EsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUVQLFFBQUEseUNBQUE7QUFBQSxJQUFBLFVBQUEsR0FBYSxJQUFDLENBQUEsQ0FBRCxDQUFHLHdCQUFILENBQTRCLENBQUMsR0FBN0IsQ0FBQSxDQUFiLENBQUE7QUFBQSxJQUNBLFFBQUEsR0FBVyxJQUFDLENBQUEsQ0FBRCxDQUFHLHNCQUFILENBQTBCLENBQUMsR0FBM0IsQ0FBQSxDQURYLENBQUE7QUFBQSxJQUVBLFlBQUEsR0FBZSxJQUFDLENBQUEsQ0FBRCxDQUFHLDBCQUFILENBQThCLENBQUMsR0FBL0IsQ0FBQSxDQUZmLENBQUE7QUFBQSxJQUtBLEtBQUEsR0FBUTtBQUFBLE1BQUMsVUFBQSxFQUFZLFVBQWI7QUFBQSxNQUF5QixZQUFBLEVBQWMsWUFBdkM7QUFBQSxNQUFxRCxRQUFBLEVBQVUsUUFBL0Q7S0FMUixDQUFBO1dBTUEsSUFBQyxDQUFBLFVBQVUsQ0FBQyxJQUFaLENBQWlCLEtBQWpCLEVBUk87RUFBQSxDQW5DVCxDQUFBOzs4QkFBQTs7R0FEa0QsZUFQcEQsQ0FBQTs7OztBQ0FBLElBQUEsa0JBQUE7RUFBQTtpU0FBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLElBQ0EsR0FBTyxPQUFBLENBQVEsYUFBUixDQURQLENBQUE7O0FBQUEsTUFHTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsOEJBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHNCQUFBLFFBQUEsR0FBVSxPQUFBLENBQVEsb0JBQVIsQ0FBVixDQUFBOztBQUFBLHNCQUNBLFVBQUEsR0FBWSxJQURaLENBQUE7O0FBQUEsc0JBRUEsU0FBQSxHQUFXLFdBRlgsQ0FBQTs7QUFBQSxzQkFHQSxNQUFBLEdBQ0U7QUFBQSxJQUFBLHdCQUFBLEVBQTJCLFdBQTNCO0dBSkYsQ0FBQTs7QUFBQSxzQkFPQSxVQUFBLEdBQVksU0FBQSxHQUFBO0FBQ1YsSUFBQSwyQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsUUFBVixFQUFvQixTQUFBLEdBQUE7QUFDbEIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQyxNQUFGLENBQUEsRUFGa0I7SUFBQSxDQUFwQixDQURBLENBQUE7QUFBQSxJQUtBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixJQUFDLENBQUEsS0FBMUIsQ0FMQSxDQUFBO1dBTUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQXhDLEVBUFU7RUFBQSxDQVBaLENBQUE7O0FBQUEsc0JBZ0JBLFNBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWixDQUFBLENBQUE7QUFBQSxJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFuQixDQURBLENBQUE7V0FFQSxJQUFDLENBQUEsS0FBSyxDQUFDLEtBSEU7RUFBQSxDQWhCWCxDQUFBOzttQkFBQTs7R0FEdUMsS0FIekMsQ0FBQTs7OztBQ0FBLElBQUEsY0FBQTtFQUFBO2lTQUFBOztBQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsYUFBUixDQUFQLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsNkJBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHFCQUFBLFNBQUEsR0FBVyxNQUFYLENBQUE7O0FBQUEscUJBQ0EsRUFBQSxHQUFJLGdCQURKLENBQUE7O0FBQUEscUJBRUEsT0FBQSxHQUNFO0FBQUEsSUFBQSxNQUFBLEVBQVEsU0FBUjtBQUFBLElBQ0EsSUFBQSxFQUFNLHVCQUROO0FBQUEsSUFFQSxNQUFBLEVBQVEsU0FGUjtHQUhGLENBQUE7O0FBQUEscUJBTUEsUUFBQSxHQUFVLE9BQUEsQ0FBUSxtQkFBUixDQU5WLENBQUE7O2tCQUFBOztHQURzQyxLQUZ4QyxDQUFBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQXNzaWduZWQgdG8gd2luZG93IHRvIG1ha2UgQm9vdHN0cmFwIGhhcHB5XG53aW5kb3cualF1ZXJ5ID0gJCA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuIyBqUXVlcnkgcGx1Z2luc1xucmVxdWlyZSAnLi4vYm93ZXJfY29tcG9uZW50cy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAnXG5cbkJhY2tib25lICAgPSByZXF1aXJlICdiYWNrYm9uZSdcbkJhY2tib25lLiQgPSAkXG5DaGFwbGluICAgID0gcmVxdWlyZSAnY2hhcGxpbidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENoYXBsaW4uQXBwbGljYXRpb25cbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjwhZG9jdHlwZSBodG1sPlxcbjwhLS1baWYgSUUgOF0+ICAgIDxodG1sIGNsYXNzPVxcXCJuby1qcyBsdC1pZTlcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCFbZW5kaWZdLS0+XFxuPCEtLVtpZiBndCBJRSA4XT48IS0tPiA8aHRtbCBjbGFzcz1cXFwibm8tanNcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCEtLTwhW2VuZGlmXS0tPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiPlxcbiAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlLGNocm9tZT0xXFxcIj5cXG4gIDx0aXRsZT5DaGFwbGluIEdlbmVyYXRvcjwvdGl0bGU+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoXFxcIj5cXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiL2Nzcy9hcHAuY3NzXFxcIj5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL3ZlbmRvci5qc1xcXCI+PC9zY3JpcHQ+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL2FwcC5qc1xcXCI+PC9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbiAgfSk7XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcblNpdGVWaWV3ID0gcmVxdWlyZSAnLi4vLi4vdmlld3Mvc2l0ZS12aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBDaGFwbGluLkNvbnRyb2xsZXJcblxuICBiZWZvcmVBY3Rpb246IC0+XG4gICAgQHJldXNlICdzaXRlJywgU2l0ZVZpZXdcbiIsIkNvbnRyb2xsZXIgICAgPSByZXF1aXJlICcuL2Jhc2UvY29udHJvbGxlcidcbkZvb3RlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9mb290ZXInXG5IZWFkZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvaGVhZGVyJ1xuSG9tZVBhZ2VWaWV3ICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hvbWUvaG9tZS1wYWdlJ1xuSnVtYm90cm9uVmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL2Jvb3RzdHJhcC9qdW1ib3Ryb24nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG5cbiAgYmVmb3JlQWN0aW9uOiAtPlxuICAgIHN1cGVyXG5cbiAgICBAcmV1c2UgJ2hlYWRlcicsIEhlYWRlclZpZXcsIHJlZ2lvbjogJ2hlYWRlcidcbiAgICBAcmV1c2UgJ2Zvb3RlcicsIEZvb3RlclZpZXcsIHJlZ2lvbjogJ2Zvb3RlcidcblxuICBpbmRleDogLT5cbiAgICBAdmlldyA9IG5ldyBKdW1ib3Ryb25WaWV3IHJlZ2lvbjogJ21haW4nXG4gICAgQHZpZXcuc3VidmlldyAnaG9tZS1wYWdlLWNvbnRlbnQnLCBuZXcgSG9tZVBhZ2VWaWV3IHJlZ2lvbjogJ21haW4nXG5cbiAgICBAXG4iLCJDb250cm9sbGVyICAgID0gcmVxdWlyZSAnLi9iYXNlL2NvbnRyb2xsZXInXG5Gb290ZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvZm9vdGVyJ1xuSGVhZGVyVmlldyAgICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hlYWRlcidcbkhvbWVQYWdlVmlldyAgPSByZXF1aXJlICcuLi92aWV3cy9ob21lL2hvbWUtcGFnZSdcbkp1bWJvdHJvblZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9ib290c3RyYXAvanVtYm90cm9uJ1xuSW1hZ2VzQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9pbWFnZXMtY29sbGVjdGlvbidcblBob3Rvc0NvbGxlY3Rpb24gPSByZXF1aXJlICcuLi9tb2RlbHMvcGhvdG9zJ1xuSW1hZ2VNb2RlbCA9IHJlcXVpcmUgJy4uL21vZGVscy9pbWFnZSdcbkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEltYWdlQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgYmVmb3JlQWN0aW9uOiAtPiAjKHBhcmFtcykgZm9yIGFjY2VzcyB0byB1cmwgcGFyYW0ga2V5c1xuICAgIHN1cGVyXG4gICAgIyMjIyBXaGF0IGRvZXMgYXQgcmV1c2UgdGFrZSBpbiBhcyBhcmd1bWVudHM/XG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gIFx0I2V2ZXJ5IGNvbnRyb2xsZXIgYWN0aW9uIHNob3VsZCBzYXZlIHRoZSBtYWluIHZpZXcgYXMgQHZpZXcsIG9yIHNlbGYudmlld1xuICAgICNmb3IgbmFtaW5nIHJlZ2lvbnM6IEB2aWV3ID0gbmV3IE15VmlldyB7cmVnaW9uOiAnc2lkZWJhcid9XG4gICAgI0BwaG90b3MgPSBuZXcgQ2hhcGxpbi5Db2xsZWN0aW9uIG51bGwsIG1vZGVsOiBJbWFnZU1vZGVsXG4gICAgQHZpZXcgPSBuZXcgSW1hZ2VzQ29sbGVjdGlvblZpZXcgXG4gICAgICByZWdpb246ICdtYWluJ1xuICAgICAgY29sbGVjdGlvbjogbmV3IFBob3Rvc0NvbGxlY3Rpb24gI2NvbGxlY3Rpb246IEBwaG90b3MgIG1vZGVsOiBJbWFnZU1vZGVsXG4gICAgICAjY29sbGVjdGlvbjogbmV3IENoYXBsaW4uQ29sbGVjdGlvbiBbe2ltYWdlVGl0bGU6ICdjdXRlIGRpbm8nLCBpbWFnZVNyYzogXCJodHRwOi8vaW1ndXIuY29tL2dhbGxlcnkvMU0yQnBOY1wiLCBpbWFnZUNhcHRpb246ICd3b3cnfV1cbiAgICAjQHZpZXcuc3VidmlldyAnaW1hZ2VzLWNvbGxlY3Rpb24tY29udGVudCcsIG5ldyBJbWFnZXNDb2xsZWN0aW9uVmlldyByZWdpb246ICdtYWluJ1xuXG4gICAgQFxuXG4iLCIkICAgICAgICAgICA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuQXBwbGljYXRpb24gPSByZXF1aXJlICcuL2FwcGxpY2F0aW9uJ1xucm91dGVzICAgICAgPSByZXF1aXJlICcuL3JvdXRlcydcblxuJCAtPlxuXG4gIG5ldyBBcHBsaWNhdGlvbiB7XG4gICAgdGl0bGU6ICd0ZXN0JyxcbiAgICBjb250cm9sbGVyU3VmZml4OiAnLWNvbnRyb2xsZXInLFxuICAgIHJvdXRlc1xuICB9XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdXRpbGl0aWVzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIERlbGVnYXRlIHRvIENoYXBsaW7igJlzIHV0aWxzIG1vZHVsZS5cbnV0aWxzID0gQ2hhcGxpbi51dGlscy5iZWdldCBDaGFwbGluLnV0aWxzXG5cbiMgXyh1dGlscykuZXh0ZW5kXG4jICBzb21lTWV0aG9kOiAtPlxuXG4jIFByZXZlbnQgY3JlYXRpbmcgbmV3IHByb3BlcnRpZXMgYW5kIHN0dWZmLlxuT2JqZWN0LnNlYWw/IHV0aWxzXG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHNcbiIsIkNoYXBsaW4gICAgPSByZXF1aXJlICdjaGFwbGluJ1xuSGFuZGxlYmFycyA9IHJlcXVpcmUgJ2hic2Z5L3J1bnRpbWUnXG5cbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdmlldyBoZWxwZXJzXG4jIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tLyNoZWxwZXJzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnJlZ2lzdGVyID0gKG5hbWUsIGZuKSAtPlxuICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyIG5hbWUsIGZuXG5cbiMgTWFwIGhlbHBlcnNcbiMgLS0tLS0tLS0tLS1cblxuIyBNYWtlICd3aXRoJyBiZWhhdmUgYSBsaXR0bGUgbW9yZSBtdXN0YWNoZXkuXG5yZWdpc3RlciAnd2l0aCcsIChjb250ZXh0LCBvcHRpb25zKSAtPlxuICBpZiBub3QgY29udGV4dCBvciBIYW5kbGViYXJzLlV0aWxzLmlzRW1wdHkgY29udGV4dFxuICAgIG9wdGlvbnMuaW52ZXJzZSh0aGlzKVxuICBlbHNlXG4gICAgb3B0aW9ucy5mbihjb250ZXh0KVxuXG4jIEludmVyc2UgZm9yICd3aXRoJy5cbnJlZ2lzdGVyICd3aXRob3V0JywgKGNvbnRleHQsIG9wdGlvbnMpIC0+XG4gIGludmVyc2UgPSBvcHRpb25zLmludmVyc2VcbiAgb3B0aW9ucy5pbnZlcnNlID0gb3B0aW9ucy5mblxuICBvcHRpb25zLmZuID0gaW52ZXJzZVxuICBIYW5kbGViYXJzLmhlbHBlcnMud2l0aC5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpXG5cbiMgR2V0IENoYXBsaW4tZGVjbGFyZWQgbmFtZWQgcm91dGVzLiB7e3VybCBcImxpa2VzI3Nob3dcIiBcIjEwNVwifX1cbnJlZ2lzdGVyICd1cmwnLCAocm91dGVOYW1lLCBwYXJhbXMuLi4sIG9wdGlvbnMpIC0+XG4gIENoYXBsaW4udXRpbHMucmV2ZXJzZSByb3V0ZU5hbWUsIHBhcmFtc1xuIiwiQ2hhcGxpbiAgPSByZXF1aXJlICdjaGFwbGluJ1xubWVkaWF0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IENoYXBsaW4ubWVkaWF0b3JcbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuTW9kZWwgICA9IHJlcXVpcmUgJy4vbW9kZWwnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblxuXG4gIG1vZGVsOiBNb2RlbFxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTW9kZWwgZXh0ZW5kcyBDaGFwbGluLk1vZGVsXG4iLCJNb2RlbCA9IHJlcXVpcmUgJy4vYmFzZS9tb2RlbCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBJbWFnZU1vZGVsIGV4dGVuZHMgTW9kZWxcbiAgdXJsUm9vdDogJy9pbWFnZScgIyBuZWVkIHRvIHNldCBpZCBpbiBjb25zdHJ1Y3RlciB0byByZWZlciB0byB1c2VyL2lkXG4gIGRlZmF1bHQ6IFxuICAgIGltYWdlVGl0bGU6ICdObyBUaXRsZSBBdmFsaWFibGUnXG4gICAgaW1hZ2VTcmM6ICdodHRwczovL2VuY3J5cHRlZC10Ym4yLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRZ0U2bnk2YmktX0xnazVCQUI0NWhNVnROMWFILVRoZDJOS3JSbnFqV0R4ZzdpRzVQdHhvUVdodmMnXG4gICAgaW1hZ2VDYXB0aW9uOiAnTm8gQ2FwdGlvbiBBdmFsaWFibGUnXG4gIHZhbGlkYXRlOiAtPlxuICAgIGlmIGF0dHJpYnV0ZXMuaW1hZ2VTcmMgPT0gJydcbiAgICAgIGNvbnNvbGUubG9nICdubyBpbWFnZSBzcmMnXG4gIGluaXRpYWxpemU6IC0+XG4gICAgQG9uICdjaGFuZ2UnLCAtPlxuICAgICAgY2FwID0gbW9kZWwuZ2V0IFwiaW1hZ2VDYXB0aW9uXCJcbiAgICAgIGNvbnNvbGUubG9nICdDaGFuZ2VkIGltYWdlIHRvJyArIGNhcFxuICAgICN3aGF0J3MgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwdXR0aW5nIGxpc3RlbmVycyBoZXJlIHZlcnN1cyBsaW5lIGFib3ZlP1xuXG4gIGVkaXQ6ICAtPlxuICAgIGNvbnNvbGUubG9nIFwiZWRpdGluZyBmcm9tIGltYWdlLmNvZmZlZVwiXG4gICAgQC5zZXQgaW1hZ2VDYXB0aW9uOiAndGVzdENhcHRpb24nXG5cblxuIiwiQ29sbGVjdGlvbiA9IHJlcXVpcmUgJy4vYmFzZS9jb2xsZWN0aW9uJ1xuSW1hZ2VNb2RlbCAgICAgID0gcmVxdWlyZSAnLi4vbW9kZWxzL2ltYWdlJyAjaW1hZ2UgaXMgdGhlIHN1Ym1vZGVsIG9mIHRoZSBjb2xsZWN0aW9uIHBob3Rvc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBob3Rvc0NvbGxlY3Rpb24gZXh0ZW5kcyBDb2xsZWN0aW9uXG4gIG1vZGVsOiBJbWFnZU1vZGVsXG4gIHBhZ2U6IDFcbiAgdXJsOiAtPlxuICBcdHJldHVybiAnL3Bob3RvcycgKyBALnBhZ2UgKyAnLmpzb24nXG4gICMgcGFyc2U6IChyZXNwb25zZSkgLT5cbiAgIyBcdGNvbnNvbGUubG9nKFwicGFyc2UgcmV0dXJuc1wiLCByZXNwb25zZS5yZXN1bHRzKVxuICAjIFx0cmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2UpLm9iamVjdHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChtYXRjaCkgLT5cblxuICBtYXRjaCAnJywgJ2hvbWUjaW5kZXgnXG4gIG1hdGNoICd0ZXN0JywgJ2ltYWdlI2luZGV4J1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuICAgIDxwPiZjb3B5OyBDb21wYW55IDIwMTM8L3A+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG4gIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiLm5hdmJhci1jb2xsYXBzZVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gIDwvYnV0dG9uPlxcbiAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+Q2hhcGxpbiBCb290c3RyYXAgRXhhbXBsZTwvYT5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiPlxcbiAgPGZvcm0gY2xhc3M9XFxcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlNpZ24gaW48L2J1dHRvbj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICA8aDI+SGVhZGluZzwvaDI+XFxuICAgIDxwPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYSBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLiA8L3A+XFxuICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VmlldyBkZXRhaWxzICZyYXF1bzs8L2E+PC9wPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgIDxoMj5IZWFkaW5nPC9oMj5cXG4gICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuIDwvcD5cXG4gICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5WaWV3IGRldGFpbHMgJnJhcXVvOzwvYT48L3A+XFxuIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICA8aDI+SGVhZGluZzwvaDI+XFxuICAgIDxwPkRvbmVjIHNlZCBvZGlvIGR1aS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIFZlc3RpYnVsdW0gaWQgbGlndWxhIHBvcnRhIGZlbGlzIGV1aXNtb2Qgc2VtcGVyLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLjwvcD5cXG4gICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5WaWV3IGRldGFpbHMgJnJhcXVvOzwvYT48L3A+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cXG4gIDxwPlRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgYSBzaW1wbGUgbWFya2V0aW5nIG9yIGluZm9ybWF0aW9uYWwgd2Vic2l0ZS4gSXQgaW5jbHVkZXMgYSBsYXJnZSBjYWxsb3V0IGNhbGxlZCBhIGp1bWJvdHJvbiBhbmQgdGhyZWUgc3VwcG9ydGluZyBwaWVjZXMgb2YgY29udGVudC4gVXNlIGl0IGFzIGEgc3RhcnRpbmcgcG9pbnQgdG8gY3JlYXRlIHNvbWV0aGluZyBtb3JlIHVuaXF1ZS48L3A+XFxuICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5MZWFybiBtb3JlICZyYXF1bzs8L2E+PC9wPlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cbiAgYnVmZmVyICs9IFwiPGRpdiBjbGFzcz1cXFwiaW1hZ2UtY29udGFpbmVyXFxcIj5cXG4gIDxoMT5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuaW1hZ2VUaXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5pbWFnZVRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvaDE+XFxuICA8aW1nIHNyYz1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmltYWdlU3JjKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlU3JjKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+IFxcbiAgPHA+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmltYWdlQ2FwdGlvbikgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5pbWFnZUNhcHRpb24pOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9wPlxcbiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJlZGl0SW1hZ2VcXFwiPiBlZGl0IDwvYnV0dG9uPlxcbjwvZGl2PlxcblwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInBob3Rvc1xcXCI+PC9kaXY+XFxuPGgxPjwvaDE+XFxuPGZvcm0+XFxuVGl0bGU6IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJpbWFnZVRpdGxlXFxcIj48YnI+XFxuQ2FwdGlvbjogPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImltYWdlQ2FwdGlvblxcXCI+PGJyPlxcbkltZ1NyYzogPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImltYWdlU3JjXFxcIj48YnI+XFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJhZGRcXFwiPkNsaWNrIE1lITwvYnV0dG9uPlxcbjwvZm9ybT5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8aGVhZGVyIGlkPVxcXCJoZWFkZXJcXFwiIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCI+PC9oZWFkZXI+XFxuXFxuPGRpdiBpZD1cXFwib3V0ZXItcGFnZS1jb250YWluZXJcXFwiPjwvZGl2Plxcblxcbjxmb290ZXIgaWQ9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCI7XG4gIH0pO1xuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5WaWV3ICAgID0gcmVxdWlyZSAnLi92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvbGxlY3Rpb25WaWV3IGV4dGVuZHMgQ2hhcGxpbi5Db2xsZWN0aW9uVmlld1xuICBhbmltYXRpb25EdXJhdGlvbjogMFxuICB1c2VDc3NBbmltYXRpb246IHllc1xuXG4gIGdldFRlbXBsYXRlRnVuY3Rpb246IFZpZXc6OmdldFRlbXBsYXRlRnVuY3Rpb25cbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xucmVxdWlyZSAnLi4vLi4vbGliL3ZpZXctaGVscGVyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFZpZXcgZXh0ZW5kcyBDaGFwbGluLlZpZXdcblxuICBnZXRUZW1wbGF0ZUZ1bmN0aW9uOiAtPlxuICAgIEB0ZW1wbGF0ZVxuIiwiVmlldyA9IHJlcXVpcmUgJy4uL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBKdW1ib1Ryb25WaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2p1bWJvdHJvbidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy9qdW1ib3Ryb24nXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRm9vdGVyVmlldyBleHRlbmRzIFZpZXdcbiAgYXV0b1JlbmRlcjogdHJ1ZVxuICBjbGFzc05hbWU6ICdjb250YWluZXInXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi90ZW1wbGF0ZXMvZm9vdGVyJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhlYWRlclZpZXcgZXh0ZW5kcyBWaWV3XG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgY2xhc3NOYW1lOiAnY29udGFpbmVyJ1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vdGVtcGxhdGVzL2hlYWRlcidcbiIsIlZpZXcgPSByZXF1aXJlICcuLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZVBhZ2VWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy9ob21lJ1xuIiwiQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuL2Jhc2UvY29sbGVjdGlvbi12aWV3J1xuJCA9IHJlcXVpcmUgJ2pxdWVyeSdcbl8gPSByZXF1aXJlICd1bmRlcnNjb3JlJ1xuI1ZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcbkltYWdlTW9kZWwgPSByZXF1aXJlICcuLi9tb2RlbHMvaW1hZ2UnXG5QaG90b1ZpZXcgPSByZXF1aXJlICcuL3Bob3RvJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEltYWdlc0NvbGxlY3Rpb25WaWV3IGV4dGVuZHMgQ29sbGVjdGlvblZpZXdcbiAgYXV0b1JlbmRlcjogdHJ1ZVxuICBpdGVtVmlldzogUGhvdG9WaWV3XG4gIGV2ZW50czpcbiAgICAnY2xpY2sgaW5wdXQuc3VibWl0JyA6ICdjbGlja2VkJ1xuICAgICdjbGljayBidXR0b24uYWRkJyA6ICdjbGlja2VkJ1xuICBjbGFzc05hbWU6ICdjb2xsZWN0aW9uLWNvbnRhaW5lcidcbiAgbGlzdFNlbGVjdG9yOiAnLnBob3RvcydcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9waG90b3MnXG4gIGluaXRpYWxpemU6IC0+XG4gICAgc3VwZXJcbiAgICBAY29sbGVjdGlvbi5vbiAnYWRkJywgLT5cbiAgICAgIEAucmVuZGVyKClcbiAgICAgIGNvbnNvbGUubG9nIFwic29tZXRoaW5nIHdhcyBhZGRlZCB0byB0aGUgY29sbGVjdGlvblwiXG5cbiAgICBAY29sbGVjdGlvbi5vbiAncmVzZXQnLCAtPlxuICAgICAgQC5yZW5kZXIoKVxuICAgICAgY29uc29sZS5sb2cgXCJzb21ldGhpbmcgd2FzIHJlc2V0XCJcbiAgICBAY29sbGVjdGlvbi5vbiAnY2hhbmdlJywgLT5cbiAgICAgIEAucmVuZGVyKClcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgXy5iaW5kKEAuY2hlY2tTY3JvbGwsIEApKVxuICAgIEBjb2xsZWN0aW9uLmZldGNoIHJlc2V0OiB0cnVlLCBzdWNjZXNzOiBAb25GZXRjaFN1Y2Nlc3MsIGVycm9yOiBAb25GZXRjaEVycm9yXG4gIGNoZWNrU2Nyb2xsOiAtPiAjdGhpcyBkb2Vzbid0IGRvIGFueXRoaW5nIFxuICAgIHRyaWdnZXJQb2ludCA9IDEwMCBcbiAgICBpZiBALmVsLnNjcm9sbFRvcCArIEAuZWwuY2xpZW50SGVpZ2h0ICsgdHJpZ2dlclBvaW50ID4gQC5lbC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnNvbGUubG9nICdyZWFjaGVkIHBvaW50J1xuICAgICAgQGNvbGxlY3Rpb24ucGFnZSArPSAxXG4gICAgICBjb25zb2xlLmxvZyBAY29sbGVjdGlvbi5wYWdlXG4gICAgICBAY29sbGVjdGlvbi5mZXRjaCAjcmVmZXRjaCBhZnRlciBpbWFnZXNcblxuICBvbkZldGNoU3VjY2VzczogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICBjb25zb2xlLmxvZyhcIlNVQ0VTU1MhXCIpXG4gIFxuICBvbkZldGNoRXJyb3I6IChtb2RlbCwgcmVzcG9uc2UsIG9wdGlvbnMpIC0+XG4gICAgY29uc29sZS5sb2coXCJGQUlMVVJFXCIpXG5cbiAgY2xpY2tlZDogLT5cbiAgICAjYWRkIHZhbGlkYXRpb24gbGF0ZXJcbiAgICBpbWFnZVRpdGxlID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VUaXRsZV0nKS52YWwoKVxuICAgIGltYWdlU3JjID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VTcmNdJykudmFsKClcbiAgICBpbWFnZUNhcHRpb24gPSBAJCgnaW5wdXRbbmFtZT1pbWFnZUNhcHRpb25dJykudmFsKClcbiAgICBcblxuICAgIGltYWdlID0ge2ltYWdlVGl0bGU6IGltYWdlVGl0bGUsIGltYWdlQ2FwdGlvbjogaW1hZ2VDYXB0aW9uLCBpbWFnZVNyYzogaW1hZ2VTcmN9ICNmb3Igc29tZSByZWFzb24gaWYgeW91IHB1dCBoZXJlLCBub3QgaW4gaW50aWFsaXplIGl0IHdvcmtzXG4gICAgQGNvbGxlY3Rpb24ucHVzaCBpbWFnZSAjXG5cbiAgIyBvbkFkZGVkVG9ET006IC0+XG4gICMgICBpbWFnZVRpdGxlID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VUaXRsZV0nKS52YWwoKVxuICAjICAgaW1hZ2VTcmMgPSBAJCgnaW5wdXRbbmFtZT1pbWFnZVNyY10nKS52YWwoKVxuICAjICAgaW1hZ2VDYXB0aW9uID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VDYXB0aW9uXScpLnZhbCgpXG4gICMgICB2YWxzID0gW2ltYWdlVGl0bGUsIGltYWdlQ2FwdGlvbiwgaW1hZ2VTcmNdXG4gICMgQG1vZGVsLnNldCBpbWFnZVRpdGxlOiBpbWFnZVRpdGxlXG4gICMgQG1vZGVsLnNldCBpbWFnZUNhcHRpb246IGltYWdlQ2FwdGlvblxuICAjIEBtb2RlbC5zZXQgaW1hZ2VTcmM6IGltYWdlU3JjXG5cbiAgICBcbiAgICBcblxuIiwiJCA9IHJlcXVpcmUgJ2pxdWVyeSdcblZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQaG90b1ZpZXcgZXh0ZW5kcyBWaWV3XG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi90ZW1wbGF0ZXMvcGhvdG8nXG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgY2xhc3NOYW1lOiAnY29udGFpbmVyJ1xuICBldmVudHM6XG4gICAgJ2NsaWNrIGJ1dHRvbi5lZGl0SW1hZ2UnIDogJ2VkaXRJbWFnZSdcbiAgIyBsaXN0ZW46XG4gICMgICAnYWRkZWRUb0RPTScgOiAnb25BZGRlZFRvRE9NJ1xuICBpbml0aWFsaXplOiAtPlxuICAgIHN1cGVyXG4gICAgQG1vZGVsLm9uICdjaGFuZ2UnLCAtPlxuICAgICAgY29uc29sZS5sb2cgJ2ltYWdlIGhhcyBiZWVuIGNoYW5nZWQhISEnXG4gICAgICBALnJlbmRlcigpXG4gICAgICAjUExFQVNFIFdIWSBOT1QgUkVOREVSXG4gICAgY29uc29sZS5sb2coXCJtb2RlbCBpcyBcIiwgQG1vZGVsKVxuICAgIGNvbnNvbGUubG9nKFwibW9kZWwgY29sbGVjdGlvbiBcIiwgQG1vZGVsLmNvbGxlY3Rpb24pXG4gICAgXG4gIGVkaXRJbWFnZTogLT5cbiAgICBjb25zb2xlLmxvZyBcImVkaXRpbmcgaW1hZ2VcIlxuICAgIGNvbnNvbGUubG9nIEBtb2RlbC5lZGl0XG4gICAgQG1vZGVsLmVkaXRcbiAgICBcbiAgIyBvbkFkZGVkVG9ET006IC0+XG4gICMgICBpbWFnZVRpdGxlID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VUaXRsZV0nKS52YWx1ZVxuICAjICAgaW1hZ2VTcmMgPSBAJCgnaW5wdXRbbmFtZT1pbWFnZVNyY10nKS52YWx1ZVxuICAjICAgaW1hZ2VDYXB0aW9uID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VDYXB0aW9uXScpLnZhbHVlXG4gICMgICBAbW9kZWwuc2V0IGltYWdlVGl0bGU6IGltYWdlVGl0bGVcbiAgIyAgIEBtb2RlbC5zZXQgaW1hZ2VDYXB0aW9uOiBpbWFnZUNhcHRpb25cbiAgIyAgIEBtb2RlbC5zZXQgaW1hZ2VTcmM6IGltYWdlU3JjXG5cblxuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNpdGVWaWV3IGV4dGVuZHMgVmlld1xuICBjb250YWluZXI6ICdib2R5J1xuICBpZDogJ3NpdGUtY29udGFpbmVyJ1xuICByZWdpb25zOlxuICAgIGhlYWRlcjogJyNoZWFkZXInXG4gICAgbWFpbjogJyNvdXRlci1wYWdlLWNvbnRhaW5lcidcbiAgICBmb290ZXI6ICcjZm9vdGVyJ1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vdGVtcGxhdGVzL3NpdGUnXG4iLCIvKiFcbiAqIEJvb3RzdHJhcCB2My4xLjEgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbmlmICh0eXBlb2YgalF1ZXJ5ID09PSAndW5kZWZpbmVkJykgeyB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnknKSB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0cmFuc2l0aW9uLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdHJhbnNpdGlvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDU1MgVFJBTlNJVElPTiBTVVBQT1JUIChTaG91dG91dDogaHR0cDovL3d3dy5tb2Rlcm5penIuY29tLylcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxuXG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJyA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICdNb3pUcmFuc2l0aW9uJyAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbicgICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgICAndHJhbnNpdGlvbicgICAgICAgOiAndHJhbnNpdGlvbmVuZCdcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgICAgaWYgKGVsLnN0eWxlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZW5kOiB0cmFuc0VuZEV2ZW50TmFtZXNbbmFtZV0gfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZSAvLyBleHBsaWNpdCBmb3IgaWU4ICggIC5fLilcbiAgfVxuXG4gIC8vIGh0dHA6Ly9ibG9nLmFsZXhtYWNjYXcuY29tL2Nzcy10cmFuc2l0aW9uc1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlLCAkZWwgPSB0aGlzXG4gICAgJCh0aGlzKS5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWUgfSlcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IGlmICghY2FsbGVkKSAkKCRlbCkudHJpZ2dlcigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpIH1cbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkdXJhdGlvbilcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRW5kKClcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogYWxlcnQuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNhbGVydHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBBTEVSVCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgZGlzbWlzcyA9ICdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nXG4gIHZhciBBbGVydCAgID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgJChlbCkub24oJ2NsaWNrJywgZGlzbWlzcywgdGhpcy5jbG9zZSlcbiAgfVxuXG4gIEFsZXJ0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgID0gJCh0aGlzKVxuICAgIHZhciBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgdmFyICRwYXJlbnQgPSAkKHNlbGVjdG9yKVxuXG4gICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKCEkcGFyZW50Lmxlbmd0aCkge1xuICAgICAgJHBhcmVudCA9ICR0aGlzLmhhc0NsYXNzKCdhbGVydCcpID8gJHRoaXMgOiAkdGhpcy5wYXJlbnQoKVxuICAgIH1cblxuICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnY2xvc2UuYnMuYWxlcnQnKSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAkcGFyZW50LnRyaWdnZXIoJ2Nsb3NlZC5icy5hbGVydCcpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgJHBhcmVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICRwYXJlbnRcbiAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgIHJlbW92ZUVsZW1lbnQoKVxuICB9XG5cblxuICAvLyBBTEVSVCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmFsZXJ0XG5cbiAgJC5mbi5hbGVydCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLmFsZXJ0JylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5hbGVydCcsIChkYXRhID0gbmV3IEFsZXJ0KHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0uY2FsbCgkdGhpcylcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5hbGVydC5Db25zdHJ1Y3RvciA9IEFsZXJ0XG5cblxuICAvLyBBTEVSVCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uYWxlcnQubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmFsZXJ0ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQUxFUlQgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuYWxlcnQuZGF0YS1hcGknLCBkaXNtaXNzLCBBbGVydC5wcm90b3R5cGUuY2xvc2UpXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGJ1dHRvbi5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2J1dHRvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBCVVRUT04gUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIEJ1dHRvbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICAgPSAkLmV4dGVuZCh7fSwgQnV0dG9uLkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIEJ1dHRvbi5ERUZBVUxUUyA9IHtcbiAgICBsb2FkaW5nVGV4dDogJ2xvYWRpbmcuLi4nXG4gIH1cblxuICBCdXR0b24ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIGQgICAgPSAnZGlzYWJsZWQnXG4gICAgdmFyICRlbCAgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIHZhbCAgPSAkZWwuaXMoJ2lucHV0JykgPyAndmFsJyA6ICdodG1sJ1xuICAgIHZhciBkYXRhID0gJGVsLmRhdGEoKVxuXG4gICAgc3RhdGUgPSBzdGF0ZSArICdUZXh0J1xuXG4gICAgaWYgKCFkYXRhLnJlc2V0VGV4dCkgJGVsLmRhdGEoJ3Jlc2V0VGV4dCcsICRlbFt2YWxdKCkpXG5cbiAgICAkZWxbdmFsXShkYXRhW3N0YXRlXSB8fCB0aGlzLm9wdGlvbnNbc3RhdGVdKVxuXG4gICAgLy8gcHVzaCB0byBldmVudCBsb29wIHRvIGFsbG93IGZvcm1zIHRvIHN1Ym1pdFxuICAgIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc3RhdGUgPT0gJ2xvYWRpbmdUZXh0Jykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcbiAgICAgICAgJGVsLmFkZENsYXNzKGQpLmF0dHIoZCwgZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoZCkucmVtb3ZlQXR0cihkKVxuICAgICAgfVxuICAgIH0sIHRoaXMpLCAwKVxuICB9XG5cbiAgQnV0dG9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoYW5nZWQgPSB0cnVlXG4gICAgdmFyICRwYXJlbnQgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKVxuXG4gICAgaWYgKCRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dCcpXG4gICAgICBpZiAoJGlucHV0LnByb3AoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XG4gICAgICAgIGlmICgkaW5wdXQucHJvcCgnY2hlY2tlZCcpICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSBjaGFuZ2VkID0gZmFsc2VcbiAgICAgICAgZWxzZSAkcGFyZW50LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkKSAkaW5wdXQucHJvcCgnY2hlY2tlZCcsICF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkudHJpZ2dlcignY2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcygnYWN0aXZlJylcbiAgfVxuXG5cbiAgLy8gQlVUVE9OIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmJ1dHRvblxuXG4gICQuZm4uYnV0dG9uID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmJ1dHRvbicpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYnV0dG9uJywgKGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMsIG9wdGlvbnMpKSlcblxuICAgICAgaWYgKG9wdGlvbiA9PSAndG9nZ2xlJykgZGF0YS50b2dnbGUoKVxuICAgICAgZWxzZSBpZiAob3B0aW9uKSBkYXRhLnNldFN0YXRlKG9wdGlvbilcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5idXR0b24uQ29uc3RydWN0b3IgPSBCdXR0b25cblxuXG4gIC8vIEJVVFRPTiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmJ1dHRvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYnV0dG9uID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQlVUVE9OIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5idXR0b24uZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlXj1idXR0b25dJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJGJ0biA9ICQoZS50YXJnZXQpXG4gICAgaWYgKCEkYnRuLmhhc0NsYXNzKCdidG4nKSkgJGJ0biA9ICRidG4uY2xvc2VzdCgnLmJ0bicpXG4gICAgJGJ0bi5idXR0b24oJ3RvZ2dsZScpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGNhcm91c2VsLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jY2Fyb3VzZWxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDQVJPVVNFTCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kaW5kaWNhdG9ycyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLmNhcm91c2VsLWluZGljYXRvcnMnKVxuICAgIHRoaXMub3B0aW9ucyAgICAgPSBvcHRpb25zXG4gICAgdGhpcy5wYXVzZWQgICAgICA9XG4gICAgdGhpcy5zbGlkaW5nICAgICA9XG4gICAgdGhpcy5pbnRlcnZhbCAgICA9XG4gICAgdGhpcy4kYWN0aXZlICAgICA9XG4gICAgdGhpcy4kaXRlbXMgICAgICA9IG51bGxcblxuICAgIHRoaXMub3B0aW9ucy5wYXVzZSA9PSAnaG92ZXInICYmIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vbignbW91c2VlbnRlcicsICQucHJveHkodGhpcy5wYXVzZSwgdGhpcykpXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAkLnByb3h5KHRoaXMuY3ljbGUsIHRoaXMpKVxuICB9XG5cbiAgQ2Fyb3VzZWwuREVGQVVMVFMgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgd3JhcDogdHJ1ZVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmN5Y2xlID0gIGZ1bmN0aW9uIChlKSB7XG4gICAgZSB8fCAodGhpcy5wYXVzZWQgPSBmYWxzZSlcblxuICAgIHRoaXMuaW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgdGhpcy5vcHRpb25zLmludGVydmFsXG4gICAgICAmJiAhdGhpcy5wYXVzZWRcbiAgICAgICYmICh0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpLCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5nZXRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRhY3RpdmUgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pdGVtLmFjdGl2ZScpXG4gICAgdGhpcy4kaXRlbXMgID0gdGhpcy4kYWN0aXZlLnBhcmVudCgpLmNoaWxkcmVuKClcblxuICAgIHJldHVybiB0aGlzLiRpdGVtcy5pbmRleCh0aGlzLiRhY3RpdmUpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIHRoYXQgICAgICAgID0gdGhpc1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKVxuXG4gICAgaWYgKHBvcyA+ICh0aGlzLiRpdGVtcy5sZW5ndGggLSAxKSB8fCBwb3MgPCAwKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnNsaWRpbmcpICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lm9uZSgnc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHsgdGhhdC50byhwb3MpIH0pXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09IHBvcykgcmV0dXJuIHRoaXMucGF1c2UoKS5jeWNsZSgpXG5cbiAgICByZXR1cm4gdGhpcy5zbGlkZShwb3MgPiBhY3RpdmVJbmRleCA/ICduZXh0JyA6ICdwcmV2JywgJCh0aGlzLiRpdGVtc1twb3NdKSlcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZSB8fCAodGhpcy5wYXVzZWQgPSB0cnVlKVxuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuZmluZCgnLm5leHQsIC5wcmV2JykubGVuZ3RoICYmICQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc2xpZGluZykgcmV0dXJuXG4gICAgcmV0dXJuIHRoaXMuc2xpZGUoJ25leHQnKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc2xpZGluZykgcmV0dXJuXG4gICAgcmV0dXJuIHRoaXMuc2xpZGUoJ3ByZXYnKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnNsaWRlID0gZnVuY3Rpb24gKHR5cGUsIG5leHQpIHtcbiAgICB2YXIgJGFjdGl2ZSAgID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXRlbS5hY3RpdmUnKVxuICAgIHZhciAkbmV4dCAgICAgPSBuZXh0IHx8ICRhY3RpdmVbdHlwZV0oKVxuICAgIHZhciBpc0N5Y2xpbmcgPSB0aGlzLmludGVydmFsXG4gICAgdmFyIGRpcmVjdGlvbiA9IHR5cGUgPT0gJ25leHQnID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgIHZhciBmYWxsYmFjayAgPSB0eXBlID09ICduZXh0JyA/ICdmaXJzdCcgOiAnbGFzdCdcbiAgICB2YXIgdGhhdCAgICAgID0gdGhpc1xuXG4gICAgaWYgKCEkbmV4dC5sZW5ndGgpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLndyYXApIHJldHVyblxuICAgICAgJG5leHQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pdGVtJylbZmFsbGJhY2tdKClcbiAgICB9XG5cbiAgICBpZiAoJG5leHQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSByZXR1cm4gdGhpcy5zbGlkaW5nID0gZmFsc2VcblxuICAgIHZhciBlID0gJC5FdmVudCgnc2xpZGUuYnMuY2Fyb3VzZWwnLCB7IHJlbGF0ZWRUYXJnZXQ6ICRuZXh0WzBdLCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuc2xpZGluZyA9IHRydWVcblxuICAgIGlzQ3ljbGluZyAmJiB0aGlzLnBhdXNlKClcblxuICAgIGlmICh0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCkge1xuICAgICAgdGhpcy4kaW5kaWNhdG9ycy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uZSgnc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRuZXh0SW5kaWNhdG9yID0gJCh0aGF0LiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhhdC5nZXRBY3RpdmVJbmRleCgpXSlcbiAgICAgICAgJG5leHRJbmRpY2F0b3IgJiYgJG5leHRJbmRpY2F0b3IuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICgkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdzbGlkZScpKSB7XG4gICAgICAkbmV4dC5hZGRDbGFzcyh0eXBlKVxuICAgICAgJG5leHRbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG4gICAgICAkYWN0aXZlLmFkZENsYXNzKGRpcmVjdGlvbilcbiAgICAgICRuZXh0LmFkZENsYXNzKGRpcmVjdGlvbilcbiAgICAgICRhY3RpdmVcbiAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkbmV4dC5yZW1vdmVDbGFzcyhbdHlwZSwgZGlyZWN0aW9uXS5qb2luKCcgJykpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoWydhY3RpdmUnLCBkaXJlY3Rpb25dLmpvaW4oJyAnKSlcbiAgICAgICAgICB0aGF0LnNsaWRpbmcgPSBmYWxzZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3NsaWQuYnMuY2Fyb3VzZWwnKSB9LCAwKVxuICAgICAgICB9KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoJGFjdGl2ZS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKS5zbGljZSgwLCAtMSkgKiAxMDAwKVxuICAgIH0gZWxzZSB7XG4gICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgJG5leHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0aGlzLnNsaWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzbGlkLmJzLmNhcm91c2VsJylcbiAgICB9XG5cbiAgICBpc0N5Y2xpbmcgJiYgdGhpcy5jeWNsZSgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDQVJPVVNFTCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmNhcm91c2VsXG5cbiAgJC5mbi5jYXJvdXNlbCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5jYXJvdXNlbCcpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDYXJvdXNlbC5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcbiAgICAgIHZhciBhY3Rpb24gID0gdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyA/IG9wdGlvbiA6IG9wdGlvbnMuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5jYXJvdXNlbCcsIChkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdudW1iZXInKSBkYXRhLnRvKG9wdGlvbilcbiAgICAgIGVsc2UgaWYgKGFjdGlvbikgZGF0YVthY3Rpb25dKClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuaW50ZXJ2YWwpIGRhdGEucGF1c2UoKS5jeWNsZSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uY2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuXG5cbiAgLy8gQ0FST1VTRUwgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmNhcm91c2VsLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5jYXJvdXNlbCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENBUk9VU0VMIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpJywgJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcyksIGhyZWZcbiAgICB2YXIgJHRhcmdldCA9ICQoJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSB8fCAoaHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKSkgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpIC8vc3RyaXAgZm9yIGllN1xuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sICR0YXJnZXQuZGF0YSgpLCAkdGhpcy5kYXRhKCkpXG4gICAgdmFyIHNsaWRlSW5kZXggPSAkdGhpcy5hdHRyKCdkYXRhLXNsaWRlLXRvJylcbiAgICBpZiAoc2xpZGVJbmRleCkgb3B0aW9ucy5pbnRlcnZhbCA9IGZhbHNlXG5cbiAgICAkdGFyZ2V0LmNhcm91c2VsKG9wdGlvbnMpXG5cbiAgICBpZiAoc2xpZGVJbmRleCA9ICR0aGlzLmF0dHIoJ2RhdGEtc2xpZGUtdG8nKSkge1xuICAgICAgJHRhcmdldC5kYXRhKCdicy5jYXJvdXNlbCcpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH0pXG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjYXJvdXNlbCA9ICQodGhpcylcbiAgICAgICRjYXJvdXNlbC5jYXJvdXNlbCgkY2Fyb3VzZWwuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGNvbGxhcHNlLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jY29sbGFwc2VcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDT0xMQVBTRSBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudCkgdGhpcy4kcGFyZW50ID0gJCh0aGlzLm9wdGlvbnMucGFyZW50KVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9nZ2xlKSB0aGlzLnRvZ2dsZSgpXG4gIH1cblxuICBDb2xsYXBzZS5ERUZBVUxUUyA9IHtcbiAgICB0b2dnbGU6IHRydWVcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc1dpZHRoID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnd2lkdGgnKVxuICAgIHJldHVybiBoYXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudCgnc2hvdy5icy5jb2xsYXBzZScpXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIGFjdGl2ZXMgPSB0aGlzLiRwYXJlbnQgJiYgdGhpcy4kcGFyZW50LmZpbmQoJz4gLnBhbmVsID4gLmluJylcblxuICAgIGlmIChhY3RpdmVzICYmIGFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgaGFzRGF0YSA9IGFjdGl2ZXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgaWYgKGhhc0RhdGEgJiYgaGFzRGF0YS50cmFuc2l0aW9uaW5nKSByZXR1cm5cbiAgICAgIGFjdGl2ZXMuY29sbGFwc2UoJ2hpZGUnKVxuICAgICAgaGFzRGF0YSB8fCBhY3RpdmVzLmRhdGEoJ2JzLmNvbGxhcHNlJywgbnVsbClcbiAgICB9XG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgW2RpbWVuc2lvbl0oMClcblxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDFcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZSBpbicpXG4gICAgICAgIFtkaW1lbnNpb25dKCdhdXRvJylcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc2hvd24uYnMuY29sbGFwc2UnKVxuICAgIH1cblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVybiBjb21wbGV0ZS5jYWxsKHRoaXMpXG5cbiAgICB2YXIgc2Nyb2xsU2l6ZSA9ICQuY2FtZWxDYXNlKFsnc2Nyb2xsJywgZGltZW5zaW9uXS5qb2luKCctJykpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKVxuICAgICAgW2RpbWVuc2lvbl0odGhpcy4kZWxlbWVudFswXVtzY3JvbGxTaXplXSlcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcgfHwgIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJykpIHJldHVyblxuXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KCdoaWRlLmJzLmNvbGxhcHNlJylcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgW2RpbWVuc2lvbl0odGhpcy4kZWxlbWVudFtkaW1lbnNpb25dKCkpXG4gICAgICBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDFcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnRyaWdnZXIoJ2hpZGRlbi5icy5jb2xsYXBzZScpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgIH1cblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVybiBjb21wbGV0ZS5jYWxsKHRoaXMpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICBbZGltZW5zaW9uXSgwKVxuICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsICQucHJveHkoY29tcGxldGUsIHRoaXMpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDM1MClcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpc1t0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpID8gJ2hpZGUnIDogJ3Nob3cnXSgpXG4gIH1cblxuXG4gIC8vIENPTExBUFNFIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uY29sbGFwc2VcblxuICAkLmZuLmNvbGxhcHNlID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmNvbGxhcHNlJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIENvbGxhcHNlLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9ucy50b2dnbGUgJiYgb3B0aW9uID09ICdzaG93Jykgb3B0aW9uID0gIW9wdGlvblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5jb2xsYXBzZScsIChkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcblxuXG4gIC8vIENPTExBUFNFIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uY29sbGFwc2UgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDT0xMQVBTRSBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9Y29sbGFwc2VdJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcyksIGhyZWZcbiAgICB2YXIgdGFyZ2V0ICA9ICR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JylcbiAgICAgICAgfHwgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHx8IChocmVmID0gJHRoaXMuYXR0cignaHJlZicpKSAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSAvL3N0cmlwIGZvciBpZTdcbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KVxuICAgIHZhciBkYXRhICAgID0gJHRhcmdldC5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgdmFyIG9wdGlvbiAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdGhpcy5kYXRhKClcbiAgICB2YXIgcGFyZW50ICA9ICR0aGlzLmF0dHIoJ2RhdGEtcGFyZW50JylcbiAgICB2YXIgJHBhcmVudCA9IHBhcmVudCAmJiAkKHBhcmVudClcblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50cmFuc2l0aW9uaW5nKSB7XG4gICAgICBpZiAoJHBhcmVudCkgJHBhcmVudC5maW5kKCdbZGF0YS10b2dnbGU9Y29sbGFwc2VdW2RhdGEtcGFyZW50PVwiJyArIHBhcmVudCArICdcIl0nKS5ub3QoJHRoaXMpLmFkZENsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgJHRoaXNbJHRhcmdldC5oYXNDbGFzcygnaW4nKSA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXSgnY29sbGFwc2VkJylcbiAgICB9XG5cbiAgICAkdGFyZ2V0LmNvbGxhcHNlKG9wdGlvbilcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogZHJvcGRvd24uanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNkcm9wZG93bnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBEUk9QRE9XTiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgYmFja2Ryb3AgPSAnLmRyb3Bkb3duLWJhY2tkcm9wJ1xuICB2YXIgdG9nZ2xlICAgPSAnW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXSdcbiAgdmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLm9uKCdjbGljay5icy5kcm9wZG93bicsIHRoaXMudG9nZ2xlKVxuICB9XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgaWYgKCR0aGlzLmlzKCcuZGlzYWJsZWQsIDpkaXNhYmxlZCcpKSByZXR1cm5cblxuICAgIHZhciAkcGFyZW50ICA9IGdldFBhcmVudCgkdGhpcylcbiAgICB2YXIgaXNBY3RpdmUgPSAkcGFyZW50Lmhhc0NsYXNzKCdvcGVuJylcblxuICAgIGNsZWFyTWVudXMoKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhJHBhcmVudC5jbG9zZXN0KCcubmF2YmFyLW5hdicpLmxlbmd0aCkge1xuICAgICAgICAvLyBpZiBtb2JpbGUgd2UgdXNlIGEgYmFja2Ryb3AgYmVjYXVzZSBjbGljayBldmVudHMgZG9uJ3QgZGVsZWdhdGVcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWJhY2tkcm9wXCIvPicpLmluc2VydEFmdGVyKCQodGhpcykpLm9uKCdjbGljaycsIGNsZWFyTWVudXMpXG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiB0aGlzIH1cbiAgICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnc2hvdy5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAgICRwYXJlbnRcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdvcGVuJylcbiAgICAgICAgLnRyaWdnZXIoJ3Nob3duLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldClcblxuICAgICAgJHRoaXMuZm9jdXMoKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghLygzOHw0MHwyNykvLnRlc3QoZS5rZXlDb2RlKSkgcmV0dXJuXG5cbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoJHRoaXMuaXMoJy5kaXNhYmxlZCwgOmRpc2FibGVkJykpIHJldHVyblxuXG4gICAgdmFyICRwYXJlbnQgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgIHZhciBpc0FjdGl2ZSA9ICRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCAoaXNBY3RpdmUgJiYgZS5rZXlDb2RlID09IDI3KSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpICRwYXJlbnQuZmluZCh0b2dnbGUpLmZvY3VzKClcbiAgICAgIHJldHVybiAkdGhpcy5jbGljaygpXG4gICAgfVxuXG4gICAgdmFyIGRlc2MgPSAnIGxpOm5vdCguZGl2aWRlcik6dmlzaWJsZSBhJ1xuICAgIHZhciAkaXRlbXMgPSAkcGFyZW50LmZpbmQoJ1tyb2xlPW1lbnVdJyArIGRlc2MgKyAnLCBbcm9sZT1saXN0Ym94XScgKyBkZXNjKVxuXG4gICAgaWYgKCEkaXRlbXMubGVuZ3RoKSByZXR1cm5cblxuICAgIHZhciBpbmRleCA9ICRpdGVtcy5pbmRleCgkaXRlbXMuZmlsdGVyKCc6Zm9jdXMnKSlcblxuICAgIGlmIChlLmtleUNvZGUgPT0gMzggJiYgaW5kZXggPiAwKSAgICAgICAgICAgICAgICAgaW5kZXgtLSAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwXG4gICAgaWYgKGUua2V5Q29kZSA9PSA0MCAmJiBpbmRleCA8ICRpdGVtcy5sZW5ndGggLSAxKSBpbmRleCsrICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG93blxuICAgIGlmICghfmluZGV4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwXG5cbiAgICAkaXRlbXMuZXEoaW5kZXgpLmZvY3VzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyTWVudXMoZSkge1xuICAgICQoYmFja2Ryb3ApLnJlbW92ZSgpXG4gICAgJCh0b2dnbGUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwYXJlbnQgPSBnZXRQYXJlbnQoJCh0aGlzKSlcbiAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiB0aGlzIH1cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcygnb3BlbicpKSByZXR1cm5cbiAgICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnaGlkZS5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnb3BlbicpLnRyaWdnZXIoJ2hpZGRlbi5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhcmVudCgkdGhpcykge1xuICAgIHZhciBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIC8jW0EtWmEtel0vLnRlc3Qoc2VsZWN0b3IpICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvL3N0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICB2YXIgJHBhcmVudCA9IHNlbGVjdG9yICYmICQoc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50Lmxlbmd0aCA/ICRwYXJlbnQgOiAkdGhpcy5wYXJlbnQoKVxuICB9XG5cblxuICAvLyBEUk9QRE9XTiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmRyb3Bkb3duXG5cbiAgJC5mbi5kcm9wZG93biA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLmRyb3Bkb3duJylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5kcm9wZG93bicsIChkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0uY2FsbCgkdGhpcylcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG5cblxuICAvLyBEUk9QRE9XTiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uZHJvcGRvd24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmRyb3Bkb3duID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQVBQTFkgVE8gU1RBTkRBUkQgRFJPUERPV04gRUxFTUVOVFNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCBjbGVhck1lbnVzKVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCAnLmRyb3Bkb3duIGZvcm0nLCBmdW5jdGlvbiAoZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpIH0pXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIHRvZ2dsZSwgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSlcbiAgICAub24oJ2tleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGknLCB0b2dnbGUgKyAnLCBbcm9sZT1tZW51XSwgW3JvbGU9bGlzdGJveF0nLCBEcm9wZG93bi5wcm90b3R5cGUua2V5ZG93bilcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogbW9kYWwuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNtb2RhbHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBNT0RBTCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgTW9kYWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgID0gb3B0aW9uc1xuICAgIHRoaXMuJGVsZW1lbnQgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGJhY2tkcm9wID1cbiAgICB0aGlzLmlzU2hvd24gICA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3RlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgIC5sb2FkKHRoaXMub3B0aW9ucy5yZW1vdGUsICQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignbG9hZGVkLmJzLm1vZGFsJylcbiAgICAgICAgfSwgdGhpcykpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwuREVGQVVMVFMgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2hvdzogdHJ1ZVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzWyF0aGlzLmlzU2hvd24gPyAnc2hvdycgOiAnaGlkZSddKF9yZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgZSAgICA9ICQuRXZlbnQoJ3Nob3cuYnMubW9kYWwnLCB7IHJlbGF0ZWRUYXJnZXQ6IF9yZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmICh0aGlzLmlzU2hvd24gfHwgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLmVzY2FwZSgpXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJywgJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsICQucHJveHkodGhpcy5oaWRlLCB0aGlzKSlcblxuICAgIHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGF0LiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJylcblxuICAgICAgaWYgKCF0aGF0LiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgfVxuXG4gICAgICB0aGF0LiRlbGVtZW50XG4gICAgICAgIC5zaG93KClcbiAgICAgICAgLnNjcm9sbFRvcCgwKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGF0LiRlbGVtZW50WzBdLm9mZnNldFdpZHRoIC8vIGZvcmNlIHJlZmxvd1xuICAgICAgfVxuXG4gICAgICB0aGF0LiRlbGVtZW50XG4gICAgICAgIC5hZGRDbGFzcygnaW4nKVxuICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSlcblxuICAgICAgdGhhdC5lbmZvcmNlRm9jdXMoKVxuXG4gICAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3duLmJzLm1vZGFsJywgeyByZWxhdGVkVGFyZ2V0OiBfcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgICB0cmFuc2l0aW9uID9cbiAgICAgICAgdGhhdC4kZWxlbWVudC5maW5kKCcubW9kYWwtZGlhbG9nJykgLy8gd2FpdCBmb3IgbW9kYWwgdG8gc2xpZGUgaW5cbiAgICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC4kZWxlbWVudC5mb2N1cygpLnRyaWdnZXIoZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzMDApIDpcbiAgICAgICAgdGhhdC4kZWxlbWVudC5mb2N1cygpLnRyaWdnZXIoZSlcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGUgPSAkLkV2ZW50KCdoaWRlLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKCF0aGlzLmlzU2hvd24gfHwgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZVxuXG4gICAgdGhpcy5lc2NhcGUoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKCdmb2N1c2luLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIC5vZmYoJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnKVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsICQucHJveHkodGhpcy5oaWRlTW9kYWwsIHRoaXMpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzAwKSA6XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuZW5mb3JjZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKCdmb2N1c2luLmJzLm1vZGFsJykgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oJ2ZvY3VzaW4uYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50WzBdICE9PSBlLnRhcmdldCAmJiAhdGhpcy4kZWxlbWVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzKSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5lc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNTaG93biAmJiB0aGlzLm9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2tleXVwLmRpc21pc3MuYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUud2hpY2ggPT0gMjcgJiYgdGhpcy5oaWRlKClcbiAgICAgIH0sIHRoaXMpKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2tleXVwLmRpc21pc3MuYnMubW9kYWwnKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhpcy4kZWxlbWVudC5oaWRlKClcbiAgICB0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdoaWRkZW4uYnMubW9kYWwnKVxuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYmFja2Ryb3AgJiYgdGhpcy4kYmFja2Ryb3AucmVtb3ZlKClcbiAgICB0aGlzLiRiYWNrZHJvcCA9IG51bGxcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5iYWNrZHJvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciBhbmltYXRlID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID8gJ2ZhZGUnIDogJydcblxuICAgIGlmICh0aGlzLmlzU2hvd24gJiYgdGhpcy5vcHRpb25zLmJhY2tkcm9wKSB7XG4gICAgICB2YXIgZG9BbmltYXRlID0gJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgYW5pbWF0ZVxuXG4gICAgICB0aGlzLiRiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCAnICsgYW5pbWF0ZSArICdcIiAvPicpXG4gICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gICAgICAgIHRoaXMub3B0aW9ucy5iYWNrZHJvcCA9PSAnc3RhdGljJ1xuICAgICAgICAgID8gdGhpcy4kZWxlbWVudFswXS5mb2N1cy5jYWxsKHRoaXMuJGVsZW1lbnRbMF0pXG4gICAgICAgICAgOiB0aGlzLmhpZGUuY2FsbCh0aGlzKVxuICAgICAgfSwgdGhpcykpXG5cbiAgICAgIGlmIChkb0FuaW1hdGUpIHRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoIC8vIGZvcmNlIHJlZmxvd1xuXG4gICAgICB0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcygnaW4nKVxuXG4gICAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm5cblxuICAgICAgZG9BbmltYXRlID9cbiAgICAgICAgdGhpcy4kYmFja2Ryb3BcbiAgICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgICBjYWxsYmFjaygpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2hvd24gJiYgdGhpcy4kYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAgIHRoaXMuJGJhY2tkcm9wXG4gICAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGNhbGxiYWNrKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgICAgY2FsbGJhY2soKVxuXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gTU9EQUwgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5tb2RhbFxuXG4gICQuZm4ubW9kYWwgPSBmdW5jdGlvbiAob3B0aW9uLCBfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLm1vZGFsJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIE1vZGFsLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLm1vZGFsJywgKGRhdGEgPSBuZXcgTW9kYWwodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXShfcmVsYXRlZFRhcmdldClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuc2hvdykgZGF0YS5zaG93KF9yZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cblxuICAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yID0gTW9kYWxcblxuXG4gIC8vIE1PREFMIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5tb2RhbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4ubW9kYWwgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBNT0RBTCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5tb2RhbC5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgdmFyIGhyZWYgICAgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICB2YXIgJHRhcmdldCA9ICQoJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSB8fCAoaHJlZiAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSkpIC8vc3RyaXAgZm9yIGllN1xuICAgIHZhciBvcHRpb24gID0gJHRhcmdldC5kYXRhKCdicy5tb2RhbCcpID8gJ3RvZ2dsZScgOiAkLmV4dGVuZCh7IHJlbW90ZTogIS8jLy50ZXN0KGhyZWYpICYmIGhyZWYgfSwgJHRhcmdldC5kYXRhKCksICR0aGlzLmRhdGEoKSlcblxuICAgIGlmICgkdGhpcy5pcygnYScpKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICR0YXJnZXRcbiAgICAgIC5tb2RhbChvcHRpb24sIHRoaXMpXG4gICAgICAub25lKCdoaWRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdGhpcy5pcygnOnZpc2libGUnKSAmJiAkdGhpcy5mb2N1cygpXG4gICAgICB9KVxuICB9KVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdzaG93LmJzLm1vZGFsJywgJy5tb2RhbCcsIGZ1bmN0aW9uICgpIHsgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnbW9kYWwtb3BlbicpIH0pXG4gICAgLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAnLm1vZGFsJywgZnVuY3Rpb24gKCkgeyAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJykgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdG9vbHRpcC5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Rvb2x0aXBcbiAqIEluc3BpcmVkIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBUT09MVElQIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlICAgICAgID1cbiAgICB0aGlzLm9wdGlvbnMgICAgPVxuICAgIHRoaXMuZW5hYmxlZCAgICA9XG4gICAgdGhpcy50aW1lb3V0ICAgID1cbiAgICB0aGlzLmhvdmVyU3RhdGUgPVxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgndG9vbHRpcCcsIGVsZW1lbnQsIG9wdGlvbnMpXG4gIH1cblxuICBUb29sdGlwLkRFRkFVTFRTID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgY29udGFpbmVyOiBmYWxzZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0eXBlLCBlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbmFibGVkICA9IHRydWVcbiAgICB0aGlzLnR5cGUgICAgID0gdHlwZVxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICA9IHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuXG4gICAgdmFyIHRyaWdnZXJzID0gdGhpcy5vcHRpb25zLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgZm9yICh2YXIgaSA9IHRyaWdnZXJzLmxlbmd0aDsgaS0tOykge1xuICAgICAgdmFyIHRyaWdnZXIgPSB0cmlnZ2Vyc1tpXVxuXG4gICAgICBpZiAodHJpZ2dlciA9PSAnY2xpY2snKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLnRvZ2dsZSwgdGhpcykpXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT0gJ21hbnVhbCcpIHtcbiAgICAgICAgdmFyIGV2ZW50SW4gID0gdHJpZ2dlciA9PSAnaG92ZXInID8gJ21vdXNlZW50ZXInIDogJ2ZvY3VzaW4nXG4gICAgICAgIHZhciBldmVudE91dCA9IHRyaWdnZXIgPT0gJ2hvdmVyJyA/ICdtb3VzZWxlYXZlJyA6ICdmb2N1c291dCdcblxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50SW4gICsgJy4nICsgdGhpcy50eXBlLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsICQucHJveHkodGhpcy5lbnRlciwgdGhpcykpXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRPdXQgKyAnLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLmxlYXZlLCB0aGlzKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgP1xuICAgICAgKHRoaXMuX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB7IHRyaWdnZXI6ICdtYW51YWwnLCBzZWxlY3RvcjogJycgfSkpIDpcbiAgICAgIHRoaXMuZml4VGl0bGUoKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvb2x0aXAuREVGQVVMVFNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5nZXREZWZhdWx0cygpLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucylcblxuICAgIGlmIChvcHRpb25zLmRlbGF5ICYmIHR5cGVvZiBvcHRpb25zLmRlbGF5ID09ICdudW1iZXInKSB7XG4gICAgICBvcHRpb25zLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBvcHRpb25zLmRlbGF5LFxuICAgICAgICBoaWRlOiBvcHRpb25zLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyAgPSB7fVxuICAgIHZhciBkZWZhdWx0cyA9IHRoaXMuZ2V0RGVmYXVsdHMoKVxuXG4gICAgdGhpcy5fb3B0aW9ucyAmJiAkLmVhY2godGhpcy5fb3B0aW9ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmIChkZWZhdWx0c1trZXldICE9IHZhbHVlKSBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZW50ZXIgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID9cbiAgICAgIG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGNsZWFyVGltZW91dChzZWxmLnRpbWVvdXQpXG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nXG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy5kZWxheSB8fCAhc2VsZi5vcHRpb25zLmRlbGF5LnNob3cpIHJldHVybiBzZWxmLnNob3coKVxuXG4gICAgc2VsZi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5ob3ZlclN0YXRlID09ICdpbicpIHNlbGYuc2hvdygpXG4gICAgfSwgc2VsZi5vcHRpb25zLmRlbGF5LnNob3cpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgP1xuICAgICAgb2JqIDogJChvYmouY3VycmVudFRhcmdldClbdGhpcy50eXBlXSh0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKS5kYXRhKCdicy4nICsgdGhpcy50eXBlKVxuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZW91dClcblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdvdXQnXG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy5kZWxheSB8fCAhc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpIHJldHVybiBzZWxmLmhpZGUoKVxuXG4gICAgc2VsZi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5ob3ZlclN0YXRlID09ICdvdXQnKSBzZWxmLmhpZGUoKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5oaWRlKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3cuYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHZhciAkdGlwID0gdGhpcy50aXAoKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikgJHRpcC5hZGRDbGFzcygnZmFkZScpXG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnBsYWNlbWVudCA9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsICR0aXBbMF0sIHRoaXMuJGVsZW1lbnRbMF0pIDpcbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudFxuXG4gICAgICB2YXIgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaVxuICAgICAgdmFyIGF1dG9QbGFjZSA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudClcbiAgICAgIGlmIChhdXRvUGxhY2UpIHBsYWNlbWVudCA9IHBsYWNlbWVudC5yZXBsYWNlKGF1dG9Ub2tlbiwgJycpIHx8ICd0b3AnXG5cbiAgICAgICR0aXBcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcblxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciA/ICR0aXAuYXBwZW5kVG8odGhpcy5vcHRpb25zLmNvbnRhaW5lcikgOiAkdGlwLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpXG5cbiAgICAgIHZhciBwb3MgICAgICAgICAgPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICAgIHZhciBhY3R1YWxXaWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgICB2YXIgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICB2YXIgJHBhcmVudCA9IHRoaXMuJGVsZW1lbnQucGFyZW50KClcblxuICAgICAgICB2YXIgb3JnUGxhY2VtZW50ID0gcGxhY2VtZW50XG4gICAgICAgIHZhciBkb2NTY3JvbGwgICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgIHZhciBwYXJlbnRXaWR0aCAgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyID09ICdib2R5JyA/IHdpbmRvdy5pbm5lcldpZHRoICA6ICRwYXJlbnQub3V0ZXJXaWR0aCgpXG4gICAgICAgIHZhciBwYXJlbnRIZWlnaHQgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyID09ICdib2R5JyA/IHdpbmRvdy5pbm5lckhlaWdodCA6ICRwYXJlbnQub3V0ZXJIZWlnaHQoKVxuICAgICAgICB2YXIgcGFyZW50TGVmdCAgID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9PSAnYm9keScgPyAwIDogJHBhcmVudC5vZmZzZXQoKS5sZWZ0XG5cbiAgICAgICAgcGxhY2VtZW50ID0gcGxhY2VtZW50ID09ICdib3R0b20nICYmIHBvcy50b3AgICArIHBvcy5oZWlnaHQgICsgYWN0dWFsSGVpZ2h0IC0gZG9jU2Nyb2xsID4gcGFyZW50SGVpZ2h0ICA/ICd0b3AnICAgIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09ICd0b3AnICAgICYmIHBvcy50b3AgICAtIGRvY1Njcm9sbCAgIC0gYWN0dWFsSGVpZ2h0IDwgMCAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3R0b20nIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09ICdyaWdodCcgICYmIHBvcy5yaWdodCArIGFjdHVhbFdpZHRoID4gcGFyZW50V2lkdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdsZWZ0JyAgIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09ICdsZWZ0JyAgICYmIHBvcy5sZWZ0ICAtIGFjdHVhbFdpZHRoIDwgcGFyZW50TGVmdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdyaWdodCcgIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50XG5cbiAgICAgICAgJHRpcFxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhvcmdQbGFjZW1lbnQpXG4gICAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpXG5cbiAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQoY2FsY3VsYXRlZE9mZnNldCwgcGxhY2VtZW50KVxuICAgICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbFxuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzaG93bi5icy4nICsgdGhhdC50eXBlKVxuICAgICAgfVxuXG4gICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiR0aXAuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAgICR0aXBcbiAgICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQgPSBmdW5jdGlvbiAob2Zmc2V0LCBwbGFjZW1lbnQpIHtcbiAgICB2YXIgcmVwbGFjZVxuICAgIHZhciAkdGlwICAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgIC8vIG1hbnVhbGx5IHJlYWQgbWFyZ2lucyBiZWNhdXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpbmNsdWRlcyBkaWZmZXJlbmNlXG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tdG9wJyksIDEwKVxuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKVxuXG4gICAgLy8gd2UgbXVzdCBjaGVjayBmb3IgTmFOIGZvciBpZSA4LzlcbiAgICBpZiAoaXNOYU4obWFyZ2luVG9wKSkgIG1hcmdpblRvcCAgPSAwXG4gICAgaWYgKGlzTmFOKG1hcmdpbkxlZnQpKSBtYXJnaW5MZWZ0ID0gMFxuXG4gICAgb2Zmc2V0LnRvcCAgPSBvZmZzZXQudG9wICArIG1hcmdpblRvcFxuICAgIG9mZnNldC5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyBtYXJnaW5MZWZ0XG5cbiAgICAvLyAkLmZuLm9mZnNldCBkb2Vzbid0IHJvdW5kIHBpeGVsIHZhbHVlc1xuICAgIC8vIHNvIHdlIHVzZSBzZXRPZmZzZXQgZGlyZWN0bHkgd2l0aCBvdXIgb3duIGZ1bmN0aW9uIEItMFxuICAgICQub2Zmc2V0LnNldE9mZnNldCgkdGlwWzBdLCAkLmV4dGVuZCh7XG4gICAgICB1c2luZzogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICR0aXAuY3NzKHtcbiAgICAgICAgICB0b3A6IE1hdGgucm91bmQocHJvcHMudG9wKSxcbiAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHByb3BzLmxlZnQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgb2Zmc2V0KSwgMClcblxuICAgICR0aXAuYWRkQ2xhc3MoJ2luJylcblxuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBwbGFjaW5nIHRpcCBpbiBuZXcgb2Zmc2V0IGNhdXNlZCB0aGUgdGlwIHRvIHJlc2l6ZSBpdHNlbGZcbiAgICB2YXIgYWN0dWFsV2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgIHZhciBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodFxuXG4gICAgaWYgKHBsYWNlbWVudCA9PSAndG9wJyAmJiBhY3R1YWxIZWlnaHQgIT0gaGVpZ2h0KSB7XG4gICAgICByZXBsYWNlID0gdHJ1ZVxuICAgICAgb2Zmc2V0LnRvcCA9IG9mZnNldC50b3AgKyBoZWlnaHQgLSBhY3R1YWxIZWlnaHRcbiAgICB9XG5cbiAgICBpZiAoL2JvdHRvbXx0b3AvLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdmFyIGRlbHRhID0gMFxuXG4gICAgICBpZiAob2Zmc2V0LmxlZnQgPCAwKSB7XG4gICAgICAgIGRlbHRhICAgICAgID0gb2Zmc2V0LmxlZnQgKiAtMlxuICAgICAgICBvZmZzZXQubGVmdCA9IDBcblxuICAgICAgICAkdGlwLm9mZnNldChvZmZzZXQpXG5cbiAgICAgICAgYWN0dWFsV2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgICAgICBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodFxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlcGxhY2VBcnJvdyhkZWx0YSAtIHdpZHRoICsgYWN0dWFsV2lkdGgsIGFjdHVhbFdpZHRoLCAnbGVmdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVwbGFjZUFycm93KGFjdHVhbEhlaWdodCAtIGhlaWdodCwgYWN0dWFsSGVpZ2h0LCAndG9wJylcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZSkgJHRpcC5vZmZzZXQob2Zmc2V0KVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUucmVwbGFjZUFycm93ID0gZnVuY3Rpb24gKGRlbHRhLCBkaW1lbnNpb24sIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5hcnJvdygpLmNzcyhwb3NpdGlvbiwgZGVsdGEgPyAoNTAgKiAoMSAtIGRlbHRhIC8gZGltZW5zaW9uKSArICclJykgOiAnJylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aXAgID0gdGhpcy50aXAoKVxuICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKVxuXG4gICAgJHRpcC5maW5kKCcudG9vbHRpcC1pbm5lcicpW3RoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXSh0aXRsZSlcbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodCcpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciAkdGlwID0gdGhpcy50aXAoKVxuICAgIHZhciBlICAgID0gJC5FdmVudCgnaGlkZS5icy4nICsgdGhpcy50eXBlKVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpZiAodGhhdC5ob3ZlclN0YXRlICE9ICdpbicpICR0aXAuZGV0YWNoKClcbiAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignaGlkZGVuLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiR0aXAuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAkdGlwXG4gICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgY29tcGxldGUoKVxuXG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmZpeFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICBpZiAoJGUuYXR0cigndGl0bGUnKSB8fCB0eXBlb2YoJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpKSAhPSAnc3RyaW5nJykge1xuICAgICAgJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScsICRlLmF0dHIoJ3RpdGxlJykgfHwgJycpLmF0dHIoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLiRlbGVtZW50WzBdXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAodHlwZW9mIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PSAnZnVuY3Rpb24nKSA/IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge1xuICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHRcbiAgICB9LCB0aGlzLiRlbGVtZW50Lm9mZnNldCgpKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldCA9IGZ1bmN0aW9uIChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQgPT0gJ2JvdHRvbScgPyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQsICAgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyICB9IDpcbiAgICAgICAgICAgcGxhY2VtZW50ID09ICd0b3AnICAgID8geyB0b3A6IHBvcy50b3AgLSBhY3R1YWxIZWlnaHQsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMiAgfSA6XG4gICAgICAgICAgIHBsYWNlbWVudCA9PSAnbGVmdCcgICA/IHsgdG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLCBsZWZ0OiBwb3MubGVmdCAtIGFjdHVhbFdpZHRoIH0gOlxuICAgICAgICAvKiBwbGFjZW1lbnQgPT0gJ3JpZ2h0JyAqLyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQgLyAyIC0gYWN0dWFsSGVpZ2h0IC8gMiwgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGVcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIG8gID0gdGhpcy5vcHRpb25zXG5cbiAgICB0aXRsZSA9ICRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgfHwgKHR5cGVvZiBvLnRpdGxlID09ICdmdW5jdGlvbicgPyBvLnRpdGxlLmNhbGwoJGVbMF0pIDogIG8udGl0bGUpXG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kdGlwID0gdGhpcy4kdGlwIHx8ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuYXJyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcudG9vbHRpcC1hcnJvdycpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuJGVsZW1lbnRbMF0ucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsXG4gICAgICB0aGlzLm9wdGlvbnMgID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGVFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWRcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgPSBlID8gJChlLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSkgOiB0aGlzXG4gICAgc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSA/IHNlbGYubGVhdmUoc2VsZikgOiBzZWxmLmVudGVyKHNlbGYpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy5oaWRlKCkuJGVsZW1lbnQub2ZmKCcuJyArIHRoaXMudHlwZSkucmVtb3ZlRGF0YSgnYnMuJyArIHRoaXMudHlwZSlcbiAgfVxuXG5cbiAgLy8gVE9PTFRJUCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4udG9vbHRpcFxuXG4gICQuZm4udG9vbHRpcCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy50b29sdGlwJylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy50b29sdGlwJywgKGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuXG5cbiAgLy8gVE9PTFRJUCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi50b29sdGlwLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi50b29sdGlwID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBwb3BvdmVyLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jcG9wb3ZlcnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBQT1BPVkVSIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgUG9wb3ZlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCdwb3BvdmVyJywgZWxlbWVudCwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICghJC5mbi50b29sdGlwKSB0aHJvdyBuZXcgRXJyb3IoJ1BvcG92ZXIgcmVxdWlyZXMgdG9vbHRpcC5qcycpXG5cbiAgUG9wb3Zlci5ERUZBVUxUUyA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMsIHtcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjwvZGl2PjwvZGl2PidcbiAgfSlcblxuXG4gIC8vIE5PVEU6IFBPUE9WRVIgRVhURU5EUyB0b29sdGlwLmpzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUgPSAkLmV4dGVuZCh7fSwgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblxuICBQb3BvdmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBvcG92ZXJcblxuICBQb3BvdmVyLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUG9wb3Zlci5ERUZBVUxUU1xuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRpcCAgICA9IHRoaXMudGlwKClcbiAgICB2YXIgdGl0bGUgICA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KClcblxuICAgICR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKVt0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10odGl0bGUpXG4gICAgJHRpcC5maW5kKCcucG9wb3Zlci1jb250ZW50JylbIC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICAgIHRoaXMub3B0aW9ucy5odG1sID8gKHR5cGVvZiBjb250ZW50ID09ICdzdHJpbmcnID8gJ2h0bWwnIDogJ2FwcGVuZCcpIDogJ3RleHQnXG4gICAgXShjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSB0b3AgYm90dG9tIGxlZnQgcmlnaHQgaW4nKVxuXG4gICAgLy8gSUU4IGRvZXNuJ3QgYWNjZXB0IGhpZGluZyB2aWEgdGhlIGA6ZW1wdHlgIHBzZXVkbyBzZWxlY3Rvciwgd2UgaGF2ZSB0byBkb1xuICAgIC8vIHRoaXMgbWFudWFsbHkgYnkgY2hlY2tpbmcgdGhlIGNvbnRlbnRzLlxuICAgIGlmICghJHRpcC5maW5kKCcucG9wb3Zlci10aXRsZScpLmh0bWwoKSkgJHRpcC5maW5kKCcucG9wb3Zlci10aXRsZScpLmhpZGUoKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuZ2V0Q29udGVudCgpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5nZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICB2YXIgbyAgPSB0aGlzLm9wdGlvbnNcblxuICAgIHJldHVybiAkZS5hdHRyKCdkYXRhLWNvbnRlbnQnKVxuICAgICAgfHwgKHR5cGVvZiBvLmNvbnRlbnQgPT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBvLmNvbnRlbnQuY2FsbCgkZVswXSkgOlxuICAgICAgICAgICAgby5jb250ZW50KVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuYXJyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcuYXJyb3cnKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUudGlwID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kdGlwKSB0aGlzLiR0aXAgPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSlcbiAgICByZXR1cm4gdGhpcy4kdGlwXG4gIH1cblxuXG4gIC8vIFBPUE9WRVIgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLnBvcG92ZXJcblxuICAkLmZuLnBvcG92ZXIgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMucG9wb3ZlcicpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMucG9wb3ZlcicsIChkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4ucG9wb3Zlci5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcblxuXG4gIC8vIFBPUE9WRVIgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4ucG9wb3Zlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4ucG9wb3ZlciA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogc2Nyb2xsc3B5LmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jc2Nyb2xsc3B5XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gU0NST0xMU1BZIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBTY3JvbGxTcHkoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBocmVmXG4gICAgdmFyIHByb2Nlc3MgID0gJC5wcm94eSh0aGlzLnByb2Nlc3MsIHRoaXMpXG5cbiAgICB0aGlzLiRlbGVtZW50ICAgICAgID0gJChlbGVtZW50KS5pcygnYm9keScpID8gJCh3aW5kb3cpIDogJChlbGVtZW50KVxuICAgIHRoaXMuJGJvZHkgICAgICAgICAgPSAkKCdib2R5JylcbiAgICB0aGlzLiRzY3JvbGxFbGVtZW50ID0gdGhpcy4kZWxlbWVudC5vbignc2Nyb2xsLmJzLnNjcm9sbC1zcHkuZGF0YS1hcGknLCBwcm9jZXNzKVxuICAgIHRoaXMub3B0aW9ucyAgICAgICAgPSAkLmV4dGVuZCh7fSwgU2Nyb2xsU3B5LkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuc2VsZWN0b3IgICAgICAgPSAodGhpcy5vcHRpb25zLnRhcmdldFxuICAgICAgfHwgKChocmVmID0gJChlbGVtZW50KS5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpKSAvL3N0cmlwIGZvciBpZTdcbiAgICAgIHx8ICcnKSArICcgLm5hdiBsaSA+IGEnXG4gICAgdGhpcy5vZmZzZXRzICAgICAgICA9ICQoW10pXG4gICAgdGhpcy50YXJnZXRzICAgICAgICA9ICQoW10pXG4gICAgdGhpcy5hY3RpdmVUYXJnZXQgICA9IG51bGxcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5wcm9jZXNzKClcbiAgfVxuXG4gIFNjcm9sbFNweS5ERUZBVUxUUyA9IHtcbiAgICBvZmZzZXQ6IDEwXG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9mZnNldE1ldGhvZCA9IHRoaXMuJGVsZW1lbnRbMF0gPT0gd2luZG93ID8gJ29mZnNldCcgOiAncG9zaXRpb24nXG5cbiAgICB0aGlzLm9mZnNldHMgPSAkKFtdKVxuICAgIHRoaXMudGFyZ2V0cyA9ICQoW10pXG5cbiAgICB2YXIgc2VsZiAgICAgPSB0aGlzXG4gICAgdmFyICR0YXJnZXRzID0gdGhpcy4kYm9keVxuICAgICAgLmZpbmQodGhpcy5zZWxlY3RvcilcbiAgICAgIC5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsICAgPSAkKHRoaXMpXG4gICAgICAgIHZhciBocmVmICA9ICRlbC5kYXRhKCd0YXJnZXQnKSB8fCAkZWwuYXR0cignaHJlZicpXG4gICAgICAgIHZhciAkaHJlZiA9IC9eIy4vLnRlc3QoaHJlZikgJiYgJChocmVmKVxuXG4gICAgICAgIHJldHVybiAoJGhyZWZcbiAgICAgICAgICAmJiAkaHJlZi5sZW5ndGhcbiAgICAgICAgICAmJiAkaHJlZi5pcygnOnZpc2libGUnKVxuICAgICAgICAgICYmIFtbICRocmVmW29mZnNldE1ldGhvZF0oKS50b3AgKyAoISQuaXNXaW5kb3coc2VsZi4kc2Nyb2xsRWxlbWVudC5nZXQoMCkpICYmIHNlbGYuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkpLCBocmVmIF1dKSB8fCBudWxsXG4gICAgICB9KVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGFbMF0gLSBiWzBdIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYub2Zmc2V0cy5wdXNoKHRoaXNbMF0pXG4gICAgICAgIHNlbGYudGFyZ2V0cy5wdXNoKHRoaXNbMV0pXG4gICAgICB9KVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGxUb3AgICAgPSB0aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodCB8fCB0aGlzLiRib2R5WzBdLnNjcm9sbEhlaWdodFxuICAgIHZhciBtYXhTY3JvbGwgICAgPSBzY3JvbGxIZWlnaHQgLSB0aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpXG4gICAgdmFyIG9mZnNldHMgICAgICA9IHRoaXMub2Zmc2V0c1xuICAgIHZhciB0YXJnZXRzICAgICAgPSB0aGlzLnRhcmdldHNcbiAgICB2YXIgYWN0aXZlVGFyZ2V0ID0gdGhpcy5hY3RpdmVUYXJnZXRcbiAgICB2YXIgaVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIHJldHVybiBhY3RpdmVUYXJnZXQgIT0gKGkgPSB0YXJnZXRzLmxhc3QoKVswXSkgJiYgdGhpcy5hY3RpdmF0ZShpKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDw9IG9mZnNldHNbMF0pIHtcbiAgICAgIHJldHVybiBhY3RpdmVUYXJnZXQgIT0gKGkgPSB0YXJnZXRzWzBdKSAmJiB0aGlzLmFjdGl2YXRlKGkpXG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGFjdGl2ZVRhcmdldCAhPSB0YXJnZXRzW2ldXG4gICAgICAgICYmIHNjcm9sbFRvcCA+PSBvZmZzZXRzW2ldXG4gICAgICAgICYmICghb2Zmc2V0c1tpICsgMV0gfHwgc2Nyb2xsVG9wIDw9IG9mZnNldHNbaSArIDFdKVxuICAgICAgICAmJiB0aGlzLmFjdGl2YXRlKCB0YXJnZXRzW2ldIClcbiAgICB9XG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRoaXMuYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAkKHRoaXMuc2VsZWN0b3IpXG4gICAgICAucGFyZW50c1VudGlsKHRoaXMub3B0aW9ucy50YXJnZXQsICcuYWN0aXZlJylcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgIHZhciBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgK1xuICAgICAgICAnW2RhdGEtdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIl0sJyArXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgKyAnW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXSdcblxuICAgIHZhciBhY3RpdmUgPSAkKHNlbGVjdG9yKVxuICAgICAgLnBhcmVudHMoJ2xpJylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcblxuICAgIGlmIChhY3RpdmUucGFyZW50KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCkge1xuICAgICAgYWN0aXZlID0gYWN0aXZlXG4gICAgICAgIC5jbG9zZXN0KCdsaS5kcm9wZG93bicpXG4gICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBhY3RpdmUudHJpZ2dlcignYWN0aXZhdGUuYnMuc2Nyb2xsc3B5JylcbiAgfVxuXG5cbiAgLy8gU0NST0xMU1BZIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLnNjcm9sbHNweVxuXG4gICQuZm4uc2Nyb2xsc3B5ID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnNjcm9sbHNweScpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuc2Nyb2xsc3B5JywgKGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuXG5cbiAgLy8gU0NST0xMU1BZIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5zY3JvbGxzcHkgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBTQ1JPTExTUFkgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzcHkgPSAkKHRoaXMpXG4gICAgICAkc3B5LnNjcm9sbHNweSgkc3B5LmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0YWIuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyN0YWJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVEFCIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVGFiID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gIH1cblxuICBUYWIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aGlzICAgID0gdGhpcy5lbGVtZW50XG4gICAgdmFyICR1bCAgICAgID0gJHRoaXMuY2xvc2VzdCgndWw6bm90KC5kcm9wZG93bi1tZW51KScpXG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuZGF0YSgndGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvL3N0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICBpZiAoJHRoaXMucGFyZW50KCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkgcmV0dXJuXG5cbiAgICB2YXIgcHJldmlvdXMgPSAkdWwuZmluZCgnLmFjdGl2ZTpsYXN0IGEnKVswXVxuICAgIHZhciBlICAgICAgICA9ICQuRXZlbnQoJ3Nob3cuYnMudGFiJywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgJHRoaXMudHJpZ2dlcihlKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyICR0YXJnZXQgPSAkKHNlbGVjdG9yKVxuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGhpcy5wYXJlbnQoJ2xpJyksICR1bClcbiAgICB0aGlzLmFjdGl2YXRlKCR0YXJnZXQsICR0YXJnZXQucGFyZW50KCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICR0aGlzLnRyaWdnZXIoe1xuICAgICAgICB0eXBlOiAnc2hvd24uYnMudGFiJyxcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIFRhYi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIHZhciAkYWN0aXZlICAgID0gY29udGFpbmVyLmZpbmQoJz4gLmFjdGl2ZScpXG4gICAgdmFyIHRyYW5zaXRpb24gPSBjYWxsYmFja1xuICAgICAgJiYgJC5zdXBwb3J0LnRyYW5zaXRpb25cbiAgICAgICYmICRhY3RpdmUuaGFzQ2xhc3MoJ2ZhZGUnKVxuXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICRhY3RpdmVcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuZmluZCgnPiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUnKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGggLy8gcmVmbG93IGZvciB0cmFuc2l0aW9uXG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2luJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZhZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnQoJy5kcm9wZG93bi1tZW51JykpIHtcbiAgICAgICAgZWxlbWVudC5jbG9zZXN0KCdsaS5kcm9wZG93bicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbiA/XG4gICAgICAkYWN0aXZlXG4gICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBuZXh0KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICBuZXh0KClcblxuICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2luJylcbiAgfVxuXG5cbiAgLy8gVEFCIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLnRhYlxuXG4gICQuZm4udGFiID0gZnVuY3Rpb24gKCBvcHRpb24gKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy50YWInKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRhYicsIChkYXRhID0gbmV3IFRhYih0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi50YWIuQ29uc3RydWN0b3IgPSBUYWJcblxuXG4gIC8vIFRBQiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT1cblxuICAkLmZuLnRhYi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udGFiID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVEFCIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy50YWIuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKHRoaXMpLnRhYignc2hvdycpXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFmZml4LmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWZmaXhcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBBRkZJWCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQWZmaXggPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBZmZpeC5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLiR3aW5kb3cgPSAkKHdpbmRvdylcbiAgICAgIC5vbignc2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpJywgJC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sIHRoaXMpKVxuICAgICAgLm9uKCdjbGljay5icy5hZmZpeC5kYXRhLWFwaScsICAkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudCAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5hZmZpeGVkICAgICAgPVxuICAgIHRoaXMudW5waW4gICAgICAgID1cbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IG51bGxcblxuICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpXG4gIH1cblxuICBBZmZpeC5SRVNFVCA9ICdhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tJ1xuXG4gIEFmZml4LkRFRkFVTFRTID0ge1xuICAgIG9mZnNldDogMFxuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5waW5uZWRPZmZzZXQpIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldFxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoQWZmaXguUkVTRVQpLmFkZENsYXNzKCdhZmZpeCcpXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AoKVxuICAgIHZhciBwb3NpdGlvbiAgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpXG4gICAgcmV0dXJuICh0aGlzLnBpbm5lZE9mZnNldCA9IHBvc2l0aW9uLnRvcCAtIHNjcm9sbFRvcClcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLCB0aGlzKSwgMSlcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkgcmV0dXJuXG5cbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICB2YXIgc2Nyb2xsVG9wICAgID0gdGhpcy4kd2luZG93LnNjcm9sbFRvcCgpXG4gICAgdmFyIHBvc2l0aW9uICAgICA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KClcbiAgICB2YXIgb2Zmc2V0ICAgICAgID0gdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBvZmZzZXRUb3AgICAgPSBvZmZzZXQudG9wXG4gICAgdmFyIG9mZnNldEJvdHRvbSA9IG9mZnNldC5ib3R0b21cblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT0gJ3RvcCcpIHBvc2l0aW9uLnRvcCArPSBzY3JvbGxUb3BcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9ICdvYmplY3QnKSAgICAgICAgIG9mZnNldEJvdHRvbSA9IG9mZnNldFRvcCA9IG9mZnNldFxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wID09ICdmdW5jdGlvbicpICAgIG9mZnNldFRvcCAgICA9IG9mZnNldC50b3AodGhpcy4kZWxlbWVudClcbiAgICBpZiAodHlwZW9mIG9mZnNldEJvdHRvbSA9PSAnZnVuY3Rpb24nKSBvZmZzZXRCb3R0b20gPSBvZmZzZXQuYm90dG9tKHRoaXMuJGVsZW1lbnQpXG5cbiAgICB2YXIgYWZmaXggPSB0aGlzLnVucGluICAgIT0gbnVsbCAmJiAoc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApID8gZmFsc2UgOlxuICAgICAgICAgICAgICAgIG9mZnNldEJvdHRvbSAhPSBudWxsICYmIChwb3NpdGlvbi50b3AgKyB0aGlzLiRlbGVtZW50LmhlaWdodCgpID49IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSkgPyAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wICAgICE9IG51bGwgJiYgKHNjcm9sbFRvcCA8PSBvZmZzZXRUb3ApID8gJ3RvcCcgOiBmYWxzZVxuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PT0gYWZmaXgpIHJldHVyblxuICAgIGlmICh0aGlzLnVucGluKSB0aGlzLiRlbGVtZW50LmNzcygndG9wJywgJycpXG5cbiAgICB2YXIgYWZmaXhUeXBlID0gJ2FmZml4JyArIChhZmZpeCA/ICctJyArIGFmZml4IDogJycpXG4gICAgdmFyIGUgICAgICAgICA9ICQuRXZlbnQoYWZmaXhUeXBlICsgJy5icy5hZmZpeCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuYWZmaXhlZCA9IGFmZml4XG4gICAgdGhpcy51bnBpbiA9IGFmZml4ID09ICdib3R0b20nID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoKSA6IG51bGxcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcyhBZmZpeC5SRVNFVClcbiAgICAgIC5hZGRDbGFzcyhhZmZpeFR5cGUpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KGFmZml4VHlwZS5yZXBsYWNlKCdhZmZpeCcsICdhZmZpeGVkJykpKVxuXG4gICAgaWYgKGFmZml4ID09ICdib3R0b20nKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZnNldCh7IHRvcDogc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tIC0gdGhpcy4kZWxlbWVudC5oZWlnaHQoKSB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gQUZGSVggUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5hZmZpeFxuXG4gICQuZm4uYWZmaXggPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuYWZmaXgnKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmFmZml4JywgKGRhdGEgPSBuZXcgQWZmaXgodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uYWZmaXguQ29uc3RydWN0b3IgPSBBZmZpeFxuXG5cbiAgLy8gQUZGSVggTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmFmZml4Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5hZmZpeCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFGRklYIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHNweSA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhID0gJHNweS5kYXRhKClcblxuICAgICAgZGF0YS5vZmZzZXQgPSBkYXRhLm9mZnNldCB8fCB7fVxuXG4gICAgICBpZiAoZGF0YS5vZmZzZXRCb3R0b20pIGRhdGEub2Zmc2V0LmJvdHRvbSA9IGRhdGEub2Zmc2V0Qm90dG9tXG4gICAgICBpZiAoZGF0YS5vZmZzZXRUb3ApICAgIGRhdGEub2Zmc2V0LnRvcCAgICA9IGRhdGEub2Zmc2V0VG9wXG5cbiAgICAgICRzcHkuYWZmaXgoZGF0YSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG4iLCIvKiFcbiAqIENoYXBsaW4gMS4wLjBcbiAqXG4gKiBDaGFwbGluIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogRm9yIGFsbCBkZXRhaWxzIGFuZCBkb2N1bWVudGF0aW9uOlxuICogaHR0cDovL2NoYXBsaW5qcy5vcmdcbiAqL1xuXG4oZnVuY3Rpb24oKXtcblxudmFyIGxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG1vZHVsZXMgPSB7fTtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgdmFyIGR1bW15ID0gZnVuY3Rpb24oKSB7cmV0dXJuIGZ1bmN0aW9uKCkge307fTtcbiAgdmFyIGluaXRNb2R1bGUgPSBmdW5jdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgdmFyIG1vZHVsZSA9IHtpZDogbmFtZSwgZXhwb3J0czoge319O1xuICAgIGRlZmluaXRpb24obW9kdWxlLmV4cG9ydHMsIGR1bW15KCksIG1vZHVsZSk7XG4gICAgdmFyIGV4cG9ydHMgPSBjYWNoZVtuYW1lXSA9IG1vZHVsZS5leHBvcnRzO1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9O1xuXG4gIHZhciBsb2FkZXIgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KHBhdGgpKSByZXR1cm4gY2FjaGVbcGF0aF07XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkocGF0aCkpIHJldHVybiBpbml0TW9kdWxlKHBhdGgsIG1vZHVsZXNbcGF0aF0pO1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgbW9kdWxlIFwiJyArIHBhdGggKyAnXCInKTtcbiAgfTtcblxuICBsb2FkZXIucmVnaXN0ZXIgPSBmdW5jdGlvbihidW5kbGUsIGZuKSB7XG4gICAgbW9kdWxlc1tidW5kbGVdID0gZm47XG4gIH07XG4gIHJldHVybiBsb2FkZXI7XG59KSgpO1xuXG5sb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vYXBwbGljYXRpb24nLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEFwcGxpY2F0aW9uLCBCYWNrYm9uZSwgQ29tcG9zZXIsIERpc3BhdGNoZXIsIEV2ZW50QnJva2VyLCBMYXlvdXQsIFJvdXRlciwgbWVkaWF0b3IsIF87XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbkRpc3BhdGNoZXIgPSBsb2FkZXIoJ2NoYXBsaW4vZGlzcGF0Y2hlcicpO1xuXG5MYXlvdXQgPSBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvbGF5b3V0Jyk7XG5cbkNvbXBvc2VyID0gbG9hZGVyKCdjaGFwbGluL2NvbXBvc2VyJyk7XG5cblJvdXRlciA9IGxvYWRlcignY2hhcGxpbi9saWIvcm91dGVyJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvbiA9IChmdW5jdGlvbigpIHtcblxuICBBcHBsaWNhdGlvbi5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoQXBwbGljYXRpb24ucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLnRpdGxlID0gJyc7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmRpc3BhdGNoZXIgPSBudWxsO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBudWxsO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5yb3V0ZXIgPSBudWxsO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5jb21wb3NlciA9IG51bGw7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBBcHBsaWNhdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gIH1cblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXBwbGljYXRpb24jaW5pdGlhbGl6ZTogQXBwIHdhcyBhbHJlYWR5IHN0YXJ0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5pbml0Um91dGVyKG9wdGlvbnMucm91dGVzLCBvcHRpb25zKTtcbiAgICB0aGlzLmluaXREaXNwYXRjaGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdExheW91dChvcHRpb25zKTtcbiAgICB0aGlzLmluaXRDb21wb3NlcihvcHRpb25zKTtcbiAgICB0aGlzLmluaXRNZWRpYXRvcigpO1xuICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXREaXNwYXRjaGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcihvcHRpb25zKTtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdExheW91dCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICgoX3JlZiA9IG9wdGlvbnMudGl0bGUpID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KG9wdGlvbnMpO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0Q29tcG9zZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb21wb3NlciA9IG5ldyBDb21wb3NlcihvcHRpb25zKTtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdE1lZGlhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLnNlYWwoKTtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdFJvdXRlciA9IGZ1bmN0aW9uKHJvdXRlcywgb3B0aW9ucykge1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcihvcHRpb25zKTtcbiAgICByZXR1cm4gdHlwZW9mIHJvdXRlcyA9PT0gXCJmdW5jdGlvblwiID8gcm91dGVzKHRoaXMucm91dGVyLm1hdGNoKSA6IHZvaWQgMDtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJvdXRlci5zdGFydEhpc3RvcnkoKTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9wZXJ0aWVzID0gWydkaXNwYXRjaGVyJywgJ2xheW91dCcsICdyb3V0ZXInLCAnY29tcG9zZXInXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgIGlmICh0aGlzW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgdGhpc1twcm9wXS5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gQXBwbGljYXRpb247XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbWVkaWF0b3InLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBoYW5kbGVycywgbWVkaWF0b3IsIHN1cHBvcnQsIHV0aWxzLCBfLFxuICBfX3NsaWNlID0gW10uc2xpY2U7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbnN1cHBvcnQgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3N1cHBvcnQnKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbm1lZGlhdG9yID0ge307XG5cbm1lZGlhdG9yLnN1YnNjcmliZSA9IEJhY2tib25lLkV2ZW50cy5vbjtcblxubWVkaWF0b3IudW5zdWJzY3JpYmUgPSBCYWNrYm9uZS5FdmVudHMub2ZmO1xuXG5tZWRpYXRvci5wdWJsaXNoID0gQmFja2JvbmUuRXZlbnRzLnRyaWdnZXI7XG5cbm1lZGlhdG9yLl9jYWxsYmFja3MgPSBudWxsO1xuXG5oYW5kbGVycyA9IG1lZGlhdG9yLl9oYW5kbGVycyA9IHt9O1xuXG5tZWRpYXRvci5zZXRIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgbWV0aG9kLCBpbnN0YW5jZSkge1xuICByZXR1cm4gaGFuZGxlcnNbbmFtZV0gPSB7XG4gICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgIG1ldGhvZDogbWV0aG9kXG4gIH07XG59O1xuXG5tZWRpYXRvci5leGVjdXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhcmdzLCBoYW5kbGVyLCBuYW1lLCBuYW1lT3JPYmosIHNpbGVudDtcbiAgbmFtZU9yT2JqID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgc2lsZW50ID0gZmFsc2U7XG4gIGlmICh0eXBlb2YgbmFtZU9yT2JqID09PSAnb2JqZWN0Jykge1xuICAgIHNpbGVudCA9IG5hbWVPck9iai5zaWxlbnQ7XG4gICAgbmFtZSA9IG5hbWVPck9iai5uYW1lO1xuICB9IGVsc2Uge1xuICAgIG5hbWUgPSBuYW1lT3JPYmo7XG4gIH1cbiAgaGFuZGxlciA9IGhhbmRsZXJzW25hbWVdO1xuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLm1ldGhvZC5hcHBseShoYW5kbGVyLmluc3RhbmNlLCBhcmdzKTtcbiAgfSBlbHNlIGlmICghc2lsZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWVkaWF0b3IuZXhlY3V0ZTogXCIgKyBuYW1lICsgXCIgaGFuZGxlciBpcyBub3QgZGVmaW5lZFwiKTtcbiAgfVxufTtcblxubWVkaWF0b3IucmVtb3ZlSGFuZGxlcnMgPSBmdW5jdGlvbihpbnN0YW5jZU9yTmFtZXMpIHtcbiAgdmFyIGhhbmRsZXIsIG5hbWUsIF9pLCBfbGVuO1xuICBpZiAoIWluc3RhbmNlT3JOYW1lcykge1xuICAgIG1lZGlhdG9yLl9oYW5kbGVycyA9IHt9O1xuICB9XG4gIGlmICh1dGlscy5pc0FycmF5KGluc3RhbmNlT3JOYW1lcykpIHtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGluc3RhbmNlT3JOYW1lcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgbmFtZSA9IGluc3RhbmNlT3JOYW1lc1tfaV07XG4gICAgICBkZWxldGUgaGFuZGxlcnNbbmFtZV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobmFtZSBpbiBoYW5kbGVycykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzW25hbWVdO1xuICAgICAgaWYgKGhhbmRsZXIuaW5zdGFuY2UgPT09IGluc3RhbmNlT3JOYW1lcykge1xuICAgICAgICBkZWxldGUgaGFuZGxlcnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5yZWFkb25seShtZWRpYXRvciwgJ3N1YnNjcmliZScsICd1bnN1YnNjcmliZScsICdwdWJsaXNoJywgJ3NldEhhbmRsZXInLCAnZXhlY3V0ZScsICdyZW1vdmVIYW5kbGVycycpO1xuXG5tZWRpYXRvci5zZWFsID0gZnVuY3Rpb24oKSB7XG4gIGlmIChzdXBwb3J0LnByb3BlcnR5RGVzY3JpcHRvcnMgJiYgT2JqZWN0LnNlYWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNlYWwobWVkaWF0b3IpO1xuICB9XG59O1xuXG51dGlscy5yZWFkb25seShtZWRpYXRvciwgJ3NlYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9kaXNwYXRjaGVyJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgRGlzcGF0Y2hlciwgRXZlbnRCcm9rZXIsIG1lZGlhdG9yLCB1dGlscywgXztcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwYXRjaGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIERpc3BhdGNoZXIuZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKERpc3BhdGNoZXIucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUucHJldmlvdXNSb3V0ZSA9IG51bGw7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY3VycmVudENvbnRyb2xsZXIgPSBudWxsO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmN1cnJlbnRSb3V0ZSA9IG51bGw7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY3VycmVudFBhcmFtcyA9IG51bGw7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY3VycmVudFF1ZXJ5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgIGNvbnRyb2xsZXJQYXRoOiAnY29udHJvbGxlcnMvJyxcbiAgICAgIGNvbnRyb2xsZXJTdWZmaXg6ICdfY29udHJvbGxlcidcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVFdmVudCgncm91dGVyOm1hdGNoJywgdGhpcy5kaXNwYXRjaCk7XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbihyb3V0ZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIF9yZWYsIF9yZWYxLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIHBhcmFtcyA9IHBhcmFtcyA/IF8uZXh0ZW5kKHt9LCBwYXJhbXMpIDoge307XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmV4dGVuZCh7fSwgb3B0aW9ucykgOiB7fTtcbiAgICBpZiAoIShvcHRpb25zLnF1ZXJ5ICE9IG51bGwpKSB7XG4gICAgICBvcHRpb25zLnF1ZXJ5ID0ge307XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmZvcmNlU3RhcnR1cCAhPT0gdHJ1ZSkge1xuICAgICAgb3B0aW9ucy5mb3JjZVN0YXJ0dXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmZvcmNlU3RhcnR1cCAmJiAoKF9yZWYgPSB0aGlzLmN1cnJlbnRSb3V0ZSkgIT0gbnVsbCA/IF9yZWYuY29udHJvbGxlciA6IHZvaWQgMCkgPT09IHJvdXRlLmNvbnRyb2xsZXIgJiYgKChfcmVmMSA9IHRoaXMuY3VycmVudFJvdXRlKSAhPSBudWxsID8gX3JlZjEuYWN0aW9uIDogdm9pZCAwKSA9PT0gcm91dGUuYWN0aW9uICYmIF8uaXNFcXVhbCh0aGlzLmN1cnJlbnRQYXJhbXMsIHBhcmFtcykgJiYgXy5pc0VxdWFsKHRoaXMuY3VycmVudFF1ZXJ5LCBvcHRpb25zLnF1ZXJ5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2FkQ29udHJvbGxlcihyb3V0ZS5jb250cm9sbGVyLCBmdW5jdGlvbihDb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udHJvbGxlckxvYWRlZChyb3V0ZSwgcGFyYW1zLCBvcHRpb25zLCBDb250cm9sbGVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5sb2FkQ29udHJvbGxlciA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgZmlsZU5hbWUsIG1vZHVsZU5hbWUsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgZmlsZU5hbWUgPSBuYW1lICsgdGhpcy5zZXR0aW5ncy5jb250cm9sbGVyU3VmZml4O1xuICAgIG1vZHVsZU5hbWUgPSB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJQYXRoICsgZmlsZU5hbWU7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHJlcXVpcmUoW21vZHVsZU5hbWVdLCBoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHJlcXVpcmUobW9kdWxlTmFtZSkpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmNvbnRyb2xsZXJMb2FkZWQgPSBmdW5jdGlvbihyb3V0ZSwgcGFyYW1zLCBvcHRpb25zLCBDb250cm9sbGVyKSB7XG4gICAgdmFyIGNvbnRyb2xsZXIsIHByZXYsIHByZXZpb3VzO1xuICAgIGlmICh0aGlzLm5leHRQcmV2aW91c1JvdXRlID0gdGhpcy5jdXJyZW50Um91dGUpIHtcbiAgICAgIHByZXZpb3VzID0gXy5leHRlbmQoe30sIHRoaXMubmV4dFByZXZpb3VzUm91dGUpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFBhcmFtcyAhPSBudWxsKSB7XG4gICAgICAgIHByZXZpb3VzLnBhcmFtcyA9IHRoaXMuY3VycmVudFBhcmFtcztcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2aW91cy5wcmV2aW91cykge1xuICAgICAgICBkZWxldGUgcHJldmlvdXMucHJldmlvdXM7XG4gICAgICB9XG4gICAgICBwcmV2ID0ge1xuICAgICAgICBwcmV2aW91czogcHJldmlvdXNcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMubmV4dEN1cnJlbnRSb3V0ZSA9IF8uZXh0ZW5kKHt9LCByb3V0ZSwgcHJldik7XG4gICAgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHBhcmFtcywgdGhpcy5uZXh0Q3VycmVudFJvdXRlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlQmVmb3JlQWN0aW9uKGNvbnRyb2xsZXIsIHRoaXMubmV4dEN1cnJlbnRSb3V0ZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5leGVjdXRlQWN0aW9uID0gZnVuY3Rpb24oY29udHJvbGxlciwgcm91dGUsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLmN1cnJlbnRDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLnB1Ymxpc2hFdmVudCgnYmVmb3JlQ29udHJvbGxlckRpc3Bvc2UnLCB0aGlzLmN1cnJlbnRDb250cm9sbGVyKTtcbiAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuZGlzcG9zZShwYXJhbXMsIHJvdXRlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5jdXJyZW50UGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gb3B0aW9ucy5xdWVyeTtcbiAgICBjb250cm9sbGVyW3JvdXRlLmFjdGlvbl0ocGFyYW1zLCByb3V0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKGNvbnRyb2xsZXIucmVkaXJlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoRXZlbnQoJ2Rpc3BhdGNoZXI6ZGlzcGF0Y2gnLCB0aGlzLmN1cnJlbnRDb250cm9sbGVyLCBwYXJhbXMsIHJvdXRlLCBvcHRpb25zKTtcbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5leGVjdXRlQmVmb3JlQWN0aW9uID0gZnVuY3Rpb24oY29udHJvbGxlciwgcm91dGUsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIHZhciBiZWZvcmUsIGV4ZWN1dGVBY3Rpb24sIHByb21pc2UsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgYmVmb3JlID0gY29udHJvbGxlci5iZWZvcmVBY3Rpb247XG4gICAgZXhlY3V0ZUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNvbnRyb2xsZXIucmVkaXJlY3RlZCB8fCBfdGhpcy5jdXJyZW50Um91dGUgJiYgcm91dGUgPT09IF90aGlzLmN1cnJlbnRSb3V0ZSkge1xuICAgICAgICBfdGhpcy5uZXh0UHJldmlvdXNSb3V0ZSA9IF90aGlzLm5leHRDdXJyZW50Um91dGUgPSBudWxsO1xuICAgICAgICBjb250cm9sbGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMucHJldmlvdXNSb3V0ZSA9IF90aGlzLm5leHRQcmV2aW91c1JvdXRlO1xuICAgICAgX3RoaXMuY3VycmVudFJvdXRlID0gX3RoaXMubmV4dEN1cnJlbnRSb3V0ZTtcbiAgICAgIF90aGlzLm5leHRQcmV2aW91c1JvdXRlID0gX3RoaXMubmV4dEN1cnJlbnRSb3V0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gX3RoaXMuZXhlY3V0ZUFjdGlvbihjb250cm9sbGVyLCByb3V0ZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGlmICghYmVmb3JlKSB7XG4gICAgICBleGVjdXRlQWN0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmVmb3JlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb250cm9sbGVyI2JlZm9yZUFjdGlvbjogZnVuY3Rpb24gZXhwZWN0ZWQuICcgKyAnT2xkIG9iamVjdC1saWtlIGZvcm0gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICB9XG4gICAgcHJvbWlzZSA9IGNvbnRyb2xsZXIuYmVmb3JlQWN0aW9uKHBhcmFtcywgcm91dGUsIG9wdGlvbnMpO1xuICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xuICAgICAgcmV0dXJuIHByb21pc2UudGhlbihleGVjdXRlQWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVBY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gRGlzcGF0Y2hlcjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9jb21wb3NlcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIENvbXBvc2VyLCBDb21wb3NpdGlvbiwgRXZlbnRCcm9rZXIsIG1lZGlhdG9yLCB1dGlscywgXztcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbkNvbXBvc2l0aW9uID0gbG9hZGVyKCdjaGFwbGluL2xpYi9jb21wb3NpdGlvbicpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9zZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgQ29tcG9zZXIuZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKENvbXBvc2VyLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5jb21wb3NpdGlvbnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2VyKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmNvbXBvc2l0aW9ucyA9IHt9O1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ2NvbXBvc2VyOmNvbXBvc2UnLCB0aGlzLmNvbXBvc2UsIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ2NvbXBvc2VyOnJldHJpZXZlJywgdGhpcy5yZXRyaWV2ZSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlRXZlbnQoJ2Rpc3BhdGNoZXI6ZGlzcGF0Y2gnLCB0aGlzLmNsZWFudXApO1xuICB9O1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5jb21wb3NlID0gZnVuY3Rpb24obmFtZSwgc2Vjb25kLCB0aGlyZCkge1xuICAgIGlmICh0eXBlb2Ygc2Vjb25kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodGhpcmQgfHwgc2Vjb25kLnByb3RvdHlwZS5kaXNwb3NlKSB7XG4gICAgICAgIGlmIChzZWNvbmQucHJvdG90eXBlIGluc3RhbmNlb2YgQ29tcG9zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9zZShuYW1lLCB7XG4gICAgICAgICAgICBjb21wb3NpdGlvbjogc2Vjb25kLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9zZShuYW1lLCB7XG4gICAgICAgICAgICBvcHRpb25zOiB0aGlyZCxcbiAgICAgICAgICAgIGNvbXBvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgYXV0b1JlbmRlciwgZGlzYWJsZWRBdXRvUmVuZGVyO1xuICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBuZXcgc2Vjb25kKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgIGF1dG9SZW5kZXIgPSB0aGlzLml0ZW0uYXV0b1JlbmRlcjtcbiAgICAgICAgICAgICAgZGlzYWJsZWRBdXRvUmVuZGVyID0gYXV0b1JlbmRlciA9PT0gdm9pZCAwIHx8ICFhdXRvUmVuZGVyO1xuICAgICAgICAgICAgICBpZiAoZGlzYWJsZWRBdXRvUmVuZGVyICYmIHR5cGVvZiB0aGlzLml0ZW0ucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9zZShuYW1lLCB7XG4gICAgICAgIGNvbXBvc2U6IHNlY29uZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb3NlKG5hbWUsIHtcbiAgICAgICAgY29tcG9zZTogdGhpcmQsXG4gICAgICAgIG9wdGlvbnM6IHNlY29uZFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb21wb3NlKG5hbWUsIHNlY29uZCk7XG4gIH07XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLl9jb21wb3NlID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBjb21wb3NpdGlvbiwgY3VycmVudCwgaXNQcm9taXNlLCByZXR1cm5lZDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29tcG9zZSAhPT0gJ2Z1bmN0aW9uJyAmJiAhKG9wdGlvbnMuY29tcG9zaXRpb24gIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9zZXIjY29tcG9zZSB3YXMgdXNlZCBpbmNvcnJlY3RseScpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb21wb3NpdGlvbiAhPSBudWxsKSB7XG4gICAgICBjb21wb3NpdGlvbiA9IG5ldyBvcHRpb25zLmNvbXBvc2l0aW9uKG9wdGlvbnMub3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvc2l0aW9uID0gbmV3IENvbXBvc2l0aW9uKG9wdGlvbnMub3B0aW9ucyk7XG4gICAgICBjb21wb3NpdGlvbi5jb21wb3NlID0gb3B0aW9ucy5jb21wb3NlO1xuICAgICAgaWYgKG9wdGlvbnMuY2hlY2spIHtcbiAgICAgICAgY29tcG9zaXRpb24uY2hlY2sgPSBvcHRpb25zLmNoZWNrO1xuICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50ID0gdGhpcy5jb21wb3NpdGlvbnNbbmFtZV07XG4gICAgaXNQcm9taXNlID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5jaGVjayhjb21wb3NpdGlvbi5vcHRpb25zKSkge1xuICAgICAgY3VycmVudC5zdGFsZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnQuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuZWQgPSBjb21wb3NpdGlvbi5jb21wb3NlKGNvbXBvc2l0aW9uLm9wdGlvbnMpO1xuICAgICAgaXNQcm9taXNlID0gdHlwZW9mIChyZXR1cm5lZCAhPSBudWxsID8gcmV0dXJuZWQudGhlbiA6IHZvaWQgMCkgPT09ICdmdW5jdGlvbic7XG4gICAgICBjb21wb3NpdGlvbi5zdGFsZShmYWxzZSk7XG4gICAgICB0aGlzLmNvbXBvc2l0aW9uc1tuYW1lXSA9IGNvbXBvc2l0aW9uO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICByZXR1cm4gcmV0dXJuZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvc2l0aW9uc1tuYW1lXS5pdGVtO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUucmV0cmlldmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGFjdGl2ZTtcbiAgICBhY3RpdmUgPSB0aGlzLmNvbXBvc2l0aW9uc1tuYW1lXTtcbiAgICBpZiAoYWN0aXZlICYmICFhY3RpdmUuc3RhbGUoKSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZS5pdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wb3NpdGlvbiwgbmFtZSwgX3JlZjtcbiAgICBfcmVmID0gdGhpcy5jb21wb3NpdGlvbnM7XG4gICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgIGNvbXBvc2l0aW9uID0gX3JlZltuYW1lXTtcbiAgICAgIGlmIChjb21wb3NpdGlvbi5zdGFsZSgpKSB7XG4gICAgICAgIGNvbXBvc2l0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29tcG9zaXRpb25zW25hbWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9zaXRpb24uc3RhbGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvc2l0aW9uLCBuYW1lLCBfcmVmO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICBtZWRpYXRvci5yZW1vdmVIYW5kbGVycyh0aGlzKTtcbiAgICBfcmVmID0gdGhpcy5jb21wb3NpdGlvbnM7XG4gICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgIGNvbXBvc2l0aW9uID0gX3JlZltuYW1lXTtcbiAgICAgIGNvbXBvc2l0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuY29tcG9zaXRpb25zO1xuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zZXI7XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vY29udHJvbGxlcnMvY29udHJvbGxlcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIENvbnRyb2xsZXIsIEV2ZW50QnJva2VyLCBtZWRpYXRvciwgdXRpbHMsIF8sXG4gIF9fc2xpY2UgPSBbXS5zbGljZSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBDb250cm9sbGVyLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChDb250cm9sbGVyLnByb3RvdHlwZSwgQmFja2JvbmUuRXZlbnRzKTtcblxuICBfLmV4dGVuZChDb250cm9sbGVyLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLnZpZXcgPSBudWxsO1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLnJlZGlyZWN0ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBDb250cm9sbGVyKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuYmVmb3JlQWN0aW9uID0gZnVuY3Rpb24oKSB7fTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5hZGp1c3RUaXRsZSA9IGZ1bmN0aW9uKHN1YnRpdGxlKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLmV4ZWN1dGUoJ2FkanVzdFRpdGxlJywgc3VidGl0bGUpO1xuICB9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLnJldXNlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2Q7XG4gICAgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/ICdyZXRyaWV2ZScgOiAnY29tcG9zZSc7XG4gICAgcmV0dXJuIG1lZGlhdG9yLmV4ZWN1dGUuYXBwbHkobWVkaWF0b3IsIFtcImNvbXBvc2VyOlwiICsgbWV0aG9kXS5jb25jYXQoX19zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgfTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb250cm9sbGVyI2NvbXBvc2Ugd2FzIG1vdmVkIHRvIENvbnRyb2xsZXIjcmV1c2UnKTtcbiAgfTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5yZWRpcmVjdFRvID0gZnVuY3Rpb24ocGF0aERlc2MsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIHRoaXMucmVkaXJlY3RlZCA9IHRydWU7XG4gICAgcmV0dXJuIHV0aWxzLnJlZGlyZWN0VG8ocGF0aERlc2MsIHBhcmFtcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiwgcHJvcDtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbCh0aGlzLCBwcm9wKSkgY29udGludWU7XG4gICAgICBvYmogPSB0aGlzW3Byb3BdO1xuICAgICAgaWYgKCEob2JqICYmIHR5cGVvZiBvYmouZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBvYmouZGlzcG9zZSgpO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbW9kZWxzL2NvbGxlY3Rpb24nLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBDb2xsZWN0aW9uLCBFdmVudEJyb2tlciwgTW9kZWwsIHV0aWxzLCBfLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuTW9kZWwgPSBsb2FkZXIoJ2NoYXBsaW4vbW9kZWxzL21vZGVsJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb24gPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKENvbGxlY3Rpb24sIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gQ29sbGVjdGlvbigpIHtcbiAgICByZXR1cm4gQ29sbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENvbGxlY3Rpb24ucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgQ29sbGVjdGlvbi5wcm90b3R5cGUubW9kZWwgPSBNb2RlbDtcblxuICBDb2xsZWN0aW9uLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAodXRpbHMuc2VyaWFsaXplKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIENvbGxlY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyKCdkaXNwb3NlJywgdGhpcyk7XG4gICAgdGhpcy5yZXNldChbXSwge1xuICAgICAgc2lsZW50OiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgIHRoaXMub2ZmKCk7XG4gICAgcHJvcGVydGllcyA9IFsnbW9kZWwnLCAnbW9kZWxzJywgJ19ieUlkJywgJ19ieUNpZCcsICdfY2FsbGJhY2tzJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBDb2xsZWN0aW9uO1xuXG59KShCYWNrYm9uZS5Db2xsZWN0aW9uKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9tb2RlbHMvbW9kZWwnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBFdmVudEJyb2tlciwgTW9kZWwsIHNlcmlhbGl6ZUF0dHJpYnV0ZXMsIHNlcmlhbGl6ZU1vZGVsQXR0cmlidXRlcywgdXRpbHMsIF8sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuc2VyaWFsaXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uKG1vZGVsLCBhdHRyaWJ1dGVzLCBtb2RlbFN0YWNrKSB7XG4gIHZhciBkZWxlZ2F0b3IsIGtleSwgb3RoZXJNb2RlbCwgc2VyaWFsaXplZE1vZGVscywgdmFsdWUsIF9pLCBfbGVuLCBfcmVmO1xuICBkZWxlZ2F0b3IgPSB1dGlscy5iZWdldChhdHRyaWJ1dGVzKTtcbiAgaWYgKG1vZGVsU3RhY2sgPT0gbnVsbCkge1xuICAgIG1vZGVsU3RhY2sgPSB7fTtcbiAgfVxuICBtb2RlbFN0YWNrW21vZGVsLmNpZF0gPSB0cnVlO1xuICBmb3IgKGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQmFja2JvbmUuTW9kZWwpIHtcbiAgICAgIGRlbGVnYXRvcltrZXldID0gc2VyaWFsaXplTW9kZWxBdHRyaWJ1dGVzKHZhbHVlLCBtb2RlbCwgbW9kZWxTdGFjayk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJhY2tib25lLkNvbGxlY3Rpb24pIHtcbiAgICAgIHNlcmlhbGl6ZWRNb2RlbHMgPSBbXTtcbiAgICAgIF9yZWYgPSB2YWx1ZS5tb2RlbHM7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgb3RoZXJNb2RlbCA9IF9yZWZbX2ldO1xuICAgICAgICBzZXJpYWxpemVkTW9kZWxzLnB1c2goc2VyaWFsaXplTW9kZWxBdHRyaWJ1dGVzKG90aGVyTW9kZWwsIG1vZGVsLCBtb2RlbFN0YWNrKSk7XG4gICAgICB9XG4gICAgICBkZWxlZ2F0b3Jba2V5XSA9IHNlcmlhbGl6ZWRNb2RlbHM7XG4gICAgfVxuICB9XG4gIGRlbGV0ZSBtb2RlbFN0YWNrW21vZGVsLmNpZF07XG4gIHJldHVybiBkZWxlZ2F0b3I7XG59O1xuXG5zZXJpYWxpemVNb2RlbEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihtb2RlbCwgY3VycmVudE1vZGVsLCBtb2RlbFN0YWNrKSB7XG4gIHZhciBhdHRyaWJ1dGVzO1xuICBpZiAobW9kZWwgPT09IGN1cnJlbnRNb2RlbCB8fCBtb2RlbC5jaWQgaW4gbW9kZWxTdGFjaykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGF0dHJpYnV0ZXMgPSB0eXBlb2YgbW9kZWwuZ2V0QXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJyA/IG1vZGVsLmdldEF0dHJpYnV0ZXMoKSA6IG1vZGVsLmF0dHJpYnV0ZXM7XG4gIHJldHVybiBzZXJpYWxpemVBdHRyaWJ1dGVzKG1vZGVsLCBhdHRyaWJ1dGVzLCBtb2RlbFN0YWNrKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWwgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKE1vZGVsLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIE1vZGVsKCkge1xuICAgIHJldHVybiBNb2RlbC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKE1vZGVsLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIE1vZGVsLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcztcbiAgfTtcblxuICBNb2RlbC5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZUF0dHJpYnV0ZXModGhpcywgdGhpcy5nZXRBdHRyaWJ1dGVzKCkpO1xuICB9O1xuXG4gIE1vZGVsLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIE1vZGVsLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlcignZGlzcG9zZScsIHRoaXMpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICB0aGlzLm9mZigpO1xuICAgIHByb3BlcnRpZXMgPSBbJ2NvbGxlY3Rpb24nLCAnYXR0cmlidXRlcycsICdjaGFuZ2VkJywgJ19lc2NhcGVkQXR0cmlidXRlcycsICdfcHJldmlvdXNBdHRyaWJ1dGVzJywgJ19zaWxlbnQnLCAnX3BlbmRpbmcnLCAnX2NhbGxiYWNrcyddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gTW9kZWw7XG5cbn0pKEJhY2tib25lLk1vZGVsKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi92aWV3cy9sYXlvdXQnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyICQsIEJhY2tib25lLCBFdmVudEJyb2tlciwgTGF5b3V0LCBWaWV3LCBtZWRpYXRvciwgdXRpbHMsIF8sXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuVmlldyA9IGxvYWRlcignY2hhcGxpbi92aWV3cy92aWV3Jyk7XG5cbiQgPSBCYWNrYm9uZS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dCA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoTGF5b3V0LCBfc3VwZXIpO1xuXG4gIExheW91dC5wcm90b3R5cGUuZWwgPSAnYm9keSc7XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5rZWVwRWxlbWVudCA9IHRydWU7XG5cbiAgTGF5b3V0LnByb3RvdHlwZS50aXRsZSA9ICcnO1xuXG4gIExheW91dC5wcm90b3R5cGUuZ2xvYmFsUmVnaW9ucyA9IG51bGw7XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5saXN0ZW4gPSB7XG4gICAgJ2JlZm9yZUNvbnRyb2xsZXJEaXNwb3NlIG1lZGlhdG9yJzogJ3Njcm9sbCdcbiAgfTtcblxuICBmdW5jdGlvbiBMYXlvdXQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vcGVuTGluayA9IF9fYmluZCh0aGlzLm9wZW5MaW5rLCB0aGlzKTtcblxuICAgIHRoaXMuZ2xvYmFsUmVnaW9ucyA9IFtdO1xuICAgIHRoaXMudGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuICAgIGlmIChvcHRpb25zLnJlZ2lvbnMpIHtcbiAgICAgIHRoaXMucmVnaW9ucyA9IG9wdGlvbnMucmVnaW9ucztcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgdGl0bGVUZW1wbGF0ZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB2YXIgc3Q7XG4gICAgICAgIHN0ID0gZGF0YS5zdWJ0aXRsZSA/IFwiXCIgKyBkYXRhLnN1YnRpdGxlICsgXCIgXFx1MjAxMyBcIiA6ICcnO1xuICAgICAgICByZXR1cm4gc3QgKyBkYXRhLnRpdGxlO1xuICAgICAgfSxcbiAgICAgIG9wZW5FeHRlcm5hbFRvQmxhbms6IGZhbHNlLFxuICAgICAgcm91dGVMaW5rczogJ2EsIC5nby10bycsXG4gICAgICBza2lwUm91dGluZzogJy5ub3NjcmlwdCcsXG4gICAgICBzY3JvbGxUbzogWzAsIDBdXG4gICAgfSk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncmVnaW9uOnNob3cnLCB0aGlzLnNob3dSZWdpb24sIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JlZ2lvbjpyZWdpc3RlcicsIHRoaXMucmVnaXN0ZXJSZWdpb25IYW5kbGVyLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyZWdpb246dW5yZWdpc3RlcicsIHRoaXMudW5yZWdpc3RlclJlZ2lvbkhhbmRsZXIsIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JlZ2lvbjpmaW5kJywgdGhpcy5yZWdpb25CeU5hbWUsIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ2FkanVzdFRpdGxlJywgdGhpcy5hZGp1c3RUaXRsZSwgdGhpcyk7XG4gICAgTGF5b3V0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnJvdXRlTGlua3MpIHtcbiAgICAgIHRoaXMuc3RhcnRMaW5rUm91dGluZygpO1xuICAgIH1cbiAgfVxuXG4gIExheW91dC5wcm90b3R5cGUuc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uO1xuICAgIHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5zY3JvbGxUbztcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5hZGp1c3RUaXRsZSA9IGZ1bmN0aW9uKHN1YnRpdGxlKSB7XG4gICAgdmFyIHRpdGxlLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChzdWJ0aXRsZSA9PSBudWxsKSB7XG4gICAgICBzdWJ0aXRsZSA9ICcnO1xuICAgIH1cbiAgICB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGVUZW1wbGF0ZSh7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHN1YnRpdGxlOiBzdWJ0aXRsZVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgcmV0dXJuIF90aGlzLnB1Ymxpc2hFdmVudCgnYWRqdXN0VGl0bGUnLCBzdWJ0aXRsZSwgdGl0bGUpO1xuICAgIH0sIDUwKTtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5zdGFydExpbmtSb3V0aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvdXRlO1xuICAgIHJvdXRlID0gdGhpcy5zZXR0aW5ncy5yb3V0ZUxpbmtzO1xuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCQpIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5vbignY2xpY2snLCByb3V0ZSwgdGhpcy5vcGVuTGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlKCdjbGljaycsIHJvdXRlLCB0aGlzLm9wZW5MaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5zdG9wTGlua1JvdXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcm91dGU7XG4gICAgcm91dGUgPSB0aGlzLnNldHRpbmdzLnJvdXRlTGlua3M7XG4gICAgaWYgKCQpIHtcbiAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWwub2ZmKCdjbGljaycsIHJvdXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudW5kZWxlZ2F0ZSgnY2xpY2snLCByb3V0ZSwgdGhpcy5vcGVuTGluayk7XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuaXNFeHRlcm5hbExpbmsgPSBmdW5jdGlvbihsaW5rKSB7XG4gICAgdmFyIF9yZWYsIF9yZWYxO1xuICAgIHJldHVybiBsaW5rLnRhcmdldCA9PT0gJ19ibGFuaycgfHwgbGluay5yZWwgPT09ICdleHRlcm5hbCcgfHwgKChfcmVmID0gbGluay5wcm90b2NvbCkgIT09ICdodHRwOicgJiYgX3JlZiAhPT0gJ2h0dHBzOicgJiYgX3JlZiAhPT0gJ2ZpbGU6JykgfHwgKChfcmVmMSA9IGxpbmsuaG9zdG5hbWUpICE9PSBsb2NhdGlvbi5ob3N0bmFtZSAmJiBfcmVmMSAhPT0gJycpO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUub3BlbkxpbmsgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBlbCwgZXh0ZXJuYWwsIGhyZWYsIGlzQW5jaG9yLCBza2lwUm91dGluZywgdHlwZTtcbiAgICBpZiAodXRpbHMubW9kaWZpZXJLZXlQcmVzc2VkKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbCA9ICQgPyBldmVudC5jdXJyZW50VGFyZ2V0IDogZXZlbnQuZGVsZWdhdGVUYXJnZXQ7XG4gICAgaXNBbmNob3IgPSBlbC5ub2RlTmFtZSA9PT0gJ0EnO1xuICAgIGhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpIHx8IG51bGw7XG4gICAgaWYgKCEoaHJlZiAhPSBudWxsKSB8fCBocmVmID09PSAnJyB8fCBocmVmLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNraXBSb3V0aW5nID0gdGhpcy5zZXR0aW5ncy5za2lwUm91dGluZztcbiAgICB0eXBlID0gdHlwZW9mIHNraXBSb3V0aW5nO1xuICAgIGlmICh0eXBlID09PSAnZnVuY3Rpb24nICYmICFza2lwUm91dGluZyhocmVmLCBlbCkgfHwgdHlwZSA9PT0gJ3N0cmluZycgJiYgKCQgPyAkKGVsKS5pcyhza2lwUm91dGluZykgOiBCYWNrYm9uZS51dGlscy5tYXRjaGVzU2VsZWN0b3IoZWwsIHNraXBSb3V0aW5nKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXh0ZXJuYWwgPSBpc0FuY2hvciAmJiB0aGlzLmlzRXh0ZXJuYWxMaW5rKGVsKTtcbiAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLm9wZW5FeHRlcm5hbFRvQmxhbmspIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oaHJlZik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHV0aWxzLnJlZGlyZWN0VG8oe1xuICAgICAgdXJsOiBocmVmXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnJlZ2lzdGVyUmVnaW9uSGFuZGxlciA9IGZ1bmN0aW9uKGluc3RhbmNlLCBuYW1lLCBzZWxlY3Rvcikge1xuICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyR2xvYmFsUmVnaW9uKGluc3RhbmNlLCBuYW1lLCBzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyR2xvYmFsUmVnaW9ucyhpbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUucmVnaXN0ZXJHbG9iYWxSZWdpb24gPSBmdW5jdGlvbihpbnN0YW5jZSwgbmFtZSwgc2VsZWN0b3IpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJHbG9iYWxSZWdpb24oaW5zdGFuY2UsIG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFJlZ2lvbnMudW5zaGlmdCh7XG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5yZWdpc3Rlckdsb2JhbFJlZ2lvbnMgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciBuYW1lLCBzZWxlY3RvciwgdmVyc2lvbiwgX2ksIF9sZW4sIF9yZWY7XG4gICAgX3JlZiA9IHV0aWxzLmdldEFsbFByb3BlcnR5VmVyc2lvbnMoaW5zdGFuY2UsICdyZWdpb25zJyk7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICB2ZXJzaW9uID0gX3JlZltfaV07XG4gICAgICBmb3IgKG5hbWUgaW4gdmVyc2lvbikge1xuICAgICAgICBzZWxlY3RvciA9IHZlcnNpb25bbmFtZV07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJHbG9iYWxSZWdpb24oaW5zdGFuY2UsIG5hbWUsIHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS51bnJlZ2lzdGVyUmVnaW9uSGFuZGxlciA9IGZ1bmN0aW9uKGluc3RhbmNlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5yZWdpc3Rlckdsb2JhbFJlZ2lvbihpbnN0YW5jZSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVucmVnaXN0ZXJHbG9iYWxSZWdpb25zKGluc3RhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS51bnJlZ2lzdGVyR2xvYmFsUmVnaW9uID0gZnVuY3Rpb24oaW5zdGFuY2UsIG5hbWUpIHtcbiAgICB2YXIgY2lkLCByZWdpb247XG4gICAgY2lkID0gaW5zdGFuY2UuY2lkO1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFJlZ2lvbnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMuZ2xvYmFsUmVnaW9ucztcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgcmVnaW9uID0gX3JlZltfaV07XG4gICAgICAgIGlmIChyZWdpb24uaW5zdGFuY2UuY2lkICE9PSBjaWQgfHwgcmVnaW9uLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKHJlZ2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9KS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUudW5yZWdpc3Rlckdsb2JhbFJlZ2lvbnMgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciByZWdpb247XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsUmVnaW9ucyA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICBfcmVmID0gdGhpcy5nbG9iYWxSZWdpb25zO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICByZWdpb24gPSBfcmVmW19pXTtcbiAgICAgICAgaWYgKHJlZ2lvbi5pbnN0YW5jZS5jaWQgIT09IGluc3RhbmNlLmNpZCkge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2gocmVnaW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH0pLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5yZWdpb25CeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHJlZywgX2ksIF9sZW4sIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuZ2xvYmFsUmVnaW9ucztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHJlZyA9IF9yZWZbX2ldO1xuICAgICAgaWYgKHJlZy5uYW1lID09PSBuYW1lICYmICFyZWcuaW5zdGFuY2Uuc3RhbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlZztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5zaG93UmVnaW9uID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVnaW9uO1xuICAgIHJlZ2lvbiA9IHRoaXMucmVnaW9uQnlOYW1lKG5hbWUpO1xuICAgIGlmICghcmVnaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZWdpb24gcmVnaXN0ZXJlZCB1bmRlciBcIiArIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2UuY29udGFpbmVyID0gcmVnaW9uLnNlbGVjdG9yID09PSAnJyA/ICQgPyByZWdpb24uaW5zdGFuY2UuJGVsIDogcmVnaW9uLmluc3RhbmNlLmVsIDogcmVnaW9uLmluc3RhbmNlLm5vV3JhcCA/ICQgPyAkKHJlZ2lvbi5pbnN0YW5jZS5jb250YWluZXIpLmZpbmQocmVnaW9uLnNlbGVjdG9yKSA6IHJlZ2lvbi5pbnN0YW5jZS5jb250YWluZXIucXVlcnlTZWxlY3RvcihyZWdpb24uc2VsZWN0b3IpIDogcmVnaW9uLmluc3RhbmNlWyQgPyAnJCcgOiAnZmluZCddKHJlZ2lvbi5zZWxlY3Rvcik7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIF9pLCBfbGVuLCBfcmVmO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcExpbmtSb3V0aW5nKCk7XG4gICAgX3JlZiA9IFsnZ2xvYmFsUmVnaW9ucycsICd0aXRsZScsICdyb3V0ZSddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IF9yZWZbX2ldO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIG1lZGlhdG9yLnJlbW92ZUhhbmRsZXJzKHRoaXMpO1xuICAgIHJldHVybiBMYXlvdXQuX19zdXBlcl9fLmRpc3Bvc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICByZXR1cm4gTGF5b3V0O1xuXG59KShWaWV3KTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi92aWV3cy92aWV3JywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciAkLCBCYWNrYm9uZSwgRXZlbnRCcm9rZXIsIFZpZXcsIGF0dGFjaCwgYmluZCwgbWVkaWF0b3IsIHNldEhUTUwsIHV0aWxzLCBfLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG4kID0gQmFja2JvbmUuJDtcblxuYmluZCA9IChmdW5jdGlvbigpIHtcbiAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIGN0eCkge1xuICAgICAgcmV0dXJuIGl0ZW0uYmluZChjdHgpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoXy5iaW5kKSB7XG4gICAgcmV0dXJuIF8uYmluZDtcbiAgfVxufSkoKTtcblxuc2V0SFRNTCA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgaHRtbCkge1xuICAgICAgcmV0dXJuIGVsZW0uaHRtbChodG1sKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBodG1sKSB7XG4gICAgICByZXR1cm4gZWxlbS5pbm5lckhUTUwgPSBodG1sO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbmF0dGFjaCA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmlldykge1xuICAgICAgdmFyIGFjdHVhbDtcbiAgICAgIGFjdHVhbCA9ICQodmlldy5jb250YWluZXIpO1xuICAgICAgaWYgKHR5cGVvZiB2aWV3LmNvbnRhaW5lck1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdmlldy5jb250YWluZXJNZXRob2QoYWN0dWFsLCB2aWV3LmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhY3R1YWxbdmlldy5jb250YWluZXJNZXRob2RdKHZpZXcuZWwpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgIHZhciBhY3R1YWw7XG4gICAgICBhY3R1YWwgPSB0eXBlb2Ygdmlldy5jb250YWluZXIgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2aWV3LmNvbnRhaW5lcikgOiB2aWV3LmNvbnRhaW5lcjtcbiAgICAgIGlmICh0eXBlb2Ygdmlldy5jb250YWluZXJNZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcuY29udGFpbmVyTWV0aG9kKGFjdHVhbCwgdmlldy5lbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0dWFsW3ZpZXcuY29udGFpbmVyTWV0aG9kXSh2aWV3LmVsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXcgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKFZpZXcsIF9zdXBlcik7XG5cbiAgXy5leHRlbmQoVmlldy5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBWaWV3LnByb3RvdHlwZS5hdXRvUmVuZGVyID0gZmFsc2U7XG5cbiAgVmlldy5wcm90b3R5cGUuYXV0b0F0dGFjaCA9IHRydWU7XG5cbiAgVmlldy5wcm90b3R5cGUuY29udGFpbmVyID0gbnVsbDtcblxuICBWaWV3LnByb3RvdHlwZS5jb250YWluZXJNZXRob2QgPSAkID8gJ2FwcGVuZCcgOiAnYXBwZW5kQ2hpbGQnO1xuXG4gIFZpZXcucHJvdG90eXBlLnJlZ2lvbnMgPSBudWxsO1xuXG4gIFZpZXcucHJvdG90eXBlLnJlZ2lvbiA9IG51bGw7XG5cbiAgVmlldy5wcm90b3R5cGUuc3RhbGUgPSBmYWxzZTtcblxuICBWaWV3LnByb3RvdHlwZS5ub1dyYXAgPSBmYWxzZTtcblxuICBWaWV3LnByb3RvdHlwZS5rZWVwRWxlbWVudCA9IGZhbHNlO1xuXG4gIFZpZXcucHJvdG90eXBlLnN1YnZpZXdzID0gbnVsbDtcblxuICBWaWV3LnByb3RvdHlwZS5zdWJ2aWV3c0J5TmFtZSA9IG51bGw7XG5cbiAgVmlldy5wcm90b3R5cGUub3B0aW9uTmFtZXMgPSBbJ2F1dG9BdHRhY2gnLCAnYXV0b1JlbmRlcicsICdjb250YWluZXInLCAnY29udGFpbmVyTWV0aG9kJywgJ3JlZ2lvbicsICdyZWdpb25zJywgJ25vV3JhcCddO1xuXG4gIGZ1bmN0aW9uIFZpZXcob3B0aW9ucykge1xuICAgIHZhciBvcHROYW1lLCBvcHRWYWx1ZSwgcmVnaW9uLCByZW5kZXIsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGZvciAob3B0TmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIG9wdFZhbHVlID0gb3B0aW9uc1tvcHROYW1lXTtcbiAgICAgICAgaWYgKF9faW5kZXhPZi5jYWxsKHRoaXMub3B0aW9uTmFtZXMsIG9wdE5hbWUpID49IDApIHtcbiAgICAgICAgICB0aGlzW29wdE5hbWVdID0gb3B0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyID0gdGhpcy5yZW5kZXI7XG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfdGhpcy5kaXNwb3NlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZW5kZXIuYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoX3RoaXMuYXV0b0F0dGFjaCkge1xuICAgICAgICBfdGhpcy5hdHRhY2guYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfTtcbiAgICB0aGlzLnN1YnZpZXdzID0gW107XG4gICAgdGhpcy5zdWJ2aWV3c0J5TmFtZSA9IHt9O1xuICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgaWYgKHRoaXMucmVnaW9uKSB7XG4gICAgICAgIHJlZ2lvbiA9IG1lZGlhdG9yLmV4ZWN1dGUoJ3JlZ2lvbjpmaW5kJywgdGhpcy5yZWdpb24pO1xuICAgICAgICBpZiAocmVnaW9uICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmVsID0gcmVnaW9uLmluc3RhbmNlLmNvbnRhaW5lciAhPSBudWxsID8gcmVnaW9uLmluc3RhbmNlLnJlZ2lvbiAhPSBudWxsID8gJChyZWdpb24uaW5zdGFuY2UuY29udGFpbmVyKS5maW5kKHJlZ2lvbi5zZWxlY3RvcikgOiByZWdpb24uaW5zdGFuY2UuY29udGFpbmVyIDogcmVnaW9uLmluc3RhbmNlLiQocmVnaW9uLnNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgIH1cbiAgICB9XG4gICAgVmlldy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRlbGVnYXRlTGlzdGVuZXJzKCk7XG4gICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2Rpc3Bvc2UnLCB0aGlzLmRpc3Bvc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ2Rpc3Bvc2UnLCBmdW5jdGlvbihzdWJqZWN0KSB7XG4gICAgICAgIGlmICghc3ViamVjdCB8fCBzdWJqZWN0ID09PSBfdGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lvbnMgIT0gbnVsbCkge1xuICAgICAgbWVkaWF0b3IuZXhlY3V0ZSgncmVnaW9uOnJlZ2lzdGVyJywgdGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9SZW5kZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgVmlldy5wcm90b3R5cGUuZGVsZWdhdGUgPSBmdW5jdGlvbihldmVudE5hbWUsIHNlY29uZCwgdGhpcmQpIHtcbiAgICB2YXIgYm91bmQsIGV2ZW50LCBldmVudHMsIGhhbmRsZXIsIGxpc3QsIHNlbGVjdG9yO1xuICAgIGlmIChCYWNrYm9uZS51dGlscykge1xuICAgICAgcmV0dXJuIEJhY2tib25lLnV0aWxzLmRlbGVnYXRlKHRoaXMsIGV2ZW50TmFtZSwgc2Vjb25kLCB0aGlyZCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyNkZWxlZ2F0ZTogZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgaGFuZGxlciA9IHNlY29uZDtcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIHNlbGVjdG9yID0gc2Vjb25kO1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyNkZWxlZ2F0ZTogJyArICdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgaGFuZGxlciA9IHRoaXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I2RlbGVnYXRlOiAnICsgJ29ubHkgdHdvIG9yIHRocmVlIGFyZ3VtZW50cyBhcmUgYWxsb3dlZCcpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjZGVsZWdhdGU6ICcgKyAnaGFuZGxlciBhcmd1bWVudCBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBldmVudCA9IF9yZWZbX2ldO1xuICAgICAgICBfcmVzdWx0cy5wdXNoKFwiXCIgKyBldmVudCArIFwiLmRlbGVnYXRlXCIgKyB0aGlzLmNpZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkuY2FsbCh0aGlzKTtcbiAgICBldmVudHMgPSBsaXN0LmpvaW4oJyAnKTtcbiAgICBib3VuZCA9IGJpbmQoaGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy4kZWwub24oZXZlbnRzLCBzZWxlY3RvciB8fCBudWxsLCBib3VuZCk7XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLl9kZWxlZ2F0ZUV2ZW50cyA9IGZ1bmN0aW9uKGV2ZW50cykge1xuICAgIHZhciBib3VuZCwgZXZlbnROYW1lLCBoYW5kbGVyLCBrZXksIG1hdGNoLCBzZWxlY3RvciwgdmFsdWU7XG4gICAgaWYgKEJhY2tib25lLlZpZXcucHJvdG90eXBlLmRlbGVnYXRlRXZlbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgcmV0dXJuIEJhY2tib25lLlZpZXcucHJvdG90eXBlLmRlbGVnYXRlRXZlbnRzLmNhbGwodGhpcywgZXZlbnRzLCB0cnVlKTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gZXZlbnRzKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50c1trZXldO1xuICAgICAgaGFuZGxlciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogdGhpc1t2YWx1ZV07XG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kICdcIiArIHZhbHVlICsgXCInIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgfVxuICAgICAgbWF0Y2ggPSBrZXkubWF0Y2goL14oXFxTKylcXHMqKC4qKSQvKTtcbiAgICAgIGV2ZW50TmFtZSA9IFwiXCIgKyBtYXRjaFsxXSArIFwiLmRlbGVnYXRlRXZlbnRzXCIgKyB0aGlzLmNpZDtcbiAgICAgIHNlbGVjdG9yID0gbWF0Y2hbMl07XG4gICAgICBib3VuZCA9IGJpbmQoaGFuZGxlciwgdGhpcyk7XG4gICAgICB0aGlzLiRlbC5vbihldmVudE5hbWUsIHNlbGVjdG9yIHx8IG51bGwsIGJvdW5kKTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZGVsZWdhdGVFdmVudHMgPSBmdW5jdGlvbihldmVudHMsIGtlZXBPbGQpIHtcbiAgICB2YXIgY2xhc3NFdmVudHMsIF9pLCBfbGVuLCBfcmVmO1xuICAgIGlmICgha2VlcE9sZCkge1xuICAgICAgdGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgfVxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZUV2ZW50cyhldmVudHMpO1xuICAgIH1cbiAgICBfcmVmID0gdXRpbHMuZ2V0QWxsUHJvcGVydHlWZXJzaW9ucyh0aGlzLCAnZXZlbnRzJyk7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBjbGFzc0V2ZW50cyA9IF9yZWZbX2ldO1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0V2ZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I2RlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RlbGVnYXRlRXZlbnRzKGNsYXNzRXZlbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUudW5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgc2Vjb25kLCB0aGlyZCkge1xuICAgIHZhciBldmVudCwgZXZlbnRzLCBoYW5kbGVyLCBsaXN0LCBzZWxlY3RvcjtcbiAgICBpZiAoQmFja2JvbmUudXRpbHMpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS51dGlscy51bmRlbGVnYXRlKHRoaXMsIGV2ZW50TmFtZSwgc2Vjb25kLCB0aGlyZCk7XG4gICAgfVxuICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I3VuZGVsZWdhdGU6IGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2Vjb25kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHNlbGVjdG9yID0gc2Vjb25kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZXIgPSBzZWNvbmQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBzZWxlY3RvciA9IHNlY29uZDtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I3VuZGVsZWdhdGU6ICcgKyAnc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVyID0gdGhpcmQ7XG4gICAgICB9XG4gICAgICBsaXN0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgICBfcmVmID0gZXZlbnROYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIGV2ZW50ID0gX3JlZltfaV07XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChcIlwiICsgZXZlbnQgKyBcIi5kZWxlZ2F0ZVwiICsgdGhpcy5jaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICBldmVudHMgPSBsaXN0LmpvaW4oJyAnKTtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5vZmYoZXZlbnRzLCBzZWxlY3RvciB8fCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLm9mZihcIi5kZWxlZ2F0ZVwiICsgdGhpcy5jaWQpO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudE5hbWUsIGtleSwgbWV0aG9kLCB0YXJnZXQsIHZlcnNpb24sIF9pLCBfbGVuLCBfcmVmLCBfcmVmMTtcbiAgICBpZiAoIXRoaXMubGlzdGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9yZWYgPSB1dGlscy5nZXRBbGxQcm9wZXJ0eVZlcnNpb25zKHRoaXMsICdsaXN0ZW4nKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHZlcnNpb24gPSBfcmVmW19pXTtcbiAgICAgIGZvciAoa2V5IGluIHZlcnNpb24pIHtcbiAgICAgICAgbWV0aG9kID0gdmVyc2lvbltrZXldO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1ldGhvZCA9IHRoaXNbbWV0aG9kXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldyNkZWxlZ2F0ZUxpc3RlbmVyczogJyArIChcIlwiICsgbWV0aG9kICsgXCIgbXVzdCBiZSBmdW5jdGlvblwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3JlZjEgPSBrZXkuc3BsaXQoJyAnKSwgZXZlbnROYW1lID0gX3JlZjFbMF0sIHRhcmdldCA9IF9yZWYxWzFdO1xuICAgICAgICB0aGlzLmRlbGVnYXRlTGlzdGVuZXIoZXZlbnROYW1lLCB0YXJnZXQsIG1ldGhvZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmRlbGVnYXRlTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJvcDtcbiAgICBpZiAodGFyZ2V0ID09PSAnbW9kZWwnIHx8IHRhcmdldCA9PT0gJ2NvbGxlY3Rpb24nKSB7XG4gICAgICBwcm9wID0gdGhpc1t0YXJnZXRdO1xuICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyhwcm9wLCBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21lZGlhdG9yJykge1xuICAgICAgdGhpcy5zdWJzY3JpYmVFdmVudChldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRoaXMub24oZXZlbnROYW1lLCBjYWxsYmFjaywgdGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnJlZ2lzdGVyUmVnaW9uID0gZnVuY3Rpb24obmFtZSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbWVkaWF0b3IuZXhlY3V0ZSgncmVnaW9uOnJlZ2lzdGVyJywgdGhpcywgbmFtZSwgc2VsZWN0b3IpO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnVucmVnaXN0ZXJSZWdpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLmV4ZWN1dGUoJ3JlZ2lvbjp1bnJlZ2lzdGVyJywgdGhpcywgbmFtZSk7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUudW5yZWdpc3RlckFsbFJlZ2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWVkaWF0b3IuZXhlY3V0ZSh7XG4gICAgICBuYW1lOiAncmVnaW9uOnVucmVnaXN0ZXInLFxuICAgICAgc2lsZW50OiB0cnVlXG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuc3VidmlldyA9IGZ1bmN0aW9uKG5hbWUsIHZpZXcpIHtcbiAgICB2YXIgYnlOYW1lLCBzdWJ2aWV3cztcbiAgICBzdWJ2aWV3cyA9IHRoaXMuc3Vidmlld3M7XG4gICAgYnlOYW1lID0gdGhpcy5zdWJ2aWV3c0J5TmFtZTtcbiAgICBpZiAobmFtZSAmJiB2aWV3KSB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnZpZXcobmFtZSk7XG4gICAgICBzdWJ2aWV3cy5wdXNoKHZpZXcpO1xuICAgICAgYnlOYW1lW25hbWVdID0gdmlldztcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0gZWxzZSBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIGJ5TmFtZVtuYW1lXTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUucmVtb3ZlU3VidmlldyA9IGZ1bmN0aW9uKG5hbWVPclZpZXcpIHtcbiAgICB2YXIgYnlOYW1lLCBpbmRleCwgbmFtZSwgb3RoZXJOYW1lLCBvdGhlclZpZXcsIHN1YnZpZXdzLCB2aWV3O1xuICAgIGlmICghbmFtZU9yVmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJ2aWV3cyA9IHRoaXMuc3Vidmlld3M7XG4gICAgYnlOYW1lID0gdGhpcy5zdWJ2aWV3c0J5TmFtZTtcbiAgICBpZiAodHlwZW9mIG5hbWVPclZpZXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gbmFtZU9yVmlldztcbiAgICAgIHZpZXcgPSBieU5hbWVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcgPSBuYW1lT3JWaWV3O1xuICAgICAgZm9yIChvdGhlck5hbWUgaW4gYnlOYW1lKSB7XG4gICAgICAgIG90aGVyVmlldyA9IGJ5TmFtZVtvdGhlck5hbWVdO1xuICAgICAgICBpZiAoIShvdGhlclZpZXcgPT09IHZpZXcpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IG90aGVyTmFtZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghKG5hbWUgJiYgdmlldyAmJiB2aWV3LmRpc3Bvc2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZpZXcuZGlzcG9zZSgpO1xuICAgIGluZGV4ID0gdXRpbHMuaW5kZXhPZihzdWJ2aWV3cywgdmlldyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3Vidmlld3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGV0ZSBieU5hbWVbbmFtZV07XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZ2V0VGVtcGxhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGEsIHNvdXJjZTtcbiAgICBkYXRhID0gdGhpcy5tb2RlbCA/IHV0aWxzLnNlcmlhbGl6ZSh0aGlzLm1vZGVsKSA6IHRoaXMuY29sbGVjdGlvbiA/IHtcbiAgICAgIGl0ZW1zOiB1dGlscy5zZXJpYWxpemUodGhpcy5jb2xsZWN0aW9uKSxcbiAgICAgIGxlbmd0aDogdGhpcy5jb2xsZWN0aW9uLmxlbmd0aFxuICAgIH0gOiB7fTtcbiAgICBzb3VyY2UgPSB0aGlzLm1vZGVsIHx8IHRoaXMuY29sbGVjdGlvbjtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZS5pc1N5bmNlZCA9PT0gJ2Z1bmN0aW9uJyAmJiAhKCdzeW5jZWQnIGluIGRhdGEpKSB7XG4gICAgICAgIGRhdGEuc3luY2VkID0gc291cmNlLmlzU3luY2VkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmdldFRlbXBsYXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcjZ2V0VGVtcGxhdGVGdW5jdGlvbiBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwsIGh0bWwsIHRlbXBsYXRlRnVuYztcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUZ1bmMgPSB0aGlzLmdldFRlbXBsYXRlRnVuY3Rpb24oKTtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlRnVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRlbXBsYXRlRnVuYyh0aGlzLmdldFRlbXBsYXRlRGF0YSgpKTtcbiAgICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhIHNpbmdsZSB0b3AtbGV2ZWwgZWxlbWVudCB3aGVuICcgKyAndXNpbmcgYG5vV3JhcGAuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudChlbC5maXJzdENoaWxkLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEhUTUwoKCQgPyB0aGlzLiRlbCA6IHRoaXMuZWwpLCBodG1sKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVnaW9uICE9IG51bGwpIHtcbiAgICAgIG1lZGlhdG9yLmV4ZWN1dGUoJ3JlZ2lvbjpzaG93JywgdGhpcy5yZWdpb24sIHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5lbCkpIHtcbiAgICAgIGF0dGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ2FkZGVkVG9ET00nKTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBWaWV3LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIHByb3BlcnRpZXMsIHN1YnZpZXcsIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWY7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51bnJlZ2lzdGVyQWxsUmVnaW9ucygpO1xuICAgIF9yZWYgPSB0aGlzLnN1YnZpZXdzO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgc3VidmlldyA9IF9yZWZbX2ldO1xuICAgICAgc3Vidmlldy5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLm9mZigpO1xuICAgIGlmICh0aGlzLmtlZXBFbGVtZW50KSB7XG4gICAgICB0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcbiAgICAgIHRoaXMudW5kZWxlZ2F0ZSgpO1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuICAgIHByb3BlcnRpZXMgPSBbJ2VsJywgJyRlbCcsICdvcHRpb25zJywgJ21vZGVsJywgJ2NvbGxlY3Rpb24nLCAnc3Vidmlld3MnLCAnc3Vidmlld3NCeU5hbWUnLCAnX2NhbGxiYWNrcyddO1xuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfal07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBWaWV3O1xuXG59KShCYWNrYm9uZS5WaWV3KTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi92aWV3cy9jb2xsZWN0aW9uX3ZpZXcnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyICQsIEJhY2tib25lLCBDb2xsZWN0aW9uVmlldywgVmlldywgYWRkQ2xhc3MsIGVuZEFuaW1hdGlvbiwgZmlsdGVyQ2hpbGRyZW4sIGluc2VydFZpZXcsIHN0YXJ0QW5pbWF0aW9uLCB0b2dnbGVFbGVtZW50LCB1dGlscywgXyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5WaWV3ID0gbG9hZGVyKCdjaGFwbGluL3ZpZXdzL3ZpZXcnKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbiQgPSBCYWNrYm9uZS4kO1xuXG5maWx0ZXJDaGlsZHJlbiA9IGZ1bmN0aW9uKG5vZGVMaXN0LCBzZWxlY3Rvcikge1xuICB2YXIgbm9kZSwgX2ksIF9sZW4sIF9yZXN1bHRzO1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5vZGVMaXN0O1xuICB9XG4gIF9yZXN1bHRzID0gW107XG4gIGZvciAoX2kgPSAwLCBfbGVuID0gbm9kZUxpc3QubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICBub2RlID0gbm9kZUxpc3RbX2ldO1xuICAgIGlmIChCYWNrYm9uZS51dGlscy5tYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBfcmVzdWx0cy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG50b2dnbGVFbGVtZW50ID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCB2aXNpYmxlKSB7XG4gICAgICByZXR1cm4gZWxlbS50b2dnbGUodmlzaWJsZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9ICh2aXNpYmxlID8gJycgOiAnbm9uZScpO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbmFkZENsYXNzID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBjbHMpIHtcbiAgICAgIHJldHVybiBlbGVtLmFkZENsYXNzKGNscyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgY2xzKSB7XG4gICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfTtcbiAgfVxufSkoKTtcblxuc3RhcnRBbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIHVzZUNzc0FuaW1hdGlvbiwgY2xzKSB7XG4gICAgICBpZiAodXNlQ3NzQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiBhZGRDbGFzcyhlbGVtLCBjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgdXNlQ3NzQW5pbWF0aW9uLCBjbHMpIHtcbiAgICAgIGlmICh1c2VDc3NBbmltYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGFkZENsYXNzKGVsZW0sIGNscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KSgpO1xuXG5lbmRBbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGR1cmF0aW9uKSB7XG4gICAgICByZXR1cm4gZWxlbS5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGR1cmF0aW9uKSB7XG4gICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwic1wiO1xuICAgICAgcmV0dXJuIGVsZW0ub3BhY2l0eSA9IDE7XG4gICAgfTtcbiAgfVxufSkoKTtcblxuaW5zZXJ0VmlldyA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obGlzdCwgdmlld0VsLCBwb3NpdGlvbiwgbGVuZ3RoLCBpdGVtU2VsZWN0b3IpIHtcbiAgICAgIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGgsIGluc2VydEluTWlkZGxlLCBpc0VuZCwgbWV0aG9kO1xuICAgICAgaW5zZXJ0SW5NaWRkbGUgPSAoMCA8IHBvc2l0aW9uICYmIHBvc2l0aW9uIDwgbGVuZ3RoKTtcbiAgICAgIGlzRW5kID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IGxlbmd0aDtcbiAgICAgIH07XG4gICAgICBpZiAoaW5zZXJ0SW5NaWRkbGUgfHwgaXRlbVNlbGVjdG9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gbGlzdC5jaGlsZHJlbihpdGVtU2VsZWN0b3IpO1xuICAgICAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgaWYgKGNoaWxkcmVuW3Bvc2l0aW9uXSAhPT0gdmlld0VsKSB7XG4gICAgICAgICAgaWYgKGlzRW5kKGNoaWxkcmVuTGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYXBwZW5kKHZpZXdFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4uZXEocG9zaXRpb24pLmJlZm9yZSh2aWV3RWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmVxKHBvc2l0aW9uIC0gMSkuYWZ0ZXIodmlld0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGhvZCA9IGlzRW5kKGxlbmd0aCkgPyAnYXBwZW5kJyA6ICdwcmVwZW5kJztcbiAgICAgICAgcmV0dXJuIGxpc3RbbWV0aG9kXSh2aWV3RWwpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGxpc3QsIHZpZXdFbCwgcG9zaXRpb24sIGxlbmd0aCwgaXRlbVNlbGVjdG9yKSB7XG4gICAgICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoLCBpbnNlcnRJbk1pZGRsZSwgaXNFbmQsIGxhc3Q7XG4gICAgICBpbnNlcnRJbk1pZGRsZSA9ICgwIDwgcG9zaXRpb24gJiYgcG9zaXRpb24gPCBsZW5ndGgpO1xuICAgICAgaXNFbmQgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gbGVuZ3RoO1xuICAgICAgfTtcbiAgICAgIGlmIChpbnNlcnRJbk1pZGRsZSB8fCBpdGVtU2VsZWN0b3IpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBmaWx0ZXJDaGlsZHJlbihsaXN0LmNoaWxkcmVuLCBpdGVtU2VsZWN0b3IpO1xuICAgICAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgaWYgKGNoaWxkcmVuW3Bvc2l0aW9uXSAhPT0gdmlld0VsKSB7XG4gICAgICAgICAgaWYgKGlzRW5kKGNoaWxkcmVuTGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuYXBwZW5kQ2hpbGQodmlld0VsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5pbnNlcnRCZWZvcmUodmlld0VsLCBjaGlsZHJlbltwb3NpdGlvbl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0ID0gY2hpbGRyZW5bcG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxhc3RDaGlsZCA9PT0gbGFzdCkge1xuICAgICAgICAgICAgICByZXR1cm4gbGlzdC5hcHBlbmRDaGlsZCh2aWV3RWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpc3QuaW5zZXJ0QmVmb3JlKHZpZXdFbCwgbGFzdC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0VuZChsZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBsaXN0LmFwcGVuZENoaWxkKHZpZXdFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGlzdC5pbnNlcnRCZWZvcmUodmlld0VsLCBsaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvblZpZXcgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKENvbGxlY3Rpb25WaWV3LCBfc3VwZXIpO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pdGVtVmlldyA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmF1dG9SZW5kZXIgPSB0cnVlO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IHRydWU7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS51c2VDc3NBbmltYXRpb24gPSBmYWxzZTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuYW5pbWF0aW9uU3RhcnRDbGFzcyA9ICdhbmltYXRlZC1pdGVtLXZpZXcnO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5hbmltYXRpb25FbmRDbGFzcyA9ICdhbmltYXRlZC1pdGVtLXZpZXctZW5kJztcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUubGlzdFNlbGVjdG9yID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuJGxpc3QgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5mYWxsYmFja1NlbGVjdG9yID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuJGZhbGxiYWNrID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUubG9hZGluZ1NlbGVjdG9yID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuJGxvYWRpbmcgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pdGVtU2VsZWN0b3IgPSB2b2lkIDA7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmZpbHRlcmVyID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZmlsdGVyQ2FsbGJhY2sgPSBmdW5jdGlvbih2aWV3LCBpbmNsdWRlZCkge1xuICAgIGlmICgkKSB7XG4gICAgICB2aWV3LiRlbC5zdG9wKHRydWUsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdG9nZ2xlRWxlbWVudCgoJCA/IHZpZXcuJGVsIDogdmlldy5lbCksIGluY2x1ZGVkKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUudmlzaWJsZUl0ZW1zID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUub3B0aW9uTmFtZXMgPSBWaWV3LnByb3RvdHlwZS5vcHRpb25OYW1lcy5jb25jYXQoWydyZW5kZXJJdGVtcycsICdpdGVtVmlldyddKTtcblxuICBmdW5jdGlvbiBDb2xsZWN0aW9uVmlldyhvcHRpb25zKSB7XG4gICAgdGhpcy5yZW5kZXJBbGxJdGVtcyA9IF9fYmluZCh0aGlzLnJlbmRlckFsbEl0ZW1zLCB0aGlzKTtcblxuICAgIHRoaXMudG9nZ2xlRmFsbGJhY2sgPSBfX2JpbmQodGhpcy50b2dnbGVGYWxsYmFjaywgdGhpcyk7XG5cbiAgICB0aGlzLml0ZW1zUmVzZXQgPSBfX2JpbmQodGhpcy5pdGVtc1Jlc2V0LCB0aGlzKTtcblxuICAgIHRoaXMuaXRlbVJlbW92ZWQgPSBfX2JpbmQodGhpcy5pdGVtUmVtb3ZlZCwgdGhpcyk7XG5cbiAgICB0aGlzLml0ZW1BZGRlZCA9IF9fYmluZCh0aGlzLml0ZW1BZGRlZCwgdGhpcyk7XG4gICAgdGhpcy52aXNpYmxlSXRlbXMgPSBbXTtcbiAgICBDb2xsZWN0aW9uVmlldy5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5hZGRDb2xsZWN0aW9uTGlzdGVuZXJzKCk7XG4gICAgaWYgKG9wdGlvbnMuZmlsdGVyZXIgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG9wdGlvbnMuZmlsdGVyZXIpO1xuICAgIH1cbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuYWRkQ29sbGVjdGlvbkxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAnYWRkJywgdGhpcy5pdGVtQWRkZWQpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAncmVtb3ZlJywgdGhpcy5pdGVtUmVtb3ZlZCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAncmVzZXQgc29ydCcsIHRoaXMuaXRlbXNSZXNldCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmdldFRlbXBsYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ZW1wbGF0ZURhdGE7XG4gICAgdGVtcGxhdGVEYXRhID0ge1xuICAgICAgbGVuZ3RoOiB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY29sbGVjdGlvbi5pc1N5bmNlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGVtcGxhdGVEYXRhLnN5bmNlZCA9IHRoaXMuY29sbGVjdGlvbi5pc1N5bmNlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVEYXRhO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7fTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpc3RTZWxlY3RvcjtcbiAgICBDb2xsZWN0aW9uVmlldy5fX3N1cGVyX18ucmVuZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgbGlzdFNlbGVjdG9yID0gXy5yZXN1bHQodGhpcywgJ2xpc3RTZWxlY3RvcicpO1xuICAgIGlmICgkKSB7XG4gICAgICB0aGlzLiRsaXN0ID0gbGlzdFNlbGVjdG9yID8gdGhpcy4kKGxpc3RTZWxlY3RvcikgOiB0aGlzLiRlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ID0gbGlzdFNlbGVjdG9yID8gdGhpcy5maW5kKHRoaXMubGlzdFNlbGVjdG9yKSA6IHRoaXMuZWw7XG4gICAgfVxuICAgIHRoaXMuaW5pdEZhbGxiYWNrKCk7XG4gICAgdGhpcy5pbml0TG9hZGluZ0luZGljYXRvcigpO1xuICAgIGlmICh0aGlzLnJlbmRlckl0ZW1zKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJBbGxJdGVtcygpO1xuICAgIH1cbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaXRlbUFkZGVkID0gZnVuY3Rpb24oaXRlbSwgY29sbGVjdGlvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmluc2VydFZpZXcoaXRlbSwgdGhpcy5yZW5kZXJJdGVtKGl0ZW0pLCBvcHRpb25zLmF0KTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaXRlbVJlbW92ZWQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlVmlld0Zvckl0ZW0oaXRlbSk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLml0ZW1zUmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJBbGxJdGVtcygpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pbml0RmFsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZmFsbGJhY2tTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJCkge1xuICAgICAgdGhpcy4kZmFsbGJhY2sgPSB0aGlzLiQodGhpcy5mYWxsYmFja1NlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYWxsYmFjayA9IHRoaXMuZmluZCh0aGlzLmZhbGxiYWNrU2VsZWN0b3IpO1xuICAgIH1cbiAgICB0aGlzLm9uKCd2aXNpYmlsaXR5Q2hhbmdlJywgdGhpcy50b2dnbGVGYWxsYmFjayk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdzeW5jU3RhdGVDaGFuZ2UnLCB0aGlzLnRvZ2dsZUZhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcy50b2dnbGVGYWxsYmFjaygpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS50b2dnbGVGYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2aXNpYmxlO1xuICAgIHZpc2libGUgPSB0aGlzLnZpc2libGVJdGVtcy5sZW5ndGggPT09IDAgJiYgKHR5cGVvZiB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jZWQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jZWQoKSA6IHRydWUpO1xuICAgIHJldHVybiB0b2dnbGVFbGVtZW50KCgkID8gdGhpcy4kZmFsbGJhY2sgOiB0aGlzLmZhbGxiYWNrKSwgdmlzaWJsZSk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmluaXRMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEodGhpcy5sb2FkaW5nU2VsZWN0b3IgJiYgdHlwZW9mIHRoaXMuY29sbGVjdGlvbi5pc1N5bmNpbmcgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgkKSB7XG4gICAgICB0aGlzLiRsb2FkaW5nID0gdGhpcy4kKHRoaXMubG9hZGluZ1NlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy5maW5kKHRoaXMubG9hZGluZ1NlbGVjdG9yKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdzeW5jU3RhdGVDaGFuZ2UnLCB0aGlzLnRvZ2dsZUxvYWRpbmdJbmRpY2F0b3IpO1xuICAgIHJldHVybiB0aGlzLnRvZ2dsZUxvYWRpbmdJbmRpY2F0b3IoKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUudG9nZ2xlTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2aXNpYmxlO1xuICAgIHZpc2libGUgPSB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID09PSAwICYmIHRoaXMuY29sbGVjdGlvbi5pc1N5bmNpbmcoKTtcbiAgICByZXR1cm4gdG9nZ2xlRWxlbWVudCgoJCA/IHRoaXMuJGxvYWRpbmcgOiB0aGlzLmxvYWRpbmcpLCB2aXNpYmxlKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZ2V0SXRlbVZpZXdzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1WaWV3cywgbmFtZSwgdmlldywgX3JlZjtcbiAgICBpdGVtVmlld3MgPSB7fTtcbiAgICBpZiAodGhpcy5zdWJ2aWV3cy5sZW5ndGggPiAwKSB7XG4gICAgICBfcmVmID0gdGhpcy5zdWJ2aWV3c0J5TmFtZTtcbiAgICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICAgIHZpZXcgPSBfcmVmW25hbWVdO1xuICAgICAgICBpZiAobmFtZS5zbGljZSgwLCA5KSA9PT0gJ2l0ZW1WaWV3OicpIHtcbiAgICAgICAgICBpdGVtVmlld3NbbmFtZS5zbGljZSg5KV0gPSB2aWV3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtVmlld3M7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcmVyLCBmaWx0ZXJDYWxsYmFjaykge1xuICAgIHZhciBoYXNJdGVtVmlld3MsIGluY2x1ZGVkLCBpbmRleCwgaXRlbSwgdmlldywgX2ksIF9sZW4sIF9yZWYsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJlciA9PT0gJ2Z1bmN0aW9uJyB8fCBmaWx0ZXJlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maWx0ZXJlciA9IGZpbHRlcmVyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbHRlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nIHx8IGZpbHRlckNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbHRlckNhbGxiYWNrID0gZmlsdGVyQ2FsbGJhY2s7XG4gICAgfVxuICAgIGhhc0l0ZW1WaWV3cyA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuYW1lO1xuICAgICAgaWYgKF90aGlzLnN1YnZpZXdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChuYW1lIGluIF90aGlzLnN1YnZpZXdzQnlOYW1lKSB7XG4gICAgICAgICAgaWYgKG5hbWUuc2xpY2UoMCwgOSkgPT09ICdpdGVtVmlldzonKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpO1xuICAgIGlmIChoYXNJdGVtVmlld3MpIHtcbiAgICAgIF9yZWYgPSB0aGlzLmNvbGxlY3Rpb24ubW9kZWxzO1xuICAgICAgZm9yIChpbmRleCA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IGluZGV4ID0gKytfaSkge1xuICAgICAgICBpdGVtID0gX3JlZltpbmRleF07XG4gICAgICAgIGluY2x1ZGVkID0gdHlwZW9mIHRoaXMuZmlsdGVyZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmZpbHRlcmVyKGl0ZW0sIGluZGV4KSA6IHRydWU7XG4gICAgICAgIHZpZXcgPSB0aGlzLnN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkKTtcbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xsZWN0aW9uVmlldyNmaWx0ZXI6ICcgKyAoXCJubyB2aWV3IGZvdW5kIGZvciBcIiArIGl0ZW0uY2lkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJDYWxsYmFjayh2aWV3LCBpbmNsdWRlZCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKHZpZXcubW9kZWwsIGluY2x1ZGVkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2UnLCB0aGlzLnZpc2libGVJdGVtcyk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnJlbmRlckFsbEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNpZCwgaW5kZXgsIGl0ZW0sIGl0ZW1zLCByZW1haW5pbmdWaWV3c0J5Q2lkLCB2aWV3LCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmO1xuICAgIGl0ZW1zID0gdGhpcy5jb2xsZWN0aW9uLm1vZGVscztcbiAgICB0aGlzLnZpc2libGVJdGVtcyA9IFtdO1xuICAgIHJlbWFpbmluZ1ZpZXdzQnlDaWQgPSB7fTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGl0ZW1zLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBpdGVtID0gaXRlbXNbX2ldO1xuICAgICAgdmlldyA9IHRoaXMuc3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQpO1xuICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgcmVtYWluaW5nVmlld3NCeUNpZFtpdGVtLmNpZF0gPSB2aWV3O1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVmID0gdGhpcy5nZXRJdGVtVmlld3MoKTtcbiAgICBmb3IgKGNpZCBpbiBfcmVmKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKF9yZWYsIGNpZCkpIGNvbnRpbnVlO1xuICAgICAgdmlldyA9IF9yZWZbY2lkXTtcbiAgICAgIGlmICghKGNpZCBpbiByZW1haW5pbmdWaWV3c0J5Q2lkKSkge1xuICAgICAgICB0aGlzLnJlbW92ZVN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGNpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaW5kZXggPSBfaiA9IDAsIF9sZW4xID0gaXRlbXMubGVuZ3RoOyBfaiA8IF9sZW4xOyBpbmRleCA9ICsrX2opIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB2aWV3ID0gdGhpcy5zdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCk7XG4gICAgICBpZiAodmlldykge1xuICAgICAgICB0aGlzLmluc2VydFZpZXcoaXRlbSwgdmlldywgaW5kZXgsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VmlldyhpdGVtLCB0aGlzLnJlbmRlckl0ZW0oaXRlbSksIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZScsIHRoaXMudmlzaWJsZUl0ZW1zKTtcbiAgICB9XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnJlbmRlckl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIHZpZXc7XG4gICAgdmlldyA9IHRoaXMuc3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQpO1xuICAgIGlmICghdmlldykge1xuICAgICAgdmlldyA9IHRoaXMuaW5pdEl0ZW1WaWV3KGl0ZW0pO1xuICAgICAgdGhpcy5zdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCwgdmlldyk7XG4gICAgfVxuICAgIHZpZXcucmVuZGVyKCk7XG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmluaXRJdGVtVmlldyA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgaWYgKHRoaXMuaXRlbVZpZXcpIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5pdGVtVmlldyh7XG4gICAgICAgIGF1dG9SZW5kZXI6IGZhbHNlLFxuICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBDb2xsZWN0aW9uVmlldyNpdGVtVmlldyBwcm9wZXJ0eSAnICsgJ211c3QgYmUgZGVmaW5lZCBvciB0aGUgaW5pdEl0ZW1WaWV3KCkgbXVzdCBiZSBvdmVycmlkZGVuLicpO1xuICAgIH1cbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaW5zZXJ0VmlldyA9IGZ1bmN0aW9uKGl0ZW0sIHZpZXcsIHBvc2l0aW9uLCBlbmFibGVBbmltYXRpb24pIHtcbiAgICB2YXIgZWxlbSwgaW5jbHVkZWQsIGxlbmd0aCwgbGlzdCxcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBpZiAoZW5hYmxlQW5pbWF0aW9uID09IG51bGwpIHtcbiAgICAgIGVuYWJsZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID09PSAwKSB7XG4gICAgICBlbmFibGVBbmltYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwb3NpdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGluY2x1ZGVkID0gdHlwZW9mIHRoaXMuZmlsdGVyZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmZpbHRlcmVyKGl0ZW0sIHBvc2l0aW9uKSA6IHRydWU7XG4gICAgZWxlbSA9ICQgPyB2aWV3LiRlbCA6IHZpZXcuZWw7XG4gICAgaWYgKGluY2x1ZGVkICYmIGVuYWJsZUFuaW1hdGlvbikge1xuICAgICAgc3RhcnRBbmltYXRpb24oZWxlbSwgdGhpcy51c2VDc3NBbmltYXRpb24sIHRoaXMuYW5pbWF0aW9uU3RhcnRDbGFzcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcmVyKSB7XG4gICAgICB0aGlzLmZpbHRlckNhbGxiYWNrKHZpZXcsIGluY2x1ZGVkKTtcbiAgICB9XG4gICAgbGVuZ3RoID0gdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBsaXN0ID0gJCA/IHRoaXMuJGxpc3QgOiB0aGlzLmxpc3Q7XG4gICAgaW5zZXJ0VmlldyhsaXN0LCBlbGVtLCBwb3NpdGlvbiwgbGVuZ3RoLCB0aGlzLml0ZW1TZWxlY3Rvcik7XG4gICAgdmlldy50cmlnZ2VyKCdhZGRlZFRvUGFyZW50Jyk7XG4gICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoaXRlbSwgaW5jbHVkZWQpO1xuICAgIGlmIChpbmNsdWRlZCAmJiBlbmFibGVBbmltYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLnVzZUNzc0FuaW1hdGlvbikge1xuICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYWRkQ2xhc3MoZWxlbSwgX3RoaXMuYW5pbWF0aW9uRW5kQ2xhc3MpO1xuICAgICAgICB9KSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRBbmltYXRpb24oZWxlbSwgdGhpcy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5yZW1vdmVWaWV3Rm9ySXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhpdGVtLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlU3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS51cGRhdGVWaXNpYmxlSXRlbXMgPSBmdW5jdGlvbihpdGVtLCBpbmNsdWRlZEluRmlsdGVyLCB0cmlnZ2VyRXZlbnQpIHtcbiAgICB2YXIgaW5jbHVkZWRJblZpc2libGVJdGVtcywgdmlzaWJpbGl0eUNoYW5nZWQsIHZpc2libGVJdGVtc0luZGV4O1xuICAgIGlmICh0cmlnZ2VyRXZlbnQgPT0gbnVsbCkge1xuICAgICAgdHJpZ2dlckV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgdmlzaWJpbGl0eUNoYW5nZWQgPSBmYWxzZTtcbiAgICB2aXNpYmxlSXRlbXNJbmRleCA9IHV0aWxzLmluZGV4T2YodGhpcy52aXNpYmxlSXRlbXMsIGl0ZW0pO1xuICAgIGluY2x1ZGVkSW5WaXNpYmxlSXRlbXMgPSB2aXNpYmxlSXRlbXNJbmRleCAhPT0gLTE7XG4gICAgaWYgKGluY2x1ZGVkSW5GaWx0ZXIgJiYgIWluY2x1ZGVkSW5WaXNpYmxlSXRlbXMpIHtcbiAgICAgIHRoaXMudmlzaWJsZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghaW5jbHVkZWRJbkZpbHRlciAmJiBpbmNsdWRlZEluVmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5zcGxpY2UodmlzaWJsZUl0ZW1zSW5kZXgsIDEpO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmlzaWJpbGl0eUNoYW5nZWQgJiYgdHJpZ2dlckV2ZW50KSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2UnLCB0aGlzLnZpc2libGVJdGVtcyk7XG4gICAgfVxuICAgIHJldHVybiB2aXNpYmlsaXR5Q2hhbmdlZDtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9wZXJ0aWVzID0gWyckbGlzdCcsICckZmFsbGJhY2snLCAnJGxvYWRpbmcnLCAndmlzaWJsZUl0ZW1zJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIENvbGxlY3Rpb25WaWV3Ll9fc3VwZXJfXy5kaXNwb3NlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxlY3Rpb25WaWV3O1xuXG59KShWaWV3KTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvcm91dGUnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBDb250cm9sbGVyLCBFdmVudEJyb2tlciwgUm91dGUsIHV0aWxzLCBfLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5Db250cm9sbGVyID0gbG9hZGVyKCdjaGFwbGluL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXInKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGUgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBlc2NhcGVSZWdFeHAsIG9wdGlvbmFsUmVnRXhwLCBwYXJhbVJlZ0V4cCwgcHJvY2Vzc1RyYWlsaW5nU2xhc2g7XG5cbiAgUm91dGUuZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKFJvdXRlLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIGVzY2FwZVJlZ0V4cCA9IC9bXFwte31cXFtcXF0rPy4sXFxcXFxcXiR8I1xcc10vZztcblxuICBvcHRpb25hbFJlZ0V4cCA9IC9cXCgoLio/KVxcKS9nO1xuXG4gIHBhcmFtUmVnRXhwID0gLyg/Ojp8XFwqKShcXHcrKS9nO1xuXG4gIHByb2Nlc3NUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24ocGF0aCwgdHJhaWxpbmcpIHtcbiAgICBzd2l0Y2ggKHRyYWlsaW5nKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGlmIChwYXRoLnNsaWNlKC0xKSAhPT0gJy8nKSB7XG4gICAgICAgICAgcGF0aCArPSAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBpZiAocGF0aC5zbGljZSgtMSkgPT09ICcvJykge1xuICAgICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBmdW5jdGlvbiBSb3V0ZShwYXR0ZXJuLCBjb250cm9sbGVyLCBhY3Rpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgX3JlZjtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5oYW5kbGVyID0gX19iaW5kKHRoaXMuaGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLnJlcGxhY2VQYXJhbXMgPSBfX2JpbmQodGhpcy5yZXBsYWNlUGFyYW1zLCB0aGlzKTtcblxuICAgIHRoaXMucGFyc2VPcHRpb25hbFBvcnRpb24gPSBfX2JpbmQodGhpcy5wYXJzZU9wdGlvbmFsUG9ydGlvbiwgdGhpcyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGU6IFJlZ0V4cHMgYXJlIG5vdCBzdXBwb3J0ZWQuXFxcbiAgICAgICAgVXNlIHN0cmluZ3Mgd2l0aCA6bmFtZXMgYW5kIGBjb25zdHJhaW50c2Agb3B0aW9uIG9mIHJvdXRlJyk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgPyBfLmV4dGVuZCh7fSwgb3B0aW9ucykgOiB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zLm5hbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lLmluZGV4T2YoJyMnKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGU6IFwiI1wiIGNhbm5vdCBiZSB1c2VkIGluIG5hbWUnKTtcbiAgICB9XG4gICAgaWYgKChfcmVmID0gdGhpcy5uYW1lKSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnRyb2xsZXIgKyAnIycgKyB0aGlzLmFjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5hbGxQYXJhbXMgPSBbXTtcbiAgICB0aGlzLnJlcXVpcmVkUGFyYW1zID0gW107XG4gICAgdGhpcy5vcHRpb25hbFBhcmFtcyA9IFtdO1xuICAgIGlmICh0aGlzLmFjdGlvbiBpbiBDb250cm9sbGVyLnByb3RvdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZTogWW91IHNob3VsZCBub3QgdXNlIGV4aXN0aW5nIGNvbnRyb2xsZXIgJyArICdwcm9wZXJ0aWVzIGFzIGFjdGlvbiBuYW1lcycpO1xuICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJlZ0V4cCgpO1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIFJvdXRlLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24oY3JpdGVyaWEpIHtcbiAgICB2YXIgaW52YWxpZFBhcmFtc0NvdW50LCBuYW1lLCBwcm9wZXJ0aWVzQ291bnQsIHByb3BlcnR5LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAodHlwZW9mIGNyaXRlcmlhID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNyaXRlcmlhID09PSB0aGlzLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnRpZXNDb3VudCA9IDA7XG4gICAgICBfcmVmID0gWyduYW1lJywgJ2FjdGlvbicsICdjb250cm9sbGVyJ107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgbmFtZSA9IF9yZWZbX2ldO1xuICAgICAgICBwcm9wZXJ0aWVzQ291bnQrKztcbiAgICAgICAgcHJvcGVydHkgPSBjcml0ZXJpYVtuYW1lXTtcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5ICE9PSB0aGlzW25hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnZhbGlkUGFyYW1zQ291bnQgPSBwcm9wZXJ0aWVzQ291bnQgPT09IDEgJiYgKG5hbWUgPT09ICdhY3Rpb24nIHx8IG5hbWUgPT09ICdjb250cm9sbGVyJyk7XG4gICAgICByZXR1cm4gIWludmFsaWRQYXJhbXNDb3VudDtcbiAgICB9XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbihwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdmFyIG5hbWUsIHF1ZXJ5U3RyaW5nLCByYXcsIHVybCwgdmFsdWUsIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWYsIF9yZWYxO1xuICAgIHBhcmFtcyA9IHRoaXMubm9ybWFsaXplUGFyYW1zKHBhcmFtcyk7XG4gICAgaWYgKHBhcmFtcyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdXJsID0gdGhpcy5wYXR0ZXJuO1xuICAgIF9yZWYgPSB0aGlzLnJlcXVpcmVkUGFyYW1zO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgbmFtZSA9IF9yZWZbX2ldO1xuICAgICAgdmFsdWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShSZWdFeHAoXCJbOipdXCIgKyBuYW1lLCBcImdcIiksIHZhbHVlKTtcbiAgICB9XG4gICAgX3JlZjEgPSB0aGlzLm9wdGlvbmFsUGFyYW1zO1xuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYxLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgbmFtZSA9IF9yZWYxW19qXTtcbiAgICAgIGlmICh2YWx1ZSA9IHBhcmFtc1tuYW1lXSkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShSZWdFeHAoXCJbOipdXCIgKyBuYW1lLCBcImdcIiksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmF3ID0gdXJsLnJlcGxhY2Uob3B0aW9uYWxSZWdFeHAsIGZ1bmN0aW9uKG1hdGNoLCBwb3J0aW9uKSB7XG4gICAgICBpZiAocG9ydGlvbi5tYXRjaCgvWzoqXS9nKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwb3J0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVybCA9IHByb2Nlc3NUcmFpbGluZ1NsYXNoKHJhdywgdGhpcy5vcHRpb25zLnRyYWlsaW5nKTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgcXVlcnlTdHJpbmcgPSB1dGlscy5xdWVyeVBhcmFtcy5zdHJpbmdpZnkocXVlcnkpO1xuICAgICAgcmV0dXJuIHVybCArPSBxdWVyeVN0cmluZyA/ICc/JyArIHF1ZXJ5U3RyaW5nIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmwgKz0gKHF1ZXJ5WzBdID09PSAnPycgPyAnJyA6ICc/JykgKyBxdWVyeTtcbiAgICB9XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLm5vcm1hbGl6ZVBhcmFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBwYXJhbUluZGV4LCBwYXJhbU5hbWUsIHBhcmFtc0hhc2gsIF9pLCBfbGVuLCBfcmVmO1xuICAgIGlmICh1dGlscy5pc0FycmF5KHBhcmFtcykpIHtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoIDwgdGhpcy5yZXF1aXJlZFBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcGFyYW1zSGFzaCA9IHt9O1xuICAgICAgX3JlZiA9IHRoaXMucmVxdWlyZWRQYXJhbXM7XG4gICAgICBmb3IgKHBhcmFtSW5kZXggPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBwYXJhbUluZGV4ID0gKytfaSkge1xuICAgICAgICBwYXJhbU5hbWUgPSBfcmVmW3BhcmFtSW5kZXhdO1xuICAgICAgICBwYXJhbXNIYXNoW3BhcmFtTmFtZV0gPSBwYXJhbXNbcGFyYW1JbmRleF07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGVzdENvbnN0cmFpbnRzKHBhcmFtc0hhc2gpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcyA9IHBhcmFtc0hhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50ZXN0UGFyYW1zKHBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS50ZXN0Q29uc3RyYWludHMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICB2YXIgY29uc3RyYWludCwgY29uc3RyYWludHMsIG5hbWU7XG4gICAgY29uc3RyYWludHMgPSB0aGlzLm9wdGlvbnMuY29uc3RyYWludHM7XG4gICAgaWYgKGNvbnN0cmFpbnRzKSB7XG4gICAgICBmb3IgKG5hbWUgaW4gY29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChjb25zdHJhaW50cywgbmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdHJhaW50ID0gY29uc3RyYWludHNbbmFtZV07XG4gICAgICAgIGlmICghY29uc3RyYWludC50ZXN0KHBhcmFtc1tuYW1lXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnRlc3RQYXJhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICB2YXIgcGFyYW1OYW1lLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBfcmVmID0gdGhpcy5yZXF1aXJlZFBhcmFtcztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHBhcmFtTmFtZSA9IF9yZWZbX2ldO1xuICAgICAgaWYgKHBhcmFtc1twYXJhbU5hbWVdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50ZXN0Q29uc3RyYWludHMocGFyYW1zKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY3JlYXRlUmVnRXhwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhdHRlcm4sXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgcGF0dGVybiA9IHRoaXMucGF0dGVybjtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgJ1xcXFwkJicpO1xuICAgIHRoaXMucmVwbGFjZVBhcmFtcyhwYXR0ZXJuLCBmdW5jdGlvbihtYXRjaCwgcGFyYW0pIHtcbiAgICAgIHJldHVybiBfdGhpcy5hbGxQYXJhbXMucHVzaChwYXJhbSk7XG4gICAgfSk7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZShvcHRpb25hbFJlZ0V4cCwgdGhpcy5wYXJzZU9wdGlvbmFsUG9ydGlvbik7XG4gICAgcGF0dGVybiA9IHRoaXMucmVwbGFjZVBhcmFtcyhwYXR0ZXJuLCBmdW5jdGlvbihtYXRjaCwgcGFyYW0pIHtcbiAgICAgIF90aGlzLnJlcXVpcmVkUGFyYW1zLnB1c2gocGFyYW0pO1xuICAgICAgcmV0dXJuIF90aGlzLnBhcmFtQ2FwdHVyZVBhdHRlcm4obWF0Y2gpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlZ0V4cCA9IFJlZ0V4cChcIl5cIiArIHBhdHRlcm4gKyBcIig/PVxcXFwvPyg/PVxcXFw/fCQpKVwiKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucGFyc2VPcHRpb25hbFBvcnRpb24gPSBmdW5jdGlvbihtYXRjaCwgb3B0aW9uYWxQb3J0aW9uKSB7XG4gICAgdmFyIHBvcnRpb24sXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgcG9ydGlvbiA9IHRoaXMucmVwbGFjZVBhcmFtcyhvcHRpb25hbFBvcnRpb24sIGZ1bmN0aW9uKG1hdGNoLCBwYXJhbSkge1xuICAgICAgX3RoaXMub3B0aW9uYWxQYXJhbXMucHVzaChwYXJhbSk7XG4gICAgICByZXR1cm4gX3RoaXMucGFyYW1DYXB0dXJlUGF0dGVybihtYXRjaCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFwiKD86XCIgKyBwb3J0aW9uICsgXCIpP1wiO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5yZXBsYWNlUGFyYW1zID0gZnVuY3Rpb24ocywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKHBhcmFtUmVnRXhwLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnBhcmFtQ2FwdHVyZVBhdHRlcm4gPSBmdW5jdGlvbihwYXJhbSkge1xuICAgIGlmIChwYXJhbS5jaGFyQXQoMCkgPT09ICc6Jykge1xuICAgICAgcmV0dXJuICcoW15cXC9cXD9dKyknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyguKj8pJztcbiAgICB9XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIGNvbnN0cmFpbnRzLCBtYXRjaGVkO1xuICAgIG1hdGNoZWQgPSB0aGlzLnJlZ0V4cC50ZXN0KHBhdGgpO1xuICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdHJhaW50cyA9IHRoaXMub3B0aW9ucy5jb25zdHJhaW50cztcbiAgICBpZiAoY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlc3RDb25zdHJhaW50cyh0aGlzLmV4dHJhY3RQYXJhbXMocGF0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uKHBhdGhQYXJhbXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWN0aW9uUGFyYW1zLCBwYXJhbXMsIHBhdGgsIHF1ZXJ5LCByb3V0ZSwgX3JlZjtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uZXh0ZW5kKHt9LCBvcHRpb25zKSA6IHt9O1xuICAgIGlmICh0eXBlb2YgcGF0aFBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHF1ZXJ5ID0gdXRpbHMucXVlcnlQYXJhbXMuc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpO1xuICAgICAgcGFyYW1zID0gcGF0aFBhcmFtcztcbiAgICAgIHBhdGggPSB0aGlzLnJldmVyc2UocGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3JlZiA9IHBhdGhQYXJhbXMuc3BsaXQoJz8nKSwgcGF0aCA9IF9yZWZbMF0sIHF1ZXJ5ID0gX3JlZlsxXTtcbiAgICAgIGlmICghKHF1ZXJ5ICE9IG51bGwpKSB7XG4gICAgICAgIHF1ZXJ5ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnF1ZXJ5ID0gdXRpbHMucXVlcnlQYXJhbXMucGFyc2UocXVlcnkpO1xuICAgICAgfVxuICAgICAgcGFyYW1zID0gdGhpcy5leHRyYWN0UGFyYW1zKHBhdGgpO1xuICAgICAgcGF0aCA9IHByb2Nlc3NUcmFpbGluZ1NsYXNoKHBhdGgsIHRoaXMub3B0aW9ucy50cmFpbGluZyk7XG4gICAgfVxuICAgIGFjdGlvblBhcmFtcyA9IF8uZXh0ZW5kKHt9LCBwYXJhbXMsIHRoaXMub3B0aW9ucy5wYXJhbXMpO1xuICAgIHJvdXRlID0ge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICBjb250cm9sbGVyOiB0aGlzLmNvbnRyb2xsZXIsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hFdmVudCgncm91dGVyOm1hdGNoJywgcm91dGUsIGFjdGlvblBhcmFtcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmV4dHJhY3RQYXJhbXMgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIGluZGV4LCBtYXRjaCwgbWF0Y2hlcywgcGFyYW1OYW1lLCBwYXJhbXMsIF9pLCBfbGVuLCBfcmVmO1xuICAgIHBhcmFtcyA9IHt9O1xuICAgIG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC5leGVjKHBhdGgpO1xuICAgIF9yZWYgPSBtYXRjaGVzLnNsaWNlKDEpO1xuICAgIGZvciAoaW5kZXggPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBpbmRleCA9ICsrX2kpIHtcbiAgICAgIG1hdGNoID0gX3JlZltpbmRleF07XG4gICAgICBwYXJhbU5hbWUgPSB0aGlzLmFsbFBhcmFtcy5sZW5ndGggPyB0aGlzLmFsbFBhcmFtc1tpbmRleF0gOiBpbmRleDtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gbWF0Y2g7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9yb3V0ZXInLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBFdmVudEJyb2tlciwgSGlzdG9yeSwgUm91dGUsIFJvdXRlciwgbWVkaWF0b3IsIHV0aWxzLCBfLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbkhpc3RvcnkgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2hpc3RvcnknKTtcblxuUm91dGUgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3JvdXRlJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlciA9IChmdW5jdGlvbigpIHtcblxuICBSb3V0ZXIuZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKFJvdXRlci5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBmdW5jdGlvbiBSb3V0ZXIob3B0aW9ucykge1xuICAgIHZhciBpc1dlYkZpbGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucyA6IHt9O1xuICAgIHRoaXMubWF0Y2ggPSBfX2JpbmQodGhpcy5tYXRjaCwgdGhpcyk7XG5cbiAgICBpc1dlYkZpbGUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOic7XG4gICAgXy5kZWZhdWx0cyh0aGlzLm9wdGlvbnMsIHtcbiAgICAgIHB1c2hTdGF0ZTogaXNXZWJGaWxlLFxuICAgICAgcm9vdDogJy8nLFxuICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5yZW1vdmVSb290ID0gbmV3IFJlZ0V4cCgnXicgKyB1dGlscy5lc2NhcGVSZWdFeHAodGhpcy5vcHRpb25zLnJvb3QpICsgJygjKT8nKTtcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50KCchcm91dGVyOnJvdXRlJywgdGhpcy5vbGRFdmVudEVycm9yKTtcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50KCchcm91dGVyOnJvdXRlQnlOYW1lJywgdGhpcy5vbGRFdmVudEVycm9yKTtcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50KCchcm91dGVyOmNoYW5nZVVSTCcsIHRoaXMub2xkVVJMRXZlbnRFcnJvcik7XG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudCgnZGlzcGF0Y2hlcjpkaXNwYXRjaCcsIHRoaXMuY2hhbmdlVVJMKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyb3V0ZXI6cm91dGUnLCB0aGlzLnJvdXRlLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyb3V0ZXI6cmV2ZXJzZScsIHRoaXMucmV2ZXJzZSwgdGhpcyk7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBSb3V0ZXIucHJvdG90eXBlLm9sZEV2ZW50RXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJyFyb3V0ZXI6cm91dGUgYW5kICFyb3V0ZXI6cm91dGVCeU5hbWUgZXZlbnRzIHdlcmUgcmVtb3ZlZC5cXFxuICBVc2UgYENoYXBsaW4udXRpbHMucmVkaXJlY3RUb2AnKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLm9sZFVSTEV2ZW50RXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJyFyb3V0ZXI6Y2hhbmdlVVJMIGV2ZW50IHdhcyByZW1vdmVkLicpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY3JlYXRlSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCYWNrYm9uZS5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnN0YXJ0SGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KHRoaXMub3B0aW9ucyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5zdG9wSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChCYWNrYm9uZS5IaXN0b3J5LnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS5oaXN0b3J5LnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5maW5kSGFuZGxlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHZhciBoYW5kbGVyLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBfcmVmID0gQmFja2JvbmUuaGlzdG9yeS5oYW5kbGVycztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGhhbmRsZXIgPSBfcmVmW19pXTtcbiAgICAgIGlmIChwcmVkaWNhdGUoaGFuZGxlcikpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbihwYXR0ZXJuLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWN0aW9uLCBjb250cm9sbGVyLCByb3V0ZSwgX3JlZjtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRpb25zID0gdGFyZ2V0O1xuICAgICAgY29udHJvbGxlciA9IG9wdGlvbnMuY29udHJvbGxlciwgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgICBpZiAoIShjb250cm9sbGVyICYmIGFjdGlvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZXIjbWF0Y2ggbXVzdCByZWNlaXZlIGVpdGhlciB0YXJnZXQgb3IgJyArICdvcHRpb25zLmNvbnRyb2xsZXIgJiBvcHRpb25zLmFjdGlvbicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sbGVyID0gb3B0aW9ucy5jb250cm9sbGVyLCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgIGlmIChjb250cm9sbGVyIHx8IGFjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlciNtYXRjaCBjYW5ub3QgdXNlIGJvdGggdGFyZ2V0IGFuZCAnICsgJ29wdGlvbnMuY29udHJvbGxlciAvIG9wdGlvbnMuYWN0aW9uJyk7XG4gICAgICB9XG4gICAgICBfcmVmID0gdGFyZ2V0LnNwbGl0KCcjJyksIGNvbnRyb2xsZXIgPSBfcmVmWzBdLCBhY3Rpb24gPSBfcmVmWzFdO1xuICAgIH1cbiAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgIHRyYWlsaW5nOiB0aGlzLm9wdGlvbnMudHJhaWxpbmdcbiAgICB9KTtcbiAgICByb3V0ZSA9IG5ldyBSb3V0ZShwYXR0ZXJuLCBjb250cm9sbGVyLCBhY3Rpb24sIG9wdGlvbnMpO1xuICAgIEJhY2tib25lLmhpc3RvcnkuaGFuZGxlcnMucHVzaCh7XG4gICAgICByb3V0ZTogcm91dGUsXG4gICAgICBjYWxsYmFjazogcm91dGUuaGFuZGxlclxuICAgIH0pO1xuICAgIHJldHVybiByb3V0ZTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnJvdXRlID0gZnVuY3Rpb24ocGF0aERlc2MsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIHZhciBoYW5kbGVyLCBwYXRoO1xuICAgIGlmICh0eXBlb2YgcGF0aERlc2MgPT09ICdvYmplY3QnKSB7XG4gICAgICBwYXRoID0gcGF0aERlc2MudXJsO1xuICAgICAgaWYgKCFwYXJhbXMgJiYgcGF0aERlc2MucGFyYW1zKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhdGhEZXNjLnBhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1zID0gcGFyYW1zID8gdXRpbHMuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgcGFyYW1zKSA6IHt9O1xuICAgIGlmIChwYXRoICE9IG51bGwpIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UodGhpcy5yZW1vdmVSb290LCAnJyk7XG4gICAgICBoYW5kbGVyID0gdGhpcy5maW5kSGFuZGxlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLnJvdXRlLnRlc3QocGF0aCk7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMgPSBwYXJhbXM7XG4gICAgICBwYXJhbXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uZXh0ZW5kKHt9LCBvcHRpb25zKSA6IHt9O1xuICAgICAgaGFuZGxlciA9IHRoaXMuZmluZEhhbmRsZXIoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlci5yb3V0ZS5tYXRjaGVzKHBhdGhEZXNjKSkge1xuICAgICAgICAgIHBhcmFtcyA9IGhhbmRsZXIucm91dGUubm9ybWFsaXplUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICAgIGNoYW5nZVVSTDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBoYW5kbGVyLmNhbGxiYWNrKHBhdGggfHwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlciNyb3V0ZTogcmVxdWVzdCB3YXMgbm90IHJvdXRlZCcpO1xuICAgIH1cbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbihjcml0ZXJpYSwgcGFyYW1zLCBxdWVyeSkge1xuICAgIHZhciBoYW5kbGVyLCBoYW5kbGVycywgcmV2ZXJzZWQsIHJvb3QsIHVybCwgX2ksIF9sZW47XG4gICAgcm9vdCA9IHRoaXMub3B0aW9ucy5yb290O1xuICAgIGlmICgocGFyYW1zICE9IG51bGwpICYmIHR5cGVvZiBwYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSb3V0ZXIjcmV2ZXJzZTogcGFyYW1zIG11c3QgYmUgYW4gYXJyYXkgb3IgYW4gJyArICdvYmplY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlcnMgPSBCYWNrYm9uZS5oaXN0b3J5LmhhbmRsZXJzO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tfaV07XG4gICAgICBpZiAoIShoYW5kbGVyLnJvdXRlLm1hdGNoZXMoY3JpdGVyaWEpKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldmVyc2VkID0gaGFuZGxlci5yb3V0ZS5yZXZlcnNlKHBhcmFtcywgcXVlcnkpO1xuICAgICAgaWYgKHJldmVyc2VkICE9PSBmYWxzZSkge1xuICAgICAgICB1cmwgPSByb290ID8gcm9vdCArIHJldmVyc2VkIDogcmV2ZXJzZWQ7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignUm91dGVyI3JldmVyc2U6IGludmFsaWQgcm91dGUgc3BlY2lmaWVkJyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jaGFuZ2VVUkwgPSBmdW5jdGlvbihjb250cm9sbGVyLCBwYXJhbXMsIHJvdXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG5hdmlnYXRlT3B0aW9ucywgdXJsO1xuICAgIGlmICghKChyb3V0ZS5wYXRoICE9IG51bGwpICYmIG9wdGlvbnMuY2hhbmdlVVJMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cmwgPSByb3V0ZS5wYXRoICsgKHJvdXRlLnF1ZXJ5ID8gXCI/XCIgKyByb3V0ZS5xdWVyeSA6IFwiXCIpO1xuICAgIG5hdmlnYXRlT3B0aW9ucyA9IHtcbiAgICAgIHRyaWdnZXI6IG9wdGlvbnMudHJpZ2dlciA9PT0gdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IG9wdGlvbnMucmVwbGFjZSA9PT0gdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUodXJsLCBuYXZpZ2F0ZU9wdGlvbnMpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3BIaXN0b3J5KCk7XG4gICAgZGVsZXRlIEJhY2tib25lLmhpc3Rvcnk7XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIG1lZGlhdG9yLnJlbW92ZUhhbmRsZXJzKHRoaXMpO1xuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9oaXN0b3J5JywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgSGlzdG9yeSwgaXNFeHBsb3Jlciwgcm9vdFN0cmlwcGVyLCByb3V0ZVN0cmlwcGVyLCB0cmFpbGluZ1NsYXNoLCBfLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbnJvdXRlU3RyaXBwZXIgPSAvXlsjXFwvXXxcXHMrJC9nO1xuXG5yb290U3RyaXBwZXIgPSAvXlxcLyt8XFwvKyQvZztcblxuaXNFeHBsb3JlciA9IC9tc2llIFtcXHcuXSsvO1xuXG50cmFpbGluZ1NsYXNoID0gL1xcLyQvO1xuXG5IaXN0b3J5ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhIaXN0b3J5LCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIEhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIEhpc3RvcnkuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBIaXN0b3J5LnByb3RvdHlwZS5nZXRGcmFnbWVudCA9IGZ1bmN0aW9uKGZyYWdtZW50LCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgIHZhciByb290O1xuICAgIGlmICghKGZyYWdtZW50ICE9IG51bGwpKSB7XG4gICAgICBpZiAodGhpcy5faGFzUHVzaFN0YXRlIHx8ICF0aGlzLl93YW50c0hhc2hDaGFuZ2UgfHwgZm9yY2VQdXNoU3RhdGUpIHtcbiAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmxvY2F0aW9uLnBhdGhuYW1lICsgdGhpcy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIHJvb3QgPSB0aGlzLnJvb3QucmVwbGFjZSh0cmFpbGluZ1NsYXNoLCAnJyk7XG4gICAgICAgIGlmICghZnJhZ21lbnQuaW5kZXhPZihyb290KSkge1xuICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQuc3Vic3RyKHJvb3QubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50LnJlcGxhY2Uocm91dGVTdHJpcHBlciwgJycpO1xuICB9O1xuXG4gIEhpc3RvcnkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBhdFJvb3QsIGZyYWdtZW50LCBsb2M7XG4gICAgaWYgKEJhY2tib25lLkhpc3Rvcnkuc3RhcnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWNrYm9uZS5oaXN0b3J5IGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCcpO1xuICAgIH1cbiAgICBCYWNrYm9uZS5IaXN0b3J5LnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCB7XG4gICAgICByb290OiAnLydcbiAgICB9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMucm9vdCA9IHRoaXMub3B0aW9ucy5yb290O1xuICAgIHRoaXMuX3dhbnRzSGFzaENoYW5nZSA9IHRoaXMub3B0aW9ucy5oYXNoQ2hhbmdlICE9PSBmYWxzZTtcbiAgICB0aGlzLl93YW50c1B1c2hTdGF0ZSA9IEJvb2xlYW4odGhpcy5vcHRpb25zLnB1c2hTdGF0ZSk7XG4gICAgdGhpcy5faGFzUHVzaFN0YXRlID0gQm9vbGVhbih0aGlzLm9wdGlvbnMucHVzaFN0YXRlICYmIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkucHVzaFN0YXRlKTtcbiAgICBmcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoKTtcbiAgICB0aGlzLnJvb3QgPSAoJy8nICsgdGhpcy5yb290ICsgJy8nKS5yZXBsYWNlKHJvb3RTdHJpcHBlciwgJy8nKTtcbiAgICBpZiAodGhpcy5faGFzUHVzaFN0YXRlKSB7XG4gICAgICBCYWNrYm9uZS4kKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5jaGVja1VybCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgJ29uaGFzaGNoYW5nZScgaW4gd2luZG93KSB7XG4gICAgICBCYWNrYm9uZS4kKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgdGhpcy5fY2hlY2tVcmxJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuY2hlY2tVcmwsIHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgbG9jID0gdGhpcy5sb2NhdGlvbjtcbiAgICBhdFJvb3QgPSBsb2MucGF0aG5hbWUucmVwbGFjZSgvW15cXC9dJC8sICckJi8nKSA9PT0gdGhpcy5yb290O1xuICAgIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgdGhpcy5fd2FudHNQdXNoU3RhdGUgJiYgIXRoaXMuX2hhc1B1c2hTdGF0ZSAmJiAhYXRSb290KSB7XG4gICAgICB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChudWxsLCB0cnVlKTtcbiAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZSh0aGlzLnJvb3QgKyAnIycgKyB0aGlzLmZyYWdtZW50KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNQdXNoU3RhdGUgJiYgdGhpcy5faGFzUHVzaFN0YXRlICYmIGF0Um9vdCAmJiBsb2MuaGFzaCkge1xuICAgICAgdGhpcy5mcmFnbWVudCA9IHRoaXMuZ2V0SGFzaCgpLnJlcGxhY2Uocm91dGVTdHJpcHBlciwgJycpO1xuICAgICAgdGhpcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHRoaXMucm9vdCArIHRoaXMuZnJhZ21lbnQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRVcmwoKTtcbiAgICB9XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbihmcmFnbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBoaXN0b3J5TWV0aG9kLCBpc1NhbWVGcmFnbWVudCwgdXJsO1xuICAgIGlmIChmcmFnbWVudCA9PSBudWxsKSB7XG4gICAgICBmcmFnbWVudCA9ICcnO1xuICAgIH1cbiAgICBpZiAoIUJhY2tib25lLkhpc3Rvcnkuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgdHJpZ2dlcjogb3B0aW9uc1xuICAgICAgfTtcbiAgICB9XG4gICAgZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KGZyYWdtZW50KTtcbiAgICB1cmwgPSB0aGlzLnJvb3QgKyBmcmFnbWVudDtcbiAgICBpZiAodGhpcy5mcmFnbWVudCA9PT0gZnJhZ21lbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFnbWVudCA9IGZyYWdtZW50O1xuICAgIGlmIChmcmFnbWVudC5sZW5ndGggPT09IDAgJiYgdXJsICE9PSAnLycpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgIGhpc3RvcnlNZXRob2QgPSBvcHRpb25zLnJlcGxhY2UgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnO1xuICAgICAgdGhpcy5oaXN0b3J5W2hpc3RvcnlNZXRob2RdKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgdGhpcy5fdXBkYXRlSGFzaCh0aGlzLmxvY2F0aW9uLCBmcmFnbWVudCwgb3B0aW9ucy5yZXBsYWNlKTtcbiAgICAgIGlzU2FtZUZyYWdtZW50ID0gZnJhZ21lbnQgIT09IHRoaXMuZ2V0RnJhZ21lbnQodGhpcy5nZXRIYXNoKHRoaXMuaWZyYW1lKSk7XG4gICAgICBpZiAoKHRoaXMuaWZyYW1lICE9IG51bGwpICYmIGlzU2FtZUZyYWdtZW50KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5yZXBsYWNlKSB7XG4gICAgICAgICAgdGhpcy5pZnJhbWUuZG9jdW1lbnQub3BlbigpLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlSGFzaCh0aGlzLmlmcmFtZS5sb2NhdGlvbiwgZnJhZ21lbnQsIG9wdGlvbnMucmVwbGFjZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkVXJsKGZyYWdtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEhpc3Rvcnk7XG5cbn0pKEJhY2tib25lLkhpc3RvcnkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLiQgPyBIaXN0b3J5IDogQmFja2JvbmUuSGlzdG9yeTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBFdmVudEJyb2tlciwgbWVkaWF0b3IsXG4gIF9fc2xpY2UgPSBbXS5zbGljZTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxuRXZlbnRCcm9rZXIgPSB7XG4gIHN1YnNjcmliZUV2ZW50OiBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXZlbnRCcm9rZXIjc3Vic2NyaWJlRXZlbnQ6ICcgKyAndHlwZSBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXZlbnRCcm9rZXIjc3Vic2NyaWJlRXZlbnQ6ICcgKyAnaGFuZGxlciBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgbWVkaWF0b3IudW5zdWJzY3JpYmUodHlwZSwgaGFuZGxlciwgdGhpcyk7XG4gICAgcmV0dXJuIG1lZGlhdG9yLnN1YnNjcmliZSh0eXBlLCBoYW5kbGVyLCB0aGlzKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmVFdmVudDogZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V2ZW50QnJva2VyI3Vuc3Vic2NyaWJlRXZlbnQ6ICcgKyAndHlwZSBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXZlbnRCcm9rZXIjdW5zdWJzY3JpYmVFdmVudDogJyArICdoYW5kbGVyIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWF0b3IudW5zdWJzY3JpYmUodHlwZSwgaGFuZGxlcik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlQWxsRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWVkaWF0b3IudW5zdWJzY3JpYmUobnVsbCwgbnVsbCwgdGhpcyk7XG4gIH0sXG4gIHB1Ymxpc2hFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIHR5cGU7XG4gICAgdHlwZSA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXZlbnRCcm9rZXIjcHVibGlzaEV2ZW50OiAnICsgJ3R5cGUgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWF0b3IucHVibGlzaC5hcHBseShtZWRpYXRvciwgW3R5cGVdLmNvbmNhdChfX3NsaWNlLmNhbGwoYXJncykpKTtcbiAgfVxufTtcblxuaWYgKHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgT2JqZWN0LmZyZWV6ZShFdmVudEJyb2tlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRCcm9rZXI7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL3N1cHBvcnQnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnQ7XG5cbnN1cHBvcnQgPSB7XG4gIHByb3BlcnR5RGVzY3JpcHRvcnM6IChmdW5jdGlvbigpIHtcbiAgICB2YXIgbztcbiAgICBpZiAoISh0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG8gPSB7fTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCAnZm9vJywge1xuICAgICAgICB2YWx1ZTogJ2JhcidcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG8uZm9vID09PSAnYmFyJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSkoKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0O1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9jb21wb3NpdGlvbicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIENvbXBvc2l0aW9uLCBFdmVudEJyb2tlciwgaGFzLCBfLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5oYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0aW9uID0gKGZ1bmN0aW9uKCkge1xuXG4gIENvbXBvc2l0aW9uLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChDb21wb3NpdGlvbi5wcm90b3R5cGUsIEJhY2tib25lLkV2ZW50cyk7XG5cbiAgXy5leHRlbmQoQ29tcG9zaXRpb24ucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLml0ZW0gPSBudWxsO1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5vcHRpb25zID0gbnVsbDtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuX3N0YWxlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtID0gdGhpcztcbiAgICB0aGlzLmluaXRpYWxpemUodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7fTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuY29tcG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiBfLmlzRXF1YWwodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgfTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuc3RhbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBpdGVtLCBuYW1lO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhbGU7XG4gICAgfVxuICAgIHRoaXMuX3N0YWxlID0gdmFsdWU7XG4gICAgZm9yIChuYW1lIGluIHRoaXMpIHtcbiAgICAgIGl0ZW0gPSB0aGlzW25hbWVdO1xuICAgICAgaWYgKGl0ZW0gJiYgaXRlbSAhPT0gdGhpcyAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaGFzLmNhbGwoaXRlbSwgJ3N0YWxlJykpIHtcbiAgICAgICAgaXRlbS5zdGFsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmosIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHRoaXMsIHByb3ApKSBjb250aW51ZTtcbiAgICAgIG9iaiA9IHRoaXNbcHJvcF07XG4gICAgICBpZiAob2JqICYmIHR5cGVvZiBvYmouZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAob2JqICE9PSB0aGlzKSB7XG4gICAgICAgICAgb2JqLmRpc3Bvc2UoKTtcbiAgICAgICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgcHJvcGVydGllcyA9IFsncmVkaXJlY3RlZCddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRpb247XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL3N5bmNfbWFjaGluZScsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU1RBVEVfQ0hBTkdFLCBTWU5DRUQsIFNZTkNJTkcsIFN5bmNNYWNoaW5lLCBVTlNZTkNFRCwgZXZlbnQsIF9mbiwgX2ksIF9sZW4sIF9yZWY7XG5cblVOU1lOQ0VEID0gJ3Vuc3luY2VkJztcblxuU1lOQ0lORyA9ICdzeW5jaW5nJztcblxuU1lOQ0VEID0gJ3N5bmNlZCc7XG5cblNUQVRFX0NIQU5HRSA9ICdzeW5jU3RhdGVDaGFuZ2UnO1xuXG5TeW5jTWFjaGluZSA9IHtcbiAgX3N5bmNTdGF0ZTogVU5TWU5DRUQsXG4gIF9wcmV2aW91c1N5bmNTdGF0ZTogbnVsbCxcbiAgc3luY1N0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY1N0YXRlO1xuICB9LFxuICBpc1Vuc3luY2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY1N0YXRlID09PSBVTlNZTkNFRDtcbiAgfSxcbiAgaXNTeW5jZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jU3RhdGUgPT09IFNZTkNFRDtcbiAgfSxcbiAgaXNTeW5jaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY1N0YXRlID09PSBTWU5DSU5HO1xuICB9LFxuICB1bnN5bmM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmICgoX3JlZiA9IHRoaXMuX3N5bmNTdGF0ZSkgPT09IFNZTkNJTkcgfHwgX3JlZiA9PT0gU1lOQ0VEKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c1N5bmMgPSB0aGlzLl9zeW5jU3RhdGU7XG4gICAgICB0aGlzLl9zeW5jU3RhdGUgPSBVTlNZTkNFRDtcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLl9zeW5jU3RhdGUsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgICB0aGlzLnRyaWdnZXIoU1RBVEVfQ0hBTkdFLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgIH1cbiAgfSxcbiAgYmVnaW5TeW5jOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAoKF9yZWYgPSB0aGlzLl9zeW5jU3RhdGUpID09PSBVTlNZTkNFRCB8fCBfcmVmID09PSBTWU5DRUQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU3luYyA9IHRoaXMuX3N5bmNTdGF0ZTtcbiAgICAgIHRoaXMuX3N5bmNTdGF0ZSA9IFNZTkNJTkc7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5fc3luY1N0YXRlLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgICAgdGhpcy50cmlnZ2VyKFNUQVRFX0NIQU5HRSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICB9XG4gIH0sXG4gIGZpbmlzaFN5bmM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zeW5jU3RhdGUgPT09IFNZTkNJTkcpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU3luYyA9IHRoaXMuX3N5bmNTdGF0ZTtcbiAgICAgIHRoaXMuX3N5bmNTdGF0ZSA9IFNZTkNFRDtcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLl9zeW5jU3RhdGUsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgICB0aGlzLnRyaWdnZXIoU1RBVEVfQ0hBTkdFLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgIH1cbiAgfSxcbiAgYWJvcnRTeW5jOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc3luY1N0YXRlID09PSBTWU5DSU5HKSB7XG4gICAgICB0aGlzLl9zeW5jU3RhdGUgPSB0aGlzLl9wcmV2aW91c1N5bmM7XG4gICAgICB0aGlzLl9wcmV2aW91c1N5bmMgPSB0aGlzLl9zeW5jU3RhdGU7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5fc3luY1N0YXRlLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgICAgdGhpcy50cmlnZ2VyKFNUQVRFX0NIQU5HRSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICB9XG4gIH1cbn07XG5cbl9yZWYgPSBbVU5TWU5DRUQsIFNZTkNJTkcsIFNZTkNFRCwgU1RBVEVfQ0hBTkdFXTtcbl9mbiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHJldHVybiBTeW5jTWFjaGluZVtldmVudF0gPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLm9uKGV2ZW50LCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgaWYgKHRoaXMuX3N5bmNTdGF0ZSA9PT0gZXZlbnQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGNvbnRleHQpO1xuICAgIH1cbiAgfTtcbn07XG5mb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgZXZlbnQgPSBfcmVmW19pXTtcbiAgX2ZuKGV2ZW50KTtcbn1cblxuaWYgKHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgT2JqZWN0LmZyZWV6ZShTeW5jTWFjaGluZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3luY01hY2hpbmU7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL3V0aWxzJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwb3J0LCB1dGlscywgXyxcbiAgX19zbGljZSA9IFtdLnNsaWNlLFxuICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuc3VwcG9ydCA9IGxvYWRlcignY2hhcGxpbi9saWIvc3VwcG9ydCcpO1xuXG51dGlscyA9IHtcbiAgYmVnZXQ6IChmdW5jdGlvbigpIHtcbiAgICB2YXIgY3RvcjtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdG9yID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgY3Rvci5wcm90b3R5cGUgPSBvYmo7XG4gICAgICAgIHJldHVybiBuZXcgY3RvcjtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpLFxuICBpbmRleE9mOiAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obGlzdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihpbmRleCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoXy5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mO1xuICAgIH1cbiAgfSkoKSxcbiAgaXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBfLmlzQXJyYXksXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YS5zZXJpYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZGF0YS50b0pTT04oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndXRpbHMuc2VyaWFsaXplOiBVbmtub3duIGRhdGEgd2FzIHBhc3NlZCcpO1xuICAgIH1cbiAgfSxcbiAgcmVhZG9ubHk6IChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVhZG9ubHlEZXNjcmlwdG9yO1xuICAgIGlmIChzdXBwb3J0LnByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIHJlYWRvbmx5RGVzY3JpcHRvciA9IHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqLCBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICAgICAgb2JqID0gYXJndW1lbnRzWzBdLCBwcm9wZXJ0aWVzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgICAgIHJlYWRvbmx5RGVzY3JpcHRvci52YWx1ZSA9IG9ialtwcm9wXTtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCByZWFkb25seURlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKSxcbiAgZ2V0UHJvdG90eXBlQ2hhaW46IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBjaGFpbiwgX3JlZiwgX3JlZjEsIF9yZWYyO1xuICAgIGNoYWluID0gW29iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGVdO1xuICAgIHdoaWxlIChvYmplY3QgPSAoX3JlZiA9IChfcmVmMSA9IG9iamVjdC5jb25zdHJ1Y3RvcikgIT0gbnVsbCA/IF9yZWYxLl9fc3VwZXJfXyA6IHZvaWQgMCkgIT0gbnVsbCA/IF9yZWYgOiAoX3JlZjIgPSBvYmplY3QuY29uc3RydWN0b3IpICE9IG51bGwgPyBfcmVmMi5zdXBlcmNsYXNzIDogdm9pZCAwKSB7XG4gICAgICBjaGFpbi5wdXNoKG9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBjaGFpbi5yZXZlcnNlKCk7XG4gIH0sXG4gIGdldEFsbFByb3BlcnR5VmVyc2lvbnM6IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgcHJvdG8sIHJlc3VsdCwgdmFsdWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgIHJlc3VsdCA9IFtdO1xuICAgIF9yZWYgPSB1dGlscy5nZXRQcm90b3R5cGVDaGFpbihvYmplY3QpO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvdG8gPSBfcmVmW19pXTtcbiAgICAgIHZhbHVlID0gcHJvdG9bcHJvcGVydHldO1xuICAgICAgaWYgKHZhbHVlICYmIF9faW5kZXhPZi5jYWxsKHJlc3VsdCwgdmFsdWUpIDwgMCkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIHVwY2FzZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG4gIH0sXG4gIGVzY2FwZVJlZ0V4cDogZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHIgfHwgJycpLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbiAgfSxcbiAgbW9kaWZpZXJLZXlQcmVzc2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIHJldHVybiBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuICB9LFxuICByZXZlcnNlOiBmdW5jdGlvbihjcml0ZXJpYSwgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKS5leGVjdXRlKCdyb3V0ZXI6cmV2ZXJzZScsIGNyaXRlcmlhLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcbiAgcmVkaXJlY3RUbzogZnVuY3Rpb24ocGF0aERlc2MsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIHJldHVybiBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKS5leGVjdXRlKCdyb3V0ZXI6cm91dGUnLCBwYXRoRGVzYywgcGFyYW1zLCBvcHRpb25zKTtcbiAgfSxcbiAgcXVlcnlQYXJhbXM6IHtcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICB2YXIgYXJyUGFyYW0sIGVuY29kZWRLZXksIGtleSwgcXVlcnksIHN0cmluZ2lmeUtleVZhbHVlUGFpciwgdmFsdWUsIF9pLCBfbGVuO1xuICAgICAgcXVlcnkgPSAnJztcbiAgICAgIHN0cmluZ2lmeUtleVZhbHVlUGFpciA9IGZ1bmN0aW9uKGVuY29kZWRLZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuICcmJyArIGVuY29kZWRLZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvciAoa2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwocXVlcnlQYXJhbXMsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSB2YWx1ZS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgYXJyUGFyYW0gPSB2YWx1ZVtfaV07XG4gICAgICAgICAgICBxdWVyeSArPSBzdHJpbmdpZnlLZXlWYWx1ZVBhaXIoZW5jb2RlZEtleSwgYXJyUGFyYW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeSArPSBzdHJpbmdpZnlLZXlWYWx1ZVBhaXIoZW5jb2RlZEtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVlcnkgJiYgcXVlcnkuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICB2YXIgY3VycmVudCwgZmllbGQsIHBhaXIsIHBhaXJzLCBwYXJhbXMsIHZhbHVlLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgaWYgKCFxdWVyeVN0cmluZykge1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfVxuICAgICAgcGFpcnMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwYWlycy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBwYWlyID0gcGFpcnNbX2ldO1xuICAgICAgICBpZiAoIXBhaXIubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgX3JlZiA9IHBhaXIuc3BsaXQoJz0nKSwgZmllbGQgPSBfcmVmWzBdLCB2YWx1ZSA9IF9yZWZbMV07XG4gICAgICAgIGlmICghZmllbGQubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGQgPSBkZWNvZGVVUklDb21wb25lbnQoZmllbGQpO1xuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIGN1cnJlbnQgPSBwYXJhbXNbZmllbGRdO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGlmIChjdXJyZW50LnB1c2gpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtc1tmaWVsZF0gPSBbY3VycmVudCwgdmFsdWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNbZmllbGRdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICB9XG59O1xuXG5pZiAodHlwZW9mIE9iamVjdC5zZWFsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgT2JqZWN0LnNlYWwodXRpbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBcHBsaWNhdGlvbjogbG9hZGVyKCdjaGFwbGluL2FwcGxpY2F0aW9uJyksXG4gIG1lZGlhdG9yOiBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKSxcbiAgRGlzcGF0Y2hlcjogbG9hZGVyKCdjaGFwbGluL2Rpc3BhdGNoZXInKSxcbiAgQ29udHJvbGxlcjogbG9hZGVyKCdjaGFwbGluL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXInKSxcbiAgQ29tcG9zZXI6IGxvYWRlcignY2hhcGxpbi9jb21wb3NlcicpLFxuICBDb21wb3NpdGlvbjogbG9hZGVyKCdjaGFwbGluL2xpYi9jb21wb3NpdGlvbicpLFxuICBDb2xsZWN0aW9uOiBsb2FkZXIoJ2NoYXBsaW4vbW9kZWxzL2NvbGxlY3Rpb24nKSxcbiAgTW9kZWw6IGxvYWRlcignY2hhcGxpbi9tb2RlbHMvbW9kZWwnKSxcbiAgTGF5b3V0OiBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvbGF5b3V0JyksXG4gIFZpZXc6IGxvYWRlcignY2hhcGxpbi92aWV3cy92aWV3JyksXG4gIENvbGxlY3Rpb25WaWV3OiBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvY29sbGVjdGlvbl92aWV3JyksXG4gIFJvdXRlOiBsb2FkZXIoJ2NoYXBsaW4vbGliL3JvdXRlJyksXG4gIFJvdXRlcjogbG9hZGVyKCdjaGFwbGluL2xpYi9yb3V0ZXInKSxcbiAgRXZlbnRCcm9rZXI6IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyksXG4gIHN1cHBvcnQ6IGxvYWRlcignY2hhcGxpbi9saWIvc3VwcG9ydCcpLFxuICBTeW5jTWFjaGluZTogbG9hZGVyKCdjaGFwbGluL2xpYi9zeW5jX21hY2hpbmUnKSxcbiAgdXRpbHM6IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKVxufTtcblxufSk7XG52YXIgcmVnRGVwcyA9IGZ1bmN0aW9uKEJhY2tib25lLCBfKSB7XG4gIGxvYWRlci5yZWdpc3RlcignYmFja2JvbmUnLCBmdW5jdGlvbihleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lO1xuICB9KTtcbiAgbG9hZGVyLnJlZ2lzdGVyKCd1bmRlcnNjb3JlJywgZnVuY3Rpb24oZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfO1xuICB9KTtcbn07XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFsnYmFja2JvbmUnLCAndW5kZXJzY29yZSddLCBmdW5jdGlvbihCYWNrYm9uZSwgXykge1xuICAgIHJlZ0RlcHMoQmFja2JvbmUsIF8pO1xuICAgIHJldHVybiBsb2FkZXIoJ2NoYXBsaW4nKTtcbiAgfSk7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICByZWdEZXBzKHJlcXVpcmUoJ2JhY2tib25lJyksIHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSk7XG4gIG1vZHVsZS5leHBvcnRzID0gbG9hZGVyKCdjaGFwbGluJyk7XG59IGVsc2UgaWYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gIHJlZ0RlcHMod2luZG93LkJhY2tib25lLCB3aW5kb3cuXyB8fCB3aW5kb3cuQmFja2JvbmUudXRpbHMpO1xuICB3aW5kb3cuQ2hhcGxpbiA9IGxvYWRlcignY2hhcGxpbicpO1xufSBlbHNlIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDaGFwbGluIHJlcXVpcmVzIENvbW1vbi5qcyBvciBBTUQgbW9kdWxlcycpO1xufVxuXG59KSgpOyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuNS4yXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIGNvbmNhdCAgICAgICAgICAgPSBBcnJheVByb3RvLmNvbmNhdCxcbiAgICB0b1N0cmluZyAgICAgICAgID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgICA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyXG4gICAgbmF0aXZlRm9yRWFjaCAgICAgID0gQXJyYXlQcm90by5mb3JFYWNoLFxuICAgIG5hdGl2ZU1hcCAgICAgICAgICA9IEFycmF5UHJvdG8ubWFwLFxuICAgIG5hdGl2ZVJlZHVjZSAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlLFxuICAgIG5hdGl2ZVJlZHVjZVJpZ2h0ICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgbmF0aXZlRmlsdGVyICAgICAgID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgbmF0aXZlRXZlcnkgICAgICAgID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lICAgICAgICAgPSBBcnJheVByb3RvLnNvbWUsXG4gICAgbmF0aXZlSW5kZXhPZiAgICAgID0gQXJyYXlQcm90by5pbmRleE9mLFxuICAgIG5hdGl2ZUxhc3RJbmRleE9mICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgbmF0aXZlSXNBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzICAgICAgICAgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kICAgICAgICAgPSBGdW5jUHJvdG8uYmluZDtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QgdmlhIGEgc3RyaW5nIGlkZW50aWZpZXIsXG4gIC8vIGZvciBDbG9zdXJlIENvbXBpbGVyIFwiYWR2YW5jZWRcIiBtb2RlLlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjUuMic7XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyBvYmplY3RzIHdpdGggdGhlIGJ1aWx0LWluIGBmb3JFYWNoYCwgYXJyYXlzLCBhbmQgcmF3IG9iamVjdHMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmb3JFYWNoYCBpZiBhdmFpbGFibGUuXG4gIHZhciBlYWNoID0gXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZU1hcCAmJiBvYmoubWFwID09PSBuYXRpdmVNYXApIHJldHVybiBvYmoubWFwKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcmVkdWNlRXJyb3IgPSAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlYCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlICYmIG9iai5yZWR1Y2UgPT09IG5hdGl2ZVJlZHVjZSkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZShpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSB2YWx1ZTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VSaWdodGAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZVJpZ2h0ICYmIG9iai5yZWR1Y2VSaWdodCA9PT0gbmF0aXZlUmVkdWNlUmlnaHQpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSArbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGluZGV4ID0ga2V5cyA/IGtleXNbLS1sZW5ndGhdIDogLS1sZW5ndGg7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtpbmRleF07XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgb2JqW2luZGV4XSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZmlsdGVyYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVGaWx0ZXIgJiYgb2JqLmZpbHRlciA9PT0gbmF0aXZlRmlsdGVyKSByZXR1cm4gb2JqLmZpbHRlcihpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiAhaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0sIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZXZlcnlgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlRXZlcnkgJiYgb2JqLmV2ZXJ5ID09PSBuYXRpdmVFdmVyeSkgcmV0dXJuIG9iai5ldmVyeShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCEocmVzdWx0ID0gcmVzdWx0ICYmIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHNvbWVgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgdmFyIGFueSA9IF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZVNvbWUgJiYgb2JqLnNvbWUgPT09IG5hdGl2ZVNvbWUpIHJldHVybiBvYmouc29tZShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gdmFsdWUgKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIHRhcmdldCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIG9iai5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gb2JqLmluZGV4T2YodGFyZ2V0KSAhPSAtMTtcbiAgICByZXR1cm4gYW55KG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IGZ1bmN0aW9uKG9iaiwgbWV0aG9kKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGlzRnVuYyA9IF8uaXNGdW5jdGlvbihtZXRob2QpO1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKGlzRnVuYyA/IG1ldGhvZCA6IHZhbHVlW21ldGhvZF0pLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiB2YWx1ZVtrZXldOyB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzLCBmaXJzdCkge1xuICAgIGlmIChfLmlzRW1wdHkoYXR0cnMpKSByZXR1cm4gZmlyc3QgPyB2b2lkIDAgOiBbXTtcbiAgICByZXR1cm4gX1tmaXJzdCA/ICdmaW5kJyA6ICdmaWx0ZXInXShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzW2tleV0gIT09IHZhbHVlW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8ud2hlcmUob2JqLCBhdHRycywgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWUgW1dlYktpdCBCdWcgODA3OTddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5NylcbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogLUluZmluaXR5LCB2YWx1ZTogLUluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPiByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiBJbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogSW5maW5pdHksIHZhbHVlOiBJbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkIDwgcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheSwgdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZSBcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmFuZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzaHVmZmxlZCA9IFtdO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKGluZGV4KyspO1xuICAgICAgc2h1ZmZsZWRbaW5kZXggLSAxXSA9IHNodWZmbGVkW3JhbmRdO1xuICAgICAgc2h1ZmZsZWRbcmFuZF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudCBmcm9tIHRoZSBhcnJheS5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IGd1YXJkKSB7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgbG9va3VwIGl0ZXJhdG9ycy5cbiAgdmFyIGxvb2t1cEl0ZXJhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlIDogZnVuY3Rpb24ob2JqKXsgcmV0dXJuIG9ialt2YWx1ZV07IH07XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdG9yLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWx1ZSA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKHZhbHVlKTtcbiAgICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgKF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldIDogKHJlc3VsdFtrZXldID0gW10pKS5wdXNoKHZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgIF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldKysgOiByZXN1bHRba2V5XSA9IDE7XG4gIH0pO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yID09IG51bGwgPyBfLmlkZW50aXR5IDogbG9va3VwSXRlcmF0b3IoaXRlcmF0b3IpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMTtcbiAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbbWlkXSkgPCB2YWx1ZSA/IGxvdyA9IG1pZCArIDEgOiBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIChuID09IG51bGwpIHx8IGd1YXJkID8gYXJyYXlbMF0gOiBzbGljZS5jYWxsKGFycmF5LCAwLCBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoXG4gIC8vIGBfLm1hcGAuXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbikpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmICgobiA9PSBudWxsKSB8fCBndWFyZCkge1xuICAgICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKlxuICAvLyBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBfLmlkZW50aXR5KTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIG91dHB1dCkge1xuICAgIGlmIChzaGFsbG93ICYmIF8uZXZlcnkoaW5wdXQsIF8uaXNBcnJheSkpIHtcbiAgICAgIHJldHVybiBjb25jYXQuYXBwbHkob3V0cHV0LCBpbnB1dCk7XG4gICAgfVxuICAgIGVhY2goaW5wdXQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkge1xuICAgICAgICBzaGFsbG93ID8gcHVzaC5hcHBseShvdXRwdXQsIHZhbHVlKSA6IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIG91dHB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIFtdKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRvcjtcbiAgICAgIGl0ZXJhdG9yID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbCA9IGl0ZXJhdG9yID8gXy5tYXAoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSA6IGFycmF5O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBlYWNoKGluaXRpYWwsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKGlzU29ydGVkID8gKCFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IHZhbHVlKSA6ICFfLmNvbnRhaW5zKHNlZW4sIHZhbHVlKSkge1xuICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuICAgICAgICByZXN1bHRzLnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKF8uZmxhdHRlbihhcmd1bWVudHMsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoXy51bmlxKGFycmF5KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF8uZXZlcnkocmVzdCwgZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5kZXhPZihvdGhlciwgaXRlbSkgPj0gMDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpOyB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBfLm1heChfLnBsdWNrKGFyZ3VtZW50cywgXCJsZW5ndGhcIikuY29uY2F0KDApKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3VtZW50cywgJycgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBseSB1cyB3aXRoIGluZGV4T2YgKEknbSBsb29raW5nIGF0IHlvdSwgKipNU0lFKiopLFxuICAvLyB3ZSBuZWVkIHRoaXMgZnVuY3Rpb24uIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW5cbiAgLy8gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpc1NvcnRlZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaXNTb3J0ZWQpIDogaXNTb3J0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IF8uc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaV0gPT09IGl0ZW0gPyBpIDogLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0sIGlzU29ydGVkKTtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbGFzdEluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgXy5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBmcm9tKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaGFzSW5kZXggPSBmcm9tICE9IG51bGw7XG4gICAgaWYgKG5hdGl2ZUxhc3RJbmRleE9mICYmIGFycmF5Lmxhc3RJbmRleE9mID09PSBuYXRpdmVMYXN0SW5kZXhPZikge1xuICAgICAgcmV0dXJuIGhhc0luZGV4ID8gYXJyYXkubGFzdEluZGV4T2YoaXRlbSwgZnJvbSkgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAoaGFzSW5kZXggPyBmcm9tIDogYXJyYXkubGVuZ3RoKTtcbiAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gYXJndW1lbnRzWzJdIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciByYW5nZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUoaWR4IDwgbGVuZ3RoKSB7XG4gICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV1c2FibGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHByb3RvdHlwZSBzZXR0aW5nLlxuICB2YXIgY3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncywgYm91bmQ7XG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgYm91bmQpKSByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VsZiA9IG5ldyBjdG9yO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQmluZCBhbGwgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0XG4gIC8vIGFsbCBjYWxsYmFja3MgZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgZnVuY3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lc1wiKTtcbiAgICBlYWNoKGZ1bmNzLCBmdW5jdGlvbihmKSB7IG9ialtmXSA9IF8uYmluZChvYmpbZl0sIG9iaik7IH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW8gPSB7fTtcbiAgICBoYXNoZXIgfHwgKGhhc2hlciA9IF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfLmhhcyhtZW1vLCBrZXkpID8gbWVtb1trZXldIDogKG1lbW9ba2V5XSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpeyByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTsgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIF8uZGVsYXkuYXBwbHkoXywgW2Z1bmMsIDFdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IG5ldyBEYXRlO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxhc3QgPSAobmV3IERhdGUoKSkgLSB0aW1lc3RhbXA7XG4gICAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoY2FsbE5vdykgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciByYW4gPSBmYWxzZSwgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmFuKSByZXR1cm4gbWVtbztcbiAgICAgIHJhbiA9IHRydWU7XG4gICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IFtmdW5jXTtcbiAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB3cmFwcGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZm9yICh2YXIgaSA9IGZ1bmNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbZnVuY3NbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYWZ0ZXIgYmVpbmcgY2FsbGVkIE4gdGltZXMuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gbmF0aXZlS2V5cyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqICE9PSBPYmplY3Qob2JqKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvYmplY3QnKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBlYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghXy5jb250YWlucyhrZXlzLCBrZXkpKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICB2YXIgc2l6ZSA9IDAsIHJlc3VsdCA9IHRydWU7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIHNpemUgPSBhLmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpemUgPT0gYi5sZW5ndGg7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBlcShhW3NpemVdLCBiW3NpemVdLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChfLmhhcyhhLCBrZXkpKSB7XG4gICAgICAgICAgLy8gQ291bnQgdGhlIGV4cGVjdGVkIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXIuXG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgaWYgKF8uaGFzKGIsIGtleSkgJiYgIShzaXplLS0pKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSAhc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIsIFtdLCBbXSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cC5cbiAgZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFKSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gISEob2JqICYmIF8uaGFzKG9iaiwgJ2NhbGxlZScpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLlxuICBpZiAodHlwZW9mICgvLi8pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRvcnMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgZXNjYXBlOiB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICBcIidcIjogJyYjeDI3OydcbiAgICB9XG4gIH07XG4gIGVudGl0eU1hcC51bmVzY2FwZSA9IF8uaW52ZXJ0KGVudGl0eU1hcC5lc2NhcGUpO1xuXG4gIC8vIFJlZ2V4ZXMgY29udGFpbmluZyB0aGUga2V5cyBhbmQgdmFsdWVzIGxpc3RlZCBpbW1lZGlhdGVseSBhYm92ZS5cbiAgdmFyIGVudGl0eVJlZ2V4ZXMgPSB7XG4gICAgZXNjYXBlOiAgIG5ldyBSZWdFeHAoJ1snICsgXy5rZXlzKGVudGl0eU1hcC5lc2NhcGUpLmpvaW4oJycpICsgJ10nLCAnZycpLFxuICAgIHVuZXNjYXBlOiBuZXcgUmVnRXhwKCcoJyArIF8ua2V5cyhlbnRpdHlNYXAudW5lc2NhcGUpLmpvaW4oJ3wnKSArICcpJywgJ2cnKVxuICB9O1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgXy5lYWNoKFsnZXNjYXBlJywgJ3VuZXNjYXBlJ10sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIF9bbWV0aG9kXSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZyA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICByZXR1cm4gKCcnICsgc3RyaW5nKS5yZXBsYWNlKGVudGl0eVJlZ2V4ZXNbbWV0aG9kXSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eU1hcFttZXRob2RdW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlICAgIDogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZSA6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZSAgICAgIDogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogICAgICBcIidcIixcbiAgICAnXFxcXCc6ICAgICAnXFxcXCcsXG4gICAgJ1xccic6ICAgICAncicsXG4gICAgJ1xcbic6ICAgICAnbicsXG4gICAgJ1xcdCc6ICAgICAndCcsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdHxcXHUyMDI4fFxcdTIwMjkvZztcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgZGF0YSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgcmVuZGVyO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgICAgIC5yZXBsYWNlKGVzY2FwZXIsIGZ1bmN0aW9uKG1hdGNoKSB7IHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTsgfSk7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyBcInJldHVybiBfX3A7XFxuXCI7XG5cbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSByZXR1cm4gcmVuZGVyKGRhdGEsIF8pO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgZnVuY3Rpb24gc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonKSArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVyLlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8ob2JqKS5jaGFpbigpO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PSAnc2hpZnQnIHx8IG5hbWUgPT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICBfLmV4dGVuZChfLnByb3RvdHlwZSwge1xuXG4gICAgLy8gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICAgIGNoYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2NoYWluID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgICB9XG5cbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iXX0=
