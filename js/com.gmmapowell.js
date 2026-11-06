var com__gmmapowell = {};

import { IdempotentHandler } from "./ziwsh.js";
import { Application, Assign, AssignCons, AssignItem, Debug, ResponseWithMessages, Send, UpdateDisplay, ClickEvent, ScrollTo, ContractStore, Entity, Image, Link, FLBuiltin, False, True, MakeHash, HashPair, Tuple, TypeOf, FLCard, FLObject, FLError, Nil, Cons, Crobag, CroEntry, SlideWindow, CrobagWindow, CrobagChangeEvent, CrobagWindowEvent, Random, Interval, Instant, Calendar } from "./flasjs.js";
import { root__package, Ajax, AjaxHandler, AjaxHeader, AjaxMessage, AjaxOptions, CallMe, ContentAccess, ContentDelivery, Lifecycle, Navigation, Repeater, cross, cross1, fillRect, fillTargetCenter, head, last, map, minAspect, promoteBox, recurse, safeHead, safeTail, sing, sizeText, tail, transpose, trim2, trimEnd } from "./root.package.js";

com__gmmapowell.SetTitle = function(_cxt) {
  return ;
}
com__gmmapowell.SetTitle._nf_title = 1;

com__gmmapowell.SetTitle.prototype.name = function() {
  return 'com.gmmapowell.SetTitle';
}

com__gmmapowell.SetTitle.prototype.name.nfargs = function() { return -1; }

com__gmmapowell.SetTitle.prototype._methods = function() {
  const _v1 = ['title'];
  return _v1;
}

com__gmmapowell.SetTitle.prototype._methods.nfargs = function() { return -1; }

com__gmmapowell.SetTitle.prototype.title = function(_cxt, _0, _ih) {
  return null;
}

com__gmmapowell.SetTitle.prototype.title.nfargs = function() { return 1; }

com__gmmapowell._Application = function(_cxt, div, baseUri) {
  Application.call(this, _cxt, div, baseUri);
  this.title = null;
  return ;
}
com__gmmapowell._Application.prototype = new Application();
com__gmmapowell._Application.prototype.constructor = com__gmmapowell._Application;

com__gmmapowell.Article = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/article-html');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/article-html';
  this.state = _cxt.fields();
  this._contracts.require(_cxt, 'ajax', 'Ajax');
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Article._C1(_cxt, this));
  return ;
}
com__gmmapowell.Article.prototype = new FLCard();
com__gmmapowell.Article.prototype.constructor = com__gmmapowell.Article;

com__gmmapowell.Article.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Article';
}

com__gmmapowell.Article.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Article._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Article._contract.nfargs = function() { return 1; }

com__gmmapowell.Article.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateContent(_cxt, _renderTree, 'cards/article-html', 'content', 1, null, this.state.get('content'), "content");
  this._updateStyle(_cxt, _renderTree, 'cards/article-html', 'content', 'content', 1, null, 'text');
  return ;
}

com__gmmapowell.Article.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Article.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Article.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Article._C1 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Article.UpdateContent = function(_cxt, _incard) {
  AjaxHandler.call(this, _cxt);
  this.state = _cxt.fields();
  this._card = _incard;
  return ;
}
com__gmmapowell.Article.UpdateContent.prototype = new AjaxHandler();
com__gmmapowell.Article.UpdateContent.prototype.constructor = com__gmmapowell.Article.UpdateContent;

com__gmmapowell.Article.UpdateContent.eval = function(_cxt, _incard) {
  const _v1 = new com__gmmapowell.Article.UpdateContent(_cxt, _incard);
  _v1.state.set('_type', 'com.gmmapowell.Article.UpdateContent');
  return _v1;
}

com__gmmapowell.Article.UpdateContent.eval.nfargs = function() { return 1; }

com__gmmapowell.Article.UpdateContent.prototype._clz = function() {
  return 'AjaxHandler';
}

com__gmmapowell.Article.UpdateContent.prototype._clz.nfargs = function() { return -1; }

com__gmmapowell.Article.UpdateContent.prototype._card = function() {
  return this._card;
}

com__gmmapowell.Article.UpdateContent.prototype._card.nfargs = function() { return -1; }

com__gmmapowell.ArticleList = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/article-list');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/article-list';
  this.state = _cxt.fields();
  this._contracts.require(_cxt, 'ajax', 'Ajax');
  this._contracts.record(_cxt, 'com.gmmapowell.SetTitle', new com__gmmapowell.ArticleList._C0(_cxt, this));
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.ArticleList._C2(_cxt, this));
  return ;
}
com__gmmapowell.ArticleList.prototype = new FLCard();
com__gmmapowell.ArticleList.prototype.constructor = com__gmmapowell.ArticleList;

com__gmmapowell.ArticleList.prototype.name = function(_cxt) {
  return 'com.gmmapowell.ArticleList';
}

com__gmmapowell.ArticleList.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.ArticleList._contract = function(_cxt, _ctr) {
}

com__gmmapowell.ArticleList._contract.nfargs = function() { return 1; }

com__gmmapowell.ArticleList.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateContent(_cxt, _renderTree, 'cards/article-list', 'articles-heading', 1, null, this.state.get('heading'), "heading");
  this._updateContainer(_cxt, _renderTree, 'article-titles', this.state.get('titles'), this._updateContainer1);
  return ;
}

com__gmmapowell.ArticleList.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.ArticleList.prototype._updateContainer1 = function(_cxt, _renderTree, parent, currNode, e) {
  const _v1 = _cxt.array();
  this._addItem(_cxt, _renderTree, parent, currNode, document.getElementById('items/article-title'), this._updateTemplate1, e, _v1);
  return ;
}

com__gmmapowell.ArticleList.prototype._updateContainer1.nfargs = function() { return 4; }

com__gmmapowell.ArticleList.prototype._updateTemplate1 = function(_cxt, _renderTree, l, _tc) {
  this._updateLink(_cxt, _renderTree, 'items/article-title', 'link', 1, l, l, null);
  this._updateStyle(_cxt, _renderTree, 'items/article-title', 'link', 'link', 1, l, 'article-link-style');
  return ;
}

com__gmmapowell.ArticleList.prototype._updateTemplate1.nfargs = function() { return 3; }

com__gmmapowell.ArticleList.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.ArticleList.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.ArticleList._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.ArticleList._C2 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.ArticleList.UpdateList = function(_cxt, _incard) {
  AjaxHandler.call(this, _cxt);
  this.state = _cxt.fields();
  this._card = _incard;
  return ;
}
com__gmmapowell.ArticleList.UpdateList.prototype = new AjaxHandler();
com__gmmapowell.ArticleList.UpdateList.prototype.constructor = com__gmmapowell.ArticleList.UpdateList;

com__gmmapowell.ArticleList.UpdateList.eval = function(_cxt, _incard) {
  const _v1 = new com__gmmapowell.ArticleList.UpdateList(_cxt, _incard);
  _v1.state.set('_type', 'com.gmmapowell.ArticleList.UpdateList');
  return _v1;
}

com__gmmapowell.ArticleList.UpdateList.eval.nfargs = function() { return 1; }

com__gmmapowell.ArticleList.UpdateList.prototype._clz = function() {
  return 'AjaxHandler';
}

