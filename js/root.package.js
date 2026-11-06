var root__package = {};

import { IdempotentHandler } from "./ziwsh.js";
import { Application, Assign, AssignCons, AssignItem, Debug, ResponseWithMessages, Send, UpdateDisplay, ClickEvent, ScrollTo, ContractStore, Entity, Image, Link, FLBuiltin, False, True, MakeHash, HashPair, Tuple, TypeOf, FLCard, FLObject, FLError, Nil, Cons, Crobag, CroEntry, SlideWindow, CrobagWindow, CrobagChangeEvent, CrobagWindowEvent, Random, Interval, Instant, Calendar } from "./flasjs.js";

var Ajax = function(_cxt) {
  return ;
}
Ajax._nf_subscribe = 2;

Ajax.prototype.name = function() {
  return 'Ajax';
}

Ajax.prototype.name.nfargs = function() { return -1; }

Ajax.prototype._methods = function() {
  const _v1 = ['subscribe'];
  return _v1;
}

Ajax.prototype._methods.nfargs = function() { return -1; }

Ajax.prototype.subscribe = function(_cxt, _0, _1, _ih) {
  return null;
}

Ajax.prototype.subscribe.nfargs = function() { return 2; }

var AjaxHandler = function(_cxt) {
  IdempotentHandler.call(this);
  return ;
}
AjaxHandler.prototype = new IdempotentHandler();
AjaxHandler.prototype.constructor = AjaxHandler;
AjaxHandler._nf_success = 0;
AjaxHandler._nf_failure = 1;
AjaxHandler._nf_message = 1;

AjaxHandler.prototype.name = function() {
  return 'AjaxHandler';
}

AjaxHandler.prototype.name.nfargs = function() { return -1; }

AjaxHandler.prototype._methods = function() {
  const _v1 = ['success','failure','message'];
  return _v1;
}

AjaxHandler.prototype._methods.nfargs = function() { return -1; }

AjaxHandler.prototype.success = function(_cxt, _ih) {
  return null;
}

AjaxHandler.prototype.success.nfargs = function() { return 0; }

AjaxHandler.prototype.failure = function(_cxt, _0, _ih) {
  return null;
}

AjaxHandler.prototype.failure.nfargs = function() { return 1; }

AjaxHandler.prototype.message = function(_cxt, _0, _ih) {
  return null;
}

AjaxHandler.prototype.message.nfargs = function() { return 1; }

var CallMe = function(_cxt) {
  IdempotentHandler.call(this);
  return ;
}
CallMe.prototype = new IdempotentHandler();
CallMe.prototype.constructor = CallMe;
CallMe._nf_success = 0;
CallMe._nf_failure = 1;
CallMe._nf_call = 0;

CallMe.prototype.name = function() {
  return 'CallMe';
}

CallMe.prototype.name.nfargs = function() { return -1; }

CallMe.prototype._methods = function() {
  const _v1 = ['success','failure','call'];
  return _v1;
}

CallMe.prototype._methods.nfargs = function() { return -1; }

CallMe.prototype.success = function(_cxt, _ih) {
  return null;
}

CallMe.prototype.success.nfargs = function() { return 0; }

CallMe.prototype.failure = function(_cxt, _0, _ih) {
  return null;
}

CallMe.prototype.failure.nfargs = function() { return 1; }

CallMe.prototype.call = function(_cxt, _ih) {
  return null;
}

CallMe.prototype.call.nfargs = function() { return 0; }

var ContentAccess = function(_cxt) {
  return ;
}
ContentAccess._nf_asset = 1;
ContentAccess._nf_uri = 1;

ContentAccess.prototype.name = function() {
  return 'ContentAccess';
}

ContentAccess.prototype.name.nfargs = function() { return -1; }

ContentAccess.prototype._methods = function() {
  const _v1 = ['asset','uri'];
  return _v1;
}

ContentAccess.prototype._methods.nfargs = function() { return -1; }

ContentAccess.prototype.asset = function(_cxt, _0, _ih) {
  return null;
}

ContentAccess.prototype.asset.nfargs = function() { return 1; }

ContentAccess.prototype.uri = function(_cxt, _0, _ih) {
  return null;
}

ContentAccess.prototype.uri.nfargs = function() { return 1; }

