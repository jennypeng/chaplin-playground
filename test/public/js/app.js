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

  ImageModel.prototype.initialize = function() {
    return console.log("instance of imageModel created", this.collection);
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

  PhotosCollection.prototype.url = '/photos.json';

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
},{}],"../templates/photo":[function(require,module,exports){
module.exports=require('DAW7G5');
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
    + "</p>\n</div>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/photos":[function(require,module,exports){
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
var CollectionView, ImageModel, ImagesCollectionView, PhotoView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CollectionView = require('./base/collection-view');

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
    return this.collection.fetch({
      reset: true,
      success: this.onFetchSuccess,
      error: this.onFetchError
    });
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
    console.log("hefawefaewf " + imageCaption);
    image = {
      imageTitle: imageTitle,
      imageCaption: imageCaption,
      imageSrc: imageSrc
    };
    return this.collection.push(image);
  };

  return ImagesCollectionView;

})(CollectionView);


},{"../models/image":15,"../templates/photos":"2+wKAI","./base/collection-view":33,"./photo":40}],40:[function(require,module,exports){
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

  PhotoView.prototype.initialize = function() {
    PhotoView.__super__.initialize.apply(this, arguments);
    console.log("model is ", this.model);
    return console.log("model collection ", this.model.collection);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvYXBwbGljYXRpb24uY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvYXNzZXRzL2luZGV4LmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL2NvbnRyb2xsZXJzL2Jhc2UvY29udHJvbGxlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvY29udHJvbGxlcnMvaW1hZ2UtY29udHJvbGxlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9pbml0aWFsaXplLmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL2xpYi91dGlscy5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9saWIvdmlldy1oZWxwZXIuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbWVkaWF0b3IuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbW9kZWxzL2Jhc2UvY29sbGVjdGlvbi5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9tb2RlbHMvYmFzZS9tb2RlbC5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9tb2RlbHMvaW1hZ2UuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvbW9kZWxzL3Bob3Rvcy5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC9yb3V0ZXMuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL2Zvb3Rlci5oYnMiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC90ZW1wbGF0ZXMvaGVhZGVyLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9ob21lLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9pbmRleC5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9qdW1ib3Ryb24uaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL3Bob3RvLmhicyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3RlbXBsYXRlcy9waG90b3MuaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdGVtcGxhdGVzL3NpdGUuaGJzIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvYmFzZS9jb2xsZWN0aW9uLXZpZXcuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvYmFzZS92aWV3LmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3ZpZXdzL2Jvb3RzdHJhcC9qdW1ib3Ryb24uY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9hcHAvdmlld3MvZm9vdGVyLmNvZmZlZSIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3QvYXBwL3ZpZXdzL2hlYWRlci5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9ob21lL2hvbWUtcGFnZS5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9pbWFnZXMtY29sbGVjdGlvbi5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9waG90by5jb2ZmZWUiLCIvVXNlcnMvanBlbmcvRG9jdW1lbnRzL0dpdEh1Yi9nZW5lcmF0b3ItY2hhcGxpbi90ZXN0L2FwcC92aWV3cy9zaXRlLXZpZXcuY29mZmVlIiwiL1VzZXJzL2pwZW5nL0RvY3VtZW50cy9HaXRIdWIvZ2VuZXJhdG9yLWNoYXBsaW4vdGVzdC9ib3dlcl9jb21wb25lbnRzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3Qvbm9kZV9tb2R1bGVzL2NoYXBsaW4vY2hhcGxpbi5qcyIsIi9Vc2Vycy9qcGVuZy9Eb2N1bWVudHMvR2l0SHViL2dlbmVyYXRvci1jaGFwbGluL3Rlc3Qvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUEsaUNBQUE7RUFBQTtpU0FBQTs7QUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBcEIsQ0FBQTs7QUFBQSxPQUdBLENBQVEsaURBQVIsQ0FIQSxDQUFBOztBQUFBLFFBS0EsR0FBYSxPQUFBLENBQVEsVUFBUixDQUxiLENBQUE7O0FBQUEsUUFNUSxDQUFDLENBQVQsR0FBYSxDQU5iLENBQUE7O0FBQUEsT0FPQSxHQUFhLE9BQUEsQ0FBUSxTQUFSLENBUGIsQ0FBQTs7QUFBQSxNQVNNLENBQUMsT0FBUCxHQUF1QjtBQUFOLGdDQUFBLENBQUE7Ozs7R0FBQTs7cUJBQUE7O0dBQTBCLE9BQU8sQ0FBQyxZQVRuRCxDQUFBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQSxJQUFBLDZCQUFBO0VBQUE7aVNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxRQUNBLEdBQVcsT0FBQSxDQUFRLHVCQUFSLENBRFgsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUVyQiwrQkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsdUJBQUEsWUFBQSxHQUFjLFNBQUEsR0FBQTtXQUNaLElBQUMsQ0FBQSxLQUFELENBQU8sTUFBUCxFQUFlLFFBQWYsRUFEWTtFQUFBLENBQWQsQ0FBQTs7b0JBQUE7O0dBRndDLE9BQU8sQ0FBQyxXQUhsRCxDQUFBOzs7Ozs7OztBQ0FBLElBQUEsK0VBQUE7RUFBQTtpU0FBQTs7QUFBQSxVQUFBLEdBQWdCLE9BQUEsQ0FBUSxtQkFBUixDQUFoQixDQUFBOztBQUFBLFVBQ0EsR0FBZ0IsT0FBQSxDQUFRLGlCQUFSLENBRGhCLENBQUE7O0FBQUEsVUFFQSxHQUFnQixPQUFBLENBQVEsaUJBQVIsQ0FGaEIsQ0FBQTs7QUFBQSxZQUdBLEdBQWdCLE9BQUEsQ0FBUSx5QkFBUixDQUhoQixDQUFBOztBQUFBLGFBSUEsR0FBZ0IsT0FBQSxDQUFRLDhCQUFSLENBSmhCLENBQUE7O0FBQUEsTUFNTSxDQUFDLE9BQVAsR0FBdUI7QUFFckIsbUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDJCQUFBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixJQUFBLGtEQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsVUFBakIsRUFBNkI7QUFBQSxNQUFBLE1BQUEsRUFBUSxRQUFSO0tBQTdCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxFQUFpQixVQUFqQixFQUE2QjtBQUFBLE1BQUEsTUFBQSxFQUFRLFFBQVI7S0FBN0IsRUFKWTtFQUFBLENBQWQsQ0FBQTs7QUFBQSwyQkFNQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsSUFBQSxJQUFDLENBQUEsSUFBRCxHQUFZLElBQUEsYUFBQSxDQUFjO0FBQUEsTUFBQSxNQUFBLEVBQVEsTUFBUjtLQUFkLENBQVosQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLElBQUksQ0FBQyxPQUFOLENBQWMsbUJBQWQsRUFBdUMsSUFBQSxZQUFBLENBQWE7QUFBQSxNQUFBLE1BQUEsRUFBUSxNQUFSO0tBQWIsQ0FBdkMsQ0FEQSxDQUFBO1dBR0EsS0FKSztFQUFBLENBTlAsQ0FBQTs7d0JBQUE7O0dBRjRDLFdBTjlDLENBQUE7Ozs7QUNBQSxJQUFBLDZJQUFBO0VBQUE7aVNBQUE7O0FBQUEsVUFBQSxHQUFnQixPQUFBLENBQVEsbUJBQVIsQ0FBaEIsQ0FBQTs7QUFBQSxVQUNBLEdBQWdCLE9BQUEsQ0FBUSxpQkFBUixDQURoQixDQUFBOztBQUFBLFVBRUEsR0FBZ0IsT0FBQSxDQUFRLGlCQUFSLENBRmhCLENBQUE7O0FBQUEsWUFHQSxHQUFnQixPQUFBLENBQVEseUJBQVIsQ0FIaEIsQ0FBQTs7QUFBQSxhQUlBLEdBQWdCLE9BQUEsQ0FBUSw4QkFBUixDQUpoQixDQUFBOztBQUFBLG9CQUtBLEdBQXVCLE9BQUEsQ0FBUSw0QkFBUixDQUx2QixDQUFBOztBQUFBLGdCQU1BLEdBQW1CLE9BQUEsQ0FBUSxrQkFBUixDQU5uQixDQUFBOztBQUFBLFVBT0EsR0FBYSxPQUFBLENBQVEsaUJBQVIsQ0FQYixDQUFBOztBQUFBLE9BUUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQVJWLENBQUE7O0FBQUEsTUFVTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsb0NBQUEsQ0FBQTs7OztHQUFBOztBQUFBLDRCQUFBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixJQUFBLG1EQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsVUFBakIsRUFBNkI7QUFBQSxNQUFBLE1BQUEsRUFBUSxRQUFSO0tBQTdCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxFQUFpQixVQUFqQixFQUE2QjtBQUFBLE1BQUEsTUFBQSxFQUFRLFFBQVI7S0FBN0IsRUFKWTtFQUFBLENBQWQsQ0FBQTs7QUFBQSw0QkFNQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBSUwsSUFBQSxJQUFDLENBQUEsSUFBRCxHQUFZLElBQUEsb0JBQUEsQ0FDVjtBQUFBLE1BQUEsTUFBQSxFQUFRLE1BQVI7QUFBQSxNQUNBLFVBQUEsRUFBWSxHQUFBLENBQUEsZ0JBRFo7S0FEVSxDQUFaLENBQUE7V0FNQSxLQVZLO0VBQUEsQ0FOUCxDQUFBOzt5QkFBQTs7R0FENkMsV0FWL0MsQ0FBQTs7Ozs7O0FDQUEsSUFBQSxzQkFBQTs7QUFBQSxDQUFBLEdBQWMsT0FBQSxDQUFRLFFBQVIsQ0FBZCxDQUFBOztBQUFBLFdBRUEsR0FBYyxPQUFBLENBQVEsZUFBUixDQUZkLENBQUE7O0FBQUEsTUFHQSxHQUFjLE9BQUEsQ0FBUSxVQUFSLENBSGQsQ0FBQTs7QUFBQSxDQUtBLENBQUUsU0FBQSxHQUFBO1NBRUksSUFBQSxXQUFBLENBQVk7QUFBQSxJQUNkLEtBQUEsRUFBTyxNQURPO0FBQUEsSUFFZCxnQkFBQSxFQUFrQixhQUZKO0FBQUEsSUFHZCxRQUFBLE1BSGM7R0FBWixFQUZKO0FBQUEsQ0FBRixDQUxBLENBQUE7Ozs7QUNBQSxJQUFBLGNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxLQUtBLEdBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFkLENBQW9CLE9BQU8sQ0FBQyxLQUE1QixDQUxSLENBQUE7OztFQVdBLE1BQU0sQ0FBQyxLQUFNO0NBWGI7O0FBQUEsTUFhTSxDQUFDLE9BQVAsR0FBaUIsS0FiakIsQ0FBQTs7OztBQ0FBLElBQUEsNkJBQUE7RUFBQSxrQkFBQTs7QUFBQSxPQUFBLEdBQWEsT0FBQSxDQUFRLFNBQVIsQ0FBYixDQUFBOztBQUFBLFVBQ0EsR0FBYSxPQUFBLENBQVEsZUFBUixDQURiLENBQUE7O0FBQUEsUUFPQSxHQUFXLFNBQUMsSUFBRCxFQUFPLEVBQVAsR0FBQTtTQUNULFVBQVUsQ0FBQyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLEVBQWhDLEVBRFM7QUFBQSxDQVBYLENBQUE7O0FBQUEsUUFjQSxDQUFTLE1BQVQsRUFBaUIsU0FBQyxPQUFELEVBQVUsT0FBVixHQUFBO0FBQ2YsRUFBQSxJQUFHLENBQUEsT0FBQSxJQUFlLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBakIsQ0FBeUIsT0FBekIsQ0FBbEI7V0FDRSxPQUFPLENBQUMsT0FBUixDQUFnQixJQUFoQixFQURGO0dBQUEsTUFBQTtXQUdFLE9BQU8sQ0FBQyxFQUFSLENBQVcsT0FBWCxFQUhGO0dBRGU7QUFBQSxDQUFqQixDQWRBLENBQUE7O0FBQUEsUUFxQkEsQ0FBUyxTQUFULEVBQW9CLFNBQUMsT0FBRCxFQUFVLE9BQVYsR0FBQTtBQUNsQixNQUFBLE9BQUE7QUFBQSxFQUFBLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBbEIsQ0FBQTtBQUFBLEVBQ0EsT0FBTyxDQUFDLE9BQVIsR0FBa0IsT0FBTyxDQUFDLEVBRDFCLENBQUE7QUFBQSxFQUVBLE9BQU8sQ0FBQyxFQUFSLEdBQWEsT0FGYixDQUFBO1NBR0EsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFELENBQUssQ0FBQyxJQUF4QixDQUE2QixJQUE3QixFQUFtQyxPQUFuQyxFQUE0QyxPQUE1QyxFQUprQjtBQUFBLENBQXBCLENBckJBLENBQUE7O0FBQUEsUUE0QkEsQ0FBUyxLQUFULEVBQWdCLFNBQUEsR0FBQTtBQUNkLE1BQUEsOEJBQUE7QUFBQSxFQURlLDBCQUFXLHVHQUFXLHlCQUNyQyxDQUFBO1NBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFkLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLEVBRGM7QUFBQSxDQUFoQixDQTVCQSxDQUFBOzs7O0FDQUEsSUFBQSxpQkFBQTs7QUFBQSxPQUFBLEdBQVcsT0FBQSxDQUFRLFNBQVIsQ0FBWCxDQUFBOztBQUFBLFFBQ0EsR0FBVyxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsUUFEcEMsQ0FBQTs7OztBQ0FBLElBQUEsMEJBQUE7RUFBQTtpU0FBQTs7QUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FBVixDQUFBOztBQUFBLEtBQ0EsR0FBVSxPQUFBLENBQVEsU0FBUixDQURWLENBQUE7O0FBQUEsTUFHTSxDQUFDLE9BQVAsR0FBdUI7QUFFckIsK0JBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHVCQUFBLEtBQUEsR0FBTyxLQUFQLENBQUE7O29CQUFBOztHQUZ3QyxPQUFPLENBQUMsV0FIbEQsQ0FBQTs7OztBQ0FBLElBQUEsY0FBQTtFQUFBO2lTQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFBTiwwQkFBQSxDQUFBOzs7O0dBQUE7O2VBQUE7O0dBQW9CLE9BQU8sQ0FBQyxNQUY3QyxDQUFBOzs7O0FDQUEsSUFBQSxpQkFBQTtFQUFBO2lTQUFBOztBQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsY0FBUixDQUFSLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsK0JBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHVCQUFBLFVBQUEsR0FBWSxTQUFBLEdBQUE7V0FDVixPQUFPLENBQUMsR0FBUixDQUFZLGdDQUFaLEVBQThDLElBQUMsQ0FBQyxVQUFoRCxFQURVO0VBQUEsQ0FBWixDQUFBOztvQkFBQTs7R0FEd0MsTUFGMUMsQ0FBQTs7OztBQ0FBLElBQUEsd0NBQUE7RUFBQTtpU0FBQTs7QUFBQSxVQUFBLEdBQWEsT0FBQSxDQUFRLG1CQUFSLENBQWIsQ0FBQTs7QUFBQSxVQUNBLEdBQWtCLE9BQUEsQ0FBUSxpQkFBUixDQURsQixDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLHFDQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSw2QkFBQSxLQUFBLEdBQU8sVUFBUCxDQUFBOztBQUFBLDZCQUNBLEdBQUEsR0FBSyxjQURMLENBQUE7OzBCQUFBOztHQUQ4QyxXQUhoRCxDQUFBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxLQUFELEdBQUE7QUFFZixFQUFBLEtBQUEsQ0FBTSxFQUFOLEVBQVUsWUFBVixDQUFBLENBQUE7U0FDQSxLQUFBLENBQU0sTUFBTixFQUFjLGFBQWQsRUFIZTtBQUFBLENBQWpCLENBQUE7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNWQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkEsSUFBQSw2QkFBQTtFQUFBO2lTQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsSUFDQSxHQUFVLE9BQUEsQ0FBUSxRQUFSLENBRFYsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUNyQixtQ0FBQSxDQUFBOzs7O0dBQUE7O0FBQUEsMkJBQUEsaUJBQUEsR0FBbUIsQ0FBbkIsQ0FBQTs7QUFBQSwyQkFDQSxlQUFBLEdBQWlCLElBRGpCLENBQUE7O0FBQUEsMkJBR0EsbUJBQUEsR0FBcUIsSUFBSSxDQUFBLFNBQUUsQ0FBQSxtQkFIM0IsQ0FBQTs7d0JBQUE7O0dBRDRDLE9BQU8sQ0FBQyxlQUh0RCxDQUFBOzs7O0FDQUEsSUFBQSxhQUFBO0VBQUE7aVNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxPQUNBLENBQVEsdUJBQVIsQ0FEQSxDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQXVCO0FBRXJCLHlCQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSxpQkFBQSxtQkFBQSxHQUFxQixTQUFBLEdBQUE7V0FDbkIsSUFBQyxDQUFBLFNBRGtCO0VBQUEsQ0FBckIsQ0FBQTs7Y0FBQTs7R0FGa0MsT0FBTyxDQUFDLEtBSDVDLENBQUE7Ozs7QUNBQSxJQUFBLG1CQUFBO0VBQUE7aVNBQUE7O0FBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxjQUFSLENBQVAsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUF1QjtBQUNyQixrQ0FBQSxDQUFBOzs7O0dBQUE7O0FBQUEsMEJBQUEsVUFBQSxHQUFZLElBQVosQ0FBQTs7QUFBQSwwQkFDQSxTQUFBLEdBQVcsV0FEWCxDQUFBOztBQUFBLDBCQUVBLFFBQUEsR0FBVSxPQUFBLENBQVEsMkJBQVIsQ0FGVixDQUFBOzt1QkFBQTs7R0FEMkMsS0FGN0MsQ0FBQTs7OztBQ0FBLElBQUEsZ0JBQUE7RUFBQTtpU0FBQTs7QUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLGFBQVIsQ0FBUCxDQUFBOztBQUFBLE1BRU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLCtCQUFBLENBQUE7Ozs7R0FBQTs7QUFBQSx1QkFBQSxVQUFBLEdBQVksSUFBWixDQUFBOztBQUFBLHVCQUNBLFNBQUEsR0FBVyxXQURYLENBQUE7O0FBQUEsdUJBRUEsUUFBQSxHQUFVLE9BQUEsQ0FBUSxxQkFBUixDQUZWLENBQUE7O29CQUFBOztHQUR3QyxLQUYxQyxDQUFBOzs7O0FDQUEsSUFBQSxnQkFBQTtFQUFBO2lTQUFBOztBQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsYUFBUixDQUFQLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsK0JBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHVCQUFBLFVBQUEsR0FBWSxJQUFaLENBQUE7O0FBQUEsdUJBQ0EsU0FBQSxHQUFXLFdBRFgsQ0FBQTs7QUFBQSx1QkFFQSxRQUFBLEdBQVUsT0FBQSxDQUFRLHFCQUFSLENBRlYsQ0FBQTs7b0JBQUE7O0dBRHdDLEtBRjFDLENBQUE7Ozs7QUNBQSxJQUFBLGtCQUFBO0VBQUE7aVNBQUE7O0FBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxjQUFSLENBQVAsQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUF1QjtBQUNyQixpQ0FBQSxDQUFBOzs7O0dBQUE7O0FBQUEseUJBQUEsVUFBQSxHQUFZLElBQVosQ0FBQTs7QUFBQSx5QkFDQSxTQUFBLEdBQVcsV0FEWCxDQUFBOztBQUFBLHlCQUVBLFFBQUEsR0FBVSxPQUFBLENBQVEsc0JBQVIsQ0FGVixDQUFBOztzQkFBQTs7R0FEMEMsS0FGNUMsQ0FBQTs7OztBQ0FBLElBQUEsMkRBQUE7RUFBQTtpU0FBQTs7QUFBQSxjQUFBLEdBQWlCLE9BQUEsQ0FBUSx3QkFBUixDQUFqQixDQUFBOztBQUFBLFVBRUEsR0FBYSxPQUFBLENBQVEsaUJBQVIsQ0FGYixDQUFBOztBQUFBLFNBR0EsR0FBWSxPQUFBLENBQVEsU0FBUixDQUhaLENBQUE7O0FBQUEsTUFLTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIseUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLGlDQUFBLFVBQUEsR0FBWSxJQUFaLENBQUE7O0FBQUEsaUNBQ0EsUUFBQSxHQUFVLFNBRFYsQ0FBQTs7QUFBQSxpQ0FJQSxNQUFBLEdBQ0U7QUFBQSxJQUFBLG9CQUFBLEVBQXVCLFNBQXZCO0FBQUEsSUFDQSxrQkFBQSxFQUFxQixTQURyQjtHQUxGLENBQUE7O0FBQUEsaUNBT0EsU0FBQSxHQUFXLHNCQVBYLENBQUE7O0FBQUEsaUNBUUEsWUFBQSxHQUFjLFNBUmQsQ0FBQTs7QUFBQSxpQ0FTQSxRQUFBLEdBQVUsT0FBQSxDQUFRLHFCQUFSLENBVFYsQ0FBQTs7QUFBQSxpQ0FVQSxVQUFBLEdBQVksU0FBQSxHQUFBO0FBQ1YsSUFBQSxzREFBQSxTQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxFQUFaLENBQWUsS0FBZixFQUFzQixTQUFBLEdBQUE7QUFDcEIsTUFBQSxJQUFDLENBQUMsTUFBRixDQUFBLENBQUEsQ0FBQTthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksdUNBQVosRUFGb0I7SUFBQSxDQUF0QixDQURBLENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxVQUFVLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsU0FBQSxHQUFBO0FBQ3RCLE1BQUEsSUFBQyxDQUFDLE1BQUYsQ0FBQSxDQUFBLENBQUE7YUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaLEVBRnNCO0lBQUEsQ0FBeEIsQ0FMQSxDQUFBO0FBQUEsSUFRQSxJQUFDLENBQUEsVUFBVSxDQUFDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFNBQUEsR0FBQTthQUN2QixJQUFDLENBQUMsTUFBRixDQUFBLEVBRHVCO0lBQUEsQ0FBekIsQ0FSQSxDQUFBO1dBVUEsSUFBQyxDQUFBLFVBQVUsQ0FBQyxLQUFaLENBQWtCO0FBQUEsTUFBQSxLQUFBLEVBQU8sSUFBUDtBQUFBLE1BQWEsT0FBQSxFQUFTLElBQUMsQ0FBQSxjQUF2QjtBQUFBLE1BQXVDLEtBQUEsRUFBTyxJQUFDLENBQUEsWUFBL0M7S0FBbEIsRUFYVTtFQUFBLENBVlosQ0FBQTs7QUFBQSxpQ0F1QkEsY0FBQSxHQUFnQixTQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLE9BQWxCLEdBQUE7V0FDZCxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFEYztFQUFBLENBdkJoQixDQUFBOztBQUFBLGlDQTBCQSxZQUFBLEdBQWMsU0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixPQUFsQixHQUFBO1dBQ1osT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBRFk7RUFBQSxDQTFCZCxDQUFBOztBQUFBLGlDQTZCQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBRVAsUUFBQSx5Q0FBQTtBQUFBLElBQUEsVUFBQSxHQUFhLElBQUMsQ0FBQSxDQUFELENBQUcsd0JBQUgsQ0FBNEIsQ0FBQyxHQUE3QixDQUFBLENBQWIsQ0FBQTtBQUFBLElBQ0EsUUFBQSxHQUFXLElBQUMsQ0FBQSxDQUFELENBQUcsc0JBQUgsQ0FBMEIsQ0FBQyxHQUEzQixDQUFBLENBRFgsQ0FBQTtBQUFBLElBRUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxDQUFELENBQUcsMEJBQUgsQ0FBOEIsQ0FBQyxHQUEvQixDQUFBLENBRmYsQ0FBQTtBQUFBLElBR0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFBLEdBQWlCLFlBQTdCLENBSEEsQ0FBQTtBQUFBLElBSUEsS0FBQSxHQUFRO0FBQUEsTUFBQyxVQUFBLEVBQVksVUFBYjtBQUFBLE1BQXlCLFlBQUEsRUFBYyxZQUF2QztBQUFBLE1BQXFELFFBQUEsRUFBVSxRQUEvRDtLQUpSLENBQUE7V0FLQSxJQUFDLENBQUEsVUFBVSxDQUFDLElBQVosQ0FBaUIsS0FBakIsRUFQTztFQUFBLENBN0JULENBQUE7OzhCQUFBOztHQURrRCxlQUxwRCxDQUFBOzs7O0FDQUEsSUFBQSxrQkFBQTtFQUFBO2lTQUFBOztBQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsUUFBUixDQUFKLENBQUE7O0FBQUEsSUFDQSxHQUFPLE9BQUEsQ0FBUSxhQUFSLENBRFAsQ0FBQTs7QUFBQSxNQUdNLENBQUMsT0FBUCxHQUF1QjtBQUNyQiw4QkFBQSxDQUFBOzs7O0dBQUE7O0FBQUEsc0JBQUEsUUFBQSxHQUFVLE9BQUEsQ0FBUSxvQkFBUixDQUFWLENBQUE7O0FBQUEsc0JBQ0EsVUFBQSxHQUFZLElBRFosQ0FBQTs7QUFBQSxzQkFFQSxTQUFBLEdBQVcsV0FGWCxDQUFBOztBQUFBLHNCQUtBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixJQUFBLDJDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosRUFBeUIsSUFBQyxDQUFBLEtBQTFCLENBREEsQ0FBQTtXQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksbUJBQVosRUFBaUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUF4QyxFQUhVO0VBQUEsQ0FMWixDQUFBOzttQkFBQTs7R0FEdUMsS0FIekMsQ0FBQTs7OztBQ0FBLElBQUEsY0FBQTtFQUFBO2lTQUFBOztBQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsYUFBUixDQUFQLENBQUE7O0FBQUEsTUFFTSxDQUFDLE9BQVAsR0FBdUI7QUFDckIsNkJBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHFCQUFBLFNBQUEsR0FBVyxNQUFYLENBQUE7O0FBQUEscUJBQ0EsRUFBQSxHQUFJLGdCQURKLENBQUE7O0FBQUEscUJBRUEsT0FBQSxHQUNFO0FBQUEsSUFBQSxNQUFBLEVBQVEsU0FBUjtBQUFBLElBQ0EsSUFBQSxFQUFNLHVCQUROO0FBQUEsSUFFQSxNQUFBLEVBQVEsU0FGUjtHQUhGLENBQUE7O0FBQUEscUJBTUEsUUFBQSxHQUFVLE9BQUEsQ0FBUSxtQkFBUixDQU5WLENBQUE7O2tCQUFBOztHQURzQyxLQUZ4QyxDQUFBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQXNzaWduZWQgdG8gd2luZG93IHRvIG1ha2UgQm9vdHN0cmFwIGhhcHB5XG53aW5kb3cualF1ZXJ5ID0gJCA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuIyBqUXVlcnkgcGx1Z2luc1xucmVxdWlyZSAnLi4vYm93ZXJfY29tcG9uZW50cy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAnXG5cbkJhY2tib25lICAgPSByZXF1aXJlICdiYWNrYm9uZSdcbkJhY2tib25lLiQgPSAkXG5DaGFwbGluICAgID0gcmVxdWlyZSAnY2hhcGxpbidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENoYXBsaW4uQXBwbGljYXRpb25cbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjwhZG9jdHlwZSBodG1sPlxcbjwhLS1baWYgSUUgOF0+ICAgIDxodG1sIGNsYXNzPVxcXCJuby1qcyBsdC1pZTlcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCFbZW5kaWZdLS0+XFxuPCEtLVtpZiBndCBJRSA4XT48IS0tPiA8aHRtbCBjbGFzcz1cXFwibm8tanNcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCEtLTwhW2VuZGlmXS0tPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiPlxcbiAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlLGNocm9tZT0xXFxcIj5cXG4gIDx0aXRsZT5DaGFwbGluIEdlbmVyYXRvcjwvdGl0bGU+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoXFxcIj5cXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiL2Nzcy9hcHAuY3NzXFxcIj5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL3ZlbmRvci5qc1xcXCI+PC9zY3JpcHQ+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL2FwcC5qc1xcXCI+PC9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbiAgfSk7XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcblNpdGVWaWV3ID0gcmVxdWlyZSAnLi4vLi4vdmlld3Mvc2l0ZS12aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBDaGFwbGluLkNvbnRyb2xsZXJcblxuICBiZWZvcmVBY3Rpb246IC0+XG4gICAgQHJldXNlICdzaXRlJywgU2l0ZVZpZXdcbiIsIkNvbnRyb2xsZXIgICAgPSByZXF1aXJlICcuL2Jhc2UvY29udHJvbGxlcidcbkZvb3RlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9mb290ZXInXG5IZWFkZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvaGVhZGVyJ1xuSG9tZVBhZ2VWaWV3ICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hvbWUvaG9tZS1wYWdlJ1xuSnVtYm90cm9uVmlldyA9IHJlcXVpcmUgJy4uL3ZpZXdzL2Jvb3RzdHJhcC9qdW1ib3Ryb24nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG5cbiAgYmVmb3JlQWN0aW9uOiAtPlxuICAgIHN1cGVyXG5cbiAgICBAcmV1c2UgJ2hlYWRlcicsIEhlYWRlclZpZXcsIHJlZ2lvbjogJ2hlYWRlcidcbiAgICBAcmV1c2UgJ2Zvb3RlcicsIEZvb3RlclZpZXcsIHJlZ2lvbjogJ2Zvb3RlcidcblxuICBpbmRleDogLT5cbiAgICBAdmlldyA9IG5ldyBKdW1ib3Ryb25WaWV3IHJlZ2lvbjogJ21haW4nXG4gICAgQHZpZXcuc3VidmlldyAnaG9tZS1wYWdlLWNvbnRlbnQnLCBuZXcgSG9tZVBhZ2VWaWV3IHJlZ2lvbjogJ21haW4nXG5cbiAgICBAXG4iLCJDb250cm9sbGVyICAgID0gcmVxdWlyZSAnLi9iYXNlL2NvbnRyb2xsZXInXG5Gb290ZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvZm9vdGVyJ1xuSGVhZGVyVmlldyAgICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hlYWRlcidcbkhvbWVQYWdlVmlldyAgPSByZXF1aXJlICcuLi92aWV3cy9ob21lL2hvbWUtcGFnZSdcbkp1bWJvdHJvblZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9ib290c3RyYXAvanVtYm90cm9uJ1xuSW1hZ2VzQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuLi92aWV3cy9pbWFnZXMtY29sbGVjdGlvbidcblBob3Rvc0NvbGxlY3Rpb24gPSByZXF1aXJlICcuLi9tb2RlbHMvcGhvdG9zJ1xuSW1hZ2VNb2RlbCA9IHJlcXVpcmUgJy4uL21vZGVscy9pbWFnZSdcbkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEltYWdlQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgYmVmb3JlQWN0aW9uOiAtPiAjKHBhcmFtcykgZm9yIGFjY2VzcyB0byB1cmwgcGFyYW0ga2V5c1xuICAgIHN1cGVyXG4gICAgIyMjIyBXaGF0IGRvZXMgYXQgcmV1c2UgdGFrZSBpbiBhcyBhcmd1bWVudHM/XG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gIFx0I2V2ZXJ5IGNvbnRyb2xsZXIgYWN0aW9uIHNob3VsZCBzYXZlIHRoZSBtYWluIHZpZXcgYXMgQHZpZXcsIG9yIHNlbGYudmlld1xuICAgICNmb3IgbmFtaW5nIHJlZ2lvbnM6IEB2aWV3ID0gbmV3IE15VmlldyB7cmVnaW9uOiAnc2lkZWJhcid9XG4gICAgI0BwaG90b3MgPSBuZXcgQ2hhcGxpbi5Db2xsZWN0aW9uIG51bGwsIG1vZGVsOiBJbWFnZU1vZGVsXG4gICAgQHZpZXcgPSBuZXcgSW1hZ2VzQ29sbGVjdGlvblZpZXcgXG4gICAgICByZWdpb246ICdtYWluJ1xuICAgICAgY29sbGVjdGlvbjogbmV3IFBob3Rvc0NvbGxlY3Rpb24gI2NvbGxlY3Rpb246IEBwaG90b3MgIG1vZGVsOiBJbWFnZU1vZGVsXG4gICAgICAjY29sbGVjdGlvbjogbmV3IENoYXBsaW4uQ29sbGVjdGlvbiBbe2ltYWdlVGl0bGU6ICdjdXRlIGRpbm8nLCBpbWFnZVNyYzogXCJodHRwOi8vaW1ndXIuY29tL2dhbGxlcnkvMU0yQnBOY1wiLCBpbWFnZUNhcHRpb246ICd3b3cnfV1cbiAgICAjQHZpZXcuc3VidmlldyAnaW1hZ2VzLWNvbGxlY3Rpb24tY29udGVudCcsIG5ldyBJbWFnZXNDb2xsZWN0aW9uVmlldyByZWdpb246ICdtYWluJ1xuXG4gICAgQFxuXG4iLCIkICAgICAgICAgICA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuQXBwbGljYXRpb24gPSByZXF1aXJlICcuL2FwcGxpY2F0aW9uJ1xucm91dGVzICAgICAgPSByZXF1aXJlICcuL3JvdXRlcydcblxuJCAtPlxuXG4gIG5ldyBBcHBsaWNhdGlvbiB7XG4gICAgdGl0bGU6ICd0ZXN0JyxcbiAgICBjb250cm9sbGVyU3VmZml4OiAnLWNvbnRyb2xsZXInLFxuICAgIHJvdXRlc1xuICB9XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdXRpbGl0aWVzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIERlbGVnYXRlIHRvIENoYXBsaW7igJlzIHV0aWxzIG1vZHVsZS5cbnV0aWxzID0gQ2hhcGxpbi51dGlscy5iZWdldCBDaGFwbGluLnV0aWxzXG5cbiMgXyh1dGlscykuZXh0ZW5kXG4jICBzb21lTWV0aG9kOiAtPlxuXG4jIFByZXZlbnQgY3JlYXRpbmcgbmV3IHByb3BlcnRpZXMgYW5kIHN0dWZmLlxuT2JqZWN0LnNlYWw/IHV0aWxzXG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHNcbiIsIkNoYXBsaW4gICAgPSByZXF1aXJlICdjaGFwbGluJ1xuSGFuZGxlYmFycyA9IHJlcXVpcmUgJ2hic2Z5L3J1bnRpbWUnXG5cbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdmlldyBoZWxwZXJzXG4jIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tLyNoZWxwZXJzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnJlZ2lzdGVyID0gKG5hbWUsIGZuKSAtPlxuICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyIG5hbWUsIGZuXG5cbiMgTWFwIGhlbHBlcnNcbiMgLS0tLS0tLS0tLS1cblxuIyBNYWtlICd3aXRoJyBiZWhhdmUgYSBsaXR0bGUgbW9yZSBtdXN0YWNoZXkuXG5yZWdpc3RlciAnd2l0aCcsIChjb250ZXh0LCBvcHRpb25zKSAtPlxuICBpZiBub3QgY29udGV4dCBvciBIYW5kbGViYXJzLlV0aWxzLmlzRW1wdHkgY29udGV4dFxuICAgIG9wdGlvbnMuaW52ZXJzZSh0aGlzKVxuICBlbHNlXG4gICAgb3B0aW9ucy5mbihjb250ZXh0KVxuXG4jIEludmVyc2UgZm9yICd3aXRoJy5cbnJlZ2lzdGVyICd3aXRob3V0JywgKGNvbnRleHQsIG9wdGlvbnMpIC0+XG4gIGludmVyc2UgPSBvcHRpb25zLmludmVyc2VcbiAgb3B0aW9ucy5pbnZlcnNlID0gb3B0aW9ucy5mblxuICBvcHRpb25zLmZuID0gaW52ZXJzZVxuICBIYW5kbGViYXJzLmhlbHBlcnMud2l0aC5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpXG5cbiMgR2V0IENoYXBsaW4tZGVjbGFyZWQgbmFtZWQgcm91dGVzLiB7e3VybCBcImxpa2VzI3Nob3dcIiBcIjEwNVwifX1cbnJlZ2lzdGVyICd1cmwnLCAocm91dGVOYW1lLCBwYXJhbXMuLi4sIG9wdGlvbnMpIC0+XG4gIENoYXBsaW4udXRpbHMucmV2ZXJzZSByb3V0ZU5hbWUsIHBhcmFtc1xuIiwiQ2hhcGxpbiAgPSByZXF1aXJlICdjaGFwbGluJ1xubWVkaWF0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IENoYXBsaW4ubWVkaWF0b3JcbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuTW9kZWwgICA9IHJlcXVpcmUgJy4vbW9kZWwnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblxuXG4gIG1vZGVsOiBNb2RlbFxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTW9kZWwgZXh0ZW5kcyBDaGFwbGluLk1vZGVsXG4iLCJNb2RlbCA9IHJlcXVpcmUgJy4vYmFzZS9tb2RlbCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBJbWFnZU1vZGVsIGV4dGVuZHMgTW9kZWxcbiAgaW5pdGlhbGl6ZTogLT5cbiAgICBjb25zb2xlLmxvZyhcImluc3RhbmNlIG9mIGltYWdlTW9kZWwgY3JlYXRlZFwiLCBALmNvbGxlY3Rpb24pXG5cbiIsIkNvbGxlY3Rpb24gPSByZXF1aXJlICcuL2Jhc2UvY29sbGVjdGlvbidcbkltYWdlTW9kZWwgICAgICA9IHJlcXVpcmUgJy4uL21vZGVscy9pbWFnZScgI2ltYWdlIGlzIHRoZSBzdWJtb2RlbCBvZiB0aGUgY29sbGVjdGlvbiBwaG90b3NcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQaG90b3NDb2xsZWN0aW9uIGV4dGVuZHMgQ29sbGVjdGlvblxuICBtb2RlbDogSW1hZ2VNb2RlbFxuICB1cmw6ICcvcGhvdG9zLmpzb24nIFxuICAjIHBhcnNlOiAocmVzcG9uc2UpIC0+XG4gICMgXHRjb25zb2xlLmxvZyhcInBhcnNlIHJldHVybnNcIiwgcmVzcG9uc2UucmVzdWx0cylcbiAgIyBcdHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlKS5vYmplY3RzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAobWF0Y2gpIC0+XG5cbiAgbWF0Y2ggJycsICdob21lI2luZGV4J1xuICBtYXRjaCAndGVzdCcsICdpbWFnZSNpbmRleCdcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcbiAgICA8cD4mY29weTsgQ29tcGFueSAyMDEzPC9wPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4gIH0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIi5uYXZiYXItY29sbGFwc2VcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICA8L2J1dHRvbj5cXG4gIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkNoYXBsaW4gQm9vdHN0cmFwIEV4YW1wbGU8L2E+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5TaWduIGluPC9idXR0b24+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCI7XG4gIH0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgPGgyPkhlYWRpbmc8L2gyPlxcbiAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS4gPC9wPlxcbiAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPlZpZXcgZGV0YWlscyAmcmFxdW87PC9hPjwvcD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICA8aDI+SGVhZGluZzwvaDI+XFxuICAgIDxwPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYSBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLiA8L3A+XFxuICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VmlldyBkZXRhaWxzICZyYXF1bzs8L2E+PC9wPlxcbiA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgPGgyPkhlYWRpbmc8L2gyPlxcbiAgICA8cD5Eb25lYyBzZWQgb2RpbyBkdWkuIENyYXMganVzdG8gb2RpbywgZGFwaWJ1cyBhYyBmYWNpbGlzaXMgaW4sIGVnZXN0YXMgZWdldCBxdWFtLiBWZXN0aWJ1bHVtIGlkIGxpZ3VsYSBwb3J0YSBmZWxpcyBldWlzbW9kIHNlbXBlci4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy48L3A+XFxuICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VmlldyBkZXRhaWxzICZyYXF1bzs8L2E+PC9wPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4gIH0pO1xuIiwidmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKSIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICA8aDE+SGVsbG8sIHdvcmxkITwvaDE+XFxuICA8cD5UaGlzIGlzIGEgdGVtcGxhdGUgZm9yIGEgc2ltcGxlIG1hcmtldGluZyBvciBpbmZvcm1hdGlvbmFsIHdlYnNpdGUuIEl0IGluY2x1ZGVzIGEgbGFyZ2UgY2FsbG91dCBjYWxsZWQgYSBqdW1ib3Ryb24gYW5kIHRocmVlIHN1cHBvcnRpbmcgcGllY2VzIG9mIGNvbnRlbnQuIFVzZSBpdCBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGNyZWF0ZSBzb21ldGhpbmcgbW9yZSB1bmlxdWUuPC9wPlxcbiAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+TGVhcm4gbW9yZSAmcmFxdW87PC9hPjwvcD5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcblxuXG4gIGJ1ZmZlciArPSBcIjxkaXYgY2xhc3M9XFxcImltYWdlLWNvbnRhaW5lclxcXCI+XFxuICA8aDE+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmltYWdlVGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2VUaXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2gxPlxcbiAgPGltZyBzcmM9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5pbWFnZVNyYykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5pbWFnZVNyYyk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPiBcXG4gIDxwPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5pbWFnZUNhcHRpb24pIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2VDYXB0aW9uKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvcD5cXG48L2Rpdj5cXG5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJwaG90b3NcXFwiPjwvZGl2PlxcbjxoMT48L2gxPlxcbjxmb3JtPlxcblRpdGxlOiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiaW1hZ2VUaXRsZVxcXCI+PGJyPlxcbkNhcHRpb246IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJpbWFnZUNhcHRpb25cXFwiPjxicj5cXG5JbWdTcmM6IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJpbWFnZVNyY1xcXCI+PGJyPlxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYWRkXFxcIj5DbGljayBNZSE8L2J1dHRvbj5cXG48L2Zvcm0+XFxuXCI7XG4gIH0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGhlYWRlciBpZD1cXFwiaGVhZGVyXFxcIiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPjwvaGVhZGVyPlxcblxcbjxkaXYgaWQ9XFxcIm91dGVyLXBhZ2UtY29udGFpbmVyXFxcIj48L2Rpdj5cXG5cXG48Zm9vdGVyIGlkPVxcXCJmb290ZXJcXFwiPjwvZm9vdGVyPlxcblwiO1xuICB9KTtcbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuVmlldyAgICA9IHJlcXVpcmUgJy4vdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb2xsZWN0aW9uVmlldyBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblZpZXdcbiAgYW5pbWF0aW9uRHVyYXRpb246IDBcbiAgdXNlQ3NzQW5pbWF0aW9uOiB5ZXNcblxuICBnZXRUZW1wbGF0ZUZ1bmN0aW9uOiBWaWV3OjpnZXRUZW1wbGF0ZUZ1bmN0aW9uXG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcbnJlcXVpcmUgJy4uLy4uL2xpYi92aWV3LWhlbHBlcidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBWaWV3IGV4dGVuZHMgQ2hhcGxpbi5WaWV3XG5cbiAgZ2V0VGVtcGxhdGVGdW5jdGlvbjogLT5cbiAgICBAdGVtcGxhdGVcbiIsIlZpZXcgPSByZXF1aXJlICcuLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSnVtYm9Ucm9uVmlldyBleHRlbmRzIFZpZXdcbiAgYXV0b1JlbmRlcjogdHJ1ZVxuICBjbGFzc05hbWU6ICdqdW1ib3Ryb24nXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi8uLi90ZW1wbGF0ZXMvanVtYm90cm9uJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZvb3RlclZpZXcgZXh0ZW5kcyBWaWV3XG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgY2xhc3NOYW1lOiAnY29udGFpbmVyJ1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vdGVtcGxhdGVzL2Zvb3RlcidcbiIsIlZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIZWFkZXJWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9oZWFkZXInXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi4vYmFzZS92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhvbWVQYWdlVmlldyBleHRlbmRzIFZpZXdcbiAgYXV0b1JlbmRlcjogdHJ1ZVxuICBjbGFzc05hbWU6ICdjb250YWluZXInXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi8uLi90ZW1wbGF0ZXMvaG9tZSdcbiIsIkNvbGxlY3Rpb25WaWV3ID0gcmVxdWlyZSAnLi9iYXNlL2NvbGxlY3Rpb24tdmlldydcbiNWaWV3ID0gcmVxdWlyZSAnLi9iYXNlL3ZpZXcnXG5JbWFnZU1vZGVsID0gcmVxdWlyZSAnLi4vbW9kZWxzL2ltYWdlJ1xuUGhvdG9WaWV3ID0gcmVxdWlyZSAnLi9waG90bydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBJbWFnZXNDb2xsZWN0aW9uVmlldyBleHRlbmRzIENvbGxlY3Rpb25WaWV3XG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgaXRlbVZpZXc6IFBob3RvVmlld1xuICAjIGxpc3RlbjpcbiAgIyAgICdhZGRlZFRvRE9NJyA6ICdvbkFkZGVkVG9ET00nXG4gIGV2ZW50czpcbiAgICAnY2xpY2sgaW5wdXQuc3VibWl0JyA6ICdjbGlja2VkJ1xuICAgICdjbGljayBidXR0b24uYWRkJyA6ICdjbGlja2VkJ1xuICBjbGFzc05hbWU6ICdjb2xsZWN0aW9uLWNvbnRhaW5lcidcbiAgbGlzdFNlbGVjdG9yOiAnLnBob3RvcydcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9waG90b3MnXG4gIGluaXRpYWxpemU6IC0+XG4gICAgc3VwZXJcbiAgICBAY29sbGVjdGlvbi5vbiAnYWRkJywgLT5cbiAgICAgIEAucmVuZGVyKClcbiAgICAgIGNvbnNvbGUubG9nIFwic29tZXRoaW5nIHdhcyBhZGRlZCB0byB0aGUgY29sbGVjdGlvblwiXG5cbiAgICBAY29sbGVjdGlvbi5vbiAncmVzZXQnLCAtPlxuICAgICAgQC5yZW5kZXIoKVxuICAgICAgY29uc29sZS5sb2cgXCJzb21ldGhpbmcgd2FzIHJlc2V0XCJcbiAgICBAY29sbGVjdGlvbi5vbiAnY2hhbmdlJywgLT5cbiAgICAgIEAucmVuZGVyKClcbiAgICBAY29sbGVjdGlvbi5mZXRjaCByZXNldDogdHJ1ZSwgc3VjY2VzczogQG9uRmV0Y2hTdWNjZXNzLCBlcnJvcjogQG9uRmV0Y2hFcnJvclxuXG4gIG9uRmV0Y2hTdWNjZXNzOiAobW9kZWwsIHJlc3BvbnNlLCBvcHRpb25zKSAtPlxuICAgIGNvbnNvbGUubG9nKFwiU1VDRVNTUyFcIilcbiAgXG4gIG9uRmV0Y2hFcnJvcjogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICBjb25zb2xlLmxvZyhcIkZBSUxVUkVcIilcblxuICBjbGlja2VkOiAtPlxuICAgICNjb25zb2xlLmxvZyhcInlvb29cIilcbiAgICBpbWFnZVRpdGxlID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VUaXRsZV0nKS52YWwoKVxuICAgIGltYWdlU3JjID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VTcmNdJykudmFsKClcbiAgICBpbWFnZUNhcHRpb24gPSBAJCgnaW5wdXRbbmFtZT1pbWFnZUNhcHRpb25dJykudmFsKClcbiAgICBjb25zb2xlLmxvZyhcImhlZmF3ZWZhZXdmIFwiICsgaW1hZ2VDYXB0aW9uKVxuICAgIGltYWdlID0ge2ltYWdlVGl0bGU6IGltYWdlVGl0bGUsIGltYWdlQ2FwdGlvbjogaW1hZ2VDYXB0aW9uLCBpbWFnZVNyYzogaW1hZ2VTcmN9ICNmb3Igc29tZSByZWFzb24gaWYgeW91IHB1dCBoZXJlLCBub3QgaW4gaW50aWFsaXplIGl0IHdvcmtzXG4gICAgQGNvbGxlY3Rpb24ucHVzaCBpbWFnZVxuXG4gICMgb25BZGRlZFRvRE9NOiAtPlxuICAjICAgaW1hZ2VUaXRsZSA9IEAkKCdpbnB1dFtuYW1lPWltYWdlVGl0bGVdJykudmFsKClcbiAgIyAgIGltYWdlU3JjID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VTcmNdJykudmFsKClcbiAgIyAgIGltYWdlQ2FwdGlvbiA9IEAkKCdpbnB1dFtuYW1lPWltYWdlQ2FwdGlvbl0nKS52YWwoKVxuICAjICAgdmFscyA9IFtpbWFnZVRpdGxlLCBpbWFnZUNhcHRpb24sIGltYWdlU3JjXVxuICAjIEBtb2RlbC5zZXQgaW1hZ2VUaXRsZTogaW1hZ2VUaXRsZVxuICAjIEBtb2RlbC5zZXQgaW1hZ2VDYXB0aW9uOiBpbWFnZUNhcHRpb25cbiAgIyBAbW9kZWwuc2V0IGltYWdlU3JjOiBpbWFnZVNyY1xuXG4gICAgXG4gICAgXG5cbiIsIiQgPSByZXF1aXJlICdqcXVlcnknXG5WaWV3ID0gcmVxdWlyZSAnLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUGhvdG9WaWV3IGV4dGVuZHMgVmlld1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vdGVtcGxhdGVzL3Bob3RvJ1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgIyBsaXN0ZW46XG4gICMgICAnYWRkZWRUb0RPTScgOiAnb25BZGRlZFRvRE9NJ1xuICBpbml0aWFsaXplOiAtPlxuICAgIHN1cGVyXG4gICAgY29uc29sZS5sb2coXCJtb2RlbCBpcyBcIiwgQG1vZGVsKVxuICAgIGNvbnNvbGUubG9nKFwibW9kZWwgY29sbGVjdGlvbiBcIiwgQG1vZGVsLmNvbGxlY3Rpb24pXG4gICAgXG4gICMgb25BZGRlZFRvRE9NOiAtPlxuICAjICAgaW1hZ2VUaXRsZSA9IEAkKCdpbnB1dFtuYW1lPWltYWdlVGl0bGVdJykudmFsdWVcbiAgIyAgIGltYWdlU3JjID0gQCQoJ2lucHV0W25hbWU9aW1hZ2VTcmNdJykudmFsdWVcbiAgIyAgIGltYWdlQ2FwdGlvbiA9IEAkKCdpbnB1dFtuYW1lPWltYWdlQ2FwdGlvbl0nKS52YWx1ZVxuICAjICAgQG1vZGVsLnNldCBpbWFnZVRpdGxlOiBpbWFnZVRpdGxlXG4gICMgICBAbW9kZWwuc2V0IGltYWdlQ2FwdGlvbjogaW1hZ2VDYXB0aW9uXG4gICMgICBAbW9kZWwuc2V0IGltYWdlU3JjOiBpbWFnZVNyY1xuXG5cbiIsIlZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTaXRlVmlldyBleHRlbmRzIFZpZXdcbiAgY29udGFpbmVyOiAnYm9keSdcbiAgaWQ6ICdzaXRlLWNvbnRhaW5lcidcbiAgcmVnaW9uczpcbiAgICBoZWFkZXI6ICcjaGVhZGVyJ1xuICAgIG1haW46ICcjb3V0ZXItcGFnZS1jb250YWluZXInXG4gICAgZm9vdGVyOiAnI2Zvb3RlcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9zaXRlJ1xuIiwiLyohXG4gKiBCb290c3RyYXAgdjMuMS4xIChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG5pZiAodHlwZW9mIGpRdWVyeSA9PT0gJ3VuZGVmaW5lZCcpIHsgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5JykgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdHJhbnNpdGlvbi5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3RyYW5zaXRpb25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ1NTIFRSQU5TSVRJT04gU1VQUE9SVCAoU2hvdXRvdXQ6IGh0dHA6Ly93d3cubW9kZXJuaXpyLmNvbS8pXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9vdHN0cmFwJylcblxuICAgIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgICAnV2Via2l0VHJhbnNpdGlvbicgOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbicgICAgOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nICAgICAgOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ3RyYW5zaXRpb24nICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7IGVuZDogdHJhbnNFbmRFdmVudE5hbWVzW25hbWVdIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2UgLy8gZXhwbGljaXQgZm9yIGllOCAoICAuXy4pXG4gIH1cblxuICAvLyBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZSwgJGVsID0gdGhpc1xuICAgICQodGhpcykub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgZnVuY3Rpb24gKCkgeyBjYWxsZWQgPSB0cnVlIH0pXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBpZiAoIWNhbGxlZCkgJCgkZWwpLnRyaWdnZXIoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKSB9XG4gICAgc2V0VGltZW91dChjYWxsYmFjaywgZHVyYXRpb24pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZCgpXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFsZXJ0LmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWxlcnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQUxFUlQgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRpc21pc3MgPSAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB2YXIgQWxlcnQgICA9IGZ1bmN0aW9uIChlbCkge1xuICAgICQoZWwpLm9uKCdjbGljaycsIGRpc21pc3MsIHRoaXMuY2xvc2UpXG4gIH1cblxuICBBbGVydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgICA9ICQodGhpcylcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIHZhciAkcGFyZW50ID0gJChzZWxlY3RvcilcblxuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICghJHBhcmVudC5sZW5ndGgpIHtcbiAgICAgICRwYXJlbnQgPSAkdGhpcy5oYXNDbGFzcygnYWxlcnQnKSA/ICR0aGlzIDogJHRoaXMucGFyZW50KClcbiAgICB9XG5cbiAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ2Nsb3NlLmJzLmFsZXJ0JykpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KCkge1xuICAgICAgJHBhcmVudC50cmlnZ2VyKCdjbG9zZWQuYnMuYWxlcnQnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmICRwYXJlbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAkcGFyZW50XG4gICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCByZW1vdmVFbGVtZW50KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICByZW1vdmVFbGVtZW50KClcbiAgfVxuXG5cbiAgLy8gQUxFUlQgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5hbGVydFxuXG4gICQuZm4uYWxlcnQgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy5hbGVydCcpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYWxlcnQnLCAoZGF0YSA9IG5ldyBBbGVydCh0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dLmNhbGwoJHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uYWxlcnQuQ29uc3RydWN0b3IgPSBBbGVydFxuXG5cbiAgLy8gQUxFUlQgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmFsZXJ0Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5hbGVydCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFMRVJUIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpJywgZGlzbWlzcywgQWxlcnQucHJvdG90eXBlLmNsb3NlKVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBidXR0b24uanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNidXR0b25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQlVUVE9OIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBCdXR0b24gPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgID0gJC5leHRlbmQoe30sIEJ1dHRvbi5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuICBCdXR0b24uREVGQVVMVFMgPSB7XG4gICAgbG9hZGluZ1RleHQ6ICdsb2FkaW5nLi4uJ1xuICB9XG5cbiAgQnV0dG9uLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHZhciBkICAgID0gJ2Rpc2FibGVkJ1xuICAgIHZhciAkZWwgID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciB2YWwgID0gJGVsLmlzKCdpbnB1dCcpID8gJ3ZhbCcgOiAnaHRtbCdcbiAgICB2YXIgZGF0YSA9ICRlbC5kYXRhKClcblxuICAgIHN0YXRlID0gc3RhdGUgKyAnVGV4dCdcblxuICAgIGlmICghZGF0YS5yZXNldFRleHQpICRlbC5kYXRhKCdyZXNldFRleHQnLCAkZWxbdmFsXSgpKVxuXG4gICAgJGVsW3ZhbF0oZGF0YVtzdGF0ZV0gfHwgdGhpcy5vcHRpb25zW3N0YXRlXSlcblxuICAgIC8vIHB1c2ggdG8gZXZlbnQgbG9vcCB0byBhbGxvdyBmb3JtcyB0byBzdWJtaXRcbiAgICBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHN0YXRlID09ICdsb2FkaW5nVGV4dCcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICRlbC5hZGRDbGFzcyhkKS5hdHRyKGQsIGQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKGQpLnJlbW92ZUF0dHIoZClcbiAgICAgIH1cbiAgICB9LCB0aGlzKSwgMClcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGFuZ2VkID0gdHJ1ZVxuICAgIHZhciAkcGFyZW50ID0gdGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJylcblxuICAgIGlmICgkcGFyZW50Lmxlbmd0aCkge1xuICAgICAgdmFyICRpbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKVxuICAgICAgaWYgKCRpbnB1dC5wcm9wKCd0eXBlJykgPT0gJ3JhZGlvJykge1xuICAgICAgICBpZiAoJGlucHV0LnByb3AoJ2NoZWNrZWQnKSAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkgY2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIGVsc2UgJHBhcmVudC5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZCkgJGlucHV0LnByb3AoJ2NoZWNrZWQnLCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXG4gIH1cblxuXG4gIC8vIEJVVFRPTiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5idXR0b25cblxuICAkLmZuLmJ1dHRvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5idXR0b24nKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmJ1dHRvbicsIChkYXRhID0gbmV3IEJ1dHRvbih0aGlzLCBvcHRpb25zKSkpXG5cbiAgICAgIGlmIChvcHRpb24gPT0gJ3RvZ2dsZScpIGRhdGEudG9nZ2xlKClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbikgZGF0YS5zZXRTdGF0ZShvcHRpb24pXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uYnV0dG9uLkNvbnN0cnVjdG9yID0gQnV0dG9uXG5cblxuICAvLyBCVVRUT04gTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5idXR0b24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmJ1dHRvbiA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEJVVFRPTiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZV49YnV0dG9uXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICRidG4gPSAkKGUudGFyZ2V0KVxuICAgIGlmICghJGJ0bi5oYXNDbGFzcygnYnRuJykpICRidG4gPSAkYnRuLmNsb3Nlc3QoJy5idG4nKVxuICAgICRidG4uYnV0dG9uKCd0b2dnbGUnKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBjYXJvdXNlbC5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2Nhcm91c2VsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ0FST1VTRUwgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIENhcm91c2VsID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGluZGljYXRvcnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzJylcbiAgICB0aGlzLm9wdGlvbnMgICAgID0gb3B0aW9uc1xuICAgIHRoaXMucGF1c2VkICAgICAgPVxuICAgIHRoaXMuc2xpZGluZyAgICAgPVxuICAgIHRoaXMuaW50ZXJ2YWwgICAgPVxuICAgIHRoaXMuJGFjdGl2ZSAgICAgPVxuICAgIHRoaXMuJGl0ZW1zICAgICAgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMucGF1c2UgPT0gJ2hvdmVyJyAmJiB0aGlzLiRlbGVtZW50XG4gICAgICAub24oJ21vdXNlZW50ZXInLCAkLnByb3h5KHRoaXMucGF1c2UsIHRoaXMpKVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgJC5wcm94eSh0aGlzLmN5Y2xlLCB0aGlzKSlcbiAgfVxuXG4gIENhcm91c2VsLkRFRkFVTFRTID0ge1xuICAgIGludGVydmFsOiA1MDAwLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHdyYXA6IHRydWVcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5jeWNsZSA9ICBmdW5jdGlvbiAoZSkge1xuICAgIGUgfHwgKHRoaXMucGF1c2VkID0gZmFsc2UpXG5cbiAgICB0aGlzLmludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgIHRoaXMub3B0aW9ucy5pbnRlcnZhbFxuICAgICAgJiYgIXRoaXMucGF1c2VkXG4gICAgICAmJiAodGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCQucHJveHkodGhpcy5uZXh0LCB0aGlzKSwgdGhpcy5vcHRpb25zLmludGVydmFsKSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuZ2V0QWN0aXZlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYWN0aXZlID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXRlbS5hY3RpdmUnKVxuICAgIHRoaXMuJGl0ZW1zICA9IHRoaXMuJGFjdGl2ZS5wYXJlbnQoKS5jaGlsZHJlbigpXG5cbiAgICByZXR1cm4gdGhpcy4kaXRlbXMuaW5kZXgodGhpcy4kYWN0aXZlKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnRvID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHZhciB0aGF0ICAgICAgICA9IHRoaXNcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KClcblxuICAgIGlmIChwb3MgPiAodGhpcy4kaXRlbXMubGVuZ3RoIC0gMSkgfHwgcG9zIDwgMCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5zbGlkaW5nKSAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5vbmUoJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7IHRoYXQudG8ocG9zKSB9KVxuICAgIGlmIChhY3RpdmVJbmRleCA9PSBwb3MpIHJldHVybiB0aGlzLnBhdXNlKCkuY3ljbGUoKVxuXG4gICAgcmV0dXJuIHRoaXMuc2xpZGUocG9zID4gYWN0aXZlSW5kZXggPyAnbmV4dCcgOiAncHJldicsICQodGhpcy4kaXRlbXNbcG9zXSkpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgfHwgKHRoaXMucGF1c2VkID0gdHJ1ZSlcblxuICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJy5uZXh0LCAucHJldicpLmxlbmd0aCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICB0aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCduZXh0JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCdwcmV2JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uICh0eXBlLCBuZXh0KSB7XG4gICAgdmFyICRhY3RpdmUgICA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJylcbiAgICB2YXIgJG5leHQgICAgID0gbmV4dCB8fCAkYWN0aXZlW3R5cGVdKClcbiAgICB2YXIgaXNDeWNsaW5nID0gdGhpcy5pbnRlcnZhbFxuICAgIHZhciBkaXJlY3Rpb24gPSB0eXBlID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICB2YXIgZmFsbGJhY2sgID0gdHlwZSA9PSAnbmV4dCcgPyAnZmlyc3QnIDogJ2xhc3QnXG4gICAgdmFyIHRoYXQgICAgICA9IHRoaXNcblxuICAgIGlmICghJG5leHQubGVuZ3RoKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy53cmFwKSByZXR1cm5cbiAgICAgICRuZXh0ID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXRlbScpW2ZhbGxiYWNrXSgpXG4gICAgfVxuXG4gICAgaWYgKCRuZXh0Lmhhc0NsYXNzKCdhY3RpdmUnKSkgcmV0dXJuIHRoaXMuc2xpZGluZyA9IGZhbHNlXG5cbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3NsaWRlLmJzLmNhcm91c2VsJywgeyByZWxhdGVkVGFyZ2V0OiAkbmV4dFswXSwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLnNsaWRpbmcgPSB0cnVlXG5cbiAgICBpc0N5Y2xpbmcgJiYgdGhpcy5wYXVzZSgpXG5cbiAgICBpZiAodGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuJGluZGljYXRvcnMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgdGhpcy4kZWxlbWVudC5vbmUoJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkbmV4dEluZGljYXRvciA9ICQodGhhdC4kaW5kaWNhdG9ycy5jaGlsZHJlbigpW3RoYXQuZ2V0QWN0aXZlSW5kZXgoKV0pXG4gICAgICAgICRuZXh0SW5kaWNhdG9yICYmICRuZXh0SW5kaWNhdG9yLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnc2xpZGUnKSkge1xuICAgICAgJG5leHQuYWRkQ2xhc3ModHlwZSlcbiAgICAgICRuZXh0WzBdLm9mZnNldFdpZHRoIC8vIGZvcmNlIHJlZmxvd1xuICAgICAgJGFjdGl2ZS5hZGRDbGFzcyhkaXJlY3Rpb24pXG4gICAgICAkbmV4dC5hZGRDbGFzcyhkaXJlY3Rpb24pXG4gICAgICAkYWN0aXZlXG4gICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJG5leHQucmVtb3ZlQ2xhc3MoW3R5cGUsIGRpcmVjdGlvbl0uam9pbignICcpKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKFsnYWN0aXZlJywgZGlyZWN0aW9uXS5qb2luKCcgJykpXG4gICAgICAgICAgdGhhdC5zbGlkaW5nID0gZmFsc2VcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzbGlkLmJzLmNhcm91c2VsJykgfSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKCRhY3RpdmUuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJykuc2xpY2UoMCwgLTEpICogMTAwMClcbiAgICB9IGVsc2Uge1xuICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICRuZXh0LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc2xpZC5icy5jYXJvdXNlbCcpXG4gICAgfVxuXG4gICAgaXNDeWNsaW5nICYmIHRoaXMuY3ljbGUoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ0FST1VTRUwgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5jYXJvdXNlbFxuXG4gICQuZm4uY2Fyb3VzZWwgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY2Fyb3VzZWwnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ2Fyb3VzZWwuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgYWN0aW9uICA9IHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb25zLnNsaWRlXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuY2Fyb3VzZWwnLCAoZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnbnVtYmVyJykgZGF0YS50byhvcHRpb24pXG4gICAgICBlbHNlIGlmIChhY3Rpb24pIGRhdGFbYWN0aW9uXSgpXG4gICAgICBlbHNlIGlmIChvcHRpb25zLmludGVydmFsKSBkYXRhLnBhdXNlKCkuY3ljbGUoKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmNhcm91c2VsLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcblxuXG4gIC8vIENBUk9VU0VMIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uY2Fyb3VzZWwgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDQVJPVVNFTCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaScsICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpLCBocmVmXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgPSAkdGhpcy5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpKSAvL3N0cmlwIGZvciBpZTdcbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuICAgIHZhciBzbGlkZUluZGV4ID0gJHRoaXMuYXR0cignZGF0YS1zbGlkZS10bycpXG4gICAgaWYgKHNsaWRlSW5kZXgpIG9wdGlvbnMuaW50ZXJ2YWwgPSBmYWxzZVxuXG4gICAgJHRhcmdldC5jYXJvdXNlbChvcHRpb25zKVxuXG4gICAgaWYgKHNsaWRlSW5kZXggPSAkdGhpcy5hdHRyKCdkYXRhLXNsaWRlLXRvJykpIHtcbiAgICAgICR0YXJnZXQuZGF0YSgnYnMuY2Fyb3VzZWwnKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkY2Fyb3VzZWwgPSAkKHRoaXMpXG4gICAgICAkY2Fyb3VzZWwuY2Fyb3VzZWwoJGNhcm91c2VsLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBjb2xsYXBzZS5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2NvbGxhcHNlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ09MTEFQU0UgUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQ29sbGFwc2UgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgICAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2UuREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnQpIHRoaXMuJHBhcmVudCA9ICQodGhpcy5vcHRpb25zLnBhcmVudClcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvZ2dsZSkgdGhpcy50b2dnbGUoKVxuICB9XG5cbiAgQ29sbGFwc2UuREVGQVVMVFMgPSB7XG4gICAgdG9nZ2xlOiB0cnVlXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuZGltZW5zaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYXNXaWR0aCA9IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ3dpZHRoJylcbiAgICByZXR1cm4gaGFzV2lkdGggPyAnd2lkdGgnIDogJ2hlaWdodCdcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcgfHwgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSkgcmV0dXJuXG5cbiAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBhY3RpdmVzID0gdGhpcy4kcGFyZW50ICYmIHRoaXMuJHBhcmVudC5maW5kKCc+IC5wYW5lbCA+IC5pbicpXG5cbiAgICBpZiAoYWN0aXZlcyAmJiBhY3RpdmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGhhc0RhdGEgPSBhY3RpdmVzLmRhdGEoJ2JzLmNvbGxhcHNlJylcbiAgICAgIGlmIChoYXNEYXRhICYmIGhhc0RhdGEudHJhbnNpdGlvbmluZykgcmV0dXJuXG4gICAgICBhY3RpdmVzLmNvbGxhcHNlKCdoaWRlJylcbiAgICAgIGhhc0RhdGEgfHwgYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScsIG51bGwpXG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKVxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgIFtkaW1lbnNpb25dKDApXG5cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAxXG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UgaW4nKVxuICAgICAgICBbZGltZW5zaW9uXSgnYXV0bycpXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAwXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdmFyIHNjcm9sbFNpemUgPSAkLmNhbWVsQ2FzZShbJ3Njcm9sbCcsIGRpbWVuc2lvbl0uam9pbignLScpKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsICQucHJveHkoY29tcGxldGUsIHRoaXMpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDM1MClcbiAgICAgIFtkaW1lbnNpb25dKHRoaXMuJGVsZW1lbnRbMF1bc2Nyb2xsU2l6ZV0pXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nIHx8ICF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudCgnaGlkZS5icy5jb2xsYXBzZScpXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIFtkaW1lbnNpb25dKHRoaXMuJGVsZW1lbnRbZGltZW5zaW9uXSgpKVxuICAgICAgWzBdLm9mZnNldEhlaWdodFxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAxXG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAwXG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC50cmlnZ2VyKCdoaWRkZW4uYnMuY29sbGFwc2UnKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgW2RpbWVuc2lvbl0oMClcbiAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCAkLnByb3h5KGNvbXBsZXRlLCB0aGlzKSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzNTApXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSA/ICdoaWRlJyA6ICdzaG93J10oKVxuICB9XG5cblxuICAvLyBDT0xMQVBTRSBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmNvbGxhcHNlXG5cbiAgJC5mbi5jb2xsYXBzZSA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbnMudG9nZ2xlICYmIG9wdGlvbiA9PSAnc2hvdycpIG9wdGlvbiA9ICFvcHRpb25cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnLCAoZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5jb2xsYXBzZS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG5cblxuICAvLyBDT0xMQVBTRSBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uY29sbGFwc2Uubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmNvbGxhcHNlID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpLCBocmVmXG4gICAgdmFyIHRhcmdldCAgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG4gICAgICAgIHx8IGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB8fCAoaHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKSkgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykgLy9zdHJpcCBmb3IgaWU3XG4gICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldClcbiAgICB2YXIgZGF0YSAgICA9ICR0YXJnZXQuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgIHZhciBvcHRpb24gID0gZGF0YSA/ICd0b2dnbGUnIDogJHRoaXMuZGF0YSgpXG4gICAgdmFyIHBhcmVudCAgPSAkdGhpcy5hdHRyKCdkYXRhLXBhcmVudCcpXG4gICAgdmFyICRwYXJlbnQgPSBwYXJlbnQgJiYgJChwYXJlbnQpXG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudHJhbnNpdGlvbmluZykge1xuICAgICAgaWYgKCRwYXJlbnQpICRwYXJlbnQuZmluZCgnW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXVtkYXRhLXBhcmVudD1cIicgKyBwYXJlbnQgKyAnXCJdJykubm90KCR0aGlzKS5hZGRDbGFzcygnY29sbGFwc2VkJylcbiAgICAgICR0aGlzWyR0YXJnZXQuaGFzQ2xhc3MoJ2luJykgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2NvbGxhcHNlZCcpXG4gICAgfVxuXG4gICAgJHRhcmdldC5jb2xsYXBzZShvcHRpb24pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGRyb3Bkb3duLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jZHJvcGRvd25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gRFJPUERPV04gQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGJhY2tkcm9wID0gJy5kcm9wZG93bi1iYWNrZHJvcCdcbiAgdmFyIHRvZ2dsZSAgID0gJ1tkYXRhLXRvZ2dsZT1kcm9wZG93bl0nXG4gIHZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2suYnMuZHJvcGRvd24nLCB0aGlzLnRvZ2dsZSlcbiAgfVxuXG4gIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgIGlmICgkdGhpcy5pcygnLmRpc2FibGVkLCA6ZGlzYWJsZWQnKSkgcmV0dXJuXG5cbiAgICB2YXIgJHBhcmVudCAgPSBnZXRQYXJlbnQoJHRoaXMpXG4gICAgdmFyIGlzQWN0aXZlID0gJHBhcmVudC5oYXNDbGFzcygnb3BlbicpXG5cbiAgICBjbGVhck1lbnVzKClcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgISRwYXJlbnQuY2xvc2VzdCgnLm5hdmJhci1uYXYnKS5sZW5ndGgpIHtcbiAgICAgICAgLy8gaWYgbW9iaWxlIHdlIHVzZSBhIGJhY2tkcm9wIGJlY2F1c2UgY2xpY2sgZXZlbnRzIGRvbid0IGRlbGVnYXRlXG4gICAgICAgICQoJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1iYWNrZHJvcFwiLz4nKS5pbnNlcnRBZnRlcigkKHRoaXMpKS5vbignY2xpY2snLCBjbGVhck1lbnVzKVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9XG4gICAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ3Nob3cuYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KSlcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgICAkcGFyZW50XG4gICAgICAgIC50b2dnbGVDbGFzcygnb3BlbicpXG4gICAgICAgIC50cmlnZ2VyKCdzaG93bi5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICR0aGlzLmZvY3VzKClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIS8oMzh8NDB8MjcpLy50ZXN0KGUua2V5Q29kZSkpIHJldHVyblxuXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKCR0aGlzLmlzKCcuZGlzYWJsZWQsIDpkaXNhYmxlZCcpKSByZXR1cm5cblxuICAgIHZhciAkcGFyZW50ICA9IGdldFBhcmVudCgkdGhpcylcbiAgICB2YXIgaXNBY3RpdmUgPSAkcGFyZW50Lmhhc0NsYXNzKCdvcGVuJylcblxuICAgIGlmICghaXNBY3RpdmUgfHwgKGlzQWN0aXZlICYmIGUua2V5Q29kZSA9PSAyNykpIHtcbiAgICAgIGlmIChlLndoaWNoID09IDI3KSAkcGFyZW50LmZpbmQodG9nZ2xlKS5mb2N1cygpXG4gICAgICByZXR1cm4gJHRoaXMuY2xpY2soKVxuICAgIH1cblxuICAgIHZhciBkZXNjID0gJyBsaTpub3QoLmRpdmlkZXIpOnZpc2libGUgYSdcbiAgICB2YXIgJGl0ZW1zID0gJHBhcmVudC5maW5kKCdbcm9sZT1tZW51XScgKyBkZXNjICsgJywgW3JvbGU9bGlzdGJveF0nICsgZGVzYylcblxuICAgIGlmICghJGl0ZW1zLmxlbmd0aCkgcmV0dXJuXG5cbiAgICB2YXIgaW5kZXggPSAkaXRlbXMuaW5kZXgoJGl0ZW1zLmZpbHRlcignOmZvY3VzJykpXG5cbiAgICBpZiAoZS5rZXlDb2RlID09IDM4ICYmIGluZGV4ID4gMCkgICAgICAgICAgICAgICAgIGluZGV4LS0gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cFxuICAgIGlmIChlLmtleUNvZGUgPT0gNDAgJiYgaW5kZXggPCAkaXRlbXMubGVuZ3RoIC0gMSkgaW5kZXgrKyAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICBpZiAoIX5pbmRleCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMFxuXG4gICAgJGl0ZW1zLmVxKGluZGV4KS5mb2N1cygpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhck1lbnVzKGUpIHtcbiAgICAkKGJhY2tkcm9wKS5yZW1vdmUoKVxuICAgICQodG9nZ2xlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcGFyZW50ID0gZ2V0UGFyZW50KCQodGhpcykpXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9XG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKSkgcmV0dXJuXG4gICAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ2hpZGUuYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cbiAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS50cmlnZ2VyKCdoaWRkZW4uYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJlbnQoJHRoaXMpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiAvI1tBLVphLXpdLy50ZXN0KHNlbGVjdG9yKSAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy9zdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgdmFyICRwYXJlbnQgPSBzZWxlY3RvciAmJiAkKHNlbGVjdG9yKVxuXG4gICAgcmV0dXJuICRwYXJlbnQgJiYgJHBhcmVudC5sZW5ndGggPyAkcGFyZW50IDogJHRoaXMucGFyZW50KClcbiAgfVxuXG5cbiAgLy8gRFJPUERPV04gUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5kcm9wZG93blxuXG4gICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy5kcm9wZG93bicpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuZHJvcGRvd24nLCAoZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dLmNhbGwoJHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuXG5cbiAgLy8gRFJPUERPV04gTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5kcm9wZG93biA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFQUExZIFRPIFNUQU5EQVJEIERST1BET1dOIEVMRU1FTlRTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgY2xlYXJNZW51cylcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgJy5kcm9wZG93biBmb3JtJywgZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9KVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCB0b2dnbGUsIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUpXG4gICAgLm9uKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgdG9nZ2xlICsgJywgW3JvbGU9bWVudV0sIFtyb2xlPWxpc3Rib3hdJywgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IG1vZGFsLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jbW9kYWxzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gTU9EQUwgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIE1vZGFsID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgICA9IG9wdGlvbnNcbiAgICB0aGlzLiRlbGVtZW50ICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRiYWNrZHJvcCA9XG4gICAgdGhpcy5pc1Nob3duICAgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbW90ZSkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVxuICAgICAgICAubG9hZCh0aGlzLm9wdGlvbnMucmVtb3RlLCAkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2xvYWRlZC5icy5tb2RhbCcpXG4gICAgICAgIH0sIHRoaXMpKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLkRFRkFVTFRTID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHNob3c6IHRydWVcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpc1shdGhpcy5pc1Nob3duID8gJ3Nob3cnIDogJ2hpZGUnXShfcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdzaG93LmJzLm1vZGFsJywgeyByZWxhdGVkVGFyZ2V0OiBfcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAodGhpcy5pc1Nob3duIHx8IGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5lc2NhcGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcsICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLCAkLnByb3h5KHRoaXMuaGlkZSwgdGhpcykpXG5cbiAgICB0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhhdC4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpXG5cbiAgICAgIGlmICghdGhhdC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGgpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5zY3JvbGxUb3AoMClcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAuYWRkQ2xhc3MoJ2luJylcbiAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpXG5cbiAgICAgIHRoYXQuZW5mb3JjZUZvY3VzKClcblxuICAgICAgdmFyIGUgPSAkLkV2ZW50KCdzaG93bi5icy5tb2RhbCcsIHsgcmVsYXRlZFRhcmdldDogX3JlbGF0ZWRUYXJnZXQgfSlcblxuICAgICAgdHJhbnNpdGlvbiA/XG4gICAgICAgIHRoYXQuJGVsZW1lbnQuZmluZCgnLm1vZGFsLWRpYWxvZycpIC8vIHdhaXQgZm9yIG1vZGFsIHRvIHNsaWRlIGluXG4gICAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQuZm9jdXMoKS50cmlnZ2VyKGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzAwKSA6XG4gICAgICAgIHRoYXQuJGVsZW1lbnQuZm9jdXMoKS50cmlnZ2VyKGUpXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBlID0gJC5FdmVudCgnaGlkZS5icy5tb2RhbCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmICghdGhpcy5pc1Nob3duIHx8IGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2VcblxuICAgIHRoaXMuZXNjYXBlKClcblxuICAgICQoZG9jdW1lbnQpLm9mZignZm9jdXNpbi5icy5tb2RhbCcpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgICAub2ZmKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJylcblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCAkLnByb3h5KHRoaXMuaGlkZU1vZGFsLCB0aGlzKSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDMwMCkgOlxuICAgICAgdGhpcy5oaWRlTW9kYWwoKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZignZm9jdXNpbi5icy5tb2RhbCcpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKCdmb2N1c2luLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudFswXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcykpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuZXNjYXBlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzU2hvd24gJiYgdGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdrZXl1cC5kaXNtaXNzLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLndoaWNoID09IDI3ICYmIHRoaXMuaGlkZSgpXG4gICAgICB9LCB0aGlzKSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdrZXl1cC5kaXNtaXNzLmJzLm1vZGFsJylcbiAgICB9XG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoaXMuJGVsZW1lbnQuaGlkZSgpXG4gICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnJlbW92ZUJhY2tkcm9wKClcbiAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignaGlkZGVuLmJzLm1vZGFsJylcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGJhY2tkcm9wICYmIHRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpXG4gICAgdGhpcy4kYmFja2Ryb3AgPSBudWxsXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuYmFja2Ryb3AgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgYW5pbWF0ZSA9IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/ICdmYWRlJyA6ICcnXG5cbiAgICBpZiAodGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5iYWNrZHJvcCkge1xuICAgICAgdmFyIGRvQW5pbWF0ZSA9ICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIGFuaW1hdGVcblxuICAgICAgdGhpcy4kYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgJyArIGFuaW1hdGUgKyAnXCIgLz4nKVxuICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcblxuICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHJldHVyblxuICAgICAgICB0aGlzLm9wdGlvbnMuYmFja2Ryb3AgPT0gJ3N0YXRpYydcbiAgICAgICAgICA/IHRoaXMuJGVsZW1lbnRbMF0uZm9jdXMuY2FsbCh0aGlzLiRlbGVtZW50WzBdKVxuICAgICAgICAgIDogdGhpcy5oaWRlLmNhbGwodGhpcylcbiAgICAgIH0sIHRoaXMpKVxuXG4gICAgICBpZiAoZG9BbmltYXRlKSB0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcblxuICAgICAgdGhpcy4kYmFja2Ryb3AuYWRkQ2xhc3MoJ2luJylcblxuICAgICAgaWYgKCFjYWxsYmFjaykgcmV0dXJuXG5cbiAgICAgIGRvQW5pbWF0ZSA/XG4gICAgICAgIHRoaXMuJGJhY2tkcm9wXG4gICAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGNhbGxiYWNrKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgICAgY2FsbGJhY2soKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duICYmIHRoaXMuJGJhY2tkcm9wKSB7XG4gICAgICB0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjYWxsYmFjaylcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICAgIGNhbGxiYWNrKClcblxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuXG4gIC8vIE1PREFMIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4ubW9kYWxcblxuICAkLmZuLm1vZGFsID0gZnVuY3Rpb24gKG9wdGlvbiwgX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5tb2RhbCcpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNb2RhbC5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5tb2RhbCcsIChkYXRhID0gbmV3IE1vZGFsKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oX3JlbGF0ZWRUYXJnZXQpXG4gICAgICBlbHNlIGlmIChvcHRpb25zLnNob3cpIGRhdGEuc2hvdyhfcmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5tb2RhbC5Db25zdHJ1Y3RvciA9IE1vZGFsXG5cblxuICAvLyBNT0RBTCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4ubW9kYWwubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLm1vZGFsID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gTU9EQUwgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMubW9kYWwuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgIHZhciBocmVmICAgID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpKSAvL3N0cmlwIGZvciBpZTdcbiAgICB2YXIgb3B0aW9uICA9ICR0YXJnZXQuZGF0YSgnYnMubW9kYWwnKSA/ICd0b2dnbGUnIDogJC5leHRlbmQoeyByZW1vdGU6ICEvIy8udGVzdChocmVmKSAmJiBocmVmIH0sICR0YXJnZXQuZGF0YSgpLCAkdGhpcy5kYXRhKCkpXG5cbiAgICBpZiAoJHRoaXMuaXMoJ2EnKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAkdGFyZ2V0XG4gICAgICAubW9kYWwob3B0aW9uLCB0aGlzKVxuICAgICAgLm9uZSgnaGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRoaXMuaXMoJzp2aXNpYmxlJykgJiYgJHRoaXMuZm9jdXMoKVxuICAgICAgfSlcbiAgfSlcblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignc2hvdy5icy5tb2RhbCcsICcubW9kYWwnLCBmdW5jdGlvbiAoKSB7ICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ21vZGFsLW9wZW4nKSB9KVxuICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgJy5tb2RhbCcsIGZ1bmN0aW9uICgpIHsgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcygnbW9kYWwtb3BlbicpIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHRvb2x0aXAuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyN0b29sdGlwXG4gKiBJbnNwaXJlZCBieSB0aGUgb3JpZ2luYWwgalF1ZXJ5LnRpcHN5IGJ5IEphc29uIEZyYW1lXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVE9PTFRJUCBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFRvb2x0aXAgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSAgICAgICA9XG4gICAgdGhpcy5vcHRpb25zICAgID1cbiAgICB0aGlzLmVuYWJsZWQgICAgPVxuICAgIHRoaXMudGltZW91dCAgICA9XG4gICAgdGhpcy5ob3ZlclN0YXRlID1cbiAgICB0aGlzLiRlbGVtZW50ICAgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoJ3Rvb2x0aXAnLCBlbGVtZW50LCBvcHRpb25zKVxuICB9XG5cbiAgVG9vbHRpcC5ERUZBVUxUUyA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIGNvbnRhaW5lcjogZmFsc2VcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodHlwZSwgZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuZW5hYmxlZCAgPSB0cnVlXG4gICAgdGhpcy50eXBlICAgICA9IHR5cGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9ucylcblxuICAgIHZhciB0cmlnZ2VycyA9IHRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIGZvciAodmFyIGkgPSB0cmlnZ2Vycy5sZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gdHJpZ2dlcnNbaV1cblxuICAgICAgaWYgKHRyaWdnZXIgPT0gJ2NsaWNrJykge1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay4nICsgdGhpcy50eXBlLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsICQucHJveHkodGhpcy50b2dnbGUsIHRoaXMpKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9ICdtYW51YWwnKSB7XG4gICAgICAgIHZhciBldmVudEluICA9IHRyaWdnZXIgPT0gJ2hvdmVyJyA/ICdtb3VzZWVudGVyJyA6ICdmb2N1c2luJ1xuICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VsZWF2ZScgOiAnZm9jdXNvdXQnXG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudEluICArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKVxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50T3V0ICsgJy4nICsgdGhpcy50eXBlLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID9cbiAgICAgICh0aGlzLl9vcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgeyB0cmlnZ2VyOiAnbWFudWFsJywgc2VsZWN0b3I6ICcnIH0pKSA6XG4gICAgICB0aGlzLmZpeFRpdGxlKClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb29sdGlwLkRFRkFVTFRTXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMuZ2V0RGVmYXVsdHMoKSwgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpXG5cbiAgICBpZiAob3B0aW9ucy5kZWxheSAmJiB0eXBlb2Ygb3B0aW9ucy5kZWxheSA9PSAnbnVtYmVyJykge1xuICAgICAgb3B0aW9ucy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogb3B0aW9ucy5kZWxheSxcbiAgICAgICAgaGlkZTogb3B0aW9ucy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgID0ge31cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmdldERlZmF1bHRzKClcblxuICAgIHRoaXMuX29wdGlvbnMgJiYgJC5lYWNoKHRoaXMuX29wdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoZGVmYXVsdHNba2V5XSAhPSB2YWx1ZSkgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/XG4gICAgICBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJ1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMuZGVsYXkgfHwgIXNlbGYub3B0aW9ucy5kZWxheS5zaG93KSByZXR1cm4gc2VsZi5zaG93KClcblxuICAgIHNlbGYudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSBzZWxmLnNob3coKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5zaG93KVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID9cbiAgICAgIG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGNsZWFyVGltZW91dChzZWxmLnRpbWVvdXQpXG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnb3V0J1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMuZGVsYXkgfHwgIXNlbGYub3B0aW9ucy5kZWxheS5oaWRlKSByZXR1cm4gc2VsZi5oaWRlKClcblxuICAgIHNlbGYudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaG92ZXJTdGF0ZSA9PSAnb3V0Jykgc2VsZi5oaWRlKClcbiAgICB9LCBzZWxmLm9wdGlvbnMuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSAkLkV2ZW50KCdzaG93LmJzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBpZiAodGhpcy5oYXNDb250ZW50KCkgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICB2YXIgJHRpcCA9IHRoaXMudGlwKClcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pICR0aXAuYWRkQ2xhc3MoJ2ZhZGUnKVxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgPT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLCAkdGlwWzBdLCB0aGlzLiRlbGVtZW50WzBdKSA6XG4gICAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnRcblxuICAgICAgdmFyIGF1dG9Ub2tlbiA9IC9cXHM/YXV0bz9cXHM/L2lcbiAgICAgIHZhciBhdXRvUGxhY2UgPSBhdXRvVG9rZW4udGVzdChwbGFjZW1lbnQpXG4gICAgICBpZiAoYXV0b1BsYWNlKSBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCAndG9wJ1xuXG4gICAgICAkdGlwXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAuY3NzKHsgdG9wOiAwLCBsZWZ0OiAwLCBkaXNwbGF5OiAnYmxvY2snIH0pXG4gICAgICAgIC5hZGRDbGFzcyhwbGFjZW1lbnQpXG5cbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPyAkdGlwLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpIDogJHRpcC5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KVxuXG4gICAgICB2YXIgcG9zICAgICAgICAgID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICB2YXIgYWN0dWFsV2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgICAgdmFyIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgdmFyICRwYXJlbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpXG5cbiAgICAgICAgdmFyIG9yZ1BsYWNlbWVudCA9IHBsYWNlbWVudFxuICAgICAgICB2YXIgZG9jU2Nyb2xsICAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgICB2YXIgcGFyZW50V2lkdGggID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9PSAnYm9keScgPyB3aW5kb3cuaW5uZXJXaWR0aCAgOiAkcGFyZW50Lm91dGVyV2lkdGgoKVxuICAgICAgICB2YXIgcGFyZW50SGVpZ2h0ID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9PSAnYm9keScgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAkcGFyZW50Lm91dGVySGVpZ2h0KClcbiAgICAgICAgdmFyIHBhcmVudExlZnQgICA9IHRoaXMub3B0aW9ucy5jb250YWluZXIgPT0gJ2JvZHknID8gMCA6ICRwYXJlbnQub2Zmc2V0KCkubGVmdFxuXG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudCA9PSAnYm90dG9tJyAmJiBwb3MudG9wICAgKyBwb3MuaGVpZ2h0ICArIGFjdHVhbEhlaWdodCAtIGRvY1Njcm9sbCA+IHBhcmVudEhlaWdodCAgPyAndG9wJyAgICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAndG9wJyAgICAmJiBwb3MudG9wICAgLSBkb2NTY3JvbGwgICAtIGFjdHVhbEhlaWdodCA8IDAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAncmlnaHQnICAmJiBwb3MucmlnaHQgKyBhY3R1YWxXaWR0aCA+IHBhcmVudFdpZHRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnbGVmdCcgICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAnbGVmdCcgICAmJiBwb3MubGVmdCAgLSBhY3R1YWxXaWR0aCA8IHBhcmVudExlZnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAncmlnaHQnICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudFxuXG4gICAgICAgICR0aXBcbiAgICAgICAgICAucmVtb3ZlQ2xhc3Mob3JnUGxhY2VtZW50KVxuICAgICAgICAgIC5hZGRDbGFzcyhwbGFjZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxjdWxhdGVkT2Zmc2V0ID0gdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KVxuXG4gICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KGNhbGN1bGF0ZWRPZmZzZXQsIHBsYWNlbWVudClcbiAgICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGxcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2hvd24uYnMuJyArIHRoYXQudHlwZSlcbiAgICAgIH1cblxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICAkdGlwXG4gICAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmFwcGx5UGxhY2VtZW50ID0gZnVuY3Rpb24gKG9mZnNldCwgcGxhY2VtZW50KSB7XG4gICAgdmFyIHJlcGxhY2VcbiAgICB2YXIgJHRpcCAgID0gdGhpcy50aXAoKVxuICAgIHZhciB3aWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgdmFyIGhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAvLyBtYW51YWxseSByZWFkIG1hcmdpbnMgYmVjYXVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaW5jbHVkZXMgZGlmZmVyZW5jZVxuICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMClcbiAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tbGVmdCcpLCAxMClcblxuICAgIC8vIHdlIG11c3QgY2hlY2sgZm9yIE5hTiBmb3IgaWUgOC85XG4gICAgaWYgKGlzTmFOKG1hcmdpblRvcCkpICBtYXJnaW5Ub3AgID0gMFxuICAgIGlmIChpc05hTihtYXJnaW5MZWZ0KSkgbWFyZ2luTGVmdCA9IDBcblxuICAgIG9mZnNldC50b3AgID0gb2Zmc2V0LnRvcCAgKyBtYXJnaW5Ub3BcbiAgICBvZmZzZXQubGVmdCA9IG9mZnNldC5sZWZ0ICsgbWFyZ2luTGVmdFxuXG4gICAgLy8gJC5mbi5vZmZzZXQgZG9lc24ndCByb3VuZCBwaXhlbCB2YWx1ZXNcbiAgICAvLyBzbyB3ZSB1c2Ugc2V0T2Zmc2V0IGRpcmVjdGx5IHdpdGggb3VyIG93biBmdW5jdGlvbiBCLTBcbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoJHRpcFswXSwgJC5leHRlbmQoe1xuICAgICAgdXNpbmc6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAkdGlwLmNzcyh7XG4gICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChwcm9wcy5sZWZ0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIG9mZnNldCksIDApXG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpXG5cbiAgICAvLyBjaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlIHRpcCB0byByZXNpemUgaXRzZWxmXG4gICAgdmFyIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICB2YXIgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgIGlmIChwbGFjZW1lbnQgPT0gJ3RvcCcgJiYgYWN0dWFsSGVpZ2h0ICE9IGhlaWdodCkge1xuICAgICAgcmVwbGFjZSA9IHRydWVcbiAgICAgIG9mZnNldC50b3AgPSBvZmZzZXQudG9wICsgaGVpZ2h0IC0gYWN0dWFsSGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKC9ib3R0b218dG9wLy50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHZhciBkZWx0YSA9IDBcblxuICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICBkZWx0YSAgICAgICA9IG9mZnNldC5sZWZ0ICogLTJcbiAgICAgICAgb2Zmc2V0LmxlZnQgPSAwXG5cbiAgICAgICAgJHRpcC5vZmZzZXQob2Zmc2V0KVxuXG4gICAgICAgIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICAgICAgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXBsYWNlQXJyb3coZGVsdGEgLSB3aWR0aCArIGFjdHVhbFdpZHRoLCBhY3R1YWxXaWR0aCwgJ2xlZnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlcGxhY2VBcnJvdyhhY3R1YWxIZWlnaHQgLSBoZWlnaHQsIGFjdHVhbEhlaWdodCwgJ3RvcCcpXG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2UpICR0aXAub2Zmc2V0KG9mZnNldClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnJlcGxhY2VBcnJvdyA9IGZ1bmN0aW9uIChkZWx0YSwgZGltZW5zaW9uLCBwb3NpdGlvbikge1xuICAgIHRoaXMuYXJyb3coKS5jc3MocG9zaXRpb24sIGRlbHRhID8gKDUwICogKDEgLSBkZWx0YSAvIGRpbWVuc2lvbikgKyAnJScpIDogJycpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGlwICA9IHRoaXMudGlwKClcbiAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFRpdGxlKClcblxuICAgICR0aXAuZmluZCgnLnRvb2x0aXAtaW5uZXInKVt0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10odGl0bGUpXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHQnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgJHRpcCA9IHRoaXMudGlwKClcbiAgICB2YXIgZSAgICA9ICQuRXZlbnQoJ2hpZGUuYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaWYgKHRoYXQuaG92ZXJTdGF0ZSAhPSAnaW4nKSAkdGlwLmRldGFjaCgpXG4gICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGRlbi5icy4nICsgdGhhdC50eXBlKVxuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgJHRpcFxuICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgIGNvbXBsZXRlKClcblxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGxcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5maXhUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgaWYgKCRlLmF0dHIoJ3RpdGxlJykgfHwgdHlwZW9mKCRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKSkgIT0gJ3N0cmluZycpIHtcbiAgICAgICRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCAkZS5hdHRyKCd0aXRsZScpIHx8ICcnKS5hdHRyKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmhhc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy4kZWxlbWVudFswXVxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgKHR5cGVvZiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT0gJ2Z1bmN0aW9uJykgPyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcbiAgICAgIHdpZHRoOiBlbC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0XG4gICAgfSwgdGhpcy4kZWxlbWVudC5vZmZzZXQoKSlcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQgPSBmdW5jdGlvbiAocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50ID09ICdib3R0b20nID8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LCAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMiAgfSA6XG4gICAgICAgICAgIHBsYWNlbWVudCA9PSAndG9wJyAgICA/IHsgdG9wOiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0LCBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDIgIH0gOlxuICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ2xlZnQnICAgPyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQgLyAyIC0gYWN0dWFsSGVpZ2h0IC8gMiwgbGVmdDogcG9zLmxlZnQgLSBhY3R1YWxXaWR0aCB9IDpcbiAgICAgICAgLyogcGxhY2VtZW50ID09ICdyaWdodCcgKi8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRpdGxlXG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciBvICA9IHRoaXMub3B0aW9uc1xuXG4gICAgdGl0bGUgPSAkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcbiAgICAgIHx8ICh0eXBlb2Ygby50aXRsZSA9PSAnZnVuY3Rpb24nID8gby50aXRsZS5jYWxsKCRlWzBdKSA6ICBvLnRpdGxlKVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRpcCA9IHRoaXMuJHRpcCB8fCAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSlcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRhcnJvdyA9IHRoaXMuJGFycm93IHx8IHRoaXMudGlwKCkuZmluZCgnLnRvb2x0aXAtYXJyb3cnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLiRlbGVtZW50WzBdLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbFxuICAgICAgdGhpcy5vcHRpb25zICA9IG51bGxcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gZSA/ICQoZS5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpIDogdGhpc1xuICAgIHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykgPyBzZWxmLmxlYXZlKHNlbGYpIDogc2VsZi5lbnRlcihzZWxmKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgIHRoaXMuaGlkZSgpLiRlbGVtZW50Lm9mZignLicgKyB0aGlzLnR5cGUpLnJlbW92ZURhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG4gIH1cblxuXG4gIC8vIFRPT0xUSVAgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLnRvb2x0aXBcblxuICAkLmZuLnRvb2x0aXAgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMudG9vbHRpcCcpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudG9vbHRpcCcsIChkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4udG9vbHRpcC5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcblxuXG4gIC8vIFRPT0xUSVAgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udG9vbHRpcC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udG9vbHRpcCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogcG9wb3Zlci5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3BvcG92ZXJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gUE9QT1ZFUiBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFBvcG92ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgncG9wb3ZlcicsIGVsZW1lbnQsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoISQuZm4udG9vbHRpcCkgdGhyb3cgbmV3IEVycm9yKCdQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanMnKVxuXG4gIFBvcG92ZXIuREVGQVVMVFMgPSAkLmV4dGVuZCh7fSwgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLCB7XG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgY29udGVudDogJycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nXG4gIH0pXG5cblxuICAvLyBOT1RFOiBQT1BPVkVSIEVYVEVORFMgdG9vbHRpcC5qc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFBvcG92ZXIucHJvdG90eXBlID0gJC5leHRlbmQoe30sICQuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpXG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQb3BvdmVyXG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuZ2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFBvcG92ZXIuREVGQVVMVFNcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aXAgICAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHRpdGxlICAgPSB0aGlzLmdldFRpdGxlKClcbiAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpXG5cbiAgICAkdGlwLmZpbmQoJy5wb3BvdmVyLXRpdGxlJylbdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCddKHRpdGxlKVxuICAgICR0aXAuZmluZCgnLnBvcG92ZXItY29udGVudCcpWyAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgICB0aGlzLm9wdGlvbnMuaHRtbCA/ICh0eXBlb2YgY29udGVudCA9PSAnc3RyaW5nJyA/ICdodG1sJyA6ICdhcHBlbmQnKSA6ICd0ZXh0J1xuICAgIF0oY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluJylcblxuICAgIC8vIElFOCBkb2Vzbid0IGFjY2VwdCBoaWRpbmcgdmlhIHRoZSBgOmVtcHR5YCBwc2V1ZG8gc2VsZWN0b3IsIHdlIGhhdmUgdG8gZG9cbiAgICAvLyB0aGlzIG1hbnVhbGx5IGJ5IGNoZWNraW5nIHRoZSBjb250ZW50cy5cbiAgICBpZiAoISR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5odG1sKCkpICR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5oaWRlKClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmhhc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLmdldENvbnRlbnQoKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIG8gID0gdGhpcy5vcHRpb25zXG5cbiAgICByZXR1cm4gJGUuYXR0cignZGF0YS1jb250ZW50JylcbiAgICAgIHx8ICh0eXBlb2Ygby5jb250ZW50ID09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgby5jb250ZW50LmNhbGwoJGVbMF0pIDpcbiAgICAgICAgICAgIG8uY29udGVudClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiRhcnJvdyA9IHRoaXMuJGFycm93IHx8IHRoaXMudGlwKCkuZmluZCgnLmFycm93JylcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLnRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuJHRpcCkgdGhpcy4kdGlwID0gJCh0aGlzLm9wdGlvbnMudGVtcGxhdGUpXG4gICAgcmV0dXJuIHRoaXMuJHRpcFxuICB9XG5cblxuICAvLyBQT1BPVkVSIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5wb3BvdmVyXG5cbiAgJC5mbi5wb3BvdmVyID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnBvcG92ZXInKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnBvcG92ZXInLCAoZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnBvcG92ZXIuQ29uc3RydWN0b3IgPSBQb3BvdmVyXG5cblxuICAvLyBQT1BPVkVSIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnBvcG92ZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnBvcG92ZXIgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHNjcm9sbHNweS5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Njcm9sbHNweVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNDUk9MTFNQWSBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaHJlZlxuICAgIHZhciBwcm9jZXNzICA9ICQucHJveHkodGhpcy5wcm9jZXNzLCB0aGlzKVxuXG4gICAgdGhpcy4kZWxlbWVudCAgICAgICA9ICQoZWxlbWVudCkuaXMoJ2JvZHknKSA/ICQod2luZG93KSA6ICQoZWxlbWVudClcbiAgICB0aGlzLiRib2R5ICAgICAgICAgID0gJCgnYm9keScpXG4gICAgdGhpcy4kc2Nyb2xsRWxlbWVudCA9IHRoaXMuJGVsZW1lbnQub24oJ3Njcm9sbC5icy5zY3JvbGwtc3B5LmRhdGEtYXBpJywgcHJvY2VzcylcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgID0gJC5leHRlbmQoe30sIFNjcm9sbFNweS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLnNlbGVjdG9yICAgICAgID0gKHRoaXMub3B0aW9ucy50YXJnZXRcbiAgICAgIHx8ICgoaHJlZiA9ICQoZWxlbWVudCkuYXR0cignaHJlZicpKSAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSkgLy9zdHJpcCBmb3IgaWU3XG4gICAgICB8fCAnJykgKyAnIC5uYXYgbGkgPiBhJ1xuICAgIHRoaXMub2Zmc2V0cyAgICAgICAgPSAkKFtdKVxuICAgIHRoaXMudGFyZ2V0cyAgICAgICAgPSAkKFtdKVxuICAgIHRoaXMuYWN0aXZlVGFyZ2V0ICAgPSBudWxsXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMucHJvY2VzcygpXG4gIH1cblxuICBTY3JvbGxTcHkuREVGQVVMVFMgPSB7XG4gICAgb2Zmc2V0OiAxMFxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvZmZzZXRNZXRob2QgPSB0aGlzLiRlbGVtZW50WzBdID09IHdpbmRvdyA/ICdvZmZzZXQnIDogJ3Bvc2l0aW9uJ1xuXG4gICAgdGhpcy5vZmZzZXRzID0gJChbXSlcbiAgICB0aGlzLnRhcmdldHMgPSAkKFtdKVxuXG4gICAgdmFyIHNlbGYgICAgID0gdGhpc1xuICAgIHZhciAkdGFyZ2V0cyA9IHRoaXMuJGJvZHlcbiAgICAgIC5maW5kKHRoaXMuc2VsZWN0b3IpXG4gICAgICAubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbCAgID0gJCh0aGlzKVxuICAgICAgICB2YXIgaHJlZiAgPSAkZWwuZGF0YSgndGFyZ2V0JykgfHwgJGVsLmF0dHIoJ2hyZWYnKVxuICAgICAgICB2YXIgJGhyZWYgPSAvXiMuLy50ZXN0KGhyZWYpICYmICQoaHJlZilcblxuICAgICAgICByZXR1cm4gKCRocmVmXG4gICAgICAgICAgJiYgJGhyZWYubGVuZ3RoXG4gICAgICAgICAgJiYgJGhyZWYuaXMoJzp2aXNpYmxlJylcbiAgICAgICAgICAmJiBbWyAkaHJlZltvZmZzZXRNZXRob2RdKCkudG9wICsgKCEkLmlzV2luZG93KHNlbGYuJHNjcm9sbEVsZW1lbnQuZ2V0KDApKSAmJiBzZWxmLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpKSwgaHJlZiBdXSkgfHwgbnVsbFxuICAgICAgfSlcbiAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhWzBdIC0gYlswXSB9KVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9mZnNldHMucHVzaCh0aGlzWzBdKVxuICAgICAgICBzZWxmLnRhcmdldHMucHVzaCh0aGlzWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIFNjcm9sbFNweS5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Nyb2xsVG9wICAgID0gdGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSArIHRoaXMub3B0aW9ucy5vZmZzZXRcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHQgfHwgdGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHRcbiAgICB2YXIgbWF4U2Nyb2xsICAgID0gc2Nyb2xsSGVpZ2h0IC0gdGhpcy4kc2Nyb2xsRWxlbWVudC5oZWlnaHQoKVxuICAgIHZhciBvZmZzZXRzICAgICAgPSB0aGlzLm9mZnNldHNcbiAgICB2YXIgdGFyZ2V0cyAgICAgID0gdGhpcy50YXJnZXRzXG4gICAgdmFyIGFjdGl2ZVRhcmdldCA9IHRoaXMuYWN0aXZlVGFyZ2V0XG4gICAgdmFyIGlcblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICByZXR1cm4gYWN0aXZlVGFyZ2V0ICE9IChpID0gdGFyZ2V0cy5sYXN0KClbMF0pICYmIHRoaXMuYWN0aXZhdGUoaSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8PSBvZmZzZXRzWzBdKSB7XG4gICAgICByZXR1cm4gYWN0aXZlVGFyZ2V0ICE9IChpID0gdGFyZ2V0c1swXSkgJiYgdGhpcy5hY3RpdmF0ZShpKVxuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBhY3RpdmVUYXJnZXQgIT0gdGFyZ2V0c1tpXVxuICAgICAgICAmJiBzY3JvbGxUb3AgPj0gb2Zmc2V0c1tpXVxuICAgICAgICAmJiAoIW9mZnNldHNbaSArIDFdIHx8IHNjcm9sbFRvcCA8PSBvZmZzZXRzW2kgKyAxXSlcbiAgICAgICAgJiYgdGhpcy5hY3RpdmF0ZSggdGFyZ2V0c1tpXSApXG4gICAgfVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgJCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LCAnLmFjdGl2ZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yICtcbiAgICAgICAgJ1tkYXRhLXRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCJdLCcgK1xuICAgICAgICB0aGlzLnNlbGVjdG9yICsgJ1tocmVmPVwiJyArIHRhcmdldCArICdcIl0nXG5cbiAgICB2YXIgYWN0aXZlID0gJChzZWxlY3RvcilcbiAgICAgIC5wYXJlbnRzKCdsaScpXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICBpZiAoYWN0aXZlLnBhcmVudCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgIGFjdGl2ZSA9IGFjdGl2ZVxuICAgICAgICAuY2xvc2VzdCgnbGkuZHJvcGRvd24nKVxuICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgYWN0aXZlLnRyaWdnZXIoJ2FjdGl2YXRlLmJzLnNjcm9sbHNweScpXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5zY3JvbGxzcHlcblxuICAkLmZuLnNjcm9sbHNweSA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5zY3JvbGxzcHknKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnNjcm9sbHNweScsIChkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcblxuXG4gIC8vIFNDUk9MTFNQWSBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uc2Nyb2xsc3B5ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gU0NST0xMU1BZIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3B5ID0gJCh0aGlzKVxuICAgICAgJHNweS5zY3JvbGxzcHkoJHNweS5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdGFiLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdGFic1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFRBQiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFRhYiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gJChlbGVtZW50KVxuICB9XG5cbiAgVGFiLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGhpcyAgICA9IHRoaXMuZWxlbWVudFxuICAgIHZhciAkdWwgICAgICA9ICR0aGlzLmNsb3Nlc3QoJ3VsOm5vdCguZHJvcGRvd24tbWVudSknKVxuICAgIHZhciBzZWxlY3RvciA9ICR0aGlzLmRhdGEoJ3RhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy9zdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgaWYgKCR0aGlzLnBhcmVudCgnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVyblxuXG4gICAgdmFyIHByZXZpb3VzID0gJHVsLmZpbmQoJy5hY3RpdmU6bGFzdCBhJylbMF1cbiAgICB2YXIgZSAgICAgICAgPSAkLkV2ZW50KCdzaG93LmJzLnRhYicsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgICR0aGlzLnRyaWdnZXIoZSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciAkdGFyZ2V0ID0gJChzZWxlY3RvcilcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRoaXMucGFyZW50KCdsaScpLCAkdWwpXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGFyZ2V0LCAkdGFyZ2V0LnBhcmVudCgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy50cmlnZ2VyKHtcbiAgICAgICAgdHlwZTogJ3Nob3duLmJzLnRhYicsXG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBUYWIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICB2YXIgJGFjdGl2ZSAgICA9IGNvbnRhaW5lci5maW5kKCc+IC5hY3RpdmUnKVxuICAgIHZhciB0cmFuc2l0aW9uID0gY2FsbGJhY2tcbiAgICAgICYmICQuc3VwcG9ydC50cmFuc2l0aW9uXG4gICAgICAmJiAkYWN0aXZlLmhhc0NsYXNzKCdmYWRlJylcblxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAkYWN0aXZlXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgLmZpbmQoJz4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlJylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICBlbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBlbGVtZW50WzBdLm9mZnNldFdpZHRoIC8vIHJlZmxvdyBmb3IgdHJhbnNpdGlvblxuICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdmYWRlJylcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50KCcuZHJvcGRvd24tbWVudScpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xvc2VzdCgnbGkuZHJvcGRvd24nKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24gP1xuICAgICAgJGFjdGl2ZVxuICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgbmV4dClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgbmV4dCgpXG5cbiAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdpbicpXG4gIH1cblxuXG4gIC8vIFRBQiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi50YWJcblxuICAkLmZuLnRhYiA9IGZ1bmN0aW9uICggb3B0aW9uICkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMudGFiJylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy50YWInLCAoZGF0YSA9IG5ldyBUYWIodGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4udGFiLkNvbnN0cnVjdG9yID0gVGFiXG5cblxuICAvLyBUQUIgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09XG5cbiAgJC5mbi50YWIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnRhYiA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFRBQiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMudGFiLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCh0aGlzKS50YWIoJ3Nob3cnKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBhZmZpeC5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2FmZml4XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQUZGSVggQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIEFmZml4ID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQWZmaXguREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgdGhpcy4kd2luZG93ID0gJCh3aW5kb3cpXG4gICAgICAub24oJ3Njcm9sbC5icy5hZmZpeC5kYXRhLWFwaScsICQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLCB0aGlzKSlcbiAgICAgIC5vbignY2xpY2suYnMuYWZmaXguZGF0YS1hcGknLCAgJC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLCB0aGlzKSlcblxuICAgIHRoaXMuJGVsZW1lbnQgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuYWZmaXhlZCAgICAgID1cbiAgICB0aGlzLnVucGluICAgICAgICA9XG4gICAgdGhpcy5waW5uZWRPZmZzZXQgPSBudWxsXG5cbiAgICB0aGlzLmNoZWNrUG9zaXRpb24oKVxuICB9XG5cbiAgQWZmaXguUkVTRVQgPSAnYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbSdcblxuICBBZmZpeC5ERUZBVUxUUyA9IHtcbiAgICBvZmZzZXQ6IDBcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5nZXRQaW5uZWRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucGlubmVkT2Zmc2V0KSByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXRcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKEFmZml4LlJFU0VUKS5hZGRDbGFzcygnYWZmaXgnKVxuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsVG9wKClcbiAgICB2YXIgcG9zaXRpb24gID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKVxuICAgIHJldHVybiAodGhpcy5waW5uZWRPZmZzZXQgPSBwb3NpdGlvbi50b3AgLSBzY3JvbGxUb3ApXG4gIH1cblxuICBBZmZpeC5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCgkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbiwgdGhpcyksIDEpXG4gIH1cblxuICBBZmZpeC5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHJldHVyblxuXG4gICAgdmFyIHNjcm9sbEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgdmFyIHNjcm9sbFRvcCAgICA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AoKVxuICAgIHZhciBwb3NpdGlvbiAgICAgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpXG4gICAgdmFyIG9mZnNldCAgICAgICA9IHRoaXMub3B0aW9ucy5vZmZzZXRcbiAgICB2YXIgb2Zmc2V0VG9wICAgID0gb2Zmc2V0LnRvcFxuICAgIHZhciBvZmZzZXRCb3R0b20gPSBvZmZzZXQuYm90dG9tXG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09ICd0b3AnKSBwb3NpdGlvbi50b3AgKz0gc2Nyb2xsVG9wXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCAhPSAnb2JqZWN0JykgICAgICAgICBvZmZzZXRCb3R0b20gPSBvZmZzZXRUb3AgPSBvZmZzZXRcbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCA9PSAnZnVuY3Rpb24nKSAgICBvZmZzZXRUb3AgICAgPSBvZmZzZXQudG9wKHRoaXMuJGVsZW1lbnQpXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRCb3R0b20gPT0gJ2Z1bmN0aW9uJykgb2Zmc2V0Qm90dG9tID0gb2Zmc2V0LmJvdHRvbSh0aGlzLiRlbGVtZW50KVxuXG4gICAgdmFyIGFmZml4ID0gdGhpcy51bnBpbiAgICE9IG51bGwgJiYgKHNjcm9sbFRvcCArIHRoaXMudW5waW4gPD0gcG9zaXRpb24udG9wKSA/IGZhbHNlIDpcbiAgICAgICAgICAgICAgICBvZmZzZXRCb3R0b20gIT0gbnVsbCAmJiAocG9zaXRpb24udG9wICsgdGhpcy4kZWxlbWVudC5oZWlnaHQoKSA+PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20pID8gJ2JvdHRvbScgOlxuICAgICAgICAgICAgICAgIG9mZnNldFRvcCAgICAhPSBudWxsICYmIChzY3JvbGxUb3AgPD0gb2Zmc2V0VG9wKSA/ICd0b3AnIDogZmFsc2VcblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09IGFmZml4KSByZXR1cm5cbiAgICBpZiAodGhpcy51bnBpbikgdGhpcy4kZWxlbWVudC5jc3MoJ3RvcCcsICcnKVxuXG4gICAgdmFyIGFmZml4VHlwZSA9ICdhZmZpeCcgKyAoYWZmaXggPyAnLScgKyBhZmZpeCA6ICcnKVxuICAgIHZhciBlICAgICAgICAgPSAkLkV2ZW50KGFmZml4VHlwZSArICcuYnMuYWZmaXgnKVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmFmZml4ZWQgPSBhZmZpeFxuICAgIHRoaXMudW5waW4gPSBhZmZpeCA9PSAnYm90dG9tJyA/IHRoaXMuZ2V0UGlubmVkT2Zmc2V0KCkgOiBudWxsXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQ2xhc3MoQWZmaXguUkVTRVQpXG4gICAgICAuYWRkQ2xhc3MoYWZmaXhUeXBlKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChhZmZpeFR5cGUucmVwbGFjZSgnYWZmaXgnLCAnYWZmaXhlZCcpKSlcblxuICAgIGlmIChhZmZpeCA9PSAnYm90dG9tJykge1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmZzZXQoeyB0b3A6IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSAtIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCkgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIEFGRklYIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uYWZmaXhcblxuICAkLmZuLmFmZml4ID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmFmZml4JylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5hZmZpeCcsIChkYXRhID0gbmV3IEFmZml4KHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmFmZml4LkNvbnN0cnVjdG9yID0gQWZmaXhcblxuXG4gIC8vIEFGRklYIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5hZmZpeC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYWZmaXggPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBRkZJWCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS1zcHk9XCJhZmZpeFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzcHkgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSA9ICRzcHkuZGF0YSgpXG5cbiAgICAgIGRhdGEub2Zmc2V0ID0gZGF0YS5vZmZzZXQgfHwge31cblxuICAgICAgaWYgKGRhdGEub2Zmc2V0Qm90dG9tKSBkYXRhLm9mZnNldC5ib3R0b20gPSBkYXRhLm9mZnNldEJvdHRvbVxuICAgICAgaWYgKGRhdGEub2Zmc2V0VG9wKSAgICBkYXRhLm9mZnNldC50b3AgICAgPSBkYXRhLm9mZnNldFRvcFxuXG4gICAgICAkc3B5LmFmZml4KGRhdGEpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLyohXG4gKiBDaGFwbGluIDEuMC4wXG4gKlxuICogQ2hhcGxpbiBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIEZvciBhbGwgZGV0YWlscyBhbmQgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHA6Ly9jaGFwbGluanMub3JnXG4gKi9cblxuKGZ1bmN0aW9uKCl7XG5cbnZhciBsb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBtb2R1bGVzID0ge307XG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIHZhciBkdW1teSA9IGZ1bmN0aW9uKCkge3JldHVybiBmdW5jdGlvbigpIHt9O307XG4gIHZhciBpbml0TW9kdWxlID0gZnVuY3Rpb24obmFtZSwgZGVmaW5pdGlvbikge1xuICAgIHZhciBtb2R1bGUgPSB7aWQ6IG5hbWUsIGV4cG9ydHM6IHt9fTtcbiAgICBkZWZpbml0aW9uKG1vZHVsZS5leHBvcnRzLCBkdW1teSgpLCBtb2R1bGUpO1xuICAgIHZhciBleHBvcnRzID0gY2FjaGVbbmFtZV0gPSBtb2R1bGUuZXhwb3J0cztcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfTtcblxuICB2YXIgbG9hZGVyID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShwYXRoKSkgcmV0dXJuIGNhY2hlW3BhdGhdO1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KHBhdGgpKSByZXR1cm4gaW5pdE1vZHVsZShwYXRoLCBtb2R1bGVzW3BhdGhdKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyBwYXRoICsgJ1wiJyk7XG4gIH07XG5cbiAgbG9hZGVyLnJlZ2lzdGVyID0gZnVuY3Rpb24oYnVuZGxlLCBmbikge1xuICAgIG1vZHVsZXNbYnVuZGxlXSA9IGZuO1xuICB9O1xuICByZXR1cm4gbG9hZGVyO1xufSkoKTtcblxubG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2FwcGxpY2F0aW9uJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBBcHBsaWNhdGlvbiwgQmFja2JvbmUsIENvbXBvc2VyLCBEaXNwYXRjaGVyLCBFdmVudEJyb2tlciwgTGF5b3V0LCBSb3V0ZXIsIG1lZGlhdG9yLCBfO1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5EaXNwYXRjaGVyID0gbG9hZGVyKCdjaGFwbGluL2Rpc3BhdGNoZXInKTtcblxuTGF5b3V0ID0gbG9hZGVyKCdjaGFwbGluL3ZpZXdzL2xheW91dCcpO1xuXG5Db21wb3NlciA9IGxvYWRlcignY2hhcGxpbi9jb21wb3NlcicpO1xuXG5Sb3V0ZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3JvdXRlcicpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb24gPSAoZnVuY3Rpb24oKSB7XG5cbiAgQXBwbGljYXRpb24uZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKEFwcGxpY2F0aW9uLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS50aXRsZSA9ICcnO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5kaXNwYXRjaGVyID0gbnVsbDtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gbnVsbDtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUucm91dGVyID0gbnVsbDtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuY29tcG9zZXIgPSBudWxsO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5zdGFydGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gQXBwbGljYXRpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICB9XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uI2luaXRpYWxpemU6IEFwcCB3YXMgYWxyZWFkeSBzdGFydGVkJyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFJvdXRlcihvcHRpb25zLnJvdXRlcywgb3B0aW9ucyk7XG4gICAgdGhpcy5pbml0RGlzcGF0Y2hlcihvcHRpb25zKTtcbiAgICB0aGlzLmluaXRMYXlvdXQob3B0aW9ucyk7XG4gICAgdGhpcy5pbml0Q29tcG9zZXIob3B0aW9ucyk7XG4gICAgdGhpcy5pbml0TWVkaWF0b3IoKTtcbiAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0RGlzcGF0Y2hlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIob3B0aW9ucyk7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXRMYXlvdXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoKF9yZWYgPSBvcHRpb25zLnRpdGxlKSA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0ID0gbmV3IExheW91dChvcHRpb25zKTtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdENvbXBvc2VyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tcG9zZXIgPSBuZXcgQ29tcG9zZXIob3B0aW9ucyk7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXRNZWRpYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtZWRpYXRvci5zZWFsKCk7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXRSb3V0ZXIgPSBmdW5jdGlvbihyb3V0ZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIHR5cGVvZiByb3V0ZXMgPT09IFwiZnVuY3Rpb25cIiA/IHJvdXRlcyh0aGlzLnJvdXRlci5tYXRjaCkgOiB2b2lkIDA7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yb3V0ZXIuc3RhcnRIaXN0b3J5KCk7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvcGVydGllcyA9IFsnZGlzcGF0Y2hlcicsICdsYXlvdXQnLCAncm91dGVyJywgJ2NvbXBvc2VyJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICBpZiAodGhpc1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXNbcHJvcF0uZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIEFwcGxpY2F0aW9uO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL21lZGlhdG9yJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgaGFuZGxlcnMsIG1lZGlhdG9yLCBzdXBwb3J0LCB1dGlscywgXyxcbiAgX19zbGljZSA9IFtdLnNsaWNlO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5zdXBwb3J0ID0gbG9hZGVyKCdjaGFwbGluL2xpYi9zdXBwb3J0Jyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5tZWRpYXRvciA9IHt9O1xuXG5tZWRpYXRvci5zdWJzY3JpYmUgPSBCYWNrYm9uZS5FdmVudHMub247XG5cbm1lZGlhdG9yLnVuc3Vic2NyaWJlID0gQmFja2JvbmUuRXZlbnRzLm9mZjtcblxubWVkaWF0b3IucHVibGlzaCA9IEJhY2tib25lLkV2ZW50cy50cmlnZ2VyO1xuXG5tZWRpYXRvci5fY2FsbGJhY2tzID0gbnVsbDtcblxuaGFuZGxlcnMgPSBtZWRpYXRvci5faGFuZGxlcnMgPSB7fTtcblxubWVkaWF0b3Iuc2V0SGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG1ldGhvZCwgaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGhhbmRsZXJzW25hbWVdID0ge1xuICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICBtZXRob2Q6IG1ldGhvZFxuICB9O1xufTtcblxubWVkaWF0b3IuZXhlY3V0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXJncywgaGFuZGxlciwgbmFtZSwgbmFtZU9yT2JqLCBzaWxlbnQ7XG4gIG5hbWVPck9iaiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gIHNpbGVudCA9IGZhbHNlO1xuICBpZiAodHlwZW9mIG5hbWVPck9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBzaWxlbnQgPSBuYW1lT3JPYmouc2lsZW50O1xuICAgIG5hbWUgPSBuYW1lT3JPYmoubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lID0gbmFtZU9yT2JqO1xuICB9XG4gIGhhbmRsZXIgPSBoYW5kbGVyc1tuYW1lXTtcbiAgaWYgKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gaGFuZGxlci5tZXRob2QuYXBwbHkoaGFuZGxlci5pbnN0YW5jZSwgYXJncyk7XG4gIH0gZWxzZSBpZiAoIXNpbGVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1lZGlhdG9yLmV4ZWN1dGU6IFwiICsgbmFtZSArIFwiIGhhbmRsZXIgaXMgbm90IGRlZmluZWRcIik7XG4gIH1cbn07XG5cbm1lZGlhdG9yLnJlbW92ZUhhbmRsZXJzID0gZnVuY3Rpb24oaW5zdGFuY2VPck5hbWVzKSB7XG4gIHZhciBoYW5kbGVyLCBuYW1lLCBfaSwgX2xlbjtcbiAgaWYgKCFpbnN0YW5jZU9yTmFtZXMpIHtcbiAgICBtZWRpYXRvci5faGFuZGxlcnMgPSB7fTtcbiAgfVxuICBpZiAodXRpbHMuaXNBcnJheShpbnN0YW5jZU9yTmFtZXMpKSB7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBpbnN0YW5jZU9yTmFtZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIG5hbWUgPSBpbnN0YW5jZU9yTmFtZXNbX2ldO1xuICAgICAgZGVsZXRlIGhhbmRsZXJzW25hbWVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKG5hbWUgaW4gaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tuYW1lXTtcbiAgICAgIGlmIChoYW5kbGVyLmluc3RhbmNlID09PSBpbnN0YW5jZU9yTmFtZXMpIHtcbiAgICAgICAgZGVsZXRlIGhhbmRsZXJzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudXRpbHMucmVhZG9ubHkobWVkaWF0b3IsICdzdWJzY3JpYmUnLCAndW5zdWJzY3JpYmUnLCAncHVibGlzaCcsICdzZXRIYW5kbGVyJywgJ2V4ZWN1dGUnLCAncmVtb3ZlSGFuZGxlcnMnKTtcblxubWVkaWF0b3Iuc2VhbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoc3VwcG9ydC5wcm9wZXJ0eURlc2NyaXB0b3JzICYmIE9iamVjdC5zZWFsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZWFsKG1lZGlhdG9yKTtcbiAgfVxufTtcblxudXRpbHMucmVhZG9ubHkobWVkaWF0b3IsICdzZWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vZGlzcGF0Y2hlcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIERpc3BhdGNoZXIsIEV2ZW50QnJva2VyLCBtZWRpYXRvciwgdXRpbHMsIF87XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlciA9IChmdW5jdGlvbigpIHtcblxuICBEaXNwYXRjaGVyLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChEaXNwYXRjaGVyLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnByZXZpb3VzUm91dGUgPSBudWxsO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmN1cnJlbnRDb250cm9sbGVyID0gbnVsbDtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5jdXJyZW50Um91dGUgPSBudWxsO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmN1cnJlbnRQYXJhbXMgPSBudWxsO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmN1cnJlbnRRdWVyeSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0gXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICBjb250cm9sbGVyUGF0aDogJ2NvbnRyb2xsZXJzLycsXG4gICAgICBjb250cm9sbGVyU3VmZml4OiAnX2NvbnRyb2xsZXInXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlRXZlbnQoJ3JvdXRlcjptYXRjaCcsIHRoaXMuZGlzcGF0Y2gpO1xuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24ocm91dGUsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIHZhciBfcmVmLCBfcmVmMSxcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBwYXJhbXMgPSBwYXJhbXMgPyBfLmV4dGVuZCh7fSwgcGFyYW1zKSA6IHt9O1xuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5leHRlbmQoe30sIG9wdGlvbnMpIDoge307XG4gICAgaWYgKCEob3B0aW9ucy5xdWVyeSAhPSBudWxsKSkge1xuICAgICAgb3B0aW9ucy5xdWVyeSA9IHt9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5mb3JjZVN0YXJ0dXAgIT09IHRydWUpIHtcbiAgICAgIG9wdGlvbnMuZm9yY2VTdGFydHVwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5mb3JjZVN0YXJ0dXAgJiYgKChfcmVmID0gdGhpcy5jdXJyZW50Um91dGUpICE9IG51bGwgPyBfcmVmLmNvbnRyb2xsZXIgOiB2b2lkIDApID09PSByb3V0ZS5jb250cm9sbGVyICYmICgoX3JlZjEgPSB0aGlzLmN1cnJlbnRSb3V0ZSkgIT0gbnVsbCA/IF9yZWYxLmFjdGlvbiA6IHZvaWQgMCkgPT09IHJvdXRlLmFjdGlvbiAmJiBfLmlzRXF1YWwodGhpcy5jdXJyZW50UGFyYW1zLCBwYXJhbXMpICYmIF8uaXNFcXVhbCh0aGlzLmN1cnJlbnRRdWVyeSwgb3B0aW9ucy5xdWVyeSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubG9hZENvbnRyb2xsZXIocm91dGUuY29udHJvbGxlciwgZnVuY3Rpb24oQ29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIF90aGlzLmNvbnRyb2xsZXJMb2FkZWQocm91dGUsIHBhcmFtcywgb3B0aW9ucywgQ29udHJvbGxlcik7XG4gICAgfSk7XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUubG9hZENvbnRyb2xsZXIgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgdmFyIGZpbGVOYW1lLCBtb2R1bGVOYW1lLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGZpbGVOYW1lID0gbmFtZSArIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlclN1ZmZpeDtcbiAgICBtb2R1bGVOYW1lID0gdGhpcy5zZXR0aW5ncy5jb250cm9sbGVyUGF0aCArIGZpbGVOYW1lO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcbiAgICAgIHJldHVybiByZXF1aXJlKFttb2R1bGVOYW1lXSwgaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlcihyZXF1aXJlKG1vZHVsZU5hbWUpKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5jb250cm9sbGVyTG9hZGVkID0gZnVuY3Rpb24ocm91dGUsIHBhcmFtcywgb3B0aW9ucywgQ29udHJvbGxlcikge1xuICAgIHZhciBjb250cm9sbGVyLCBwcmV2LCBwcmV2aW91cztcbiAgICBpZiAodGhpcy5uZXh0UHJldmlvdXNSb3V0ZSA9IHRoaXMuY3VycmVudFJvdXRlKSB7XG4gICAgICBwcmV2aW91cyA9IF8uZXh0ZW5kKHt9LCB0aGlzLm5leHRQcmV2aW91c1JvdXRlKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXJhbXMgIT0gbnVsbCkge1xuICAgICAgICBwcmV2aW91cy5wYXJhbXMgPSB0aGlzLmN1cnJlbnRQYXJhbXM7XG4gICAgICB9XG4gICAgICBpZiAocHJldmlvdXMucHJldmlvdXMpIHtcbiAgICAgICAgZGVsZXRlIHByZXZpb3VzLnByZXZpb3VzO1xuICAgICAgfVxuICAgICAgcHJldiA9IHtcbiAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLm5leHRDdXJyZW50Um91dGUgPSBfLmV4dGVuZCh7fSwgcm91dGUsIHByZXYpO1xuICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihwYXJhbXMsIHRoaXMubmV4dEN1cnJlbnRSb3V0ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUJlZm9yZUFjdGlvbihjb250cm9sbGVyLCB0aGlzLm5leHRDdXJyZW50Um91dGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZXhlY3V0ZUFjdGlvbiA9IGZ1bmN0aW9uKGNvbnRyb2xsZXIsIHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q29udHJvbGxlcikge1xuICAgICAgdGhpcy5wdWJsaXNoRXZlbnQoJ2JlZm9yZUNvbnRyb2xsZXJEaXNwb3NlJywgdGhpcy5jdXJyZW50Q29udHJvbGxlcik7XG4gICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyLmRpc3Bvc2UocGFyYW1zLCByb3V0ZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuY3VycmVudFBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IG9wdGlvbnMucXVlcnk7XG4gICAgY29udHJvbGxlcltyb3V0ZS5hY3Rpb25dKHBhcmFtcywgcm91dGUsIG9wdGlvbnMpO1xuICAgIGlmIChjb250cm9sbGVyLnJlZGlyZWN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaEV2ZW50KCdkaXNwYXRjaGVyOmRpc3BhdGNoJywgdGhpcy5jdXJyZW50Q29udHJvbGxlciwgcGFyYW1zLCByb3V0ZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZXhlY3V0ZUJlZm9yZUFjdGlvbiA9IGZ1bmN0aW9uKGNvbnRyb2xsZXIsIHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYmVmb3JlLCBleGVjdXRlQWN0aW9uLCBwcm9taXNlLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGJlZm9yZSA9IGNvbnRyb2xsZXIuYmVmb3JlQWN0aW9uO1xuICAgIGV4ZWN1dGVBY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChjb250cm9sbGVyLnJlZGlyZWN0ZWQgfHwgX3RoaXMuY3VycmVudFJvdXRlICYmIHJvdXRlID09PSBfdGhpcy5jdXJyZW50Um91dGUpIHtcbiAgICAgICAgX3RoaXMubmV4dFByZXZpb3VzUm91dGUgPSBfdGhpcy5uZXh0Q3VycmVudFJvdXRlID0gbnVsbDtcbiAgICAgICAgY29udHJvbGxlci5kaXNwb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLnByZXZpb3VzUm91dGUgPSBfdGhpcy5uZXh0UHJldmlvdXNSb3V0ZTtcbiAgICAgIF90aGlzLmN1cnJlbnRSb3V0ZSA9IF90aGlzLm5leHRDdXJyZW50Um91dGU7XG4gICAgICBfdGhpcy5uZXh0UHJldmlvdXNSb3V0ZSA9IF90aGlzLm5leHRDdXJyZW50Um91dGUgPSBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzLmV4ZWN1dGVBY3Rpb24oY29udHJvbGxlciwgcm91dGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoIWJlZm9yZSkge1xuICAgICAgZXhlY3V0ZUFjdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJlZm9yZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29udHJvbGxlciNiZWZvcmVBY3Rpb246IGZ1bmN0aW9uIGV4cGVjdGVkLiAnICsgJ09sZCBvYmplY3QtbGlrZSBmb3JtIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICAgIHByb21pc2UgPSBjb250cm9sbGVyLmJlZm9yZUFjdGlvbihwYXJhbXMsIHJvdXRlLCBvcHRpb25zKTtcbiAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcbiAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZXhlY3V0ZUFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIERpc3BhdGNoZXI7XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vY29tcG9zZXInLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBDb21wb3NlciwgQ29tcG9zaXRpb24sIEV2ZW50QnJva2VyLCBtZWRpYXRvciwgdXRpbHMsIF87XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5Db21wb3NpdGlvbiA9IGxvYWRlcignY2hhcGxpbi9saWIvY29tcG9zaXRpb24nKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2VyID0gKGZ1bmN0aW9uKCkge1xuXG4gIENvbXBvc2VyLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChDb21wb3Nlci5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUuY29tcG9zaXRpb25zID0gbnVsbDtcblxuICBmdW5jdGlvbiBDb21wb3NlcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5jb21wb3NpdGlvbnMgPSB7fTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdjb21wb3Nlcjpjb21wb3NlJywgdGhpcy5jb21wb3NlLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdjb21wb3NlcjpyZXRyaWV2ZScsIHRoaXMucmV0cmlldmUsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnN1YnNjcmliZUV2ZW50KCdkaXNwYXRjaGVyOmRpc3BhdGNoJywgdGhpcy5jbGVhbnVwKTtcbiAgfTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUuY29tcG9zZSA9IGZ1bmN0aW9uKG5hbWUsIHNlY29uZCwgdGhpcmQpIHtcbiAgICBpZiAodHlwZW9mIHNlY29uZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHRoaXJkIHx8IHNlY29uZC5wcm90b3R5cGUuZGlzcG9zZSkge1xuICAgICAgICBpZiAoc2Vjb25kLnByb3RvdHlwZSBpbnN0YW5jZW9mIENvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2UobmFtZSwge1xuICAgICAgICAgICAgY29tcG9zaXRpb246IHNlY29uZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXJkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2UobmFtZSwge1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcmQsXG4gICAgICAgICAgICBjb21wb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGF1dG9SZW5kZXIsIGRpc2FibGVkQXV0b1JlbmRlcjtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtID0gbmV3IHNlY29uZCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICBhdXRvUmVuZGVyID0gdGhpcy5pdGVtLmF1dG9SZW5kZXI7XG4gICAgICAgICAgICAgIGRpc2FibGVkQXV0b1JlbmRlciA9IGF1dG9SZW5kZXIgPT09IHZvaWQgMCB8fCAhYXV0b1JlbmRlcjtcbiAgICAgICAgICAgICAgaWYgKGRpc2FibGVkQXV0b1JlbmRlciAmJiB0eXBlb2YgdGhpcy5pdGVtLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0ucmVuZGVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2UobmFtZSwge1xuICAgICAgICBjb21wb3NlOiBzZWNvbmRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXJkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9zZShuYW1lLCB7XG4gICAgICAgIGNvbXBvc2U6IHRoaXJkLFxuICAgICAgICBvcHRpb25zOiBzZWNvbmRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29tcG9zZShuYW1lLCBzZWNvbmQpO1xuICB9O1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5fY29tcG9zZSA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29tcG9zaXRpb24sIGN1cnJlbnQsIGlzUHJvbWlzZSwgcmV0dXJuZWQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbXBvc2UgIT09ICdmdW5jdGlvbicgJiYgIShvcHRpb25zLmNvbXBvc2l0aW9uICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvc2VyI2NvbXBvc2Ugd2FzIHVzZWQgaW5jb3JyZWN0bHknKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY29tcG9zaXRpb24gIT0gbnVsbCkge1xuICAgICAgY29tcG9zaXRpb24gPSBuZXcgb3B0aW9ucy5jb21wb3NpdGlvbihvcHRpb25zLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb3NpdGlvbiA9IG5ldyBDb21wb3NpdGlvbihvcHRpb25zLm9wdGlvbnMpO1xuICAgICAgY29tcG9zaXRpb24uY29tcG9zZSA9IG9wdGlvbnMuY29tcG9zZTtcbiAgICAgIGlmIChvcHRpb25zLmNoZWNrKSB7XG4gICAgICAgIGNvbXBvc2l0aW9uLmNoZWNrID0gb3B0aW9ucy5jaGVjaztcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudCA9IHRoaXMuY29tcG9zaXRpb25zW25hbWVdO1xuICAgIGlzUHJvbWlzZSA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuY2hlY2soY29tcG9zaXRpb24ub3B0aW9ucykpIHtcbiAgICAgIGN1cnJlbnQuc3RhbGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjdXJyZW50LmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybmVkID0gY29tcG9zaXRpb24uY29tcG9zZShjb21wb3NpdGlvbi5vcHRpb25zKTtcbiAgICAgIGlzUHJvbWlzZSA9IHR5cGVvZiAocmV0dXJuZWQgIT0gbnVsbCA/IHJldHVybmVkLnRoZW4gOiB2b2lkIDApID09PSAnZnVuY3Rpb24nO1xuICAgICAgY29tcG9zaXRpb24uc3RhbGUoZmFsc2UpO1xuICAgICAgdGhpcy5jb21wb3NpdGlvbnNbbmFtZV0gPSBjb21wb3NpdGlvbjtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHJldHVybmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb3NpdGlvbnNbbmFtZV0uaXRlbTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLnJldHJpZXZlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBhY3RpdmU7XG4gICAgYWN0aXZlID0gdGhpcy5jb21wb3NpdGlvbnNbbmFtZV07XG4gICAgaWYgKGFjdGl2ZSAmJiAhYWN0aXZlLnN0YWxlKCkpIHtcbiAgICAgIHJldHVybiBhY3RpdmUuaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9zaXRpb24sIG5hbWUsIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMuY29tcG9zaXRpb25zO1xuICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICBjb21wb3NpdGlvbiA9IF9yZWZbbmFtZV07XG4gICAgICBpZiAoY29tcG9zaXRpb24uc3RhbGUoKSkge1xuICAgICAgICBjb21wb3NpdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbXBvc2l0aW9uc1tuYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvc2l0aW9uLnN0YWxlKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wb3NpdGlvbiwgbmFtZSwgX3JlZjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgbWVkaWF0b3IucmVtb3ZlSGFuZGxlcnModGhpcyk7XG4gICAgX3JlZiA9IHRoaXMuY29tcG9zaXRpb25zO1xuICAgIGZvciAobmFtZSBpbiBfcmVmKSB7XG4gICAgICBjb21wb3NpdGlvbiA9IF9yZWZbbmFtZV07XG4gICAgICBjb21wb3NpdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmNvbXBvc2l0aW9ucztcbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2VyO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXInLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBDb250cm9sbGVyLCBFdmVudEJyb2tlciwgbWVkaWF0b3IsIHV0aWxzLCBfLFxuICBfX3NsaWNlID0gW10uc2xpY2UsXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgQ29udHJvbGxlci5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoQ29udHJvbGxlci5wcm90b3R5cGUsIEJhY2tib25lLkV2ZW50cyk7XG5cbiAgXy5leHRlbmQoQ29udHJvbGxlci5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS52aWV3ID0gbnVsbDtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5yZWRpcmVjdGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmJlZm9yZUFjdGlvbiA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuYWRqdXN0VGl0bGUgPSBmdW5jdGlvbihzdWJ0aXRsZSkge1xuICAgIHJldHVybiBtZWRpYXRvci5leGVjdXRlKCdhZGp1c3RUaXRsZScsIHN1YnRpdGxlKTtcbiAgfTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5yZXVzZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kO1xuICAgIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyAncmV0cmlldmUnIDogJ2NvbXBvc2UnO1xuICAgIHJldHVybiBtZWRpYXRvci5leGVjdXRlLmFwcGx5KG1lZGlhdG9yLCBbXCJjb21wb3NlcjpcIiArIG1ldGhvZF0uY29uY2F0KF9fc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIH07XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29udHJvbGxlciNjb21wb3NlIHdhcyBtb3ZlZCB0byBDb250cm9sbGVyI3JldXNlJyk7XG4gIH07XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUucmVkaXJlY3RUbyA9IGZ1bmN0aW9uKHBhdGhEZXNjLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlZGlyZWN0ZWQgPSB0cnVlO1xuICAgIHJldHVybiB1dGlscy5yZWRpcmVjdFRvKHBhdGhEZXNjLCBwYXJhbXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmosIHByb3A7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwodGhpcywgcHJvcCkpIGNvbnRpbnVlO1xuICAgICAgb2JqID0gdGhpc1twcm9wXTtcbiAgICAgIGlmICghKG9iaiAmJiB0eXBlb2Ygb2JqLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgb2JqLmRpc3Bvc2UoKTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL21vZGVscy9jb2xsZWN0aW9uJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgQ29sbGVjdGlvbiwgRXZlbnRCcm9rZXIsIE1vZGVsLCB1dGlscywgXyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbk1vZGVsID0gbG9hZGVyKCdjaGFwbGluL21vZGVscy9tb2RlbCcpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhDb2xsZWN0aW9uLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIENvbGxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfLmV4dGVuZChDb2xsZWN0aW9uLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIENvbGxlY3Rpb24ucHJvdG90eXBlLm1vZGVsID0gTW9kZWw7XG5cbiAgQ29sbGVjdGlvbi5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKHV0aWxzLnNlcmlhbGl6ZSk7XG4gIH07XG5cbiAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBDb2xsZWN0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlcignZGlzcG9zZScsIHRoaXMpO1xuICAgIHRoaXMucmVzZXQoW10sIHtcbiAgICAgIHNpbGVudDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICB0aGlzLm9mZigpO1xuICAgIHByb3BlcnRpZXMgPSBbJ21vZGVsJywgJ21vZGVscycsICdfYnlJZCcsICdfYnlDaWQnLCAnX2NhbGxiYWNrcyddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gQ29sbGVjdGlvbjtcblxufSkoQmFja2JvbmUuQ29sbGVjdGlvbik7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbW9kZWxzL21vZGVsJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgRXZlbnRCcm9rZXIsIE1vZGVsLCBzZXJpYWxpemVBdHRyaWJ1dGVzLCBzZXJpYWxpemVNb2RlbEF0dHJpYnV0ZXMsIHV0aWxzLCBfLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbnNlcmlhbGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbihtb2RlbCwgYXR0cmlidXRlcywgbW9kZWxTdGFjaykge1xuICB2YXIgZGVsZWdhdG9yLCBrZXksIG90aGVyTW9kZWwsIHNlcmlhbGl6ZWRNb2RlbHMsIHZhbHVlLCBfaSwgX2xlbiwgX3JlZjtcbiAgZGVsZWdhdG9yID0gdXRpbHMuYmVnZXQoYXR0cmlidXRlcyk7XG4gIGlmIChtb2RlbFN0YWNrID09IG51bGwpIHtcbiAgICBtb2RlbFN0YWNrID0ge307XG4gIH1cbiAgbW9kZWxTdGFja1ttb2RlbC5jaWRdID0gdHJ1ZTtcbiAgZm9yIChrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJhY2tib25lLk1vZGVsKSB7XG4gICAgICBkZWxlZ2F0b3Jba2V5XSA9IHNlcmlhbGl6ZU1vZGVsQXR0cmlidXRlcyh2YWx1ZSwgbW9kZWwsIG1vZGVsU3RhY2spO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBCYWNrYm9uZS5Db2xsZWN0aW9uKSB7XG4gICAgICBzZXJpYWxpemVkTW9kZWxzID0gW107XG4gICAgICBfcmVmID0gdmFsdWUubW9kZWxzO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG90aGVyTW9kZWwgPSBfcmVmW19pXTtcbiAgICAgICAgc2VyaWFsaXplZE1vZGVscy5wdXNoKHNlcmlhbGl6ZU1vZGVsQXR0cmlidXRlcyhvdGhlck1vZGVsLCBtb2RlbCwgbW9kZWxTdGFjaykpO1xuICAgICAgfVxuICAgICAgZGVsZWdhdG9yW2tleV0gPSBzZXJpYWxpemVkTW9kZWxzO1xuICAgIH1cbiAgfVxuICBkZWxldGUgbW9kZWxTdGFja1ttb2RlbC5jaWRdO1xuICByZXR1cm4gZGVsZWdhdG9yO1xufTtcblxuc2VyaWFsaXplTW9kZWxBdHRyaWJ1dGVzID0gZnVuY3Rpb24obW9kZWwsIGN1cnJlbnRNb2RlbCwgbW9kZWxTdGFjaykge1xuICB2YXIgYXR0cmlidXRlcztcbiAgaWYgKG1vZGVsID09PSBjdXJyZW50TW9kZWwgfHwgbW9kZWwuY2lkIGluIG1vZGVsU3RhY2spIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhdHRyaWJ1dGVzID0gdHlwZW9mIG1vZGVsLmdldEF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicgPyBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkgOiBtb2RlbC5hdHRyaWJ1dGVzO1xuICByZXR1cm4gc2VyaWFsaXplQXR0cmlidXRlcyhtb2RlbCwgYXR0cmlidXRlcywgbW9kZWxTdGFjayk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhNb2RlbCwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBNb2RlbCgpIHtcbiAgICByZXR1cm4gTW9kZWwuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfLmV4dGVuZChNb2RlbC5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBNb2RlbC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXM7XG4gIH07XG5cbiAgTW9kZWwucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZXJpYWxpemVBdHRyaWJ1dGVzKHRoaXMsIHRoaXMuZ2V0QXR0cmlidXRlcygpKTtcbiAgfTtcblxuICBNb2RlbC5wcm90b3R5cGUuZGlzcG9zZWQgPSBmYWxzZTtcblxuICBNb2RlbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXIoJ2Rpc3Bvc2UnLCB0aGlzKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgdGhpcy5vZmYoKTtcbiAgICBwcm9wZXJ0aWVzID0gWydjb2xsZWN0aW9uJywgJ2F0dHJpYnV0ZXMnLCAnY2hhbmdlZCcsICdfZXNjYXBlZEF0dHJpYnV0ZXMnLCAnX3ByZXZpb3VzQXR0cmlidXRlcycsICdfc2lsZW50JywgJ19wZW5kaW5nJywgJ19jYWxsYmFja3MnXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGVsO1xuXG59KShCYWNrYm9uZS5Nb2RlbCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vdmlld3MvbGF5b3V0JywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciAkLCBCYWNrYm9uZSwgRXZlbnRCcm9rZXIsIExheW91dCwgVmlldywgbWVkaWF0b3IsIHV0aWxzLCBfLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cblZpZXcgPSBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvdmlldycpO1xuXG4kID0gQmFja2JvbmUuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKExheW91dCwgX3N1cGVyKTtcblxuICBMYXlvdXQucHJvdG90eXBlLmVsID0gJ2JvZHknO1xuXG4gIExheW91dC5wcm90b3R5cGUua2VlcEVsZW1lbnQgPSB0cnVlO1xuXG4gIExheW91dC5wcm90b3R5cGUudGl0bGUgPSAnJztcblxuICBMYXlvdXQucHJvdG90eXBlLmdsb2JhbFJlZ2lvbnMgPSBudWxsO1xuXG4gIExheW91dC5wcm90b3R5cGUubGlzdGVuID0ge1xuICAgICdiZWZvcmVDb250cm9sbGVyRGlzcG9zZSBtZWRpYXRvcic6ICdzY3JvbGwnXG4gIH07XG5cbiAgZnVuY3Rpb24gTGF5b3V0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMub3BlbkxpbmsgPSBfX2JpbmQodGhpcy5vcGVuTGluaywgdGhpcyk7XG5cbiAgICB0aGlzLmdsb2JhbFJlZ2lvbnMgPSBbXTtcbiAgICB0aGlzLnRpdGxlID0gb3B0aW9ucy50aXRsZTtcbiAgICBpZiAob3B0aW9ucy5yZWdpb25zKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBvcHRpb25zLnJlZ2lvbnM7XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgIHRpdGxlVGVtcGxhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIHN0O1xuICAgICAgICBzdCA9IGRhdGEuc3VidGl0bGUgPyBcIlwiICsgZGF0YS5zdWJ0aXRsZSArIFwiIFxcdTIwMTMgXCIgOiAnJztcbiAgICAgICAgcmV0dXJuIHN0ICsgZGF0YS50aXRsZTtcbiAgICAgIH0sXG4gICAgICBvcGVuRXh0ZXJuYWxUb0JsYW5rOiBmYWxzZSxcbiAgICAgIHJvdXRlTGlua3M6ICdhLCAuZ28tdG8nLFxuICAgICAgc2tpcFJvdXRpbmc6ICcubm9zY3JpcHQnLFxuICAgICAgc2Nyb2xsVG86IFswLCAwXVxuICAgIH0pO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JlZ2lvbjpzaG93JywgdGhpcy5zaG93UmVnaW9uLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyZWdpb246cmVnaXN0ZXInLCB0aGlzLnJlZ2lzdGVyUmVnaW9uSGFuZGxlciwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncmVnaW9uOnVucmVnaXN0ZXInLCB0aGlzLnVucmVnaXN0ZXJSZWdpb25IYW5kbGVyLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyZWdpb246ZmluZCcsIHRoaXMucmVnaW9uQnlOYW1lLCB0aGlzKTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdhZGp1c3RUaXRsZScsIHRoaXMuYWRqdXN0VGl0bGUsIHRoaXMpO1xuICAgIExheW91dC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5yb3V0ZUxpbmtzKSB7XG4gICAgICB0aGlzLnN0YXJ0TGlua1JvdXRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBMYXlvdXQucHJvdG90eXBlLnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwb3NpdGlvbjtcbiAgICBwb3NpdGlvbiA9IHRoaXMuc2V0dGluZ3Muc2Nyb2xsVG87XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuYWRqdXN0VGl0bGUgPSBmdW5jdGlvbihzdWJ0aXRsZSkge1xuICAgIHZhciB0aXRsZSxcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBpZiAoc3VidGl0bGUgPT0gbnVsbCkge1xuICAgICAgc3VidGl0bGUgPSAnJztcbiAgICB9XG4gICAgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlVGVtcGxhdGUoe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzdWJ0aXRsZTogc3VidGl0bGVcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgIHJldHVybiBfdGhpcy5wdWJsaXNoRXZlbnQoJ2FkanVzdFRpdGxlJywgc3VidGl0bGUsIHRpdGxlKTtcbiAgICB9LCA1MCk7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuc3RhcnRMaW5rUm91dGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb3V0ZTtcbiAgICByb3V0ZSA9IHRoaXMuc2V0dGluZ3Mucm91dGVMaW5rcztcbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgkKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwub24oJ2NsaWNrJywgcm91dGUsIHRoaXMub3BlbkxpbmspO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSgnY2xpY2snLCByb3V0ZSwgdGhpcy5vcGVuTGluayk7XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuc3RvcExpbmtSb3V0aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvdXRlO1xuICAgIHJvdXRlID0gdGhpcy5zZXR0aW5ncy5yb3V0ZUxpbmtzO1xuICAgIGlmICgkKSB7XG4gICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLm9mZignY2xpY2snLCByb3V0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVuZGVsZWdhdGUoJ2NsaWNrJywgcm91dGUsIHRoaXMub3BlbkxpbmspO1xuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLmlzRXh0ZXJuYWxMaW5rID0gZnVuY3Rpb24obGluaykge1xuICAgIHZhciBfcmVmLCBfcmVmMTtcbiAgICByZXR1cm4gbGluay50YXJnZXQgPT09ICdfYmxhbmsnIHx8IGxpbmsucmVsID09PSAnZXh0ZXJuYWwnIHx8ICgoX3JlZiA9IGxpbmsucHJvdG9jb2wpICE9PSAnaHR0cDonICYmIF9yZWYgIT09ICdodHRwczonICYmIF9yZWYgIT09ICdmaWxlOicpIHx8ICgoX3JlZjEgPSBsaW5rLmhvc3RuYW1lKSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgJiYgX3JlZjEgIT09ICcnKTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLm9wZW5MaW5rID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZWwsIGV4dGVybmFsLCBocmVmLCBpc0FuY2hvciwgc2tpcFJvdXRpbmcsIHR5cGU7XG4gICAgaWYgKHV0aWxzLm1vZGlmaWVyS2V5UHJlc3NlZChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwgPSAkID8gZXZlbnQuY3VycmVudFRhcmdldCA6IGV2ZW50LmRlbGVnYXRlVGFyZ2V0O1xuICAgIGlzQW5jaG9yID0gZWwubm9kZU5hbWUgPT09ICdBJztcbiAgICBocmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKSB8fCBudWxsO1xuICAgIGlmICghKGhyZWYgIT0gbnVsbCkgfHwgaHJlZiA9PT0gJycgfHwgaHJlZi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBza2lwUm91dGluZyA9IHRoaXMuc2V0dGluZ3Muc2tpcFJvdXRpbmc7XG4gICAgdHlwZSA9IHR5cGVvZiBza2lwUm91dGluZztcbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcFJvdXRpbmcoaHJlZiwgZWwpIHx8IHR5cGUgPT09ICdzdHJpbmcnICYmICgkID8gJChlbCkuaXMoc2tpcFJvdXRpbmcpIDogQmFja2JvbmUudXRpbHMubWF0Y2hlc1NlbGVjdG9yKGVsLCBza2lwUm91dGluZykpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV4dGVybmFsID0gaXNBbmNob3IgJiYgdGhpcy5pc0V4dGVybmFsTGluayhlbCk7XG4gICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5vcGVuRXh0ZXJuYWxUb0JsYW5rKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1dGlscy5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogaHJlZlxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5yZWdpc3RlclJlZ2lvbkhhbmRsZXIgPSBmdW5jdGlvbihpbnN0YW5jZSwgbmFtZSwgc2VsZWN0b3IpIHtcbiAgICBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlckdsb2JhbFJlZ2lvbihpbnN0YW5jZSwgbmFtZSwgc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlckdsb2JhbFJlZ2lvbnMoaW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnJlZ2lzdGVyR2xvYmFsUmVnaW9uID0gZnVuY3Rpb24oaW5zdGFuY2UsIG5hbWUsIHNlbGVjdG9yKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyR2xvYmFsUmVnaW9uKGluc3RhbmNlLCBuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxSZWdpb25zLnVuc2hpZnQoe1xuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgIH0pO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUucmVnaXN0ZXJHbG9iYWxSZWdpb25zID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgbmFtZSwgc2VsZWN0b3IsIHZlcnNpb24sIF9pLCBfbGVuLCBfcmVmO1xuICAgIF9yZWYgPSB1dGlscy5nZXRBbGxQcm9wZXJ0eVZlcnNpb25zKGluc3RhbmNlLCAncmVnaW9ucycpO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdmVyc2lvbiA9IF9yZWZbX2ldO1xuICAgICAgZm9yIChuYW1lIGluIHZlcnNpb24pIHtcbiAgICAgICAgc2VsZWN0b3IgPSB2ZXJzaW9uW25hbWVdO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyR2xvYmFsUmVnaW9uKGluc3RhbmNlLCBuYW1lLCBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUudW5yZWdpc3RlclJlZ2lvbkhhbmRsZXIgPSBmdW5jdGlvbihpbnN0YW5jZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnVucmVnaXN0ZXJHbG9iYWxSZWdpb24oaW5zdGFuY2UsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy51bnJlZ2lzdGVyR2xvYmFsUmVnaW9ucyhpbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUudW5yZWdpc3Rlckdsb2JhbFJlZ2lvbiA9IGZ1bmN0aW9uKGluc3RhbmNlLCBuYW1lKSB7XG4gICAgdmFyIGNpZCwgcmVnaW9uO1xuICAgIGNpZCA9IGluc3RhbmNlLmNpZDtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxSZWdpb25zID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIF9yZWYgPSB0aGlzLmdsb2JhbFJlZ2lvbnM7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIHJlZ2lvbiA9IF9yZWZbX2ldO1xuICAgICAgICBpZiAocmVnaW9uLmluc3RhbmNlLmNpZCAhPT0gY2lkIHx8IHJlZ2lvbi5uYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChyZWdpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnVucmVnaXN0ZXJHbG9iYWxSZWdpb25zID0gZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVnaW9uO1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFJlZ2lvbnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMuZ2xvYmFsUmVnaW9ucztcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgcmVnaW9uID0gX3JlZltfaV07XG4gICAgICAgIGlmIChyZWdpb24uaW5zdGFuY2UuY2lkICE9PSBpbnN0YW5jZS5jaWQpIHtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKHJlZ2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9KS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUucmVnaW9uQnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciByZWcsIF9pLCBfbGVuLCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmdsb2JhbFJlZ2lvbnM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICByZWcgPSBfcmVmW19pXTtcbiAgICAgIGlmIChyZWcubmFtZSA9PT0gbmFtZSAmJiAhcmVnLmluc3RhbmNlLnN0YWxlKSB7XG4gICAgICAgIHJldHVybiByZWc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuc2hvd1JlZ2lvbiA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZ2lvbjtcbiAgICByZWdpb24gPSB0aGlzLnJlZ2lvbkJ5TmFtZShuYW1lKTtcbiAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVnaW9uIHJlZ2lzdGVyZWQgdW5kZXIgXCIgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLmNvbnRhaW5lciA9IHJlZ2lvbi5zZWxlY3RvciA9PT0gJycgPyAkID8gcmVnaW9uLmluc3RhbmNlLiRlbCA6IHJlZ2lvbi5pbnN0YW5jZS5lbCA6IHJlZ2lvbi5pbnN0YW5jZS5ub1dyYXAgPyAkID8gJChyZWdpb24uaW5zdGFuY2UuY29udGFpbmVyKS5maW5kKHJlZ2lvbi5zZWxlY3RvcikgOiByZWdpb24uaW5zdGFuY2UuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IocmVnaW9uLnNlbGVjdG9yKSA6IHJlZ2lvbi5pbnN0YW5jZVskID8gJyQnIDogJ2ZpbmQnXShyZWdpb24uc2VsZWN0b3IpO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3BMaW5rUm91dGluZygpO1xuICAgIF9yZWYgPSBbJ2dsb2JhbFJlZ2lvbnMnLCAndGl0bGUnLCAncm91dGUnXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBfcmVmW19pXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICBtZWRpYXRvci5yZW1vdmVIYW5kbGVycyh0aGlzKTtcbiAgICByZXR1cm4gTGF5b3V0Ll9fc3VwZXJfXy5kaXNwb3NlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIExheW91dDtcblxufSkoVmlldyk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vdmlld3MvdmlldycsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCwgQmFja2JvbmUsIEV2ZW50QnJva2VyLCBWaWV3LCBhdHRhY2gsIGJpbmQsIG1lZGlhdG9yLCBzZXRIVE1MLCB1dGlscywgXyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuJCA9IEJhY2tib25lLiQ7XG5cbmJpbmQgPSAoZnVuY3Rpb24oKSB7XG4gIGlmIChGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICAgIHJldHVybiBmdW5jdGlvbihpdGVtLCBjdHgpIHtcbiAgICAgIHJldHVybiBpdGVtLmJpbmQoY3R4KTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKF8uYmluZCkge1xuICAgIHJldHVybiBfLmJpbmQ7XG4gIH1cbn0pKCk7XG5cbnNldEhUTUwgPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGh0bWwpIHtcbiAgICAgIHJldHVybiBlbGVtLmh0bWwoaHRtbCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgaHRtbCkge1xuICAgICAgcmV0dXJuIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9O1xuICB9XG59KSgpO1xuXG5hdHRhY2ggPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgIHZhciBhY3R1YWw7XG4gICAgICBhY3R1YWwgPSAkKHZpZXcuY29udGFpbmVyKTtcbiAgICAgIGlmICh0eXBlb2Ygdmlldy5jb250YWluZXJNZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcuY29udGFpbmVyTWV0aG9kKGFjdHVhbCwgdmlldy5lbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0dWFsW3ZpZXcuY29udGFpbmVyTWV0aG9kXSh2aWV3LmVsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbih2aWV3KSB7XG4gICAgICB2YXIgYWN0dWFsO1xuICAgICAgYWN0dWFsID0gdHlwZW9mIHZpZXcuY29udGFpbmVyID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iodmlldy5jb250YWluZXIpIDogdmlldy5jb250YWluZXI7XG4gICAgICBpZiAodHlwZW9mIHZpZXcuY29udGFpbmVyTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2aWV3LmNvbnRhaW5lck1ldGhvZChhY3R1YWwsIHZpZXcuZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjdHVhbFt2aWV3LmNvbnRhaW5lck1ldGhvZF0odmlldy5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhWaWV3LCBfc3VwZXIpO1xuXG4gIF8uZXh0ZW5kKFZpZXcucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgVmlldy5wcm90b3R5cGUuYXV0b1JlbmRlciA9IGZhbHNlO1xuXG4gIFZpZXcucHJvdG90eXBlLmF1dG9BdHRhY2ggPSB0cnVlO1xuXG4gIFZpZXcucHJvdG90eXBlLmNvbnRhaW5lciA9IG51bGw7XG5cbiAgVmlldy5wcm90b3R5cGUuY29udGFpbmVyTWV0aG9kID0gJCA/ICdhcHBlbmQnIDogJ2FwcGVuZENoaWxkJztcblxuICBWaWV3LnByb3RvdHlwZS5yZWdpb25zID0gbnVsbDtcblxuICBWaWV3LnByb3RvdHlwZS5yZWdpb24gPSBudWxsO1xuXG4gIFZpZXcucHJvdG90eXBlLnN0YWxlID0gZmFsc2U7XG5cbiAgVmlldy5wcm90b3R5cGUubm9XcmFwID0gZmFsc2U7XG5cbiAgVmlldy5wcm90b3R5cGUua2VlcEVsZW1lbnQgPSBmYWxzZTtcblxuICBWaWV3LnByb3RvdHlwZS5zdWJ2aWV3cyA9IG51bGw7XG5cbiAgVmlldy5wcm90b3R5cGUuc3Vidmlld3NCeU5hbWUgPSBudWxsO1xuXG4gIFZpZXcucHJvdG90eXBlLm9wdGlvbk5hbWVzID0gWydhdXRvQXR0YWNoJywgJ2F1dG9SZW5kZXInLCAnY29udGFpbmVyJywgJ2NvbnRhaW5lck1ldGhvZCcsICdyZWdpb24nLCAncmVnaW9ucycsICdub1dyYXAnXTtcblxuICBmdW5jdGlvbiBWaWV3KG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0TmFtZSwgb3B0VmFsdWUsIHJlZ2lvbiwgcmVuZGVyLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBmb3IgKG9wdE5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICBvcHRWYWx1ZSA9IG9wdGlvbnNbb3B0TmFtZV07XG4gICAgICAgIGlmIChfX2luZGV4T2YuY2FsbCh0aGlzLm9wdGlvbk5hbWVzLCBvcHROYW1lKSA+PSAwKSB7XG4gICAgICAgICAgdGhpc1tvcHROYW1lXSA9IG9wdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlbmRlciA9IHRoaXMucmVuZGVyO1xuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoX3RoaXMuZGlzcG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmVuZGVyLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKF90aGlzLmF1dG9BdHRhY2gpIHtcbiAgICAgICAgX3RoaXMuYXR0YWNoLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG4gICAgdGhpcy5zdWJ2aWV3cyA9IFtdO1xuICAgIHRoaXMuc3Vidmlld3NCeU5hbWUgPSB7fTtcbiAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgIGlmICh0aGlzLnJlZ2lvbikge1xuICAgICAgICByZWdpb24gPSBtZWRpYXRvci5leGVjdXRlKCdyZWdpb246ZmluZCcsIHRoaXMucmVnaW9uKTtcbiAgICAgICAgaWYgKHJlZ2lvbiAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5lbCA9IHJlZ2lvbi5pbnN0YW5jZS5jb250YWluZXIgIT0gbnVsbCA/IHJlZ2lvbi5pbnN0YW5jZS5yZWdpb24gIT0gbnVsbCA/ICQocmVnaW9uLmluc3RhbmNlLmNvbnRhaW5lcikuZmluZChyZWdpb24uc2VsZWN0b3IpIDogcmVnaW9uLmluc3RhbmNlLmNvbnRhaW5lciA6IHJlZ2lvbi5pbnN0YW5jZS4kKHJlZ2lvbi5zZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmVsID0gdGhpcy5jb250YWluZXI7XG4gICAgICB9XG4gICAgfVxuICAgIFZpZXcuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5kZWxlZ2F0ZUxpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdkaXNwb3NlJywgdGhpcy5kaXNwb3NlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbikge1xuICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdkaXNwb3NlJywgZnVuY3Rpb24oc3ViamVjdCkge1xuICAgICAgICBpZiAoIXN1YmplY3QgfHwgc3ViamVjdCA9PT0gX3RoaXMuY29sbGVjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpb25zICE9IG51bGwpIHtcbiAgICAgIG1lZGlhdG9yLmV4ZWN1dGUoJ3JlZ2lvbjpyZWdpc3RlcicsIHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvUmVuZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIFZpZXcucHJvdG90eXBlLmRlbGVnYXRlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgdmFyIGJvdW5kLCBldmVudCwgZXZlbnRzLCBoYW5kbGVyLCBsaXN0LCBzZWxlY3RvcjtcbiAgICBpZiAoQmFja2JvbmUudXRpbHMpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS51dGlscy5kZWxlZ2F0ZSh0aGlzLCBldmVudE5hbWUsIHNlY29uZCwgdGhpcmQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjZGVsZWdhdGU6IGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGhhbmRsZXIgPSBzZWNvbmQ7XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBzZWxlY3RvciA9IHNlY29uZDtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjZGVsZWdhdGU6ICcgKyAnc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIgPSB0aGlyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyNkZWxlZ2F0ZTogJyArICdvbmx5IHR3byBvciB0aHJlZSBhcmd1bWVudHMgYXJlIGFsbG93ZWQnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I2RlbGVnYXRlOiAnICsgJ2hhbmRsZXIgYXJndW1lbnQgbXVzdCBiZSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBsaXN0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIF9yZWYgPSBldmVudE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgZXZlbnQgPSBfcmVmW19pXTtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChcIlwiICsgZXZlbnQgKyBcIi5kZWxlZ2F0ZVwiICsgdGhpcy5jaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH0pLmNhbGwodGhpcyk7XG4gICAgZXZlbnRzID0gbGlzdC5qb2luKCcgJyk7XG4gICAgYm91bmQgPSBiaW5kKGhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMuJGVsLm9uKGV2ZW50cywgc2VsZWN0b3IgfHwgbnVsbCwgYm91bmQpO1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5fZGVsZWdhdGVFdmVudHMgPSBmdW5jdGlvbihldmVudHMpIHtcbiAgICB2YXIgYm91bmQsIGV2ZW50TmFtZSwgaGFuZGxlciwga2V5LCBtYXRjaCwgc2VsZWN0b3IsIHZhbHVlO1xuICAgIGlmIChCYWNrYm9uZS5WaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUV2ZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS5WaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUV2ZW50cy5jYWxsKHRoaXMsIGV2ZW50cywgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIGV2ZW50cykge1xuICAgICAgdmFsdWUgPSBldmVudHNba2V5XTtcbiAgICAgIGhhbmRsZXIgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IHRoaXNbdmFsdWVdO1xuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCAnXCIgKyB2YWx1ZSArIFwiJyBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgIH1cbiAgICAgIG1hdGNoID0ga2V5Lm1hdGNoKC9eKFxcUyspXFxzKiguKikkLyk7XG4gICAgICBldmVudE5hbWUgPSBcIlwiICsgbWF0Y2hbMV0gKyBcIi5kZWxlZ2F0ZUV2ZW50c1wiICsgdGhpcy5jaWQ7XG4gICAgICBzZWxlY3RvciA9IG1hdGNoWzJdO1xuICAgICAgYm91bmQgPSBiaW5kKGhhbmRsZXIsIHRoaXMpO1xuICAgICAgdGhpcy4kZWwub24oZXZlbnROYW1lLCBzZWxlY3RvciB8fCBudWxsLCBib3VuZCk7XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmRlbGVnYXRlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzLCBrZWVwT2xkKSB7XG4gICAgdmFyIGNsYXNzRXZlbnRzLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAoIWtlZXBPbGQpIHtcbiAgICAgIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGVFdmVudHMoZXZlbnRzKTtcbiAgICB9XG4gICAgX3JlZiA9IHV0aWxzLmdldEFsbFByb3BlcnR5VmVyc2lvbnModGhpcywgJ2V2ZW50cycpO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgY2xhc3NFdmVudHMgPSBfcmVmW19pXTtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NFdmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyNkZWxlZ2F0ZUV2ZW50czogZnVuY3Rpb25zIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kZWxlZ2F0ZUV2ZW50cyhjbGFzc0V2ZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnVuZGVsZWdhdGUgPSBmdW5jdGlvbihldmVudE5hbWUsIHNlY29uZCwgdGhpcmQpIHtcbiAgICB2YXIgZXZlbnQsIGV2ZW50cywgaGFuZGxlciwgbGlzdCwgc2VsZWN0b3I7XG4gICAgaWYgKEJhY2tib25lLnV0aWxzKSB7XG4gICAgICByZXR1cm4gQmFja2JvbmUudXRpbHMudW5kZWxlZ2F0ZSh0aGlzLCBldmVudE5hbWUsIHNlY29uZCwgdGhpcmQpO1xuICAgIH1cbiAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyN1bmRlbGVnYXRlOiBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZW9mIHNlY29uZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzZWxlY3RvciA9IHNlY29uZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVyID0gc2Vjb25kO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWNvbmQ7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyN1bmRlbGVnYXRlOiAnICsgJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlciA9IHRoaXJkO1xuICAgICAgfVxuICAgICAgbGlzdCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgICAgX3JlZiA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICBldmVudCA9IF9yZWZbX2ldO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goXCJcIiArIGV2ZW50ICsgXCIuZGVsZWdhdGVcIiArIHRoaXMuY2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgZXZlbnRzID0gbGlzdC5qb2luKCcgJyk7XG4gICAgICByZXR1cm4gdGhpcy4kZWwub2ZmKGV2ZW50cywgc2VsZWN0b3IgfHwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5vZmYoXCIuZGVsZWdhdGVcIiArIHRoaXMuY2lkKTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZGVsZWdhdGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnROYW1lLCBrZXksIG1ldGhvZCwgdGFyZ2V0LCB2ZXJzaW9uLCBfaSwgX2xlbiwgX3JlZiwgX3JlZjE7XG4gICAgaWYgKCF0aGlzLmxpc3Rlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfcmVmID0gdXRpbHMuZ2V0QWxsUHJvcGVydHlWZXJzaW9ucyh0aGlzLCAnbGlzdGVuJyk7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICB2ZXJzaW9uID0gX3JlZltfaV07XG4gICAgICBmb3IgKGtleSBpbiB2ZXJzaW9uKSB7XG4gICAgICAgIG1ldGhvZCA9IHZlcnNpb25ba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtZXRob2QgPSB0aGlzW21ldGhvZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcjZGVsZWdhdGVMaXN0ZW5lcnM6ICcgKyAoXCJcIiArIG1ldGhvZCArIFwiIG11c3QgYmUgZnVuY3Rpb25cIikpO1xuICAgICAgICB9XG4gICAgICAgIF9yZWYxID0ga2V5LnNwbGl0KCcgJyksIGV2ZW50TmFtZSA9IF9yZWYxWzBdLCB0YXJnZXQgPSBfcmVmMVsxXTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZUxpc3RlbmVyKGV2ZW50TmFtZSwgdGFyZ2V0LCBtZXRob2QpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnROYW1lLCB0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByb3A7XG4gICAgaWYgKHRhcmdldCA9PT0gJ21vZGVsJyB8fCB0YXJnZXQgPT09ICdjb2xsZWN0aW9uJykge1xuICAgICAgcHJvcCA9IHRoaXNbdGFyZ2V0XTtcbiAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgIHRoaXMubGlzdGVuVG8ocHJvcCwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtZWRpYXRvcicpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlRXZlbnQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5yZWdpc3RlclJlZ2lvbiA9IGZ1bmN0aW9uKG5hbWUsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLmV4ZWN1dGUoJ3JlZ2lvbjpyZWdpc3RlcicsIHRoaXMsIG5hbWUsIHNlbGVjdG9yKTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS51bnJlZ2lzdGVyUmVnaW9uID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBtZWRpYXRvci5leGVjdXRlKCdyZWdpb246dW5yZWdpc3RlcicsIHRoaXMsIG5hbWUpO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnVucmVnaXN0ZXJBbGxSZWdpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLmV4ZWN1dGUoe1xuICAgICAgbmFtZTogJ3JlZ2lvbjp1bnJlZ2lzdGVyJyxcbiAgICAgIHNpbGVudDogdHJ1ZVxuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnN1YnZpZXcgPSBmdW5jdGlvbihuYW1lLCB2aWV3KSB7XG4gICAgdmFyIGJ5TmFtZSwgc3Vidmlld3M7XG4gICAgc3Vidmlld3MgPSB0aGlzLnN1YnZpZXdzO1xuICAgIGJ5TmFtZSA9IHRoaXMuc3Vidmlld3NCeU5hbWU7XG4gICAgaWYgKG5hbWUgJiYgdmlldykge1xuICAgICAgdGhpcy5yZW1vdmVTdWJ2aWV3KG5hbWUpO1xuICAgICAgc3Vidmlld3MucHVzaCh2aWV3KTtcbiAgICAgIGJ5TmFtZVtuYW1lXSA9IHZpZXc7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBieU5hbWVbbmFtZV07XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnJlbW92ZVN1YnZpZXcgPSBmdW5jdGlvbihuYW1lT3JWaWV3KSB7XG4gICAgdmFyIGJ5TmFtZSwgaW5kZXgsIG5hbWUsIG90aGVyTmFtZSwgb3RoZXJWaWV3LCBzdWJ2aWV3cywgdmlldztcbiAgICBpZiAoIW5hbWVPclZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vidmlld3MgPSB0aGlzLnN1YnZpZXdzO1xuICAgIGJ5TmFtZSA9IHRoaXMuc3Vidmlld3NCeU5hbWU7XG4gICAgaWYgKHR5cGVvZiBuYW1lT3JWaWV3ID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IG5hbWVPclZpZXc7XG4gICAgICB2aWV3ID0gYnlOYW1lW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3ID0gbmFtZU9yVmlldztcbiAgICAgIGZvciAob3RoZXJOYW1lIGluIGJ5TmFtZSkge1xuICAgICAgICBvdGhlclZpZXcgPSBieU5hbWVbb3RoZXJOYW1lXTtcbiAgICAgICAgaWYgKCEob3RoZXJWaWV3ID09PSB2aWV3KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBvdGhlck5hbWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIShuYW1lICYmIHZpZXcgJiYgdmlldy5kaXNwb3NlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2aWV3LmRpc3Bvc2UoKTtcbiAgICBpbmRleCA9IHV0aWxzLmluZGV4T2Yoc3Vidmlld3MsIHZpZXcpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN1YnZpZXdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBkZWxldGUgYnlOYW1lW25hbWVdO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmdldFRlbXBsYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhLCBzb3VyY2U7XG4gICAgZGF0YSA9IHRoaXMubW9kZWwgPyB1dGlscy5zZXJpYWxpemUodGhpcy5tb2RlbCkgOiB0aGlzLmNvbGxlY3Rpb24gPyB7XG4gICAgICBpdGVtczogdXRpbHMuc2VyaWFsaXplKHRoaXMuY29sbGVjdGlvbiksXG4gICAgICBsZW5ndGg6IHRoaXMuY29sbGVjdGlvbi5sZW5ndGhcbiAgICB9IDoge307XG4gICAgc291cmNlID0gdGhpcy5tb2RlbCB8fCB0aGlzLmNvbGxlY3Rpb247XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UuaXNTeW5jZWQgPT09ICdmdW5jdGlvbicgJiYgISgnc3luY2VkJyBpbiBkYXRhKSkge1xuICAgICAgICBkYXRhLnN5bmNlZCA9IHNvdXJjZS5pc1N5bmNlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3I2dldFRlbXBsYXRlRnVuY3Rpb24gbXVzdCBiZSBvdmVycmlkZGVuJyk7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsLCBodG1sLCB0ZW1wbGF0ZUZ1bmM7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGVtcGxhdGVGdW5jID0gdGhpcy5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCk7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZUZ1bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0ZW1wbGF0ZUZ1bmModGhpcy5nZXRUZW1wbGF0ZURhdGEoKSk7XG4gICAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYSBzaW5nbGUgdG9wLWxldmVsIGVsZW1lbnQgd2hlbiAnICsgJ3VzaW5nIGBub1dyYXBgLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnQoZWwuZmlyc3RDaGlsZCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRIVE1MKCgkID8gdGhpcy4kZWwgOiB0aGlzLmVsKSwgaHRtbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlZ2lvbiAhPSBudWxsKSB7XG4gICAgICBtZWRpYXRvci5leGVjdXRlKCdyZWdpb246c2hvdycsIHRoaXMucmVnaW9uLCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWwpKSB7XG4gICAgICBhdHRhY2godGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCdhZGRlZFRvRE9NJyk7XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgVmlldy5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBwcm9wZXJ0aWVzLCBzdWJ2aWV3LCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5yZWdpc3RlckFsbFJlZ2lvbnMoKTtcbiAgICBfcmVmID0gdGhpcy5zdWJ2aWV3cztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHN1YnZpZXcgPSBfcmVmW19pXTtcbiAgICAgIHN1YnZpZXcuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5vZmYoKTtcbiAgICBpZiAodGhpcy5rZWVwRWxlbWVudCkge1xuICAgICAgdGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgICB0aGlzLnVuZGVsZWdhdGUoKTtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgICBwcm9wZXJ0aWVzID0gWydlbCcsICckZWwnLCAnb3B0aW9ucycsICdtb2RlbCcsICdjb2xsZWN0aW9uJywgJ3N1YnZpZXdzJywgJ3N1YnZpZXdzQnlOYW1lJywgJ19jYWxsYmFja3MnXTtcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2pdO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gVmlldztcblxufSkoQmFja2JvbmUuVmlldyk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vdmlld3MvY29sbGVjdGlvbl92aWV3JywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciAkLCBCYWNrYm9uZSwgQ29sbGVjdGlvblZpZXcsIFZpZXcsIGFkZENsYXNzLCBlbmRBbmltYXRpb24sIGZpbHRlckNoaWxkcmVuLCBpbnNlcnRWaWV3LCBzdGFydEFuaW1hdGlvbiwgdG9nZ2xlRWxlbWVudCwgdXRpbHMsIF8sXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuVmlldyA9IGxvYWRlcignY2hhcGxpbi92aWV3cy92aWV3Jyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG4kID0gQmFja2JvbmUuJDtcblxuZmlsdGVyQ2hpbGRyZW4gPSBmdW5jdGlvbihub2RlTGlzdCwgc2VsZWN0b3IpIHtcbiAgdmFyIG5vZGUsIF9pLCBfbGVuLCBfcmVzdWx0cztcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHJldHVybiBub2RlTGlzdDtcbiAgfVxuICBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKF9pID0gMCwgX2xlbiA9IG5vZGVMaXN0Lmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVMaXN0W19pXTtcbiAgICBpZiAoQmFja2JvbmUudXRpbHMubWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgX3Jlc3VsdHMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxudG9nZ2xlRWxlbWVudCA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGVsZW0udG9nZ2xlKHZpc2libGUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIHZpc2libGUpIHtcbiAgICAgIHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPSAodmlzaWJsZSA/ICcnIDogJ25vbmUnKTtcbiAgICB9O1xuICB9XG59KSgpO1xuXG5hZGRDbGFzcyA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgY2xzKSB7XG4gICAgICByZXR1cm4gZWxlbS5hZGRDbGFzcyhjbHMpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGNscykge1xuICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbnN0YXJ0QW5pbWF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCB1c2VDc3NBbmltYXRpb24sIGNscykge1xuICAgICAgaWYgKHVzZUNzc0FuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gYWRkQ2xhc3MoZWxlbSwgY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIHVzZUNzc0FuaW1hdGlvbiwgY2xzKSB7XG4gICAgICBpZiAodXNlQ3NzQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiBhZGRDbGFzcyhlbGVtLCBjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSkoKTtcblxuZW5kQW5pbWF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBkdXJhdGlvbikge1xuICAgICAgcmV0dXJuIGVsZW0uYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBkdXJhdGlvbikge1xuICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IFwiICsgKGR1cmF0aW9uIC8gMTAwMCkgKyBcInNcIjtcbiAgICAgIHJldHVybiBlbGVtLm9wYWNpdHkgPSAxO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbmluc2VydFZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGxpc3QsIHZpZXdFbCwgcG9zaXRpb24sIGxlbmd0aCwgaXRlbVNlbGVjdG9yKSB7XG4gICAgICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoLCBpbnNlcnRJbk1pZGRsZSwgaXNFbmQsIG1ldGhvZDtcbiAgICAgIGluc2VydEluTWlkZGxlID0gKDAgPCBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8IGxlbmd0aCk7XG4gICAgICBpc0VuZCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSBsZW5ndGg7XG4gICAgICB9O1xuICAgICAgaWYgKGluc2VydEluTWlkZGxlIHx8IGl0ZW1TZWxlY3Rvcikge1xuICAgICAgICBjaGlsZHJlbiA9IGxpc3QuY2hpbGRyZW4oaXRlbVNlbGVjdG9yKTtcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGlmIChjaGlsZHJlbltwb3NpdGlvbl0gIT09IHZpZXdFbCkge1xuICAgICAgICAgIGlmIChpc0VuZChjaGlsZHJlbkxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFwcGVuZCh2aWV3RWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmVxKHBvc2l0aW9uKS5iZWZvcmUodmlld0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi5lcShwb3NpdGlvbiAtIDEpLmFmdGVyKHZpZXdFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRob2QgPSBpc0VuZChsZW5ndGgpID8gJ2FwcGVuZCcgOiAncHJlcGVuZCc7XG4gICAgICAgIHJldHVybiBsaXN0W21ldGhvZF0odmlld0VsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihsaXN0LCB2aWV3RWwsIHBvc2l0aW9uLCBsZW5ndGgsIGl0ZW1TZWxlY3Rvcikge1xuICAgICAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCwgaW5zZXJ0SW5NaWRkbGUsIGlzRW5kLCBsYXN0O1xuICAgICAgaW5zZXJ0SW5NaWRkbGUgPSAoMCA8IHBvc2l0aW9uICYmIHBvc2l0aW9uIDwgbGVuZ3RoKTtcbiAgICAgIGlzRW5kID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IGxlbmd0aDtcbiAgICAgIH07XG4gICAgICBpZiAoaW5zZXJ0SW5NaWRkbGUgfHwgaXRlbVNlbGVjdG9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gZmlsdGVyQ2hpbGRyZW4obGlzdC5jaGlsZHJlbiwgaXRlbVNlbGVjdG9yKTtcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGlmIChjaGlsZHJlbltwb3NpdGlvbl0gIT09IHZpZXdFbCkge1xuICAgICAgICAgIGlmIChpc0VuZChjaGlsZHJlbkxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmFwcGVuZENoaWxkKHZpZXdFbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuaW5zZXJ0QmVmb3JlKHZpZXdFbCwgY2hpbGRyZW5bcG9zaXRpb25dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdCA9IGNoaWxkcmVuW3Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICBpZiAobGlzdC5sYXN0Q2hpbGQgPT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpc3QuYXBwZW5kQ2hpbGQodmlld0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaXN0Lmluc2VydEJlZm9yZSh2aWV3RWwsIGxhc3QubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNFbmQobGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gbGlzdC5hcHBlbmRDaGlsZCh2aWV3RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5zZXJ0QmVmb3JlKHZpZXdFbCwgbGlzdC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb25WaWV3ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhDb2xsZWN0aW9uVmlldywgX3N1cGVyKTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaXRlbVZpZXcgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5hdXRvUmVuZGVyID0gdHJ1ZTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUucmVuZGVySXRlbXMgPSB0cnVlO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5hbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUudXNlQ3NzQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmFuaW1hdGlvblN0YXJ0Q2xhc3MgPSAnYW5pbWF0ZWQtaXRlbS12aWV3JztcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuYW5pbWF0aW9uRW5kQ2xhc3MgPSAnYW5pbWF0ZWQtaXRlbS12aWV3LWVuZCc7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmxpc3RTZWxlY3RvciA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLiRsaXN0ID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZmFsbGJhY2tTZWxlY3RvciA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLiRmYWxsYmFjayA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmxvYWRpbmdTZWxlY3RvciA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLiRsb2FkaW5nID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaXRlbVNlbGVjdG9yID0gdm9pZCAwO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5maWx0ZXJlciA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmZpbHRlckNhbGxiYWNrID0gZnVuY3Rpb24odmlldywgaW5jbHVkZWQpIHtcbiAgICBpZiAoJCkge1xuICAgICAgdmlldy4kZWwuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZ2dsZUVsZW1lbnQoKCQgPyB2aWV3LiRlbCA6IHZpZXcuZWwpLCBpbmNsdWRlZCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnZpc2libGVJdGVtcyA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLm9wdGlvbk5hbWVzID0gVmlldy5wcm90b3R5cGUub3B0aW9uTmFtZXMuY29uY2F0KFsncmVuZGVySXRlbXMnLCAnaXRlbVZpZXcnXSk7XG5cbiAgZnVuY3Rpb24gQ29sbGVjdGlvblZpZXcob3B0aW9ucykge1xuICAgIHRoaXMucmVuZGVyQWxsSXRlbXMgPSBfX2JpbmQodGhpcy5yZW5kZXJBbGxJdGVtcywgdGhpcyk7XG5cbiAgICB0aGlzLnRvZ2dsZUZhbGxiYWNrID0gX19iaW5kKHRoaXMudG9nZ2xlRmFsbGJhY2ssIHRoaXMpO1xuXG4gICAgdGhpcy5pdGVtc1Jlc2V0ID0gX19iaW5kKHRoaXMuaXRlbXNSZXNldCwgdGhpcyk7XG5cbiAgICB0aGlzLml0ZW1SZW1vdmVkID0gX19iaW5kKHRoaXMuaXRlbVJlbW92ZWQsIHRoaXMpO1xuXG4gICAgdGhpcy5pdGVtQWRkZWQgPSBfX2JpbmQodGhpcy5pdGVtQWRkZWQsIHRoaXMpO1xuICAgIHRoaXMudmlzaWJsZUl0ZW1zID0gW107XG4gICAgQ29sbGVjdGlvblZpZXcuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMuYWRkQ29sbGVjdGlvbkxpc3RlbmVycygpO1xuICAgIGlmIChvcHRpb25zLmZpbHRlcmVyICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihvcHRpb25zLmZpbHRlcmVyKTtcbiAgICB9XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmFkZENvbGxlY3Rpb25MaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ2FkZCcsIHRoaXMuaXRlbUFkZGVkKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ3JlbW92ZScsIHRoaXMuaXRlbVJlbW92ZWQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ3Jlc2V0IHNvcnQnLCB0aGlzLml0ZW1zUmVzZXQpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGVtcGxhdGVEYXRhO1xuICAgIHRlbXBsYXRlRGF0YSA9IHtcbiAgICAgIGxlbmd0aDogdGhpcy5jb2xsZWN0aW9uLmxlbmd0aFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRlbXBsYXRlRGF0YS5zeW5jZWQgPSB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlRGF0YTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZ2V0VGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaXN0U2VsZWN0b3I7XG4gICAgQ29sbGVjdGlvblZpZXcuX19zdXBlcl9fLnJlbmRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGxpc3RTZWxlY3RvciA9IF8ucmVzdWx0KHRoaXMsICdsaXN0U2VsZWN0b3InKTtcbiAgICBpZiAoJCkge1xuICAgICAgdGhpcy4kbGlzdCA9IGxpc3RTZWxlY3RvciA/IHRoaXMuJChsaXN0U2VsZWN0b3IpIDogdGhpcy4kZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3RTZWxlY3RvciA/IHRoaXMuZmluZCh0aGlzLmxpc3RTZWxlY3RvcikgOiB0aGlzLmVsO1xuICAgIH1cbiAgICB0aGlzLmluaXRGYWxsYmFjaygpO1xuICAgIHRoaXMuaW5pdExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICBpZiAodGhpcy5yZW5kZXJJdGVtcykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQWxsSXRlbXMoKTtcbiAgICB9XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLml0ZW1BZGRlZCA9IGZ1bmN0aW9uKGl0ZW0sIGNvbGxlY3Rpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRWaWV3KGl0ZW0sIHRoaXMucmVuZGVySXRlbShpdGVtKSwgb3B0aW9ucy5hdCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLml0ZW1SZW1vdmVkID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZVZpZXdGb3JJdGVtKGl0ZW0pO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pdGVtc1Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQWxsSXRlbXMoKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaW5pdEZhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmZhbGxiYWNrU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCQpIHtcbiAgICAgIHRoaXMuJGZhbGxiYWNrID0gdGhpcy4kKHRoaXMuZmFsbGJhY2tTZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFsbGJhY2sgPSB0aGlzLmZpbmQodGhpcy5mYWxsYmFja1NlbGVjdG9yKTtcbiAgICB9XG4gICAgdGhpcy5vbigndmlzaWJpbGl0eUNoYW5nZScsIHRoaXMudG9nZ2xlRmFsbGJhY2spO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAnc3luY1N0YXRlQ2hhbmdlJywgdGhpcy50b2dnbGVGYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlRmFsbGJhY2soKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUudG9nZ2xlRmFsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmlzaWJsZTtcbiAgICB2aXNpYmxlID0gdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID09PSAwICYmICh0eXBlb2YgdGhpcy5jb2xsZWN0aW9uLmlzU3luY2VkID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb2xsZWN0aW9uLmlzU3luY2VkKCkgOiB0cnVlKTtcbiAgICByZXR1cm4gdG9nZ2xlRWxlbWVudCgoJCA/IHRoaXMuJGZhbGxiYWNrIDogdGhpcy5mYWxsYmFjayksIHZpc2libGUpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pbml0TG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghKHRoaXMubG9hZGluZ1NlbGVjdG9yICYmIHR5cGVvZiB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jaW5nID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJCkge1xuICAgICAgdGhpcy4kbG9hZGluZyA9IHRoaXMuJCh0aGlzLmxvYWRpbmdTZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMuZmluZCh0aGlzLmxvYWRpbmdTZWxlY3Rvcik7XG4gICAgfVxuICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAnc3luY1N0YXRlQ2hhbmdlJywgdGhpcy50b2dnbGVMb2FkaW5nSW5kaWNhdG9yKTtcbiAgICByZXR1cm4gdGhpcy50b2dnbGVMb2FkaW5nSW5kaWNhdG9yKCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnRvZ2dsZUxvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmlzaWJsZTtcbiAgICB2aXNpYmxlID0gdGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmNvbGxlY3Rpb24uaXNTeW5jaW5nKCk7XG4gICAgcmV0dXJuIHRvZ2dsZUVsZW1lbnQoKCQgPyB0aGlzLiRsb2FkaW5nIDogdGhpcy5sb2FkaW5nKSwgdmlzaWJsZSk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmdldEl0ZW1WaWV3cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtVmlld3MsIG5hbWUsIHZpZXcsIF9yZWY7XG4gICAgaXRlbVZpZXdzID0ge307XG4gICAgaWYgKHRoaXMuc3Vidmlld3MubGVuZ3RoID4gMCkge1xuICAgICAgX3JlZiA9IHRoaXMuc3Vidmlld3NCeU5hbWU7XG4gICAgICBmb3IgKG5hbWUgaW4gX3JlZikge1xuICAgICAgICB2aWV3ID0gX3JlZltuYW1lXTtcbiAgICAgICAgaWYgKG5hbWUuc2xpY2UoMCwgOSkgPT09ICdpdGVtVmlldzonKSB7XG4gICAgICAgICAgaXRlbVZpZXdzW25hbWUuc2xpY2UoOSldID0gdmlldztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbVZpZXdzO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXJlciwgZmlsdGVyQ2FsbGJhY2spIHtcbiAgICB2YXIgaGFzSXRlbVZpZXdzLCBpbmNsdWRlZCwgaW5kZXgsIGl0ZW0sIHZpZXcsIF9pLCBfbGVuLCBfcmVmLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyZXIgPT09ICdmdW5jdGlvbicgfHwgZmlsdGVyZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyZXIgPSBmaWx0ZXJlcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyB8fCBmaWx0ZXJDYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maWx0ZXJDYWxsYmFjayA9IGZpbHRlckNhbGxiYWNrO1xuICAgIH1cbiAgICBoYXNJdGVtVmlld3MgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmFtZTtcbiAgICAgIGlmIChfdGhpcy5zdWJ2aWV3cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobmFtZSBpbiBfdGhpcy5zdWJ2aWV3c0J5TmFtZSkge1xuICAgICAgICAgIGlmIChuYW1lLnNsaWNlKDAsIDkpID09PSAnaXRlbVZpZXc6Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKTtcbiAgICBpZiAoaGFzSXRlbVZpZXdzKSB7XG4gICAgICBfcmVmID0gdGhpcy5jb2xsZWN0aW9uLm1vZGVscztcbiAgICAgIGZvciAoaW5kZXggPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBpbmRleCA9ICsrX2kpIHtcbiAgICAgICAgaXRlbSA9IF9yZWZbaW5kZXhdO1xuICAgICAgICBpbmNsdWRlZCA9IHR5cGVvZiB0aGlzLmZpbHRlcmVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5maWx0ZXJlcihpdGVtLCBpbmRleCkgOiB0cnVlO1xuICAgICAgICB2aWV3ID0gdGhpcy5zdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCk7XG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sbGVjdGlvblZpZXcjZmlsdGVyOiAnICsgKFwibm8gdmlldyBmb3VuZCBmb3IgXCIgKyBpdGVtLmNpZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyQ2FsbGJhY2sodmlldywgaW5jbHVkZWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh2aWV3Lm1vZGVsLCBpbmNsdWRlZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCd2aXNpYmlsaXR5Q2hhbmdlJywgdGhpcy52aXNpYmxlSXRlbXMpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5yZW5kZXJBbGxJdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaWQsIGluZGV4LCBpdGVtLCBpdGVtcywgcmVtYWluaW5nVmlld3NCeUNpZCwgdmlldywgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZjtcbiAgICBpdGVtcyA9IHRoaXMuY29sbGVjdGlvbi5tb2RlbHM7XG4gICAgdGhpcy52aXNpYmxlSXRlbXMgPSBbXTtcbiAgICByZW1haW5pbmdWaWV3c0J5Q2lkID0ge307XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBpdGVtcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaXRlbSA9IGl0ZW1zW19pXTtcbiAgICAgIHZpZXcgPSB0aGlzLnN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkKTtcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIHJlbWFpbmluZ1ZpZXdzQnlDaWRbaXRlbS5jaWRdID0gdmlldztcbiAgICAgIH1cbiAgICB9XG4gICAgX3JlZiA9IHRoaXMuZ2V0SXRlbVZpZXdzKCk7XG4gICAgZm9yIChjaWQgaW4gX3JlZikge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChfcmVmLCBjaWQpKSBjb250aW51ZTtcbiAgICAgIHZpZXcgPSBfcmVmW2NpZF07XG4gICAgICBpZiAoIShjaWQgaW4gcmVtYWluaW5nVmlld3NCeUNpZCkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVTdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBjaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGluZGV4ID0gX2ogPSAwLCBfbGVuMSA9IGl0ZW1zLmxlbmd0aDsgX2ogPCBfbGVuMTsgaW5kZXggPSArK19qKSB7XG4gICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgdmlldyA9IHRoaXMuc3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQpO1xuICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRWaWV3KGl0ZW0sIHZpZXcsIGluZGV4LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFZpZXcoaXRlbSwgdGhpcy5yZW5kZXJJdGVtKGl0ZW0pLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoJ3Zpc2liaWxpdHlDaGFuZ2UnLCB0aGlzLnZpc2libGVJdGVtcyk7XG4gICAgfVxuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5yZW5kZXJJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciB2aWV3O1xuICAgIHZpZXcgPSB0aGlzLnN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkKTtcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHZpZXcgPSB0aGlzLmluaXRJdGVtVmlldyhpdGVtKTtcbiAgICAgIHRoaXMuc3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQsIHZpZXcpO1xuICAgIH1cbiAgICB2aWV3LnJlbmRlcigpO1xuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pbml0SXRlbVZpZXcgPSBmdW5jdGlvbihtb2RlbCkge1xuICAgIGlmICh0aGlzLml0ZW1WaWV3KSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuaXRlbVZpZXcoe1xuICAgICAgICBhdXRvUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgbW9kZWw6IG1vZGVsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQ29sbGVjdGlvblZpZXcjaXRlbVZpZXcgcHJvcGVydHkgJyArICdtdXN0IGJlIGRlZmluZWQgb3IgdGhlIGluaXRJdGVtVmlldygpIG11c3QgYmUgb3ZlcnJpZGRlbi4nKTtcbiAgICB9XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmluc2VydFZpZXcgPSBmdW5jdGlvbihpdGVtLCB2aWV3LCBwb3NpdGlvbiwgZW5hYmxlQW5pbWF0aW9uKSB7XG4gICAgdmFyIGVsZW0sIGluY2x1ZGVkLCBsZW5ndGgsIGxpc3QsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKGVuYWJsZUFuaW1hdGlvbiA9PSBudWxsKSB7XG4gICAgICBlbmFibGVBbmltYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbiA9PT0gMCkge1xuICAgICAgZW5hYmxlQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gIT09ICdudW1iZXInKSB7XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICBpbmNsdWRlZCA9IHR5cGVvZiB0aGlzLmZpbHRlcmVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5maWx0ZXJlcihpdGVtLCBwb3NpdGlvbikgOiB0cnVlO1xuICAgIGVsZW0gPSAkID8gdmlldy4kZWwgOiB2aWV3LmVsO1xuICAgIGlmIChpbmNsdWRlZCAmJiBlbmFibGVBbmltYXRpb24pIHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uKGVsZW0sIHRoaXMudXNlQ3NzQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvblN0YXJ0Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJlcikge1xuICAgICAgdGhpcy5maWx0ZXJDYWxsYmFjayh2aWV3LCBpbmNsdWRlZCk7XG4gICAgfVxuICAgIGxlbmd0aCA9IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgbGlzdCA9ICQgPyB0aGlzLiRsaXN0IDogdGhpcy5saXN0O1xuICAgIGluc2VydFZpZXcobGlzdCwgZWxlbSwgcG9zaXRpb24sIGxlbmd0aCwgdGhpcy5pdGVtU2VsZWN0b3IpO1xuICAgIHZpZXcudHJpZ2dlcignYWRkZWRUb1BhcmVudCcpO1xuICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGl0ZW0sIGluY2x1ZGVkKTtcbiAgICBpZiAoaW5jbHVkZWQgJiYgZW5hYmxlQW5pbWF0aW9uKSB7XG4gICAgICBpZiAodGhpcy51c2VDc3NBbmltYXRpb24pIHtcbiAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFkZENsYXNzKGVsZW0sIF90aGlzLmFuaW1hdGlvbkVuZENsYXNzKTtcbiAgICAgICAgfSksIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kQW5pbWF0aW9uKGVsZW0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUucmVtb3ZlVmlld0Zvckl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoaXRlbSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZVN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUudXBkYXRlVmlzaWJsZUl0ZW1zID0gZnVuY3Rpb24oaXRlbSwgaW5jbHVkZWRJbkZpbHRlciwgdHJpZ2dlckV2ZW50KSB7XG4gICAgdmFyIGluY2x1ZGVkSW5WaXNpYmxlSXRlbXMsIHZpc2liaWxpdHlDaGFuZ2VkLCB2aXNpYmxlSXRlbXNJbmRleDtcbiAgICBpZiAodHJpZ2dlckV2ZW50ID09IG51bGwpIHtcbiAgICAgIHRyaWdnZXJFdmVudCA9IHRydWU7XG4gICAgfVxuICAgIHZpc2liaWxpdHlDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmlzaWJsZUl0ZW1zSW5kZXggPSB1dGlscy5pbmRleE9mKHRoaXMudmlzaWJsZUl0ZW1zLCBpdGVtKTtcbiAgICBpbmNsdWRlZEluVmlzaWJsZUl0ZW1zID0gdmlzaWJsZUl0ZW1zSW5kZXggIT09IC0xO1xuICAgIGlmIChpbmNsdWRlZEluRmlsdGVyICYmICFpbmNsdWRlZEluVmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWluY2x1ZGVkSW5GaWx0ZXIgJiYgaW5jbHVkZWRJblZpc2libGVJdGVtcykge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMuc3BsaWNlKHZpc2libGVJdGVtc0luZGV4LCAxKTtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZpc2liaWxpdHlDaGFuZ2VkICYmIHRyaWdnZXJFdmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCd2aXNpYmlsaXR5Q2hhbmdlJywgdGhpcy52aXNpYmxlSXRlbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdmlzaWJpbGl0eUNoYW5nZWQ7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvcGVydGllcyA9IFsnJGxpc3QnLCAnJGZhbGxiYWNrJywgJyRsb2FkaW5nJywgJ3Zpc2libGVJdGVtcyddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBDb2xsZWN0aW9uVmlldy5fX3N1cGVyX18uZGlzcG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBDb2xsZWN0aW9uVmlldztcblxufSkoVmlldyk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL3JvdXRlJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgQ29udHJvbGxlciwgRXZlbnRCcm9rZXIsIFJvdXRlLCB1dGlscywgXyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuQ29udHJvbGxlciA9IGxvYWRlcignY2hhcGxpbi9jb250cm9sbGVycy9jb250cm9sbGVyJyk7XG5cbnV0aWxzID0gbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZXNjYXBlUmVnRXhwLCBvcHRpb25hbFJlZ0V4cCwgcGFyYW1SZWdFeHAsIHByb2Nlc3NUcmFpbGluZ1NsYXNoO1xuXG4gIFJvdXRlLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChSb3V0ZS5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBlc2NhcGVSZWdFeHAgPSAvW1xcLXt9XFxbXFxdKz8uLFxcXFxcXF4kfCNcXHNdL2c7XG5cbiAgb3B0aW9uYWxSZWdFeHAgPSAvXFwoKC4qPylcXCkvZztcblxuICBwYXJhbVJlZ0V4cCA9IC8oPzo6fFxcKikoXFx3KykvZztcblxuICBwcm9jZXNzVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uKHBhdGgsIHRyYWlsaW5nKSB7XG4gICAgc3dpdGNoICh0cmFpbGluZykge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBpZiAocGF0aC5zbGljZSgtMSkgIT09ICcvJykge1xuICAgICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgaWYgKHBhdGguc2xpY2UoLTEpID09PSAnLycpIHtcbiAgICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCAtMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgZnVuY3Rpb24gUm91dGUocGF0dGVybiwgY29udHJvbGxlciwgYWN0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuaGFuZGxlciA9IF9fYmluZCh0aGlzLmhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5yZXBsYWNlUGFyYW1zID0gX19iaW5kKHRoaXMucmVwbGFjZVBhcmFtcywgdGhpcyk7XG5cbiAgICB0aGlzLnBhcnNlT3B0aW9uYWxQb3J0aW9uID0gX19iaW5kKHRoaXMucGFyc2VPcHRpb25hbFBvcnRpb24sIHRoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnBhdHRlcm4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlOiBSZWdFeHBzIGFyZSBub3Qgc3VwcG9ydGVkLlxcXG4gICAgICAgIFVzZSBzdHJpbmdzIHdpdGggOm5hbWVzIGFuZCBgY29uc3RyYWludHNgIG9wdGlvbiBvZiByb3V0ZScpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID8gXy5leHRlbmQoe30sIG9wdGlvbnMpIDoge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy5uYW1lICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZS5pbmRleE9mKCcjJykgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlOiBcIiNcIiBjYW5ub3QgYmUgdXNlZCBpbiBuYW1lJyk7XG4gICAgfVxuICAgIGlmICgoX3JlZiA9IHRoaXMubmFtZSkgPT0gbnVsbCkge1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5jb250cm9sbGVyICsgJyMnICsgdGhpcy5hY3Rpb247XG4gICAgfVxuICAgIHRoaXMuYWxsUGFyYW1zID0gW107XG4gICAgdGhpcy5yZXF1aXJlZFBhcmFtcyA9IFtdO1xuICAgIHRoaXMub3B0aW9uYWxQYXJhbXMgPSBbXTtcbiAgICBpZiAodGhpcy5hY3Rpb24gaW4gQ29udHJvbGxlci5wcm90b3R5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGU6IFlvdSBzaG91bGQgbm90IHVzZSBleGlzdGluZyBjb250cm9sbGVyICcgKyAncHJvcGVydGllcyBhcyBhY3Rpb24gbmFtZXMnKTtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVSZWdFeHAoKTtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBSb3V0ZS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uKGNyaXRlcmlhKSB7XG4gICAgdmFyIGludmFsaWRQYXJhbXNDb3VudCwgbmFtZSwgcHJvcGVydGllc0NvdW50LCBwcm9wZXJ0eSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgaWYgKHR5cGVvZiBjcml0ZXJpYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjcml0ZXJpYSA9PT0gdGhpcy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0aWVzQ291bnQgPSAwO1xuICAgICAgX3JlZiA9IFsnbmFtZScsICdhY3Rpb24nLCAnY29udHJvbGxlciddO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG5hbWUgPSBfcmVmW19pXTtcbiAgICAgICAgcHJvcGVydGllc0NvdW50Kys7XG4gICAgICAgIHByb3BlcnR5ID0gY3JpdGVyaWFbbmFtZV07XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eSAhPT0gdGhpc1tuYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW52YWxpZFBhcmFtc0NvdW50ID0gcHJvcGVydGllc0NvdW50ID09PSAxICYmIChuYW1lID09PSAnYWN0aW9uJyB8fCBuYW1lID09PSAnY29udHJvbGxlcicpO1xuICAgICAgcmV0dXJuICFpbnZhbGlkUGFyYW1zQ291bnQ7XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24ocGFyYW1zLCBxdWVyeSkge1xuICAgIHZhciBuYW1lLCBxdWVyeVN0cmluZywgcmF3LCB1cmwsIHZhbHVlLCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmLCBfcmVmMTtcbiAgICBwYXJhbXMgPSB0aGlzLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVybCA9IHRoaXMucGF0dGVybjtcbiAgICBfcmVmID0gdGhpcy5yZXF1aXJlZFBhcmFtcztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIG5hbWUgPSBfcmVmW19pXTtcbiAgICAgIHZhbHVlID0gcGFyYW1zW25hbWVdO1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoUmVnRXhwKFwiWzoqXVwiICsgbmFtZSwgXCJnXCIpLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9yZWYxID0gdGhpcy5vcHRpb25hbFBhcmFtcztcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIG5hbWUgPSBfcmVmMVtfal07XG4gICAgICBpZiAodmFsdWUgPSBwYXJhbXNbbmFtZV0pIHtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoUmVnRXhwKFwiWzoqXVwiICsgbmFtZSwgXCJnXCIpLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJhdyA9IHVybC5yZXBsYWNlKG9wdGlvbmFsUmVnRXhwLCBmdW5jdGlvbihtYXRjaCwgcG9ydGlvbikge1xuICAgICAgaWYgKHBvcnRpb24ubWF0Y2goL1s6Kl0vZykpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcG9ydGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cmwgPSBwcm9jZXNzVHJhaWxpbmdTbGFzaChyYXcsIHRoaXMub3B0aW9ucy50cmFpbGluZyk7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gdXRpbHMucXVlcnlQYXJhbXMuc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIHJldHVybiB1cmwgKz0gcXVlcnlTdHJpbmcgPyAnPycgKyBxdWVyeVN0cmluZyA6ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsICs9IChxdWVyeVswXSA9PT0gJz8nID8gJycgOiAnPycpICsgcXVlcnk7XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5ub3JtYWxpemVQYXJhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICB2YXIgcGFyYW1JbmRleCwgcGFyYW1OYW1lLCBwYXJhbXNIYXNoLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAodXRpbHMuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCA8IHRoaXMucmVxdWlyZWRQYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHBhcmFtc0hhc2ggPSB7fTtcbiAgICAgIF9yZWYgPSB0aGlzLnJlcXVpcmVkUGFyYW1zO1xuICAgICAgZm9yIChwYXJhbUluZGV4ID0gX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgcGFyYW1JbmRleCA9ICsrX2kpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gX3JlZltwYXJhbUluZGV4XTtcbiAgICAgICAgcGFyYW1zSGFzaFtwYXJhbU5hbWVdID0gcGFyYW1zW3BhcmFtSW5kZXhdO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRlc3RDb25zdHJhaW50cyhwYXJhbXNIYXNoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwYXJhbXMgPSBwYXJhbXNIYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zID09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0ge307XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGVzdFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUudGVzdENvbnN0cmFpbnRzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGNvbnN0cmFpbnQsIGNvbnN0cmFpbnRzLCBuYW1lO1xuICAgIGNvbnN0cmFpbnRzID0gdGhpcy5vcHRpb25zLmNvbnN0cmFpbnRzO1xuICAgIGlmIChjb25zdHJhaW50cykge1xuICAgICAgZm9yIChuYW1lIGluIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoY29uc3RyYWludHMsIG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW25hbWVdO1xuICAgICAgICBpZiAoIWNvbnN0cmFpbnQudGVzdChwYXJhbXNbbmFtZV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS50ZXN0UGFyYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIHBhcmFtTmFtZSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgX3JlZiA9IHRoaXMucmVxdWlyZWRQYXJhbXM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwYXJhbU5hbWUgPSBfcmVmW19pXTtcbiAgICAgIGlmIChwYXJhbXNbcGFyYW1OYW1lXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGVzdENvbnN0cmFpbnRzKHBhcmFtcyk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNyZWF0ZVJlZ0V4cCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXR0ZXJuLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm47XG4gICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKTtcbiAgICB0aGlzLnJlcGxhY2VQYXJhbXMocGF0dGVybiwgZnVuY3Rpb24obWF0Y2gsIHBhcmFtKSB7XG4gICAgICByZXR1cm4gX3RoaXMuYWxsUGFyYW1zLnB1c2gocGFyYW0pO1xuICAgIH0pO1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2Uob3B0aW9uYWxSZWdFeHAsIHRoaXMucGFyc2VPcHRpb25hbFBvcnRpb24pO1xuICAgIHBhdHRlcm4gPSB0aGlzLnJlcGxhY2VQYXJhbXMocGF0dGVybiwgZnVuY3Rpb24obWF0Y2gsIHBhcmFtKSB7XG4gICAgICBfdGhpcy5yZXF1aXJlZFBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgICAgIHJldHVybiBfdGhpcy5wYXJhbUNhcHR1cmVQYXR0ZXJuKG1hdGNoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5yZWdFeHAgPSBSZWdFeHAoXCJeXCIgKyBwYXR0ZXJuICsgXCIoPz1cXFxcLz8oPz1cXFxcP3wkKSlcIik7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnBhcnNlT3B0aW9uYWxQb3J0aW9uID0gZnVuY3Rpb24obWF0Y2gsIG9wdGlvbmFsUG9ydGlvbikge1xuICAgIHZhciBwb3J0aW9uLFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIHBvcnRpb24gPSB0aGlzLnJlcGxhY2VQYXJhbXMob3B0aW9uYWxQb3J0aW9uLCBmdW5jdGlvbihtYXRjaCwgcGFyYW0pIHtcbiAgICAgIF90aGlzLm9wdGlvbmFsUGFyYW1zLnB1c2gocGFyYW0pO1xuICAgICAgcmV0dXJuIF90aGlzLnBhcmFtQ2FwdHVyZVBhdHRlcm4obWF0Y2gpO1xuICAgIH0pO1xuICAgIHJldHVybiBcIig/OlwiICsgcG9ydGlvbiArIFwiKT9cIjtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucmVwbGFjZVBhcmFtcyA9IGZ1bmN0aW9uKHMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShwYXJhbVJlZ0V4cCwgY2FsbGJhY2spO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5wYXJhbUNhcHR1cmVQYXR0ZXJuID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgICBpZiAocGFyYW0uY2hhckF0KDApID09PSAnOicpIHtcbiAgICAgIHJldHVybiAnKFteXFwvXFw/XSspJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcoLio/KSc7XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBjb25zdHJhaW50cywgbWF0Y2hlZDtcbiAgICBtYXRjaGVkID0gdGhpcy5yZWdFeHAudGVzdChwYXRoKTtcbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3RyYWludHMgPSB0aGlzLm9wdGlvbnMuY29uc3RyYWludHM7XG4gICAgaWYgKGNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXN0Q29uc3RyYWludHModGhpcy5leHRyYWN0UGFyYW1zKHBhdGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbihwYXRoUGFyYW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIGFjdGlvblBhcmFtcywgcGFyYW1zLCBwYXRoLCBxdWVyeSwgcm91dGUsIF9yZWY7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmV4dGVuZCh7fSwgb3B0aW9ucykgOiB7fTtcbiAgICBpZiAodHlwZW9mIHBhdGhQYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBxdWVyeSA9IHV0aWxzLnF1ZXJ5UGFyYW1zLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KTtcbiAgICAgIHBhcmFtcyA9IHBhdGhQYXJhbXM7XG4gICAgICBwYXRoID0gdGhpcy5yZXZlcnNlKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZWYgPSBwYXRoUGFyYW1zLnNwbGl0KCc/JyksIHBhdGggPSBfcmVmWzBdLCBxdWVyeSA9IF9yZWZbMV07XG4gICAgICBpZiAoIShxdWVyeSAhPSBudWxsKSkge1xuICAgICAgICBxdWVyeSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5xdWVyeSA9IHV0aWxzLnF1ZXJ5UGFyYW1zLnBhcnNlKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcyA9IHRoaXMuZXh0cmFjdFBhcmFtcyhwYXRoKTtcbiAgICAgIHBhdGggPSBwcm9jZXNzVHJhaWxpbmdTbGFzaChwYXRoLCB0aGlzLm9wdGlvbnMudHJhaWxpbmcpO1xuICAgIH1cbiAgICBhY3Rpb25QYXJhbXMgPSBfLmV4dGVuZCh7fSwgcGFyYW1zLCB0aGlzLm9wdGlvbnMucGFyYW1zKTtcbiAgICByb3V0ZSA9IHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgY29udHJvbGxlcjogdGhpcy5jb250cm9sbGVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoRXZlbnQoJ3JvdXRlcjptYXRjaCcsIHJvdXRlLCBhY3Rpb25QYXJhbXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5leHRyYWN0UGFyYW1zID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBpbmRleCwgbWF0Y2gsIG1hdGNoZXMsIHBhcmFtTmFtZSwgcGFyYW1zLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBwYXJhbXMgPSB7fTtcbiAgICBtYXRjaGVzID0gdGhpcy5yZWdFeHAuZXhlYyhwYXRoKTtcbiAgICBfcmVmID0gbWF0Y2hlcy5zbGljZSgxKTtcbiAgICBmb3IgKGluZGV4ID0gX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgaW5kZXggPSArK19pKSB7XG4gICAgICBtYXRjaCA9IF9yZWZbaW5kZXhdO1xuICAgICAgcGFyYW1OYW1lID0gdGhpcy5hbGxQYXJhbXMubGVuZ3RoID8gdGhpcy5hbGxQYXJhbXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IG1hdGNoO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZTtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvcm91dGVyJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgRXZlbnRCcm9rZXIsIEhpc3RvcnksIFJvdXRlLCBSb3V0ZXIsIG1lZGlhdG9yLCB1dGlscywgXyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5IaXN0b3J5ID0gbG9hZGVyKCdjaGFwbGluL2xpYi9oaXN0b3J5Jyk7XG5cblJvdXRlID0gbG9hZGVyKCdjaGFwbGluL2xpYi9yb3V0ZScpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgUm91dGVyLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChSb3V0ZXIucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgZnVuY3Rpb24gUm91dGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgaXNXZWJGaWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fTtcbiAgICB0aGlzLm1hdGNoID0gX19iaW5kKHRoaXMubWF0Y2gsIHRoaXMpO1xuXG4gICAgaXNXZWJGaWxlID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonO1xuICAgIF8uZGVmYXVsdHModGhpcy5vcHRpb25zLCB7XG4gICAgICBwdXNoU3RhdGU6IGlzV2ViRmlsZSxcbiAgICAgIHJvb3Q6ICcvJyxcbiAgICAgIHRyYWlsaW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucmVtb3ZlUm9vdCA9IG5ldyBSZWdFeHAoJ14nICsgdXRpbHMuZXNjYXBlUmVnRXhwKHRoaXMub3B0aW9ucy5yb290KSArICcoIyk/Jyk7XG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudCgnIXJvdXRlcjpyb3V0ZScsIHRoaXMub2xkRXZlbnRFcnJvcik7XG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudCgnIXJvdXRlcjpyb3V0ZUJ5TmFtZScsIHRoaXMub2xkRXZlbnRFcnJvcik7XG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudCgnIXJvdXRlcjpjaGFuZ2VVUkwnLCB0aGlzLm9sZFVSTEV2ZW50RXJyb3IpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnQoJ2Rpc3BhdGNoZXI6ZGlzcGF0Y2gnLCB0aGlzLmNoYW5nZVVSTCk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncm91dGVyOnJvdXRlJywgdGhpcy5yb3V0ZSwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncm91dGVyOnJldmVyc2UnLCB0aGlzLnJldmVyc2UsIHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgUm91dGVyLnByb3RvdHlwZS5vbGRFdmVudEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCchcm91dGVyOnJvdXRlIGFuZCAhcm91dGVyOnJvdXRlQnlOYW1lIGV2ZW50cyB3ZXJlIHJlbW92ZWQuXFxcbiAgVXNlIGBDaGFwbGluLnV0aWxzLnJlZGlyZWN0VG9gJyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5vbGRVUkxFdmVudEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCchcm91dGVyOmNoYW5nZVVSTCBldmVudCB3YXMgcmVtb3ZlZC4nKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNyZWF0ZUhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQmFja2JvbmUuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5zdGFydEhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQmFja2JvbmUuaGlzdG9yeS5zdGFydCh0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuc3RvcEhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoQmFja2JvbmUuSGlzdG9yeS5zdGFydGVkKSB7XG4gICAgICByZXR1cm4gQmFja2JvbmUuaGlzdG9yeS5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuZmluZEhhbmRsZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICB2YXIgaGFuZGxlciwgX2ksIF9sZW4sIF9yZWY7XG4gICAgX3JlZiA9IEJhY2tib25lLmhpc3RvcnkuaGFuZGxlcnM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBoYW5kbGVyID0gX3JlZltfaV07XG4gICAgICBpZiAocHJlZGljYXRlKGhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24ocGF0dGVybiwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdmFyIGFjdGlvbiwgY29udHJvbGxlciwgcm91dGUsIF9yZWY7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IHRhcmdldDtcbiAgICAgIGNvbnRyb2xsZXIgPSBvcHRpb25zLmNvbnRyb2xsZXIsIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgaWYgKCEoY29udHJvbGxlciAmJiBhY3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGVyI21hdGNoIG11c3QgcmVjZWl2ZSBlaXRoZXIgdGFyZ2V0IG9yICcgKyAnb3B0aW9ucy5jb250cm9sbGVyICYgb3B0aW9ucy5hY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbGxlciA9IG9wdGlvbnMuY29udHJvbGxlciwgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgICBpZiAoY29udHJvbGxlciB8fCBhY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZXIjbWF0Y2ggY2Fubm90IHVzZSBib3RoIHRhcmdldCBhbmQgJyArICdvcHRpb25zLmNvbnRyb2xsZXIgLyBvcHRpb25zLmFjdGlvbicpO1xuICAgICAgfVxuICAgICAgX3JlZiA9IHRhcmdldC5zcGxpdCgnIycpLCBjb250cm9sbGVyID0gX3JlZlswXSwgYWN0aW9uID0gX3JlZlsxXTtcbiAgICB9XG4gICAgXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICB0cmFpbGluZzogdGhpcy5vcHRpb25zLnRyYWlsaW5nXG4gICAgfSk7XG4gICAgcm91dGUgPSBuZXcgUm91dGUocGF0dGVybiwgY29udHJvbGxlciwgYWN0aW9uLCBvcHRpb25zKTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LmhhbmRsZXJzLnB1c2goe1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgY2FsbGJhY2s6IHJvdXRlLmhhbmRsZXJcbiAgICB9KTtcbiAgICByZXR1cm4gcm91dGU7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5yb3V0ZSA9IGZ1bmN0aW9uKHBhdGhEZXNjLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgaGFuZGxlciwgcGF0aDtcbiAgICBpZiAodHlwZW9mIHBhdGhEZXNjID09PSAnb2JqZWN0Jykge1xuICAgICAgcGF0aCA9IHBhdGhEZXNjLnVybDtcbiAgICAgIGlmICghcGFyYW1zICYmIHBhdGhEZXNjLnBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSBwYXRoRGVzYy5wYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHBhcmFtcyA/IHV0aWxzLmlzQXJyYXkocGFyYW1zKSA/IHBhcmFtcy5zbGljZSgpIDogXy5leHRlbmQoe30sIHBhcmFtcykgOiB7fTtcbiAgICBpZiAocGF0aCAhPSBudWxsKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKHRoaXMucmVtb3ZlUm9vdCwgJycpO1xuICAgICAgaGFuZGxlciA9IHRoaXMuZmluZEhhbmRsZXIoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlci5yb3V0ZS50ZXN0KHBhdGgpO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zID0gcGFyYW1zO1xuICAgICAgcGFyYW1zID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmV4dGVuZCh7fSwgb3B0aW9ucykgOiB7fTtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLmZpbmRIYW5kbGVyKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZXIucm91dGUubWF0Y2hlcyhwYXRoRGVzYykpIHtcbiAgICAgICAgICBwYXJhbXMgPSBoYW5kbGVyLnJvdXRlLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgICBjaGFuZ2VVUkw6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaGFuZGxlci5jYWxsYmFjayhwYXRoIHx8IHBhcmFtcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZXIjcm91dGU6IHJlcXVlc3Qgd2FzIG5vdCByb3V0ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oY3JpdGVyaWEsIHBhcmFtcywgcXVlcnkpIHtcbiAgICB2YXIgaGFuZGxlciwgaGFuZGxlcnMsIHJldmVyc2VkLCByb290LCB1cmwsIF9pLCBfbGVuO1xuICAgIHJvb3QgPSB0aGlzLm9wdGlvbnMucm9vdDtcbiAgICBpZiAoKHBhcmFtcyAhPSBudWxsKSAmJiB0eXBlb2YgcGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUm91dGVyI3JldmVyc2U6IHBhcmFtcyBtdXN0IGJlIGFuIGFycmF5IG9yIGFuICcgKyAnb2JqZWN0Jyk7XG4gICAgfVxuICAgIGhhbmRsZXJzID0gQmFja2JvbmUuaGlzdG9yeS5oYW5kbGVycztcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGhhbmRsZXJzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnNbX2ldO1xuICAgICAgaWYgKCEoaGFuZGxlci5yb3V0ZS5tYXRjaGVzKGNyaXRlcmlhKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXZlcnNlZCA9IGhhbmRsZXIucm91dGUucmV2ZXJzZShwYXJhbXMsIHF1ZXJ5KTtcbiAgICAgIGlmIChyZXZlcnNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdXJsID0gcm9vdCA/IHJvb3QgKyByZXZlcnNlZCA6IHJldmVyc2VkO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlciNyZXZlcnNlOiBpbnZhbGlkIHJvdXRlIHNwZWNpZmllZCcpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY2hhbmdlVVJMID0gZnVuY3Rpb24oY29udHJvbGxlciwgcGFyYW1zLCByb3V0ZSwgb3B0aW9ucykge1xuICAgIHZhciBuYXZpZ2F0ZU9wdGlvbnMsIHVybDtcbiAgICBpZiAoISgocm91dGUucGF0aCAhPSBudWxsKSAmJiBvcHRpb25zLmNoYW5nZVVSTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXJsID0gcm91dGUucGF0aCArIChyb3V0ZS5xdWVyeSA/IFwiP1wiICsgcm91dGUucXVlcnkgOiBcIlwiKTtcbiAgICBuYXZpZ2F0ZU9wdGlvbnMgPSB7XG4gICAgICB0cmlnZ2VyOiBvcHRpb25zLnRyaWdnZXIgPT09IHRydWUsXG4gICAgICByZXBsYWNlOiBvcHRpb25zLnJlcGxhY2UgPT09IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVybCwgbmF2aWdhdGVPcHRpb25zKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgUm91dGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdG9wSGlzdG9yeSgpO1xuICAgIGRlbGV0ZSBCYWNrYm9uZS5oaXN0b3J5O1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICBtZWRpYXRvci5yZW1vdmVIYW5kbGVycyh0aGlzKTtcbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlcjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvaGlzdG9yeScsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIEhpc3RvcnksIGlzRXhwbG9yZXIsIHJvb3RTdHJpcHBlciwgcm91dGVTdHJpcHBlciwgdHJhaWxpbmdTbGFzaCwgXyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5yb3V0ZVN0cmlwcGVyID0gL15bI1xcL118XFxzKyQvZztcblxucm9vdFN0cmlwcGVyID0gL15cXC8rfFxcLyskL2c7XG5cbmlzRXhwbG9yZXIgPSAvbXNpZSBbXFx3Ll0rLztcblxudHJhaWxpbmdTbGFzaCA9IC9cXC8kLztcblxuSGlzdG9yeSA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoSGlzdG9yeSwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBIaXN0b3J5KCkge1xuICAgIHJldHVybiBIaXN0b3J5Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuZ2V0RnJhZ21lbnQgPSBmdW5jdGlvbihmcmFnbWVudCwgZm9yY2VQdXNoU3RhdGUpIHtcbiAgICB2YXIgcm9vdDtcbiAgICBpZiAoIShmcmFnbWVudCAhPSBudWxsKSkge1xuICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSB8fCAhdGhpcy5fd2FudHNIYXNoQ2hhbmdlIHx8IGZvcmNlUHVzaFN0YXRlKSB7XG4gICAgICAgIGZyYWdtZW50ID0gdGhpcy5sb2NhdGlvbi5wYXRobmFtZSArIHRoaXMubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICByb290ID0gdGhpcy5yb290LnJlcGxhY2UodHJhaWxpbmdTbGFzaCwgJycpO1xuICAgICAgICBpZiAoIWZyYWdtZW50LmluZGV4T2Yocm9vdCkpIHtcbiAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50LnN1YnN0cihyb290Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYWdtZW50ID0gdGhpcy5nZXRIYXNoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudC5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgYXRSb290LCBmcmFnbWVudCwgbG9jO1xuICAgIGlmIChCYWNrYm9uZS5IaXN0b3J5LnN0YXJ0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmFja2JvbmUuaGlzdG9yeSBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWQnKTtcbiAgICB9XG4gICAgQmFja2JvbmUuSGlzdG9yeS5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwge1xuICAgICAgcm9vdDogJy8nXG4gICAgfSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLm9wdGlvbnMucm9vdDtcbiAgICB0aGlzLl93YW50c0hhc2hDaGFuZ2UgPSB0aGlzLm9wdGlvbnMuaGFzaENoYW5nZSAhPT0gZmFsc2U7XG4gICAgdGhpcy5fd2FudHNQdXNoU3RhdGUgPSBCb29sZWFuKHRoaXMub3B0aW9ucy5wdXNoU3RhdGUpO1xuICAgIHRoaXMuX2hhc1B1c2hTdGF0ZSA9IEJvb2xlYW4odGhpcy5vcHRpb25zLnB1c2hTdGF0ZSAmJiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSk7XG4gICAgZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KCk7XG4gICAgdGhpcy5yb290ID0gKCcvJyArIHRoaXMucm9vdCArICcvJykucmVwbGFjZShyb290U3RyaXBwZXIsICcvJyk7XG4gICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSkge1xuICAgICAgQmFja2JvbmUuJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlICYmICdvbmhhc2hjaGFuZ2UnIGluIHdpbmRvdykge1xuICAgICAgQmFja2JvbmUuJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmNoZWNrVXJsLCB0aGlzLmludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5mcmFnbWVudCA9IGZyYWdtZW50O1xuICAgIGxvYyA9IHRoaXMubG9jYXRpb247XG4gICAgYXRSb290ID0gbG9jLnBhdGhuYW1lLnJlcGxhY2UoL1teXFwvXSQvLCAnJCYvJykgPT09IHRoaXMucm9vdDtcbiAgICBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlICYmIHRoaXMuX3dhbnRzUHVzaFN0YXRlICYmICF0aGlzLl9oYXNQdXNoU3RhdGUgJiYgIWF0Um9vdCkge1xuICAgICAgdGhpcy5mcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQobnVsbCwgdHJ1ZSk7XG4gICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2UodGhpcy5yb290ICsgJyMnICsgdGhpcy5mcmFnbWVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzUHVzaFN0YXRlICYmIHRoaXMuX2hhc1B1c2hTdGF0ZSAmJiBhdFJvb3QgJiYgbG9jLmhhc2gpIHtcbiAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKS5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICAgIHRoaXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB0aGlzLnJvb3QgKyB0aGlzLmZyYWdtZW50KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2lsZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkVXJsKCk7XG4gICAgfVxuICB9O1xuXG4gIEhpc3RvcnkucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24oZnJhZ21lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaGlzdG9yeU1ldGhvZCwgaXNTYW1lRnJhZ21lbnQsIHVybDtcbiAgICBpZiAoZnJhZ21lbnQgPT0gbnVsbCkge1xuICAgICAgZnJhZ21lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKCFCYWNrYm9uZS5IaXN0b3J5LnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHRyaWdnZXI6IG9wdGlvbnNcbiAgICAgIH07XG4gICAgfVxuICAgIGZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChmcmFnbWVudCk7XG4gICAgdXJsID0gdGhpcy5yb290ICsgZnJhZ21lbnQ7XG4gICAgaWYgKHRoaXMuZnJhZ21lbnQgPT09IGZyYWdtZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICBpZiAoZnJhZ21lbnQubGVuZ3RoID09PSAwICYmIHVybCAhPT0gJy8nKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzUHVzaFN0YXRlKSB7XG4gICAgICBoaXN0b3J5TWV0aG9kID0gb3B0aW9ucy5yZXBsYWNlID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJztcbiAgICAgIHRoaXMuaGlzdG9yeVtoaXN0b3J5TWV0aG9kXSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUhhc2godGhpcy5sb2NhdGlvbiwgZnJhZ21lbnQsIG9wdGlvbnMucmVwbGFjZSk7XG4gICAgICBpc1NhbWVGcmFnbWVudCA9IGZyYWdtZW50ICE9PSB0aGlzLmdldEZyYWdtZW50KHRoaXMuZ2V0SGFzaCh0aGlzLmlmcmFtZSkpO1xuICAgICAgaWYgKCh0aGlzLmlmcmFtZSAhPSBudWxsKSAmJiBpc1NhbWVGcmFnbWVudCkge1xuICAgICAgICBpZiAoIW9wdGlvbnMucmVwbGFjZSkge1xuICAgICAgICAgIHRoaXMuaWZyYW1lLmRvY3VtZW50Lm9wZW4oKS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhhc2godGhpcy5pZnJhbWUubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudHJpZ2dlcikge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFVybChmcmFnbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBIaXN0b3J5O1xuXG59KShCYWNrYm9uZS5IaXN0b3J5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS4kID8gSGlzdG9yeSA6IEJhY2tib25lLkhpc3Rvcnk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZlbnRCcm9rZXIsIG1lZGlhdG9yLFxuICBfX3NsaWNlID0gW10uc2xpY2U7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbkV2ZW50QnJva2VyID0ge1xuICBzdWJzY3JpYmVFdmVudDogZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V2ZW50QnJva2VyI3N1YnNjcmliZUV2ZW50OiAnICsgJ3R5cGUgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V2ZW50QnJva2VyI3N1YnNjcmliZUV2ZW50OiAnICsgJ2hhbmRsZXIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIG1lZGlhdG9yLnVuc3Vic2NyaWJlKHR5cGUsIGhhbmRsZXIsIHRoaXMpO1xuICAgIHJldHVybiBtZWRpYXRvci5zdWJzY3JpYmUodHlwZSwgaGFuZGxlciwgdGhpcyk7XG4gIH0sXG4gIHVuc3Vic2NyaWJlRXZlbnQ6IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFdmVudEJyb2tlciN1bnN1YnNjcmliZUV2ZW50OiAnICsgJ3R5cGUgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V2ZW50QnJva2VyI3Vuc3Vic2NyaWJlRXZlbnQ6ICcgKyAnaGFuZGxlciBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhdG9yLnVuc3Vic2NyaWJlKHR5cGUsIGhhbmRsZXIpO1xuICB9LFxuICB1bnN1YnNjcmliZUFsbEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1lZGlhdG9yLnVuc3Vic2NyaWJlKG51bGwsIG51bGwsIHRoaXMpO1xuICB9LFxuICBwdWJsaXNoRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCB0eXBlO1xuICAgIHR5cGUgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V2ZW50QnJva2VyI3B1Ymxpc2hFdmVudDogJyArICd0eXBlIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhdG9yLnB1Ymxpc2guYXBwbHkobWVkaWF0b3IsIFt0eXBlXS5jb25jYXQoX19zbGljZS5jYWxsKGFyZ3MpKSk7XG4gIH1cbn07XG5cbmlmICh0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIE9iamVjdC5mcmVlemUoRXZlbnRCcm9rZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50QnJva2VyO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9zdXBwb3J0JywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwb3J0O1xuXG5zdXBwb3J0ID0ge1xuICBwcm9wZXJ0eURlc2NyaXB0b3JzOiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIG87XG4gICAgaWYgKCEodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBvID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ2ZvbycsIHtcbiAgICAgICAgdmFsdWU6ICdiYXInXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvLmZvbyA9PT0gJ2Jhcic7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pKClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydDtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvY29tcG9zaXRpb24nLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBDb21wb3NpdGlvbiwgRXZlbnRCcm9rZXIsIGhhcywgXyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGlvbiA9IChmdW5jdGlvbigpIHtcblxuICBDb21wb3NpdGlvbi5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoQ29tcG9zaXRpb24ucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMpO1xuXG4gIF8uZXh0ZW5kKENvbXBvc2l0aW9uLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5pdGVtID0gbnVsbDtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUub3B0aW9ucyA9IG51bGw7XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLl9zdGFsZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMuaXRlbSA9IHRoaXM7XG4gICAgdGhpcy5pbml0aWFsaXplKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLmNvbXBvc2UgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gXy5pc0VxdWFsKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gIH07XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLnN0YWxlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaXRlbSwgbmFtZTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YWxlO1xuICAgIH1cbiAgICB0aGlzLl9zdGFsZSA9IHZhbHVlO1xuICAgIGZvciAobmFtZSBpbiB0aGlzKSB7XG4gICAgICBpdGVtID0gdGhpc1tuYW1lXTtcbiAgICAgIGlmIChpdGVtICYmIGl0ZW0gIT09IHRoaXMgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGhhcy5jYWxsKGl0ZW0sICdzdGFsZScpKSB7XG4gICAgICAgIGl0ZW0uc3RhbGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2JqLCBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbCh0aGlzLCBwcm9wKSkgY29udGludWU7XG4gICAgICBvYmogPSB0aGlzW3Byb3BdO1xuICAgICAgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKG9iaiAhPT0gdGhpcykge1xuICAgICAgICAgIG9iai5kaXNwb3NlKCk7XG4gICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgIHByb3BlcnRpZXMgPSBbJ3JlZGlyZWN0ZWQnXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0aW9uO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9zeW5jX21hY2hpbmUnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFNUQVRFX0NIQU5HRSwgU1lOQ0VELCBTWU5DSU5HLCBTeW5jTWFjaGluZSwgVU5TWU5DRUQsIGV2ZW50LCBfZm4sIF9pLCBfbGVuLCBfcmVmO1xuXG5VTlNZTkNFRCA9ICd1bnN5bmNlZCc7XG5cblNZTkNJTkcgPSAnc3luY2luZyc7XG5cblNZTkNFRCA9ICdzeW5jZWQnO1xuXG5TVEFURV9DSEFOR0UgPSAnc3luY1N0YXRlQ2hhbmdlJztcblxuU3luY01hY2hpbmUgPSB7XG4gIF9zeW5jU3RhdGU6IFVOU1lOQ0VELFxuICBfcHJldmlvdXNTeW5jU3RhdGU6IG51bGwsXG4gIHN5bmNTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bmNTdGF0ZTtcbiAgfSxcbiAgaXNVbnN5bmNlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bmNTdGF0ZSA9PT0gVU5TWU5DRUQ7XG4gIH0sXG4gIGlzU3luY2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY1N0YXRlID09PSBTWU5DRUQ7XG4gIH0sXG4gIGlzU3luY2luZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bmNTdGF0ZSA9PT0gU1lOQ0lORztcbiAgfSxcbiAgdW5zeW5jOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcbiAgICBpZiAoKF9yZWYgPSB0aGlzLl9zeW5jU3RhdGUpID09PSBTWU5DSU5HIHx8IF9yZWYgPT09IFNZTkNFRCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNTeW5jID0gdGhpcy5fc3luY1N0YXRlO1xuICAgICAgdGhpcy5fc3luY1N0YXRlID0gVU5TWU5DRUQ7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5fc3luY1N0YXRlLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgICAgdGhpcy50cmlnZ2VyKFNUQVRFX0NIQU5HRSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICB9XG4gIH0sXG4gIGJlZ2luU3luYzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKChfcmVmID0gdGhpcy5fc3luY1N0YXRlKSA9PT0gVU5TWU5DRUQgfHwgX3JlZiA9PT0gU1lOQ0VEKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c1N5bmMgPSB0aGlzLl9zeW5jU3RhdGU7XG4gICAgICB0aGlzLl9zeW5jU3RhdGUgPSBTWU5DSU5HO1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuX3N5bmNTdGF0ZSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICAgIHRoaXMudHJpZ2dlcihTVEFURV9DSEFOR0UsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgfVxuICB9LFxuICBmaW5pc2hTeW5jOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc3luY1N0YXRlID09PSBTWU5DSU5HKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c1N5bmMgPSB0aGlzLl9zeW5jU3RhdGU7XG4gICAgICB0aGlzLl9zeW5jU3RhdGUgPSBTWU5DRUQ7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5fc3luY1N0YXRlLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgICAgdGhpcy50cmlnZ2VyKFNUQVRFX0NIQU5HRSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICB9XG4gIH0sXG4gIGFib3J0U3luYzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N5bmNTdGF0ZSA9PT0gU1lOQ0lORykge1xuICAgICAgdGhpcy5fc3luY1N0YXRlID0gdGhpcy5fcHJldmlvdXNTeW5jO1xuICAgICAgdGhpcy5fcHJldmlvdXNTeW5jID0gdGhpcy5fc3luY1N0YXRlO1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuX3N5bmNTdGF0ZSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICAgIHRoaXMudHJpZ2dlcihTVEFURV9DSEFOR0UsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgfVxuICB9XG59O1xuXG5fcmVmID0gW1VOU1lOQ0VELCBTWU5DSU5HLCBTWU5DRUQsIFNUQVRFX0NIQU5HRV07XG5fZm4gPSBmdW5jdGlvbihldmVudCkge1xuICByZXR1cm4gU3luY01hY2hpbmVbZXZlbnRdID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5vbihldmVudCwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIGlmICh0aGlzLl9zeW5jU3RhdGUgPT09IGV2ZW50KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChjb250ZXh0KTtcbiAgICB9XG4gIH07XG59O1xuZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gIGV2ZW50ID0gX3JlZltfaV07XG4gIF9mbihldmVudCk7XG59XG5cbmlmICh0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIE9iamVjdC5mcmVlemUoU3luY01hY2hpbmUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bmNNYWNoaW5lO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi91dGlscycsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydCwgdXRpbHMsIF8sXG4gIF9fc2xpY2UgPSBbXS5zbGljZSxcbiAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbnN1cHBvcnQgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3N1cHBvcnQnKTtcblxudXRpbHMgPSB7XG4gIGJlZ2V0OiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN0b3I7XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3RvciA9IGZ1bmN0aW9uKCkge307XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGN0b3IucHJvdG90eXBlID0gb2JqO1xuICAgICAgICByZXR1cm4gbmV3IGN0b3I7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKSxcbiAgaW5kZXhPZjogKGZ1bmN0aW9uKCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGxpc3QsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoaW5kZXgpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKF8uaW5kZXhPZikge1xuICAgICAgcmV0dXJuIF8uaW5kZXhPZjtcbiAgICB9XG4gIH0pKCksXG4gIGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgXy5pc0FycmF5LFxuICBzZXJpYWxpemU6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEuc2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZGF0YS5zZXJpYWxpemUoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGRhdGEudG9KU09OKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3V0aWxzLnNlcmlhbGl6ZTogVW5rbm93biBkYXRhIHdhcyBwYXNzZWQnKTtcbiAgICB9XG4gIH0sXG4gIHJlYWRvbmx5OiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlYWRvbmx5RGVzY3JpcHRvcjtcbiAgICBpZiAoc3VwcG9ydC5wcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICByZWFkb25seURlc2NyaXB0b3IgPSB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9iaiwgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1swXSwgcHJvcGVydGllcyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgICAgICByZWFkb25seURlc2NyaXB0b3IudmFsdWUgPSBvYmpbcHJvcF07XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcmVhZG9ubHlEZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCksXG4gIGdldFByb3RvdHlwZUNoYWluOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgY2hhaW4sIF9yZWYsIF9yZWYxLCBfcmVmMjtcbiAgICBjaGFpbiA9IFtvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlXTtcbiAgICB3aGlsZSAob2JqZWN0ID0gKF9yZWYgPSAoX3JlZjEgPSBvYmplY3QuY29uc3RydWN0b3IpICE9IG51bGwgPyBfcmVmMS5fX3N1cGVyX18gOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKF9yZWYyID0gb2JqZWN0LmNvbnN0cnVjdG9yKSAhPSBudWxsID8gX3JlZjIuc3VwZXJjbGFzcyA6IHZvaWQgMCkge1xuICAgICAgY2hhaW4ucHVzaChvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhaW4ucmV2ZXJzZSgpO1xuICB9LFxuICBnZXRBbGxQcm9wZXJ0eVZlcnNpb25zOiBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdmFyIHByb3RvLCByZXN1bHQsIHZhbHVlLCBfaSwgX2xlbiwgX3JlZjtcbiAgICByZXN1bHQgPSBbXTtcbiAgICBfcmVmID0gdXRpbHMuZ2V0UHJvdG90eXBlQ2hhaW4ob2JqZWN0KTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3RvID0gX3JlZltfaV07XG4gICAgICB2YWx1ZSA9IHByb3RvW3Byb3BlcnR5XTtcbiAgICAgIGlmICh2YWx1ZSAmJiBfX2luZGV4T2YuY2FsbChyZXN1bHQsIHZhbHVlKSA8IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICB1cGNhc2U6IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xuICB9LFxuICBlc2NhcGVSZWdFeHA6IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBTdHJpbmcoc3RyIHx8ICcnKS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gIH0sXG4gIG1vZGlmaWVyS2V5UHJlc3NlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgfSxcbiAgcmV2ZXJzZTogZnVuY3Rpb24oY3JpdGVyaWEsIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJykuZXhlY3V0ZSgncm91dGVyOnJldmVyc2UnLCBjcml0ZXJpYSwgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG4gIHJlZGlyZWN0VG86IGZ1bmN0aW9uKHBhdGhEZXNjLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJykuZXhlY3V0ZSgncm91dGVyOnJvdXRlJywgcGF0aERlc2MsIHBhcmFtcywgb3B0aW9ucyk7XG4gIH0sXG4gIHF1ZXJ5UGFyYW1zOiB7XG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgICAgdmFyIGFyclBhcmFtLCBlbmNvZGVkS2V5LCBrZXksIHF1ZXJ5LCBzdHJpbmdpZnlLZXlWYWx1ZVBhaXIsIHZhbHVlLCBfaSwgX2xlbjtcbiAgICAgIHF1ZXJ5ID0gJyc7XG4gICAgICBzdHJpbmdpZnlLZXlWYWx1ZVBhaXIgPSBmdW5jdGlvbihlbmNvZGVkS2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAnJicgKyBlbmNvZGVkS2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmb3IgKGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHF1ZXJ5UGFyYW1zLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gdmFsdWUubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgIGFyclBhcmFtID0gdmFsdWVbX2ldO1xuICAgICAgICAgICAgcXVlcnkgKz0gc3RyaW5naWZ5S2V5VmFsdWVQYWlyKGVuY29kZWRLZXksIGFyclBhcmFtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkgKz0gc3RyaW5naWZ5S2V5VmFsdWVQYWlyKGVuY29kZWRLZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5ICYmIHF1ZXJ5LnN1YnN0cmluZygxKTtcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbihxdWVyeVN0cmluZykge1xuICAgICAgdmFyIGN1cnJlbnQsIGZpZWxkLCBwYWlyLCBwYWlycywgcGFyYW1zLCB2YWx1ZSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgICBwYXJhbXMgPSB7fTtcbiAgICAgIGlmICghcXVlcnlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH1cbiAgICAgIHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcGFpcnMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgcGFpciA9IHBhaXJzW19pXTtcbiAgICAgICAgaWYgKCFwYWlyLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIF9yZWYgPSBwYWlyLnNwbGl0KCc9JyksIGZpZWxkID0gX3JlZlswXSwgdmFsdWUgPSBfcmVmWzFdO1xuICAgICAgICBpZiAoIWZpZWxkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpZWxkKTtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjdXJyZW50ID0gcGFyYW1zW2ZpZWxkXTtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5wdXNoKSB7XG4gICAgICAgICAgICBjdXJyZW50LnB1c2godmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZmllbGRdID0gW2N1cnJlbnQsIHZhbHVlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zW2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgfVxufTtcblxuaWYgKHR5cGVvZiBPYmplY3Quc2VhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIE9iamVjdC5zZWFsKHV0aWxzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscztcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQXBwbGljYXRpb246IGxvYWRlcignY2hhcGxpbi9hcHBsaWNhdGlvbicpLFxuICBtZWRpYXRvcjogbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyksXG4gIERpc3BhdGNoZXI6IGxvYWRlcignY2hhcGxpbi9kaXNwYXRjaGVyJyksXG4gIENvbnRyb2xsZXI6IGxvYWRlcignY2hhcGxpbi9jb250cm9sbGVycy9jb250cm9sbGVyJyksXG4gIENvbXBvc2VyOiBsb2FkZXIoJ2NoYXBsaW4vY29tcG9zZXInKSxcbiAgQ29tcG9zaXRpb246IGxvYWRlcignY2hhcGxpbi9saWIvY29tcG9zaXRpb24nKSxcbiAgQ29sbGVjdGlvbjogbG9hZGVyKCdjaGFwbGluL21vZGVscy9jb2xsZWN0aW9uJyksXG4gIE1vZGVsOiBsb2FkZXIoJ2NoYXBsaW4vbW9kZWxzL21vZGVsJyksXG4gIExheW91dDogbG9hZGVyKCdjaGFwbGluL3ZpZXdzL2xheW91dCcpLFxuICBWaWV3OiBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvdmlldycpLFxuICBDb2xsZWN0aW9uVmlldzogbG9hZGVyKCdjaGFwbGluL3ZpZXdzL2NvbGxlY3Rpb25fdmlldycpLFxuICBSb3V0ZTogbG9hZGVyKCdjaGFwbGluL2xpYi9yb3V0ZScpLFxuICBSb3V0ZXI6IGxvYWRlcignY2hhcGxpbi9saWIvcm91dGVyJyksXG4gIEV2ZW50QnJva2VyOiBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpLFxuICBzdXBwb3J0OiBsb2FkZXIoJ2NoYXBsaW4vbGliL3N1cHBvcnQnKSxcbiAgU3luY01hY2hpbmU6IGxvYWRlcignY2hhcGxpbi9saWIvc3luY19tYWNoaW5lJyksXG4gIHV0aWxzOiBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJylcbn07XG5cbn0pO1xudmFyIHJlZ0RlcHMgPSBmdW5jdGlvbihCYWNrYm9uZSwgXykge1xuICBsb2FkZXIucmVnaXN0ZXIoJ2JhY2tib25lJywgZnVuY3Rpb24oZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZTtcbiAgfSk7XG4gIGxvYWRlci5yZWdpc3RlcigndW5kZXJzY29yZScsIGZ1bmN0aW9uKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gXztcbiAgfSk7XG59O1xuXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShbJ2JhY2tib25lJywgJ3VuZGVyc2NvcmUnXSwgZnVuY3Rpb24oQmFja2JvbmUsIF8pIHtcbiAgICByZWdEZXBzKEJhY2tib25lLCBfKTtcbiAgICByZXR1cm4gbG9hZGVyKCdjaGFwbGluJyk7XG4gIH0pO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgcmVnRGVwcyhyZXF1aXJlKCdiYWNrYm9uZScpLCByZXF1aXJlKCd1bmRlcnNjb3JlJykpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGxvYWRlcignY2hhcGxpbicpO1xufSBlbHNlIGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICByZWdEZXBzKHdpbmRvdy5CYWNrYm9uZSwgd2luZG93Ll8gfHwgd2luZG93LkJhY2tib25lLnV0aWxzKTtcbiAgd2luZG93LkNoYXBsaW4gPSBsb2FkZXIoJ2NoYXBsaW4nKTtcbn0gZWxzZSB7XG4gIHRocm93IG5ldyBFcnJvcignQ2hhcGxpbiByZXF1aXJlcyBDb21tb24uanMgb3IgQU1EIG1vZHVsZXMnKTtcbn1cblxufSkoKTsiLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjUuMlxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZXhwb3J0c2Agb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gRXN0YWJsaXNoIHRoZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIHRvIGJyZWFrIG91dCBvZiBhIGxvb3AgaXRlcmF0aW9uLlxuICB2YXIgYnJlYWtlciA9IHt9O1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsIEZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyXG4gICAgcHVzaCAgICAgICAgICAgICA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSAgICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZSxcbiAgICBjb25jYXQgICAgICAgICAgID0gQXJyYXlQcm90by5jb25jYXQsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUZvckVhY2ggICAgICA9IEFycmF5UHJvdG8uZm9yRWFjaCxcbiAgICBuYXRpdmVNYXAgICAgICAgICAgPSBBcnJheVByb3RvLm1hcCxcbiAgICBuYXRpdmVSZWR1Y2UgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZSxcbiAgICBuYXRpdmVSZWR1Y2VSaWdodCAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciAgICAgICA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ICAgICAgICA9IEFycmF5UHJvdG8uZXZlcnksXG4gICAgbmF0aXZlU29tZSAgICAgICAgID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgICAgICA9IEFycmF5UHJvdG8uaW5kZXhPZixcbiAgICBuYXRpdmVMYXN0SW5kZXhPZiAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQ7XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkIGByZXF1aXJlKClgIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0IHZpYSBhIHN0cmluZyBpZGVudGlmaWVyLFxuICAvLyBmb3IgQ2xvc3VyZSBDb21waWxlciBcImFkdmFuY2VkXCIgbW9kZS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS41LjInO1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgb2JqZWN0cyB3aXRoIHRoZSBidWlsdC1pbiBgZm9yRWFjaGAsIGFycmF5cywgYW5kIHJhdyBvYmplY3RzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZm9yRWFjaGAgaWYgYXZhaWxhYmxlLlxuICB2YXIgZWFjaCA9IF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRvciB0byBlYWNoIGVsZW1lbnQuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBtYXBgIGlmIGF2YWlsYWJsZS5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgdmFyIHJlZHVjZUVycm9yID0gJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnO1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZWAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZSAmJiBvYmoucmVkdWNlID09PSBuYXRpdmVSZWR1Y2UpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2UoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZShpdGVyYXRvcik7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gdmFsdWU7XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlUmlnaHRgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2VSaWdodCAmJiBvYmoucmVkdWNlUmlnaHQgPT09IG5hdGl2ZVJlZHVjZVJpZ2h0KSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gK2xlbmd0aCkge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpbmRleCA9IGtleXMgPyBrZXlzWy0tbGVuZ3RoXSA6IC0tbGVuZ3RoO1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSBvYmpbaW5kZXhdO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIG9ialtpbmRleF0sIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlRmlsdGVyICYmIG9iai5maWx0ZXIgPT09IG5hdGl2ZUZpbHRlcikgcmV0dXJuIG9iai5maWx0ZXIoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4gIWl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGV2ZXJ5YCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZUV2ZXJ5ICYmIG9iai5ldmVyeSA9PT0gbmF0aXZlRXZlcnkpIHJldHVybiBvYmouZXZlcnkoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghKHJlc3VsdCA9IHJlc3VsdCAmJiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBzb21lYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIHZhciBhbnkgPSBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVTb21lICYmIG9iai5zb21lID09PSBuYXRpdmVTb21lKSByZXR1cm4gb2JqLnNvbWUoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIHZhbHVlICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRhcmdldDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIChpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdKS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gdmFsdWVba2V5XTsgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycywgZmlyc3QpIHtcbiAgICBpZiAoXy5pc0VtcHR5KGF0dHJzKSkgcmV0dXJuIGZpcnN0ID8gdm9pZCAwIDogW107XG4gICAgcmV0dXJuIF9bZmlyc3QgPyAnZmluZCcgOiAnZmlsdGVyJ10ob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyc1trZXldICE9PSB2YWx1ZVtrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLndoZXJlKG9iaiwgYXR0cnMsIHRydWUpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IG9yIChlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgLy8gQ2FuJ3Qgb3B0aW1pemUgYXJyYXlzIG9mIGludGVnZXJzIGxvbmdlciB0aGFuIDY1LDUzNSBlbGVtZW50cy5cbiAgLy8gU2VlIFtXZWJLaXQgQnVnIDgwNzk3XShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODA3OTcpXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiAtSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IC1JbmZpbml0eSwgdmFsdWU6IC1JbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkID4gcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IEluZmluaXR5LCB2YWx1ZTogSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA8IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYW4gYXJyYXksIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGUgXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJhbmQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc2h1ZmZsZWQgPSBbXTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJhbmQgPSBfLnJhbmRvbShpbmRleCsrKTtcbiAgICAgIHNodWZmbGVkW2luZGV4IC0gMV0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCBndWFyZCkge1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZSA6IGZ1bmN0aW9uKG9iail7IHJldHVybiBvYmpbdmFsdWVdOyB9O1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsdWUgPT0gbnVsbCA/IF8uaWRlbnRpdHkgOiBsb29rdXBJdGVyYXRvcih2YWx1ZSk7XG4gICAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIChfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSA6IChyZXN1bHRba2V5XSA9IFtdKSkucHVzaCh2YWx1ZSk7XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSsrIDogcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvciA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSAobG93ICsgaGlnaCkgPj4+IDE7XG4gICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W21pZF0pIDwgdmFsdWUgPyBsb3cgPSBtaWQgKyAxIDogaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIHJldHVybiAobiA9PSBudWxsKSB8fCBndWFyZCA/IGFycmF5WzBdIDogc2xpY2UuY2FsbChhcnJheSwgMCwgbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aFxuICAvLyBgXy5tYXBgLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gKChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHtcbiAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIE1hdGgubWF4KGFycmF5Lmxlbmd0aCAtIG4sIDApKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKipcbiAgLy8gY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBvdXRwdXQpIHtcbiAgICBpZiAoc2hhbGxvdyAmJiBfLmV2ZXJ5KGlucHV0LCBfLmlzQXJyYXkpKSB7XG4gICAgICByZXR1cm4gY29uY2F0LmFwcGx5KG91dHB1dCwgaW5wdXQpO1xuICAgIH1cbiAgICBlYWNoKGlucHV0LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpIHtcbiAgICAgICAgc2hhbGxvdyA/IHB1c2guYXBwbHkob3V0cHV0LCB2YWx1ZSkgOiBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBvdXRwdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBbXSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0b3I7XG4gICAgICBpdGVyYXRvciA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWwgPSBpdGVyYXRvciA/IF8ubWFwKGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkgOiBhcnJheTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZWFjaChpbml0aWFsLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGlmIChpc1NvcnRlZCA/ICghaW5kZXggfHwgc2VlbltzZWVuLmxlbmd0aCAtIDFdICE9PSB2YWx1ZSkgOiAhXy5jb250YWlucyhzZWVuLCB2YWx1ZSkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW5pcShfLmZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKF8udW5pcShhcnJheSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KHJlc3QsIGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBfLmluZGV4T2Yob3RoZXIsIGl0ZW0pID49IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTsgfSk7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gXy5tYXgoXy5wbHVjayhhcmd1bWVudHMsIFwibGVuZ3RoXCIpLmNvbmNhdCgwKSk7XG4gICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRzW2ldID0gXy5wbHVjayhhcmd1bWVudHMsICcnICsgaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICBpZiAobGlzdCA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwbHkgdXMgd2l0aCBpbmRleE9mIChJJ20gbG9va2luZyBhdCB5b3UsICoqTVNJRSoqKSxcbiAgLy8gd2UgbmVlZCB0aGlzIGZ1bmN0aW9uLiBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuXG4gIC8vIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBpbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgaXNTb3J0ZWQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgaWYgKHR5cGVvZiBpc1NvcnRlZCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpID0gKGlzU29ydGVkIDwgMCA/IE1hdGgubWF4KDAsIGxlbmd0aCArIGlzU29ydGVkKSA6IGlzU29ydGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSBfLnNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2ldID09PSBpdGVtID8gaSA6IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtLCBpc1NvcnRlZCk7XG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGxhc3RJbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIF8ubGFzdEluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgZnJvbSkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGhhc0luZGV4ID0gZnJvbSAhPSBudWxsO1xuICAgIGlmIChuYXRpdmVMYXN0SW5kZXhPZiAmJiBhcnJheS5sYXN0SW5kZXhPZiA9PT0gbmF0aXZlTGFzdEluZGV4T2YpIHtcbiAgICAgIHJldHVybiBoYXNJbmRleCA/IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0sIGZyb20pIDogYXJyYXkubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIHZhciBpID0gKGhhc0luZGV4ID8gZnJvbSA6IGFycmF5Lmxlbmd0aCk7XG4gICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgc3RlcCA9IGFyZ3VtZW50c1syXSB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgcmFuZ2UgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlKGlkeCA8IGxlbmd0aCkge1xuICAgICAgcmFuZ2VbaWR4KytdID0gc3RhcnQ7XG4gICAgICBzdGFydCArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldXNhYmxlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciBwcm90b3R5cGUgc2V0dGluZy5cbiAgdmFyIGN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MsIGJvdW5kO1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSkgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IGZ1bmMucHJvdG90eXBlO1xuICAgICAgdmFyIHNlbGYgPSBuZXcgY3RvcjtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuXG4gIF8ucGFydGlhbCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEJpbmQgYWxsIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdFxuICAvLyBhbGwgY2FsbGJhY2tzIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGZ1bmNzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcImJpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXNcIik7XG4gICAgZWFjaChmdW5jcywgZnVuY3Rpb24oZikgeyBvYmpbZl0gPSBfLmJpbmQob2JqW2ZdLCBvYmopOyB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vID0ge307XG4gICAgaGFzaGVyIHx8IChoYXNoZXIgPSBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gXy5oYXMobWVtbywga2V5KSA/IG1lbW9ba2V5XSA6IChtZW1vW2tleV0gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7IH0sIHdhaXQpO1xuICB9O1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBuZXcgRGF0ZTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsYXN0ID0gKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wO1xuICAgICAgICBpZiAobGFzdCA8IHdhaXQpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIGlmICghaW1tZWRpYXRlKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgfVxuICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgcmFuID0gZmFsc2UsIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJhbikgcmV0dXJuIG1lbW87XG4gICAgICByYW4gPSB0cnVlO1xuICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbZnVuY107XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gd3JhcHBlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmdW5jcyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZvciAodmFyIGkgPSBmdW5jcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW2Z1bmNzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGFmdGVyIGJlaW5nIGNhbGxlZCBOIHRpbWVzLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IG5hdGl2ZUtleXMgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiAhPT0gT2JqZWN0KG9iaikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb2JqZWN0Jyk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gb2JqKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIV8uY29udGFpbnMoa2V5cywga2V5KSkgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdm9pZCAwKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3JcbiAgICAgICAgLy8gb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiBhICE9ICthID8gYiAhPSArYiA6IChhID09IDAgPyAxIC8gYSA9PSAxIC8gYiA6IGEgPT0gK2IpO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09ICtiO1xuICAgICAgLy8gUmVnRXhwcyBhcmUgY29tcGFyZWQgYnkgdGhlaXIgc291cmNlIHBhdHRlcm5zIGFuZCBmbGFncy5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAgIHJldHVybiBhLnNvdXJjZSA9PSBiLnNvdXJjZSAmJlxuICAgICAgICAgICAgICAgYS5nbG9iYWwgPT0gYi5nbG9iYWwgJiZcbiAgICAgICAgICAgICAgIGEubXVsdGlsaW5lID09IGIubXVsdGlsaW5lICYmXG4gICAgICAgICAgICAgICBhLmlnbm9yZUNhc2UgPT0gYi5pZ25vcmVDYXNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT0gYjtcbiAgICB9XG4gICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzXG4gICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgKGFDdG9yIGluc3RhbmNlb2YgYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgKGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgdmFyIHNpemUgPSAwLCByZXN1bHQgPSB0cnVlO1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChjbGFzc05hbWUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBzaXplID0gYS5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaXplID09IGIubGVuZ3RoO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gZXEoYVtzaXplXSwgYltzaXplXSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoXy5oYXMoYSwga2V5KSkge1xuICAgICAgICAgIC8vIENvdW50IHRoZSBleHBlY3RlZCBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgICBzaXplKys7XG4gICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyLlxuICAgICAgICAgIGlmICghKHJlc3VsdCA9IF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgIGlmIChfLmhhcyhiLCBrZXkpICYmICEoc2l6ZS0tKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gIXNpemU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiLCBbXSwgW10pO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuICBfLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAuXG4gIGVhY2goWydBcmd1bWVudHMnLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuICEhKG9iaiAmJiBfLmhhcyhvYmosICdjYWxsZWUnKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS5cbiAgaWYgKHR5cGVvZiAoLy4vKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBpc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xuICB9O1xuXG4gIC8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD8gKE5hTiBpcyB0aGUgb25seSBudW1iZXIgd2hpY2ggZG9lcyBub3QgZXF1YWwgaXRzZWxmKS5cbiAgXy5pc05hTiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLmlzTnVtYmVyKG9iaikgJiYgb2JqICE9ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0b3JzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZW50aXR5TWFwID0ge1xuICAgIGVzY2FwZToge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgXCInXCI6ICcmI3gyNzsnXG4gICAgfVxuICB9O1xuICBlbnRpdHlNYXAudW5lc2NhcGUgPSBfLmludmVydChlbnRpdHlNYXAuZXNjYXBlKTtcblxuICAvLyBSZWdleGVzIGNvbnRhaW5pbmcgdGhlIGtleXMgYW5kIHZhbHVlcyBsaXN0ZWQgaW1tZWRpYXRlbHkgYWJvdmUuXG4gIHZhciBlbnRpdHlSZWdleGVzID0ge1xuICAgIGVzY2FwZTogICBuZXcgUmVnRXhwKCdbJyArIF8ua2V5cyhlbnRpdHlNYXAuZXNjYXBlKS5qb2luKCcnKSArICddJywgJ2cnKSxcbiAgICB1bmVzY2FwZTogbmV3IFJlZ0V4cCgnKCcgKyBfLmtleXMoZW50aXR5TWFwLnVuZXNjYXBlKS5qb2luKCd8JykgKyAnKScsICdnJylcbiAgfTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIF8uZWFjaChbJ2VzY2FwZScsICd1bmVzY2FwZSddLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBfW21ldGhvZF0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgcmV0dXJuICgnJyArIHN0cmluZykucmVwbGFjZShlbnRpdHlSZWdleGVzW21ldGhvZF0sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlNYXBbbWV0aG9kXVttYXRjaF07XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIG5hbWVkIGBwcm9wZXJ0eWAgaXMgYSBmdW5jdGlvbiB0aGVuIGludm9rZSBpdCB3aXRoIHRoZVxuICAvLyBgb2JqZWN0YCBhcyBjb250ZXh0OyBvdGhlcndpc2UsIHJldHVybiBpdC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKG9iamVjdCkgOiB2YWx1ZTtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHQnOiAgICAgJ3QnLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHR8XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIGRhdGEsIHNldHRpbmdzKSB7XG4gICAgdmFyIHJlbmRlcjtcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgICAgICAucmVwbGFjZShlc2NhcGVyLCBmdW5jdGlvbihtYXRjaCkgeyByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07IH0pO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgXCJyZXR1cm4gX19wO1xcblwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkgcmV0dXJuIHJlbmRlcihkYXRhLCBfKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIChzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJykgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbiwgd2hpY2ggd2lsbCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlci5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfKG9iaikuY2hhaW4oKTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT0gJ3NoaWZ0JyB8fCBuYW1lID09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgXy5leHRlbmQoXy5wcm90b3R5cGUsIHtcblxuICAgIC8vIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgICBjaGFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9jaGFpbiA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gICAgfVxuXG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIl19