com__gmmapowell.ArticleList.UpdateList.prototype._clz.nfargs = function() { return -1; }

com__gmmapowell.ArticleList.UpdateList.prototype._card = function() {
  return this._card;
}

com__gmmapowell.ArticleList.UpdateList.prototype._card.nfargs = function() { return -1; }

com__gmmapowell.Creative = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/creative');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/creative';
  this.state = _cxt.fields();
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Creative._C0(_cxt, this));
  return ;
}
com__gmmapowell.Creative.prototype = new FLCard();
com__gmmapowell.Creative.prototype.constructor = com__gmmapowell.Creative;

com__gmmapowell.Creative.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Creative';
}

com__gmmapowell.Creative.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Creative._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Creative._contract.nfargs = function() { return 1; }

com__gmmapowell.Creative.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/creative', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/creative', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/creative', 'article-title', 1, null, 'Creative', null);
  this._updatePunnet(_cxt, _renderTree, 'articles', this.state.get('card'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/creative', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Creative.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Creative.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Creative.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Creative.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Creative.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Creative._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.DisplayImage = function(_cxt) {
  this.state = _cxt.fields();
  this.state.set('_type', 'com.gmmapowell.DisplayImage');
  return ;
}


com__gmmapowell.DisplayImage._typename = 'com.gmmapowell.DisplayImage'

com__gmmapowell.DisplayImage.prototype._areYouA = function(_cxt, ty) {
  if (_cxt.isTruthy(ty == 'com.gmmapowell.DisplayImage')) {
    return true;
  } else 
    return false;
}

com__gmmapowell.DisplayImage.prototype._areYouA.nfargs = function() { return 1; }

com__gmmapowell.DisplayImage.eval = function(_cxt, posn, img) {
  const _v1 = new com__gmmapowell.DisplayImage(_cxt);
  _v1.state.set('posn', posn);
  _v1.state.set('img', img);
  return _v1;
}

com__gmmapowell.DisplayImage.eval.nfargs = function() { return 2; }

com__gmmapowell.Gallery = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/gallery');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/gallery';
  this.state = _cxt.fields();
  this.state.set('selected', 0);
  this._contracts.require(_cxt, 'ajax', 'Ajax');
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Gallery._C1(_cxt, this));
  return ;
}
com__gmmapowell.Gallery.prototype = new FLCard();
com__gmmapowell.Gallery.prototype.constructor = com__gmmapowell.Gallery;

com__gmmapowell.Gallery.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Gallery';
}

com__gmmapowell.Gallery.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Gallery._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Gallery._contract.nfargs = function() { return 1; }

com__gmmapowell.Gallery.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/gallery', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/gallery', 'image', 'backdrop', 1, null, _v5);
  this._updateContainer(_cxt, _renderTree, 'gallery', this.state.get('images'), this._updateContainer1);
  const _v6 = promoteBox;
  const _v7 = _cxt.closure(_v6, 1.33, 10);
  const _v8 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v9 = _cxt.array('gallery-image center-me', _v7);
  const _v10 = _cxt.closure(_v8, _v9);
  this._updateStyle(_cxt, _renderTree, 'cards/gallery', 'container', 'gallery', 1, null, _v10);
  this._updateStyle(_cxt, _renderTree, 'cards/gallery', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Gallery.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Gallery.prototype._updateContainer1 = function(_cxt, _renderTree, parent, currNode, e) {
  const _v1 = _cxt.array();
  this._addItem(_cxt, _renderTree, parent, currNode, document.getElementById('items/image'), this._updateTemplate1, e, _v1);
  return ;
}

com__gmmapowell.Gallery.prototype._updateContainer1.nfargs = function() { return 4; }

com__gmmapowell.Gallery.prototype._updateTemplate1 = function(_cxt, _renderTree, d, _tc) {
  const _v1 = _cxt.mkacor(com__gmmapowell.DisplayImage.prototype._field_img,d,0);
  this._updateImage(_cxt, _renderTree, 'items/image', 'gallery-image', 1, d, _v1, null);
  const _v2 = fillRect;
  const _v3 = _cxt.closure(_v2, 15);
  const _v4 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v5 = _cxt.array('relative-center-me contained-in-box', _v3);
  const _v6 = _cxt.closure(_v4, _v5);
  this._updateStyle(_cxt, _renderTree, 'items/image', 'image', 'gallery-image', 1, d, _v6);
  this._updateStyle(_cxt, _renderTree, 'items/image', 'style', 'left', 0, d, 'move-left');
  this._updateStyle(_cxt, _renderTree, 'items/image', 'style', 'right', 0, d, 'move-right');
  const _v7 = FLBuiltin.isNotEqual;
  const _v8 = _cxt.mkacor(com__gmmapowell.DisplayImage.prototype._field_posn,d,0);
  const _v9 = _cxt.closure(_v7, _v8, this.state.get('selected'));
  this._updateStyle(_cxt, _renderTree, 'items/image', null, null, null, d, null, _v9, 'hidden');
  return ;
}

com__gmmapowell.Gallery.prototype._updateTemplate1.nfargs = function() { return 3; }

com__gmmapowell.Gallery.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Gallery.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Gallery._C1 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Gallery.UpdateImages = function(_cxt, _incard) {
  AjaxHandler.call(this, _cxt);
  this.state = _cxt.fields();
  this._card = _incard;
  return ;
}
com__gmmapowell.Gallery.UpdateImages.prototype = new AjaxHandler();
com__gmmapowell.Gallery.UpdateImages.prototype.constructor = com__gmmapowell.Gallery.UpdateImages;

com__gmmapowell.Gallery.UpdateImages.eval = function(_cxt, _incard) {
  const _v1 = new com__gmmapowell.Gallery.UpdateImages(_cxt, _incard);
  _v1.state.set('_type', 'com.gmmapowell.Gallery.UpdateImages');
  return _v1;
}

com__gmmapowell.Gallery.UpdateImages.eval.nfargs = function() { return 1; }

com__gmmapowell.Gallery.UpdateImages.prototype._clz = function() {
  return 'AjaxHandler';
}

com__gmmapowell.Gallery.UpdateImages.prototype._clz.nfargs = function() { return -1; }

com__gmmapowell.Gallery.UpdateImages.prototype._card = function() {
  return this._card;
}

com__gmmapowell.Gallery.UpdateImages.prototype._card.nfargs = function() { return -1; }

com__gmmapowell.Home = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/home');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/home';
  this.state = _cxt.fields();
  this._contracts.require(_cxt, 'n', 'Navigation');
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Home._C1(_cxt, this));
  return ;
}
com__gmmapowell.Home.prototype = new FLCard();
com__gmmapowell.Home.prototype.constructor = com__gmmapowell.Home;

com__gmmapowell.Home.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Home';
}