var ContentDelivery = function(_cxt) {
  IdempotentHandler.call(this);
  return ;
}
ContentDelivery.prototype = new IdempotentHandler();
ContentDelivery.prototype.constructor = ContentDelivery;
ContentDelivery._nf_success = 0;
ContentDelivery._nf_failure = 1;
ContentDelivery._nf_deliver = 1;

ContentDelivery.prototype.name = function() {
  return 'ContentDelivery';
}

ContentDelivery.prototype.name.nfargs = function() { return -1; }

ContentDelivery.prototype._methods = function() {
  const _v1 = ['success','failure','deliver'];
  return _v1;
}

ContentDelivery.prototype._methods.nfargs = function() { return -1; }

ContentDelivery.prototype.success = function(_cxt, _ih) {
  return null;
}

ContentDelivery.prototype.success.nfargs = function() { return 0; }

ContentDelivery.prototype.failure = function(_cxt, _0, _ih) {
  return null;
}

ContentDelivery.prototype.failure.nfargs = function() { return 1; }

ContentDelivery.prototype.deliver = function(_cxt, _0, _ih) {
  return null;
}

ContentDelivery.prototype.deliver.nfargs = function() { return 1; }

var Lifecycle = function(_cxt) {
  return ;
}
Lifecycle._nf_init = 0;
Lifecycle._nf_load = 1;
Lifecycle._nf_state = 1;
Lifecycle._nf_query = 2;
Lifecycle._nf_ready = 0;
Lifecycle._nf_nest = 1;
Lifecycle._nf_unnest = 1;
Lifecycle._nf_closing = 0;

Lifecycle.prototype.name = function() {
  return 'Lifecycle';
}

Lifecycle.prototype.name.nfargs = function() { return -1; }

Lifecycle.prototype._methods = function() {
  const _v1 = ['init','load','state','query','ready','nest','unnest','closing'];
  return _v1;
}

Lifecycle.prototype._methods.nfargs = function() { return -1; }

Lifecycle.prototype.init = function(_cxt, _ih) {
  return null;
}

Lifecycle.prototype.init.nfargs = function() { return 0; }

Lifecycle.prototype.load = function(_cxt, _0, _ih) {
  return null;
}

Lifecycle.prototype.load.nfargs = function() { return 1; }

Lifecycle.prototype.state = function(_cxt, _0, _ih) {
  return null;
}

Lifecycle.prototype.state.nfargs = function() { return 1; }

Lifecycle.prototype.query = function(_cxt, _0, _1, _ih) {
  return null;
}

Lifecycle.prototype.query.nfargs = function() { return 2; }

Lifecycle.prototype.ready = function(_cxt, _ih) {
  return null;
}

Lifecycle.prototype.ready.nfargs = function() { return 0; }

Lifecycle.prototype.nest = function(_cxt, _0, _ih) {
  return null;
}

Lifecycle.prototype.nest.nfargs = function() { return 1; }

Lifecycle.prototype.unnest = function(_cxt, _0, _ih) {
  return null;
}

Lifecycle.prototype.unnest.nfargs = function() { return 1; }

Lifecycle.prototype.closing = function(_cxt, _ih) {
  return null;
}

Lifecycle.prototype.closing.nfargs = function() { return 0; }

var Navigation = function(_cxt) {
  return ;
}
Navigation._nf_redirect = 1;

Navigation.prototype.name = function() {
  return 'Navigation';
}

Navigation.prototype.name.nfargs = function() { return -1; }

Navigation.prototype._methods = function() {
  const _v1 = ['redirect'];
  return _v1;
}

Navigation.prototype._methods.nfargs = function() { return -1; }

Navigation.prototype.redirect = function(_cxt, _0, _ih) {
  return null;
}

Navigation.prototype.redirect.nfargs = function() { return 1; }

var Repeater = function(_cxt) {
  return ;
}
Repeater._nf_callMe = 0;

Repeater.prototype.name = function() {
  return 'Repeater';
}

Repeater.prototype.name.nfargs = function() { return -1; }

Repeater.prototype._methods = function() {
  const _v1 = ['callMe'];
  return _v1;
}

Repeater.prototype._methods.nfargs = function() { return -1; }

Repeater.prototype.callMe = function(_cxt, _ih) {
  return null;
}

Repeater.prototype.callMe.nfargs = function() { return 0; }

var AjaxHeader = function(_cxt) {
  this.state = _cxt.fields();
  this.state.set('_type', 'AjaxHeader');
  return ;
}


