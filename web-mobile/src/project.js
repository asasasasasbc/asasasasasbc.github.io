window.__require=function t(e,r,o){function n(c,s){if(!r[c]){if(!e[c]){var u=c.split("/");if(u=u[u.length-1],!e[u]){var l="function"==typeof __require&&__require;if(!s&&l)return l(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+c+"'")}}var p=r[c]={exports:{}};e[c][0].call(p.exports,function(t){return n(e[c][1][t]||t)},p,p.exports,t,e,r,o)}return r[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)n(o[c]);return n}({AZLetterManager:[function(t,e,r){"use strict";cc._RF.push(e,"f5a5c2sFXNK3L2qfd8IXhs9","AZLetterManager");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,r,c):n(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var i=t("./AZSingleLetter"),c=cc._decorator,s=c.ccclass,u=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.letterPrefab=null,e.currentNode=null,e.nextNode=null,e.currentState=0,e.currentLetter=0,e.movingTimer=1,e.letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e}return o(e,t),e.prototype.start=function(){this.currentNode.getComponent(i.default).label.string=this.letters[this.currentLetter]},e.prototype.nextLetter=function(){this.currentLetter+=1,this.currentLetter>=this.letters.length&&(this.currentLetter-=this.letters.length)},e.prototype.prevLetter=function(){this.currentLetter--,this.currentLetter<0&&(this.currentLetter+=this.letters.length)},e.prototype.generateUpperLetter=function(){if(!(this.currentNode.getNumberOfRunningActions()>0)&&(null!=this.nextNode&&(this.currentNode.destroyAllChildren(),this.currentNode.destroy(),this.currentNode=this.nextNode,this.nextNode=null),null!=this.currentNode)){var t=cc.instantiate(this.letterPrefab);this.node.addChild(t),t.setPosition(cc.v2(this.currentNode.position.x,this.currentNode.position.y+this.currentNode.height)),this.prevLetter(),t.getComponent(i.default).label.string=this.letters[this.currentLetter],this.currentNode.runAction(cc.moveBy(this.movingTimer,cc.v2(0,-this.currentNode.height))),t.runAction(cc.moveBy(this.movingTimer,cc.v2(0,-this.currentNode.height))),this.nextNode=t}},e.prototype.generateLowerLetter=function(){if(!(this.currentNode.getNumberOfRunningActions()>0)&&(null!=this.nextNode&&(this.currentNode.destroyAllChildren(),this.currentNode.destroy(),this.currentNode=this.nextNode,this.nextNode=null),null!=this.currentNode)){var t=cc.instantiate(this.letterPrefab);this.node.addChild(t),t.setPosition(cc.v2(this.currentNode.position.x,this.currentNode.position.y-this.currentNode.height)),this.nextLetter(),t.getComponent(i.default).label.string=this.letters[this.currentLetter],this.currentNode.runAction(cc.moveBy(this.movingTimer,cc.v2(0,this.currentNode.height))),t.runAction(cc.moveBy(this.movingTimer,cc.v2(0,this.currentNode.height))),this.nextNode=t}},n([u(cc.Prefab)],e.prototype,"letterPrefab",void 0),n([u(cc.Node)],e.prototype,"currentNode",void 0),n([u(cc.Node)],e.prototype,"nextNode",void 0),n([u({tooltip:"0 means not moving, 1 means move up, -1 means move down"})],e.prototype,"currentState",void 0),n([u],e.prototype,"currentLetter",void 0),n([u],e.prototype,"movingTimer",void 0),e=n([s],e)}(cc.Component);r.default=l,cc._RF.pop()},{"./AZSingleLetter":"AZSingleLetter"}],AZSingleLetter:[function(t,e,r){"use strict";cc._RF.push(e,"46b19wpH5VEXLxfCiFJtEm/","AZSingleLetter");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,r,c):n(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}return o(e,t),e.prototype.start=function(){},e.prototype.setUpChar=function(t){this.label.string=t},n([s(cc.Label)],e.prototype,"label",void 0),e=n([c],e)}(cc.Component);r.default=u,cc._RF.pop()},{}],AZWordsManager:[function(t,e,r){"use strict";cc._RF.push(e,"ca6e0I9v7dCQon1usX52hYy","AZWordsManager");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,r,c):n(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var i=t("./AZLetterManager"),c=cc._decorator,s=c.ccclass,u=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.letterMangers=[],e.targetWord=[],e.light=null,e.lb=null,e}return o(e,t),e.prototype.start=function(){},e.prototype.update=function(t){for(var e=0,r=0;r<this.letterMangers.length;r++){var o=Math.abs(this.letterMangers[r].currentLetter-this.convertToNum(this.targetWord[r]));e+=o=Math.min(o,26-o)}var n=1-e/(13*this.letterMangers.length);this.lb.string="Accuracy"+Math.ceil(100*n),this.light.opacity=Math.ceil(255*n)},e.prototype.convertToNum=function(t){return t.charCodeAt(0)-"A".charCodeAt(0)},n([u([i.default])],e.prototype,"letterMangers",void 0),n([u({type:String,default:[]})],e.prototype,"targetWord",void 0),n([u(cc.Node)],e.prototype,"light",void 0),n([u(cc.Label)],e.prototype,"lb",void 0),e=n([s],e)}(cc.Component);r.default=l,cc._RF.pop()},{"./AZLetterManager":"AZLetterManager"}],Helloworld:[function(t,e,r){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),n=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,r,c):n(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return o(e,t),e.prototype.start=function(){this.label.string=this.text},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([c],e)}(cc.Component);r.default=u,cc._RF.pop()},{}]},{},["Helloworld","AZLetterManager","AZSingleLetter","AZWordsManager"]);