com__gmmapowell.Home.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Home._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Home._contract.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/home', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'image', 'backdrop', 1, null, _v5);
  const _v6 = minAspect;
  const _v7 = _cxt.closure(_v6, 30, 15, 15, 2, 1);
  const _v8 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v9 = _cxt.array('tile', _v7);
  const _v10 = _cxt.closure(_v8, _v9);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'observations', 0, null, _v10);
  const _v11 = sizeText;
  const _v12 = _cxt.closure(_v11, 25);
  const _v13 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v14 = _cxt.array('center-me', _v12);
  const _v15 = _cxt.closure(_v13, _v14);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'observations-text', 0, null, _v15);
  const _v16 = _cxt.closure(_v6, 75, 20, 15, 1, 0.7);
  const _v17 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v18 = _cxt.array('tile', _v16);
  const _v19 = _cxt.closure(_v17, _v18);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'sports', 0, null, _v19);
  const _v20 = _cxt.closure(_v11, 25);
  const _v21 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v22 = _cxt.array('center-me', _v20);
  const _v23 = _cxt.closure(_v21, _v22);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'sports-text', 0, null, _v23);
  const _v24 = _cxt.closure(_v6, 60, 30, 15, 1, 0.7);
  const _v25 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v26 = _cxt.array('tile', _v24);
  const _v27 = _cxt.closure(_v25, _v26);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'now', 0, null, _v27);
  const _v28 = _cxt.closure(_v6, 15, 55, 15, 1, 1);
  const _v29 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v30 = _cxt.array('tile', _v28);
  const _v31 = _cxt.closure(_v29, _v30);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'politics', 0, null, _v31);
  const _v32 = _cxt.closure(_v11, 25);
  const _v33 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v34 = _cxt.array('center-me', _v32);
  const _v35 = _cxt.closure(_v33, _v34);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'politics-text', 0, null, _v35);
  const _v36 = _cxt.closure(_v6, 75, 85, 15, 1.4, 0.7);
  const _v37 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v38 = _cxt.array('tile', _v36);
  const _v39 = _cxt.closure(_v37, _v38);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'technology', 0, null, _v39);
  const _v40 = _cxt.closure(_v11, 25);
  const _v41 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v42 = _cxt.array('center-me', _v40);
  const _v43 = _cxt.closure(_v41, _v42);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'technology-text', 0, null, _v43);
  const _v44 = _cxt.closure(_v6, 62, 70, 19, 1.4, 0.7);
  const _v45 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v46 = _cxt.array('tile', _v44);
  const _v47 = _cxt.closure(_v45, _v46);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'workoutloud', 0, null, _v47);
  const _v48 = _cxt.closure(_v11, 25);
  const _v49 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v50 = _cxt.array('center-me', _v48);
  const _v51 = _cxt.closure(_v49, _v50);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'workoutloud-text', 0, null, _v51);
  const _v52 = _cxt.closure(_v6, 45, 85, 15, 1.4, 1);
  const _v53 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v54 = _cxt.array('tile', _v52);
  const _v55 = _cxt.closure(_v53, _v54);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'gallery', 0, null, _v55);
  const _v56 = _cxt.closure(_v11, 25);
  const _v57 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v58 = _cxt.array('center-me', _v56);
  const _v59 = _cxt.closure(_v57, _v58);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'gallery-text', 0, null, _v59);
  const _v60 = _cxt.closure(_v6, 45, 40, 15, 1.6, 0.8);
  const _v61 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v62 = _cxt.array('tile', _v60);
  const _v63 = _cxt.closure(_v61, _v62);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'organizations', 0, null, _v63);
  const _v64 = _cxt.closure(_v11, 30);
  const _v65 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v66 = _cxt.array('center-me', _v64);
  const _v67 = _cxt.closure(_v65, _v66);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'organizations-text', 0, null, _v67);
  const _v68 = _cxt.closure(_v6, 80, 50, 15, 1.7, 0.8);
  const _v69 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v70 = _cxt.array('tile', _v68);
  const _v71 = _cxt.closure(_v69, _v70);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'hireme', 0, null, _v71);
  const _v72 = _cxt.closure(_v11, 30);
  const _v73 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v74 = _cxt.array('center-me', _v72);
  const _v75 = _cxt.closure(_v73, _v74);
  this._updateStyle(_cxt, _renderTree, 'cards/home', 'style', 'hireme-text', 0, null, _v75);
  this._updateStyle(_cxt, _renderTree, 'cards/home', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Home.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Home.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Home._C1 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.NowThen = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/nowthen');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/nowthen';
  this.state = _cxt.fields();
  this.state.set('myTitle', 'Now');
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.NowThen._C0(_cxt, this));
  this._contracts.record(_cxt, 'com.gmmapowell.SetTitle', new com__gmmapowell.NowThen._C1(_cxt, this));
  return ;
}
com__gmmapowell.NowThen.prototype = new FLCard();
com__gmmapowell.NowThen.prototype.constructor = com__gmmapowell.NowThen;

com__gmmapowell.NowThen.prototype.name = function(_cxt) {
  return 'com.gmmapowell.NowThen';
}

com__gmmapowell.NowThen.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.NowThen._contract = function(_cxt, _ctr) {
}

com__gmmapowell.NowThen._contract.nfargs = function() { return 1; }

com__gmmapowell.NowThen.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/nowthen', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/nowthen', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/nowthen', 'article-title', 1, null, this.state.get('myTitle'), "myTitle");
  this._updatePunnet(_cxt, _renderTree, 'articles', this.state.get('card'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/nowthen', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.NowThen.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.NowThen.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.NowThen.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.NowThen.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.NowThen.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.NowThen._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.NowThen._C1 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Observations = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/observations');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/observations';
  this.state = _cxt.fields();
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Observations._C0(_cxt, this));
  return ;
}
com__gmmapowell.Observations.prototype = new FLCard();
com__gmmapowell.Observations.prototype.constructor = com__gmmapowell.Observations;

com__gmmapowell.Observations.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Observations';
}

com__gmmapowell.Observations.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Observations._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Observations._contract.nfargs = function() { return 1; }

com__gmmapowell.Observations.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/observations', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/observations', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/observations', 'article-title', 1, null, 'Observations on Life', null);
  this._updatePunnet(_cxt, _renderTree, 'articles', this.state.get('card'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/observations', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Observations.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Observations.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Observations.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Observations.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Observations.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Observations._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Politics = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/politics');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/politics';
  this.state = _cxt.fields();
  const _v1 = Nil.eval(_cxt);
  this.state.set('lists', _v1);
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Politics._C0(_cxt, this));
  return ;
}
com__gmmapowell.Politics.prototype = new FLCard();
com__gmmapowell.Politics.prototype.constructor = com__gmmapowell.Politics;

com__gmmapowell.Politics.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Politics';
}

com__gmmapowell.Politics.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Politics._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Politics._contract.nfargs = function() { return 1; }

com__gmmapowell.Politics.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/politics', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/politics', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/politics', 'politics-article-title', 1, null, 'Politics', null);
  this._updatePunnet(_cxt, _renderTree, 'politics-articles', this.state.get('lists'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/politics', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Politics.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Politics.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Politics.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Politics.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Politics.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Politics._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Root = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/root');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/root';
  this.state = _cxt.fields();
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Root._C0(_cxt, this));
  return ;
}
com__gmmapowell.Root.prototype = new FLCard();
com__gmmapowell.Root.prototype.constructor = com__gmmapowell.Root;

com__gmmapowell.Root.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Root';
}

com__gmmapowell.Root.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Root._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Root._contract.nfargs = function() { return 1; }

com__gmmapowell.Root.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updatePunnet(_cxt, _renderTree, 'contains', this.state.get('child'), this._updatePunnet1);
  return ;
}