AjaxHeader._typename = 'AjaxHeader'

AjaxHeader.prototype._areYouA = function(_cxt, ty) {
  if (_cxt.isTruthy(ty == 'AjaxHeader')) {
    return true;
  } else 
    return false;
}

AjaxHeader.prototype._areYouA.nfargs = function() { return 1; }

AjaxHeader.eval = function(_cxt, field, value, values) {
  const _v1 = new AjaxHeader(_cxt);
  _v1.state.set('field', field);
  _v1.state.set('value', value);
  _v1.state.set('values', values);
  return _v1;
}

AjaxHeader.eval.nfargs = function() { return 3; }

var AjaxMessage = function(_cxt) {
  this.state = _cxt.fields();
  this.state.set('_type', 'AjaxMessage');
  return ;
}


AjaxMessage._typename = 'AjaxMessage'

AjaxMessage.prototype._areYouA = function(_cxt, ty) {
  if (_cxt.isTruthy(ty == 'AjaxMessage')) {
    return true;
  } else 
    return false;
}

AjaxMessage.prototype._areYouA.nfargs = function() { return 1; }

AjaxMessage.eval = function(_cxt, headers, body) {
  const _v1 = new AjaxMessage(_cxt);
  _v1.state.set('headers', headers);
  _v1.state.set('body', body);
  return _v1;
}

AjaxMessage.eval.nfargs = function() { return 2; }

var AjaxOptions = function(_cxt) {
  this.state = _cxt.fields();
  this.state.set('_type', 'AjaxOptions');
  return ;
}


AjaxOptions._typename = 'AjaxOptions'

AjaxOptions.prototype._areYouA = function(_cxt, ty) {
  if (_cxt.isTruthy(ty == 'AjaxOptions')) {
    return true;
  } else 
    return false;
}

AjaxOptions.prototype._areYouA.nfargs = function() { return 1; }

AjaxOptions.eval = function(_cxt) {
  const _v1 = new AjaxOptions(_cxt);
  const _v2 = FLBuiltin.seconds;
  const _v3 = _cxt.closure(_v2, 30);
  _v1.state.set('timeout', _v3);
  const _v4 = _cxt.closure(_v2, 60);
  _v1.state.set('subscribeRepeat', _v4);
  _v1.state.set('idempotentHeader', '');
  return _v1;
}

AjaxOptions.eval.nfargs = function() { return 0; }

AjaxHeader.prototype._field_field = function(_cxt) {
  return this.state.get('field');
}

AjaxHeader.prototype._field_field.nfargs = function() { return 0; }

AjaxHeader.prototype._field_value = function(_cxt) {
  return this.state.get('value');
}

AjaxHeader.prototype._field_value.nfargs = function() { return 0; }

AjaxHeader.prototype._field_values = function(_cxt) {
  return this.state.get('values');
}

AjaxHeader.prototype._field_values.nfargs = function() { return 0; }

AjaxMessage.prototype._field_body = function(_cxt) {
  return this.state.get('body');
}

AjaxMessage.prototype._field_body.nfargs = function() { return 0; }

AjaxMessage.prototype._field_headers = function(_cxt) {
  return this.state.get('headers');
}

AjaxMessage.prototype._field_headers.nfargs = function() { return 0; }

AjaxOptions.prototype._field_idempotentHeader = function(_cxt) {
  return this.state.get('idempotentHeader');
}

AjaxOptions.prototype._field_idempotentHeader.nfargs = function() { return 0; }

AjaxOptions.prototype._field_subscribeRepeat = function(_cxt) {
  return this.state.get('subscribeRepeat');
}

AjaxOptions.prototype._field_subscribeRepeat.nfargs = function() { return 0; }

AjaxOptions.prototype._field_timeout = function(_cxt) {
  return this.state.get('timeout');
}

AjaxOptions.prototype._field_timeout.nfargs = function() { return 0; }

