// src/main/javascript/core/ajaxmod.js
import { root__package, AjaxMessage } from "./root.package.js";
AjaxMessage.prototype._convertToHTML = function() {
  return this.state.get("body");
};
var module_init = function(_env) {
};
export {
  module_init
};