com__gmmapowell.Root.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Root.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Root.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Root.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Root.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Root._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Sports = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/sports');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/sports';
  this.state = _cxt.fields();
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Sports._C0(_cxt, this));
  return ;
}
com__gmmapowell.Sports.prototype = new FLCard();
com__gmmapowell.Sports.prototype.constructor = com__gmmapowell.Sports;

com__gmmapowell.Sports.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Sports';
}

com__gmmapowell.Sports.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Sports._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Sports._contract.nfargs = function() { return 1; }

com__gmmapowell.Sports.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/sports', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/sports', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/sports', 'article-title', 1, null, 'Sports', null);
  this._updatePunnet(_cxt, _renderTree, 'articles', this.state.get('card'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/sports', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Sports.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Sports.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Sports.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Sports.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Sports.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Sports._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.Technology = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/technology');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/technology';
  this.state = _cxt.fields();
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.Technology._C0(_cxt, this));
  return ;
}
com__gmmapowell.Technology.prototype = new FLCard();
com__gmmapowell.Technology.prototype.constructor = com__gmmapowell.Technology;

com__gmmapowell.Technology.prototype.name = function(_cxt) {
  return 'com.gmmapowell.Technology';
}

com__gmmapowell.Technology.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.Technology._contract = function(_cxt, _ctr) {
}

com__gmmapowell.Technology._contract.nfargs = function() { return 1; }

