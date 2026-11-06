// src/main/javascript/live/grounduri.js
import { FLURI } from "/js/flasjs.js";
var groundUri = function(_cxt, uri) {
  try {
    if (uri instanceof FLURI) {
      uri = uri.resolve(window.location);
    } else if (typeof uri === "string") {
      uri = new URL(uri, window.location);
    } else if (!(uri instanceof URL)) {
      _cxt.log("not a valid uri", uri);
      return;
    }
  } catch (e) {
    _cxt.log("error in resolving uri from", uri, "inside", window.location);
    return;
  }
  return uri;
};

// src/main/javascript/live/ajax.js
import { AjaxMessage } from "/js/root.package.js";
import { Send } from "/js/flasjs.js";
var LiveAjaxService = function() {
};
LiveAjaxService.prototype.subscribe = function(_cxt, uri, options, handler) {
  uri = groundUri(_cxt, uri);
  if (uri) {
    console.log("want to subscribe to: " + uri);
    this.ajax(_cxt, uri, this.feedback(_cxt, uri, options, handler));
  }
};
LiveAjaxService.prototype.ajax = function(_cxt, uri, handler) {
  var verb = "GET";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handler;
  xhr.open(verb, uri, true);
  xhr.send();
};
var AjaxSubscription = function() {
  this.isActive = true;
};
AjaxSubscription.prototype.cancel = function(cx) {
  this.isActive = false;
};
LiveAjaxService.prototype.feedback = function(_cxt, uri, options, handler) {
  var env = _cxt.env;
  var self = this;
  var cancelMe = new AjaxSubscription();
  var fb = function() {
    if (!cancelMe.isActive) {
      return;
    }
    if (this.readyState == 4) {
      var _cxt2 = env.newContext();
      if (Math.floor(this.status / 100) != 2) {
        console.log("error from ajax:", this.status);
      } else {
        var msg = new AjaxMessage(_cxt2);
        msg.state.set("headers", []);
        msg.state.set("body", this.responseText);
        env.queueMessages(_cxt2, Send.eval(_cxt2, handler, "message", [msg], null));
        env.dispatchMessages(_cxt2);
      }
      var ms = options.state.get("subscribeRepeat").asJs();
      setTimeout(() => {
        self.ajax(_cxt2, uri, fb);
      }, ms);
    }
  };
  _cxt.broker.serviceFor(handler, cancelMe);
  return fb;
};

// src/main/javascript/live/nav.js
var LiveNavigationService = function() {
};
LiveNavigationService.prototype.redirect = function(_cxt, uri) {
  uri = groundUri(_cxt, uri);
  if (uri) {
    _cxt.log("redirecting to", uri);
    if (uri.toString().startsWith(_cxt.env.appl.baseUri())) {
      window.history.pushState({}, "", uri);
      _cxt.env.appl.gotoRoute(_cxt, uri);
    } else {
      window.location = uri;
    }
  }
};

// src/main/javascript/live/services.js
var mod_services = function() {
};
mod_services._init = function(cx) {
  var env = cx.env;
  env.broker.register("Ajax", new LiveAjaxService());
  env.broker.register("Navigation", new LiveNavigationService());
  window.addEventListener("popstate", function(ev) {
    console.log("location: " + document.location + ", state: " + JSON.stringify(ev.state));
    ev.preventDefault();
    env.appl.gotoRoute(env.newContext(), document.location);
  });
};
export {
  LiveAjaxService,
  LiveNavigationService,
  mod_services
};
LiveAjaxService.prototype.ajax = function(_cxt, uri, handler) {
	console.log("need to override uri request for ", uri.pathname, uri.search);
	switch (uri.pathname) {
		case "/ajax/articles.php": {
			var cat = uri.search.replace("?cat=", "");
			console.log("want articles cat", cat);
			uri = "ajax/articles/" + cat;
			break;
		}
		case "/ajax/article.php": {
			var aid = uri.search.replace("?aid=", "");
			console.log("want articles cat", aid);
			uri = "../articles/" + aid;
			break;
		}
		default: {
			uri = "ajax/articles/now";
			break;
		}
	}
  var verb = "GET";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handler;
  xhr.open(verb, uri, true);
  xhr.send();
};