var cross = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'head');
    var _2 = _cxt.field(_0, 'tail');
    _2 = _cxt.head(_2);
    if (_cxt.isA(_2, 'Nil')) {
      const h = _1;
      const _v1 = map;
      const _v2 = sing;
      const _v3 = _cxt.curry(1, _v2);
      const _v4 = _cxt.closure(_v1, _v3, h);
      return _v4;
    } else {
      const t = _2;
      const h = _1;
      const _v5 = FLBuiltin.concatLists;
      const _v6 = map;
      const _v7 = cross1;
      const _v8 = cross;
      const _v9 = _cxt.closure(_v8, t);
      const _v10 = _cxt.curry(2, _v7, _v9);
      const _v11 = _cxt.closure(_v6, _v10, h);
      const _v12 = _cxt.closure(_v5, _v11);
      return _v12;
    }
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v13 = Nil.eval(_cxt);
    return _v13;
  } else 
    return FLError.eval(_cxt, 'cross: no matching case');
}

cross.nfargs = function() { return 1; }

var cross1 = function(_cxt, _0, _1) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Nil')) {
    const a = _1;
    const _v1 = _cxt.array(a);
    const _v2 = _cxt.array(_v1);
    return _v2;
  } else if (_cxt.isA(_0, 'Cons')) {
    const l = _0;
    const s = _1;
    const _v3 = map;
    const _v4 = Cons.eval;
    const _v5 = _cxt.curry(2, _v4, s);
    const _v6 = _cxt.closure(_v3, _v5, l);
    return _v6;
  } else 
    return FLError.eval(_cxt, 'cross1: no matching case');
}

cross1.nfargs = function() { return 2; }

var fillRect = function(_cxt, _0) {
  const margin = _0;
  const _v1 = FLBuiltin.concat;
  const _v2 = FLBuiltin.show;
  const _v3 = _cxt.closure(_v2, margin);
  const _v4 = _cxt.closure(_v1, 'fill-margin-', _v3);
  return _v4;
}

fillRect.nfargs = function() { return 1; }

var fillTargetCenter = function(_cxt, _0, _1) {
  const x = _0;
  const y = _1;
  const _v1 = FLBuiltin.concat;
  const _v2 = FLBuiltin.show;
  const _v3 = _cxt.closure(_v2, x);
  const _v4 = _cxt.closure(_v2, y);
  const _v5 = _cxt.closure(_v1, '-', _v4);
  const _v6 = _cxt.closure(_v1, _v3, _v5);
  const _v7 = _cxt.closure(_v1, 'flas-sizing flas-sizing-target-center-', _v6);
  return _v7;
}

fillTargetCenter.nfargs = function() { return 2; }

var head = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'head');
    const h = _1;
    return h;
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v1 = FLError.eval(_cxt, 'empty list');
    return _v1;
  } else 
    return FLError.eval(_cxt, 'head: no matching case');
}

head.nfargs = function() { return 1; }

var last = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'head');
    var _2 = _cxt.field(_0, 'tail');
    _2 = _cxt.head(_2);
    if (_cxt.isA(_2, 'Nil')) {
      const x = _1;
      return x;
    } else {
      const c = _0;
      const _v1 = last;
      const _v2 = _cxt.mkacor(Cons.prototype._field_tail,c,0);
      const _v3 = _cxt.closure(_v1, _v2);
      return _v3;
    }
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v4 = FLError.eval(_cxt, 'empty list');
    return _v4;
  } else 
    return FLError.eval(_cxt, 'last: no matching case');
}

last.nfargs = function() { return 1; }

var map = function(_cxt, _0, _1) {
  _1 = _cxt.head(_1);
  if (_cxt.isA(_1, 'Cons')) {
    var _2 = _cxt.field(_1, 'head');
    var _3 = _cxt.field(_1, 'tail');
    const f = _0;
    const h = _2;
    const t = _3;
    const _v1 = _cxt.closure(f, h);
    const _v2 = map;
    const _v3 = _cxt.closure(_v2, f, t);
    const _v4 = Cons.eval(_cxt, _v1, _v3);
    return _v4;
  } else if (_cxt.isA(_1, 'Nil')) {
    const f = _0;
    const _v5 = Nil.eval(_cxt);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'map: no matching case');
}

map.nfargs = function() { return 2; }