com__gmmapowell.Technology.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/technology', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/technology', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/technology', 'article-title', 1, null, 'Technology', null);
  this._updatePunnet(_cxt, _renderTree, 'articles', this.state.get('card'), this._updatePunnet1);
  this._updateStyle(_cxt, _renderTree, 'cards/technology', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.Technology.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.Technology.prototype._updatePunnet1 = function(_cxt, _renderTree, parent, currNode, e) {
  return ;
}

com__gmmapowell.Technology.prototype._updatePunnet1.nfargs = function() { return 4; }

com__gmmapowell.Technology.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.Technology.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.Technology._C0 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.WorkOutLoud = function(_cxt) {
  FLCard.call(this, _cxt, 'cards/workoutloud');
  this._contracts = new ContractStore(_cxt);
  this._template = 'cards/workoutloud';
  this.state = _cxt.fields();
  this._contracts.require(_cxt, 'ajax', 'Ajax');
  this._contracts.record(_cxt, 'Lifecycle', new com__gmmapowell.WorkOutLoud._C1(_cxt, this));
  return ;
}
com__gmmapowell.WorkOutLoud.prototype = new FLCard();
com__gmmapowell.WorkOutLoud.prototype.constructor = com__gmmapowell.WorkOutLoud;

com__gmmapowell.WorkOutLoud.prototype.name = function(_cxt) {
  return 'com.gmmapowell.WorkOutLoud';
}

com__gmmapowell.WorkOutLoud.prototype.name.nfargs = function() { return 0; }

com__gmmapowell.WorkOutLoud._contract = function(_cxt, _ctr) {
}

com__gmmapowell.WorkOutLoud._contract.nfargs = function() { return 1; }

com__gmmapowell.WorkOutLoud.prototype._updateDisplay = function(_cxt, _renderTree) {
  this._updateImage(_cxt, _renderTree, 'cards/workoutloud', 'backdrop', 1, null, this.state.get('background'), "background");
  const _v1 = fillTargetCenter;
  const _v2 = _cxt.closure(_v1, 75, 73);
  const _v3 = _cxt.makeStatic('FLBuiltin','concatMany');
  const _v4 = _cxt.array('backdrop', _v2);
  const _v5 = _cxt.closure(_v3, _v4);
  this._updateStyle(_cxt, _renderTree, 'cards/workoutloud', 'image', 'backdrop', 1, null, _v5);
  this._updateContent(_cxt, _renderTree, 'cards/workoutloud', 'article-title', 1, null, 'Working Out Loud', null);
  this._updateContent(_cxt, _renderTree, 'cards/workoutloud', 'content', 1, null, this.state.get('content'), "content");
  this._updateStyle(_cxt, _renderTree, 'cards/workoutloud', 'content', 'content', 1, null, 'workoutloud-content flas-scrollable');
  this._updateStyle(_cxt, _renderTree, 'cards/workoutloud', null, null, null, null, 'flas-screensize');
  return ;
}

com__gmmapowell.WorkOutLoud.prototype._updateDisplay.nfargs = function() { return 1; }

com__gmmapowell.WorkOutLoud.prototype._destroy = function(_cxt) {
  this._close(_cxt);
  return ;
}

com__gmmapowell.WorkOutLoud.prototype._destroy.nfargs = function() { return 0; }

com__gmmapowell.WorkOutLoud._C1 = function(_cxt, _incard) {
  this._card = _incard;
  return ;
}

com__gmmapowell.WorkOutLoud.UpdateContent = function(_cxt, _incard) {
  AjaxHandler.call(this, _cxt);
  this.state = _cxt.fields();
  this._card = _incard;
  return ;
}
com__gmmapowell.WorkOutLoud.UpdateContent.prototype = new AjaxHandler();
com__gmmapowell.WorkOutLoud.UpdateContent.prototype.constructor = com__gmmapowell.WorkOutLoud.UpdateContent;

com__gmmapowell.WorkOutLoud.UpdateContent.eval = function(_cxt, _incard) {
  const _v1 = new com__gmmapowell.WorkOutLoud.UpdateContent(_cxt, _incard);
  _v1.state.set('_type', 'com.gmmapowell.WorkOutLoud.UpdateContent');
  return _v1;
}

com__gmmapowell.WorkOutLoud.UpdateContent.eval.nfargs = function() { return 1; }

com__gmmapowell.WorkOutLoud.UpdateContent.prototype._clz = function() {
  return 'AjaxHandler';
}

com__gmmapowell.WorkOutLoud.UpdateContent.prototype._clz.nfargs = function() { return -1; }

com__gmmapowell.WorkOutLoud.UpdateContent.prototype._card = function() {
  return this._card;
}

com__gmmapowell.WorkOutLoud.UpdateContent.prototype._card.nfargs = function() { return -1; }

com__gmmapowell.Article.UpdateContent.prototype.message = function(_cxt, _0, _1) {
  const m = _0;
  const _v1 = _cxt.makeStatic('Html','_ctor_from');
  const _v2 = _cxt.closure(_v1, this._card, m);
  const _v3 = Assign.eval(_cxt, this._card, 'content', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Article.UpdateContent.prototype.message.nfargs = function() { return 2; }

com__gmmapowell.Article._C1.prototype.load = function(_cxt, _0, _1) {
  const aid = _0;
  const _v1 = FLBuiltin.concat;
  const _v2 = _cxt.closure(_v1, this._card.state.get('articleId'), aid);
  const _v3 = Assign.eval(_cxt, this._card, 'articleId', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Article._C1.prototype.load.nfargs = function() { return 2; }

com__gmmapowell.Article._C1.prototype.ready = function(_cxt, _0) {
  const _v1 = com__gmmapowell.Article.UpdateContent.eval(_cxt, this._card);
  const _v2 = _cxt.mksend('subscribe',this._card._contracts.required(_cxt, 'ajax'),2,_v1,null);
  const _v3 = FLBuiltin.parseUri;
  const _v4 = FLBuiltin.concat;
  const _v5 = _cxt.closure(_v4, '/ajax/article.php?aid=', this._card.state.get('articleId'));
  const _v6 = _cxt.closure(_v3, _v5);
  const _v7 = AjaxOptions.eval(_cxt);
  const _v8 = _cxt.closure(_v2, _v6, _v7);
  const _v9 = _cxt.array(_v8);
  return _v9;
}

com__gmmapowell.Article._C1.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.ArticleList.UpdateList.prototype.message = function(_cxt, _0, _1) {
  const m = _0;
  const _v1 = map;
  const _v2 = com__gmmapowell.ArticleList.UpdateList.prototype.message.makeTitle;
  const _v3 = _cxt.ocurry(1, _v2, this);
  const _v4 = FLBuiltin.assoc;
  const _v5 = FLBuiltin.parseJson;
  const _v6 = _cxt.mkacor(AjaxMessage.prototype._field_body,m,0);
  const _v7 = _cxt.closure(_v5, _v6);
  const _v8 = _cxt.closure(_v4, _v7, 'articles');
  const _v9 = _cxt.closure(_v1, _v3, _v8);
  const _v10 = Assign.eval(_cxt, this._card, 'titles', _v9);
  const _v11 = _cxt.array(_v10);
  return _v11;
}

com__gmmapowell.ArticleList.UpdateList.prototype.message.nfargs = function() { return 2; }

if (typeof(com__gmmapowell.ArticleList.UpdateList.prototype.message) === 'undefined') com__gmmapowell.ArticleList.UpdateList.prototype.message = {};

com__gmmapowell.ArticleList.UpdateList.prototype.message.makeTitle = function(_cxt, _0) {
  const h = _0;
  const _v1 = FLBuiltin.parseUri;
  const _v2 = FLBuiltin.assoc;
  const _v3 = _cxt.closure(_v2, h, 'id');
  const _v4 = _cxt.closure(_v1, _v3);
  const _v5 = _cxt.closure(_v2, h, 'title');
  const _v6 = Link.eval(_cxt, _v4, _v5);
  return _v6;
}

com__gmmapowell.ArticleList.UpdateList.prototype.message.makeTitle.nfargs = function() { return 1; }

com__gmmapowell.ArticleList._C0.prototype.title = function(_cxt, _0, _1) {
  const s = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'heading', s);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.ArticleList._C0.prototype.title.nfargs = function() { return 2; }

com__gmmapowell.ArticleList._C2.prototype.load = function(_cxt, _0, _1) {
  const cat = _0;
  const _v1 = com__gmmapowell.ArticleList.UpdateList.eval(_cxt, this._card);
  const _v2 = _cxt.mksend('subscribe',this._card._contracts.required(_cxt, 'ajax'),2,_v1,null);
  const _v3 = FLBuiltin.parseUri;
  const _v4 = FLBuiltin.concat;
  const _v5 = _cxt.closure(_v4, '/ajax/articles.php?cat=', cat);
  const _v6 = _cxt.closure(_v3, _v5);
  const _v7 = AjaxOptions.eval(_cxt);
  const _v8 = _cxt.closure(_v2, _v6, _v7);
  const _v9 = _cxt.array(_v8);
  return _v9;
}

com__gmmapowell.ArticleList._C2.prototype.load.nfargs = function() { return 2; }

com__gmmapowell.Creative._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'card', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.Creative._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Creative._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/rainbow.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Creative._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.DisplayImage.prototype._field_img = function(_cxt) {
  return this.state.get('img');
}

com__gmmapowell.DisplayImage.prototype._field_img.nfargs = function() { return 0; }

com__gmmapowell.DisplayImage.prototype._field_posn = function(_cxt) {
  return this.state.get('posn');
}

com__gmmapowell.DisplayImage.prototype._field_posn.nfargs = function() { return 0; }

com__gmmapowell.Gallery.UpdateImages.prototype.message = function(_cxt, _0, _1) {
  const m = _0;
  const _v1 = com__gmmapowell.Gallery.UpdateImages.prototype.message.mapImages;
  const _v2 = FLBuiltin.assoc;
  const _v3 = FLBuiltin.parseJson;
  const _v4 = _cxt.mkacor(AjaxMessage.prototype._field_body,m,0);
  const _v5 = _cxt.closure(_v3, _v4);
  const _v6 = _cxt.closure(_v2, _v5, 'images');
  const _v7 = _cxt.oclosure(_v1, this, 0, _v6);
  const _v8 = Assign.eval(_cxt, this._card, 'images', _v7);
  const _v9 = _cxt.array(_v8);
  return _v9;
}

com__gmmapowell.Gallery.UpdateImages.prototype.message.nfargs = function() { return 2; }

if (typeof(com__gmmapowell.Gallery.UpdateImages.prototype.message) === 'undefined') com__gmmapowell.Gallery.UpdateImages.prototype.message = {};

com__gmmapowell.Gallery.UpdateImages.prototype.message.makeImage = function(_cxt, _0, _1) {
  const n = _0;
  const s = _1;
  const _v1 = _cxt.makeStatic('Image','_ctor_uri');
  const _v2 = FLBuiltin.parseUri;
  const _v3 = _cxt.closure(_v2, s);
  const _v4 = _cxt.closure(_v1, this._card, _v3);
  const _v5 = com__gmmapowell.DisplayImage.eval(_cxt, n, _v4);
  return _v5;
}

com__gmmapowell.Gallery.UpdateImages.prototype.message.makeImage.nfargs = function() { return 2; }

com__gmmapowell.Gallery.UpdateImages.prototype.message.mapImages = function(_cxt, _0, _1) {
  _1 = _cxt.head(_1);
  if (_cxt.isA(_1, 'Cons')) {
    var _2 = _cxt.field(_1, 'head');
    var _3 = _cxt.field(_1, 'tail');
    const n = _0;
    const s = _2;
    const l = _3;
    const _v1 = com__gmmapowell.Gallery.UpdateImages.prototype.message.makeImage;
    const _v2 = _cxt.oclosure(_v1, this, n, s);
    const _v3 = com__gmmapowell.Gallery.UpdateImages.prototype.message.mapImages;
    const _v4 = FLBuiltin.plus;
    const _v5 = _cxt.closure(_v4, n, 1);
    const _v6 = _cxt.oclosure(_v3, this, _v5, l);
    const _v7 = Cons.eval(_cxt, _v2, _v6);
    return _v7;
  } else if (_cxt.isA(_1, 'Nil')) {
    const n = _0;
    const _v8 = Nil.eval(_cxt);
    return _v8;
  } else 
    return FLError.eval(_cxt, 'mapImages: no matching case');
}

com__gmmapowell.Gallery.UpdateImages.prototype.message.mapImages.nfargs = function() { return 2; }

com__gmmapowell.Gallery._C1.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/gallery.png');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = com__gmmapowell.Gallery.UpdateImages.eval(_cxt, this._card);
  const _v5 = _cxt.mksend('subscribe',this._card._contracts.required(_cxt, 'ajax'),2,_v4,null);
  const _v6 = FLBuiltin.parseUri;
  const _v7 = _cxt.closure(_v6, 'https://gmmapowell.com/ajax/gallery.php');
  const _v8 = AjaxOptions.eval(_cxt);
  const _v9 = _cxt.closure(_v5, _v7, _v8);
  const _v10 = _cxt.array(_v3, _v9);
  return _v10;
}

com__gmmapowell.Gallery._C1.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.Gallery.prototype.decrement = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const e = _0;
    const _v1 = FLBuiltin.greaterThan;
    const _v2 = _cxt.closure(_v1, this.state.get('selected'), 0);
    if (_cxt.isTruthy(_v2)) {
      const _v3 = FLBuiltin.minus;
      const _v4 = _cxt.closure(_v3, this.state.get('selected'), 1);
      const _v5 = Assign.eval(_cxt, this, 'selected', _v4);
      const _v6 = _cxt.array(_v5);
      return _v6;
    } else {
      const _v7 = FLBuiltin.minus;
      const _v8 = FLBuiltin.arr_length;
      const _v9 = _cxt.closure(_v8, this.state.get('images'));
      const _v10 = _cxt.closure(_v7, _v9, 1);
      const _v11 = Assign.eval(_cxt, this, 'selected', _v10);
      const _v12 = _cxt.array(_v11);
      return _v12;
    }
  } else 
    return FLError.eval(_cxt, 'decrement: no matching case');
}

com__gmmapowell.Gallery.prototype.decrement.nfargs = function() { return 1; }

com__gmmapowell.Gallery.prototype.increment = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const e = _0;
    const _v1 = FLBuiltin.lessThan;
    const _v2 = FLBuiltin.minus;
    const _v3 = FLBuiltin.arr_length;
    const _v4 = _cxt.closure(_v3, this.state.get('images'));
    const _v5 = _cxt.closure(_v2, _v4, 1);
    const _v6 = _cxt.closure(_v1, this.state.get('selected'), _v5);
    if (_cxt.isTruthy(_v6)) {
      const _v7 = FLBuiltin.plus;
      const _v8 = _cxt.closure(_v7, this.state.get('selected'), 1);
      const _v9 = Assign.eval(_cxt, this, 'selected', _v8);
      const _v10 = _cxt.array(_v9);
      return _v10;
    } else {
      const _v11 = Assign.eval(_cxt, this, 'selected', 0);
      const _v12 = _cxt.array(_v11);
      return _v12;
    }
  } else 
    return FLError.eval(_cxt, 'increment: no matching case');
}

com__gmmapowell.Gallery.prototype.increment.nfargs = function() { return 1; }

com__gmmapowell.Home._C1.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/hollingworth.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Home._C1.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.downloads = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'downloads-page');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'downloads: no matching case');
}

com__gmmapowell.Home.prototype.downloads.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.goFish = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'go-fish');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'goFish: no matching case');
}

com__gmmapowell.Home.prototype.goFish.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.goNow = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'now');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'goNow: no matching case');
}

com__gmmapowell.Home.prototype.goNow.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.gotoGallery = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'gallery');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'gotoGallery: no matching case');
}

com__gmmapowell.Home.prototype.gotoGallery.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.ignoranceBlog = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'ignorance-blog');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'ignoranceBlog: no matching case');
}

com__gmmapowell.Home.prototype.ignoranceBlog.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.jumpToHiring = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'https://hireme.gmmapowell.com');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'jumpToHiring: no matching case');
}

com__gmmapowell.Home.prototype.jumpToHiring.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.lookAtTech = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'technology');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'lookAtTech: no matching case');
}

com__gmmapowell.Home.prototype.lookAtTech.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.observeLife = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'life');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'observeLife: no matching case');
}

com__gmmapowell.Home.prototype.observeLife.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.playSports = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'sports');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'playSports: no matching case');
}

com__gmmapowell.Home.prototype.playSports.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.talkPolitics = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'politics');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'talkPolitics: no matching case');
}

com__gmmapowell.Home.prototype.talkPolitics.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.whatNow = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'then');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'whatNow: no matching case');
}

com__gmmapowell.Home.prototype.whatNow.nfargs = function() { return 1; }

com__gmmapowell.Home.prototype.workoutloud = function(_cxt, _0) {
  _0 = _cxt.head(_0);
  if (_cxt.isA(_0, 'ClickEvent')) {
    const ev = _0;
    const _v1 = _cxt.mksend('redirect',this._contracts.required(_cxt, 'n'),1,null,null);
    const _v2 = FLBuiltin.parseUri;
    const _v3 = _cxt.closure(_v2, 'workoutloud');
    const _v4 = _cxt.closure(_v1, _v3);
    const _v5 = _cxt.array(_v4);
    return _v5;
  } else 
    return FLError.eval(_cxt, 'workoutloud: no matching case');
}

com__gmmapowell.Home.prototype.workoutloud.nfargs = function() { return 1; }