var minAspect = function(_cxt, _0, _1, _2, _3, _4) {
  const x = _0;
  const y = _1;
  const pct = _2;
  const w = _3;
  const h = _4;
  const _v1 = FLBuiltin.concat;
  const _v2 = FLBuiltin.show;
  const _v3 = _cxt.closure(_v2, x);
  const _v4 = _cxt.closure(_v2, y);
  const _v5 = _cxt.closure(_v2, pct);
  const _v6 = _cxt.closure(_v2, w);
  const _v7 = _cxt.closure(_v2, h);
  const _v8 = _cxt.closure(_v1, '-', _v7);
  const _v9 = _cxt.closure(_v1, _v6, _v8);
  const _v10 = _cxt.closure(_v1, '-', _v9);
  const _v11 = _cxt.closure(_v1, _v5, _v10);
  const _v12 = _cxt.closure(_v1, '-', _v11);
  const _v13 = _cxt.closure(_v1, _v4, _v12);
  const _v14 = _cxt.closure(_v1, '-', _v13);
  const _v15 = _cxt.closure(_v1, _v3, _v14);
  const _v16 = _cxt.closure(_v1, 'flas-sizing flas-size-aspect flas-sizing-min-aspect-', _v15);
  return _v16;
}

minAspect.nfargs = function() { return 5; }

var promoteBox = function(_cxt, _0, _1) {
  const aspect = _0;
  const margin = _1;
  const _v1 = FLBuiltin.concat;
  const _v2 = FLBuiltin.show;
  const _v3 = _cxt.closure(_v2, aspect);
  const _v4 = _cxt.closure(_v2, margin);
  const _v5 = _cxt.closure(_v1, '-', _v4);
  const _v6 = _cxt.closure(_v1, _v3, _v5);
  const _v7 = _cxt.closure(_v1, 'flas-sizing flas-sizing-promote-box-', _v6);
  return _v7;
}

promoteBox.nfargs = function() { return 2; }

var recurse = function(_cxt, _0, _1) {
  _1 = _cxt.head(_1);
  if (_cxt.isA(_1, 'Cons')) {
    var _2 = _cxt.field(_1, 'head');
    var _3 = _cxt.field(_1, 'tail');
    _2 = _cxt.head(_2);
    if (_cxt.isA(_2, 'Nil')) {
      _3 = _cxt.head(_3);
      if (_cxt.isA(_3, 'Nil')) {
        const e = _0;
        const _v1 = Nil.eval(_cxt);
        return _v1;
      } else {
        const l = _1;
        const e = _0;
        const _v2 = transpose;
        const _v3 = _cxt.closure(_v2, e, l);
        return _v3;
      }
    } else {
      const l = _1;
      const e = _0;
      const _v4 = transpose;
      const _v5 = _cxt.closure(_v4, e, l);
      return _v5;
    }
  } else if (_cxt.isA(_1, 'Nil')) {
    const e = _0;
    const _v6 = Nil.eval(_cxt);
    return _v6;
  } else 
    return FLError.eval(_cxt, 'recurse: no matching case');
}

recurse.nfargs = function() { return 2; }

var safeHead = function(_cxt, _0, _1) {
  _1 = _cxt.head(_1);
  if (_cxt.isA(_1, 'Cons')) {
    var _2 = _cxt.field(_1, 'head');
    const e = _0;
    const h = _2;
    return h;
  } else if (_cxt.isA(_1, 'Nil')) {
    const e = _0;
    return e;
  } else 
    return FLError.eval(_cxt, 'safeHead: no matching case');
}

safeHead.nfargs = function() { return 2; }

var safeTail = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'tail');
    const t = _1;
    return t;
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v1 = Nil.eval(_cxt);
    return _v1;
  } else 
    return FLError.eval(_cxt, 'safeTail: no matching case');
}

safeTail.nfargs = function() { return 1; }

var sing = function(_cxt, _0) {
  const e = _0;
  const _v1 = Nil.eval(_cxt);
  const _v2 = Cons.eval(_cxt, e, _v1);
  return _v2;
}

sing.nfargs = function() { return 1; }

var sizeText = function(_cxt, _0) {
  const cs = _0;
  const _v1 = FLBuiltin.concat;
  const _v2 = FLBuiltin.show;
  const _v3 = _cxt.closure(_v2, cs);
  const _v4 = _cxt.closure(_v1, 'flas-sizing flas-sizing-text-', _v3);
  return _v4;
}

sizeText.nfargs = function() { return 1; }

var tail = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'tail');
    const t = _1;
    return t;
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v1 = FLError.eval(_cxt, 'empty list');
    return _v1;
  } else 
    return FLError.eval(_cxt, 'tail: no matching case');
}

tail.nfargs = function() { return 1; }