com__gmmapowell.NowThen._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'card', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.NowThen._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.NowThen._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/rainbow.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.NowThen._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.NowThen._C1.prototype.title = function(_cxt, _0, _1) {
  const t = _0;
  const _v1 = FLBuiltin.replaceStr;
  const _v2 = _cxt.closure(_v1, t, 'when-', '');
  const _v3 = Assign.eval(_cxt, this._card, 'myTitle', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.NowThen._C1.prototype.title.nfargs = function() { return 2; }

com__gmmapowell.Observations._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'card', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.Observations._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Observations._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/rainbow.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Observations._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.Politics._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = FLBuiltin.append;
  const _v2 = _cxt.closure(_v1, this._card.state.get('lists'), c);
  const _v3 = Assign.eval(_cxt, this._card, 'lists', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Politics._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Politics._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/townhall.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Politics._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.Politics._C0.prototype.unnest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Nil.eval(_cxt);
  const _v2 = Assign.eval(_cxt, this._card, 'lists', _v1);
  const _v3 = _cxt.array(_v2);
  return _v3;
}

com__gmmapowell.Politics._C0.prototype.unnest.nfargs = function() { return 2; }

com__gmmapowell.Root._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'child', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.Root._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Sports._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'card', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.Sports._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Sports._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/boundarypark.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Sports._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.Technology._C0.prototype.nest = function(_cxt, _0, _1) {
  const c = _0;
  const _v1 = Assign.eval(_cxt, this._card, 'card', c);
  const _v2 = _cxt.array(_v1);
  return _v2;
}

com__gmmapowell.Technology._C0.prototype.nest.nfargs = function() { return 2; }

com__gmmapowell.Technology._C0.prototype.ready = function(_cxt, _0) {
  const _v1 = _cxt.makeStatic('Image','_ctor_asset');
  const _v2 = _cxt.closure(_v1, this._card, '/images/technology.jpg');
  const _v3 = Assign.eval(_cxt, this._card, 'background', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.Technology._C0.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell.WorkOutLoud.UpdateContent.prototype.message = function(_cxt, _0, _1) {
  const m = _0;
  const _v1 = _cxt.makeStatic('Html','_ctor_from');
  const _v2 = _cxt.closure(_v1, this._card, m);
  const _v3 = Assign.eval(_cxt, this._card, 'content', _v2);
  const _v4 = _cxt.array(_v3);
  return _v4;
}

com__gmmapowell.WorkOutLoud.UpdateContent.prototype.message.nfargs = function() { return 2; }

com__gmmapowell.WorkOutLoud._C1.prototype.ready = function(_cxt, _0) {
  const _v1 = com__gmmapowell.WorkOutLoud.UpdateContent.eval(_cxt, this._card);
  const _v2 = _cxt.mksend('subscribe',this._card._contracts.required(_cxt, 'ajax'),2,_v1,null);
  const _v3 = FLBuiltin.parseUri;
  const _v4 = _cxt.closure(_v3, '/ajax/workoutloud.html');
  const _v5 = AjaxOptions.eval(_cxt);
  const _v6 = _cxt.closure(_v2, _v4, _v5);
  const _v7 = _cxt.makeStatic('Image','_ctor_asset');
  const _v8 = _cxt.closure(_v7, this._card, '/images/technology.jpg');
  const _v9 = Assign.eval(_cxt, this._card, 'background', _v8);
  const _v10 = _cxt.array(_v6, _v9);
  return _v10;
}

com__gmmapowell.WorkOutLoud._C1.prototype.ready.nfargs = function() { return 1; }

com__gmmapowell._init = function(_cxt) {
  const _v1 = new com__gmmapowell.SetTitle(_cxt);
  const _v2 = _cxt.registerContract('com.gmmapowell.SetTitle', _v1);
  const _v3 = _cxt.registerStruct('com.gmmapowell.Article.UpdateContent', com__gmmapowell.Article.UpdateContent);
  const _v4 = _cxt.registerStruct('com.gmmapowell.ArticleList.UpdateList', com__gmmapowell.ArticleList.UpdateList);
  const _v5 = _cxt.registerStruct('com.gmmapowell.Gallery.UpdateImages', com__gmmapowell.Gallery.UpdateImages);
  const _v6 = _cxt.registerStruct('com.gmmapowell.WorkOutLoud.UpdateContent', com__gmmapowell.WorkOutLoud.UpdateContent);
  const _v7 = _cxt.registerStruct('com.gmmapowell.DisplayImage', com__gmmapowell.DisplayImage);
  if (_cxt.isTruthy(com__gmmapowell._builtin_init)) {
    com__gmmapowell._builtin_init(_cxt);
  }
}

com__gmmapowell._init.nfargs = function() { return 0; }
com__gmmapowell.Article.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Article._C1.prototype._methods = function() {
  return {
    "load": com__gmmapowell.Article._C1.prototype.load,
    "ready": com__gmmapowell.Article._C1.prototype.ready
  };
};
com__gmmapowell.Article.UpdateContent.prototype._methods = function() {
  return {
    "message": com__gmmapowell.Article.UpdateContent.prototype.message
  };
};
com__gmmapowell.ArticleList.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.ArticleList._C0.prototype._methods = function() {
  return {
    "title": com__gmmapowell.ArticleList._C0.prototype.title
  };
};
com__gmmapowell.ArticleList._C2.prototype._methods = function() {
  return {
    "load": com__gmmapowell.ArticleList._C2.prototype.load
  };
};
com__gmmapowell.ArticleList.UpdateList.prototype._methods = function() {
  return {
    "message": com__gmmapowell.ArticleList.UpdateList.prototype.message
  };
};
com__gmmapowell.Creative.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Creative._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Creative._C0.prototype.nest,
    "ready": com__gmmapowell.Creative._C0.prototype.ready
  };
};
com__gmmapowell.Gallery.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Gallery._C1.prototype._methods = function() {
  return {
    "ready": com__gmmapowell.Gallery._C1.prototype.ready
  };
};
com__gmmapowell.Gallery.UpdateImages.prototype._methods = function() {
  return {
    "message": com__gmmapowell.Gallery.UpdateImages.prototype.message
  };
};
com__gmmapowell.Home.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Home._C1.prototype._methods = function() {
  return {
    "ready": com__gmmapowell.Home._C1.prototype.ready
  };
};
com__gmmapowell.NowThen.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.NowThen._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.NowThen._C0.prototype.nest,
    "ready": com__gmmapowell.NowThen._C0.prototype.ready
  };
};
com__gmmapowell.NowThen._C1.prototype._methods = function() {
  return {
    "title": com__gmmapowell.NowThen._C1.prototype.title
  };
};
com__gmmapowell.Observations.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Observations._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Observations._C0.prototype.nest,
    "ready": com__gmmapowell.Observations._C0.prototype.ready
  };
};
com__gmmapowell.Politics.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Politics._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Politics._C0.prototype.nest,
    "ready": com__gmmapowell.Politics._C0.prototype.ready,
    "unnest": com__gmmapowell.Politics._C0.prototype.unnest
  };
};
com__gmmapowell.Root.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Root._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Root._C0.prototype.nest
  };
};
com__gmmapowell.Sports.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Sports._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Sports._C0.prototype.nest,
    "ready": com__gmmapowell.Sports._C0.prototype.ready
  };
};
com__gmmapowell.Technology.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.Technology._C0.prototype._methods = function() {
  return {
    "nest": com__gmmapowell.Technology._C0.prototype.nest,
    "ready": com__gmmapowell.Technology._C0.prototype.ready
  };
};
com__gmmapowell.WorkOutLoud.prototype._methods = function() {
  return {
  };
};
com__gmmapowell.WorkOutLoud._C1.prototype._methods = function() {
  return {
    "ready": com__gmmapowell.WorkOutLoud._C1.prototype.ready
  };
};
com__gmmapowell.WorkOutLoud.UpdateContent.prototype._methods = function() {
  return {
    "message": com__gmmapowell.WorkOutLoud.UpdateContent.prototype.message
  };
};
com__gmmapowell.Article.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.ArticleList.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Creative.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Gallery.prototype._eventHandlers = function() {
  return {
    'items/image' : [
      { type: 'style', slot: 'left', option: 0, event: ClickEvent, handler: com__gmmapowell.Gallery.prototype.decrement },
      { type: 'style', slot: 'right', option: 0, event: ClickEvent, handler: com__gmmapowell.Gallery.prototype.increment }
    ]
  };
};
com__gmmapowell.Home.prototype._eventHandlers = function() {
  return {
    'cards/home' : [
      { type: 'style', slot: 'observations', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.observeLife },
      { type: 'style', slot: 'sports', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.playSports },
      { type: 'style', slot: 'now', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.whatNow },
      { type: 'style', slot: 'politics', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.talkPolitics },
      { type: 'style', slot: 'technology', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.lookAtTech },
      { type: 'style', slot: 'workoutloud', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.workoutloud },
      { type: 'style', slot: 'gallery', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.gotoGallery },
      { type: 'style', slot: 'hireme', option: 0, event: ClickEvent, handler: com__gmmapowell.Home.prototype.jumpToHiring }
    ]
    ,
    _: [
      { event: ClickEvent, handler: com__gmmapowell.Home.prototype.downloads },
      { event: ClickEvent, handler: com__gmmapowell.Home.prototype.goFish },
      { event: ClickEvent, handler: com__gmmapowell.Home.prototype.goNow },
      { event: ClickEvent, handler: com__gmmapowell.Home.prototype.ignoranceBlog }
    ]
  };
};
com__gmmapowell.NowThen.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Observations.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Politics.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Root.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Sports.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.Technology.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell.WorkOutLoud.prototype._eventHandlers = function() {
  return {};
};
com__gmmapowell._Application.prototype._routing = function() {
  return {
    title: 'Gareth Powell',
    secure: false,
    cards: [
      { name: 'main', card: com__gmmapowell.Root },
      { name: 'home', card: com__gmmapowell.Home }
    ],
    enter: [
    ],
    at: [
      { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'home' }] }
    ],
    exit: [
    ],
    routes: [
      {
        path: 'life', 
        title: 'Observations on Life',
        secure: false,
        cards: [
          { name: 'observations', card: com__gmmapowell.Observations },
          { name: 'titles', card: com__gmmapowell.ArticleList }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'observations' }] },
          { card: 'titles', contract: 'Lifecycle', action: 'load', args: [{ str: 'life' }] }
        ],
        at: [
          { card: 'observations', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'titles' }] }
        ],
        exit: [
        ],
        routes: [
          {
            param: 'articleId', 
            secure: false,
            cards: [
              { name: 'article', card: com__gmmapowell.Article }
            ],
            enter: [
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ str: 'life-' }] },
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ param: 'articleId' }] },
              { card: 'observations', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'article' }] }
            ],
            at: [
            ],
            exit: [
            ],
            routes: [
            ]
          }
        ]
      },
      {
        path: 'now', 
        title: 'Now',
        secure: false,
        cards: [
          { name: 'nowthen', card: com__gmmapowell.NowThen },
          { name: 'fromWhen', card: com__gmmapowell.Article }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'nowthen' }] },
          { card: 'nowthen', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'fromWhen' }] },
          { card: 'fromWhen', contract: 'Lifecycle', action: 'load', args: [{ str: 'now-when-now' }] }
        ],
        at: [
        ],
        exit: [
        ],
        routes: [
        ]
      },
      {
        path: 'then', 
        title: 'Then',
        secure: false,
        cards: [
          { name: 'nowthen', card: com__gmmapowell.NowThen },
          { name: 'whens', card: com__gmmapowell.ArticleList }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'nowthen' }] },
          { card: 'whens', contract: 'Lifecycle', action: 'load', args: [{ str: 'now' }] }
        ],
        at: [
          { card: 'nowthen', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'whens' }] }
        ],
        exit: [
        ],
        routes: [
          {
            param: 'date', 
            secure: false,
            cards: [
              { name: 'fromWhen', card: com__gmmapowell.Article }
            ],
            enter: [
              { card: 'nowthen', contract: 'com.gmmapowell.SetTitle', action: 'title', args: [{ param: 'date' }] },
              { card: 'fromWhen', contract: 'Lifecycle', action: 'load', args: [{ str: 'now-' }] },
              { card: 'fromWhen', contract: 'Lifecycle', action: 'load', args: [{ param: 'date' }] },
              { card: 'nowthen', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'fromWhen' }] }
            ],
            at: [
            ],
            exit: [
            ],
            routes: [
            ]
          }
        ]
      },
      {
        path: 'sports', 
        title: 'Following Sports',
        secure: false,
        cards: [
          { name: 'sports', card: com__gmmapowell.Sports },
          { name: 'titles', card: com__gmmapowell.ArticleList }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'sports' }] },
          { card: 'titles', contract: 'Lifecycle', action: 'load', args: [{ str: 'sports' }] }
        ],
        at: [
          { card: 'sports', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'titles' }] }
        ],
        exit: [
        ],
        routes: [
          {
            param: 'articleId', 
            secure: false,
            cards: [
              { name: 'article', card: com__gmmapowell.Article }
            ],
            enter: [
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ str: 'sports-' }] },
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ param: 'articleId' }] },
              { card: 'sports', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'article' }] }
            ],
            at: [
            ],
            exit: [
            ],
            routes: [
            ]
          }
        ]
      },
      {
        path: 'politics', 
        title: 'Talking Politics',
        secure: false,
        cards: [
          { name: 'politics', card: com__gmmapowell.Politics },
          { name: 'quickFixes', card: com__gmmapowell.ArticleList },
          { name: 'musings', card: com__gmmapowell.ArticleList },
          { name: 'thoughtExperiments', card: com__gmmapowell.ArticleList }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'politics' }] },
          { card: 'quickFixes', contract: 'Lifecycle', action: 'load', args: [{ str: 'politics-quickfixes' }] },
          { card: 'quickFixes', contract: 'com.gmmapowell.SetTitle', action: 'title', args: [{ str: 'Quick Fixes' }] },
          { card: 'musings', contract: 'Lifecycle', action: 'load', args: [{ str: 'politics-musings' }] },
          { card: 'musings', contract: 'com.gmmapowell.SetTitle', action: 'title', args: [{ str: 'Musings' }] },
          { card: 'thoughtExperiments', contract: 'Lifecycle', action: 'load', args: [{ str: 'politics-experiments' }] },
          { card: 'thoughtExperiments', contract: 'com.gmmapowell.SetTitle', action: 'title', args: [{ str: 'Thought Experiments' }] }
        ],
        at: [
          { card: 'politics', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'quickFixes' }] },
          { card: 'politics', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'musings' }] },
          { card: 'politics', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'thoughtExperiments' }] }
        ],
        exit: [
        ],
        routes: [
          {
            param: 'articleId', 
            secure: false,
            cards: [
              { name: 'article', card: com__gmmapowell.Article }
            ],
            enter: [
              { card: 'politics', contract: 'Lifecycle', action: 'unnest', args: [{ ref: 'quickFixes' }] },
              { card: 'politics', contract: 'Lifecycle', action: 'unnest', args: [{ ref: 'musings' }] },
              { card: 'politics', contract: 'Lifecycle', action: 'unnest', args: [{ ref: 'thoughtExperiments' }] },
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ str: 'politics-' }] },
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ param: 'articleId' }] },
              { card: 'politics', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'article' }] }
            ],
            at: [
            ],
            exit: [
            ],
            routes: [
            ]
          }
        ]
      },
      {
        path: 'gallery', 
        title: 'Image Gallery',
        secure: false,
        cards: [
          { name: 'gallery', card: com__gmmapowell.Gallery }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'gallery' }] }
        ],
        at: [
        ],
        exit: [
        ],
        routes: [
        ]
      },
      {
        path: 'technology', 
        title: 'Look at Technology',
        secure: false,
        cards: [
          { name: 'tech', card: com__gmmapowell.Technology },
          { name: 'titles', card: com__gmmapowell.ArticleList }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'tech' }] },
          { card: 'titles', contract: 'Lifecycle', action: 'load', args: [{ str: 'tech' }] }
        ],
        at: [
          { card: 'tech', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'titles' }] }
        ],
        exit: [
        ],
        routes: [
          {
            param: 'articleId', 
            secure: false,
            cards: [
              { name: 'article', card: com__gmmapowell.Article }
            ],
            enter: [
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ str: 'tech-' }] },
              { card: 'article', contract: 'Lifecycle', action: 'load', args: [{ param: 'articleId' }] },
              { card: 'tech', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'article' }] }
            ],
            at: [
            ],
            exit: [
            ],
            routes: [
            ]
          }
        ]
      },
      {
        path: 'workoutloud', 
        title: 'Working Out Loud',
        secure: false,
        cards: [
          { name: 'workloud', card: com__gmmapowell.WorkOutLoud }
        ],
        enter: [
          { card: 'main', contract: 'Lifecycle', action: 'nest', args: [{ ref: 'workloud' }] }
        ],
        at: [
        ],
        exit: [
        ],
        routes: [
        ]
      }
    ]
  };
};

export { com__gmmapowell };