var transpose = function(_cxt, _0, _1) {
  _1 = _cxt.head(_1);
  if (_cxt.isA(_1, 'Nil')) {
    const e = _0;
    const _v1 = Nil.eval(_cxt);
    return _v1;
  } else if (_cxt.isA(_1, 'Cons')) {
    const l = _1;
    const e = _0;
    const _v2 = map;
    const _v3 = safeHead;
    const _v4 = _cxt.curry(2, _v3, e);
    const _v5 = _cxt.closure(_v2, _v4, l);
    const _v6 = recurse;
    const _v7 = trimEnd;
    const _v8 = safeTail;
    const _v9 = _cxt.curry(1, _v8);
    const _v10 = _cxt.closure(_v2, _v9, l);
    const _v11 = _cxt.closure(_v7, _v10);
    const _v12 = _cxt.closure(_v6, e, _v11);
    const _v13 = Cons.eval(_cxt, _v5, _v12);
    return _v13;
  } else 
    return FLError.eval(_cxt, 'transpose: no matching case');
}

transpose.nfargs = function() { return 2; }

var trim2 = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Nil')) {
    const _v1 = Nil.eval(_cxt);
    return _v1;
  } else if (_cxt.isA(_0, 'Cons')) {
    const l = _0;
    const _v2 = Nil.eval(_cxt);
    const _v3 = Cons.eval(_cxt, _v2, l);
    return _v3;
  } else 
    return FLError.eval(_cxt, 'trim2: no matching case');
}

trim2.nfargs = function() { return 1; }

var trimEnd = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'Cons')) {
    var _1 = _cxt.field(_0, 'head');
    var _2 = _cxt.field(_0, 'tail');
    _1 = _cxt.head(_1);
    if (_cxt.isA(_1, 'Nil')) {
      _2 = _cxt.head(_2);
      if (_cxt.isA(_2, 'Nil')) {
        const _v1 = Nil.eval(_cxt);
        return _v1;
      } else {
        const t = _2;
        const _v2 = trim2;
        const _v3 = trimEnd;
        const _v4 = _cxt.closure(_v3, t);
        const _v5 = _cxt.closure(_v2, _v4);
        return _v5;
      }
    } else {
      const l = _0;
      return l;
    }
  } else if (_cxt.isA(_0, 'Nil')) {
    const _v6 = Nil.eval(_cxt);
    return _v6;
  } else 
    return FLError.eval(_cxt, 'trimEnd: no matching case');
}

trimEnd.nfargs = function() { return 1; }

root__package._init = function(_cxt) {
  const _v1 = new Ajax(_cxt);
  const _v2 = _cxt.registerContract('Ajax', _v1);
  const _v3 = new AjaxHandler(_cxt);
  const _v4 = _cxt.registerContract('AjaxHandler', _v3);
  const _v5 = new CallMe(_cxt);
  const _v6 = _cxt.registerContract('CallMe', _v5);
  const _v7 = new ContentAccess(_cxt);
  const _v8 = _cxt.registerContract('ContentAccess', _v7);
  const _v9 = new ContentDelivery(_cxt);
  const _v10 = _cxt.registerContract('ContentDelivery', _v9);
  const _v11 = new Lifecycle(_cxt);
  const _v12 = _cxt.registerContract('Lifecycle', _v11);
  const _v13 = new Navigation(_cxt);
  const _v14 = _cxt.registerContract('Navigation', _v13);
  const _v15 = new Repeater(_cxt);
  const _v16 = _cxt.registerContract('Repeater', _v15);
  const _v17 = _cxt.registerStruct('AjaxHeader', AjaxHeader);
  const _v18 = _cxt.registerStruct('AjaxMessage', AjaxMessage);
  const _v19 = _cxt.registerStruct('AjaxOptions', AjaxOptions);
  if (_cxt.isTruthy(root__package._builtin_init)) {
    root__package._builtin_init(_cxt);
  }
}

root__package._init.nfargs = function() { return 0; }

export { Ajax, AjaxHandler, AjaxHeader, AjaxMessage, AjaxOptions, CallMe, ContentAccess, ContentDelivery, Lifecycle, Navigation, Repeater, cross, cross1, fillRect, fillTargetCenter, head, last, map, minAspect, promoteBox, recurse, root__package, safeHead, safeTail, sing, sizeText, tail, transpose, trim2, trimEnd };
