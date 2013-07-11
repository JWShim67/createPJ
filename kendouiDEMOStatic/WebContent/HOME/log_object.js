

console.log(kendo);

var getProp = Object.getOwnPropertyNames;
var target = kendo;
var a = getProp(target);
console.log(a);
for(var key in a) {
  var item = a[key];
  console.log(item);
}
console.log('');
for0 : for(var key in a) {
  var item = a[key];
  var value = item;
  console.log(item);
  item = target[item];
  console.log('  ', value, ' ', item);
  var a1 = getProp(item);
  if ( typeof a1 !== "object" || typeof a1 === "undefined" ) continue for0;
  if ( typeof a1 === "object" ) {

     console.log('>>****>> ', value , ' | ', item);
    for1 : for(var key1 in a1) {
      var item1 = a1[key];
      var value1 = item1;
      //console.log('>>1111>> ', value , ' > ', value1, ' | ', item1, item);
      var target1 = item[item1];
      if ( typeof target1 !== "object" || typeof target1 === "undefined" ) {
        console.log('>>>> continue | value is ', value, ' > ', value1, target1);
        continue;
      } 
      if ( target1.constructor.name === "Array" || target1.length < 1 ) {
        console.log('>>>> continue | array value is ', value, ' > ', value1, target1);
        continue;
      } 

      var a2 = getProp(target1);
      if ( typeof a2 !== "object" || typeof a2 === "undefined" ) {
        console.log('>>>> continue | value is ', value, ' > ', value2);
        continue for1;
      } 
      if ( typeof a2 === "object" ) {
        console.log('>>>> object ', a2);
      } else {
        console.log('>>for if else>> ', value , ' > ', value1, ' | ');
      }
    }
  } else {
     console.log('>>else>> ', value , ' > ', value1, ' | ', item1);
  }
}
console.log(kendo);

/**
 * 
 * 
[ kendo ]


Object {cultures: Object, culture: function, format: function, toString: function, parseDate: function¡¦}
Class: function y(){}
DateView: function (b){var c=this,e=document.body,f=M.sharedCalendar;f||(f=M.sharedCalendar=new d.Calendar(a(j).hide().appendTo(e)),E.makeUnselectable(f.element)),c.calendar=f,c.options=b=b||{},c.popup=new d.Popup(a(j).addClass("k-calendar-container").appendTo(e),I(b.popup,b)),c._templates(),c.value(b.value)}
Drag: function (b,e){var g=this,h={},l,m="."+c.guid();e=e||{},l=g.filter=e.filter,g.threshold=e.threshold||0,b=a(b),i.fn.init.call(g),h={},h[I(r,m)]=j(g._move,g),h[I(s,m)]=j(g._end,g),k(g,{x:new K("X"),y:new K("Y"),element:b,surface:e.global?f:b,pressed:!1,eventMap:h,ns:m}),b.on(q,l,j(g._start,g)).on("dragstart",l,J),e.allowSelection||b.on("mousedown selectstart",l,J),d.touch&&g.surface[0].addEventListener("touchend",function(a){g.moved&&a.preventDefault()},!0),g.bind([F,B,C,D,E],e)}
Observable: function (){this._events={}}
Tap: function (a,b){var c=this;c.capture=!1,a[0].addEventListener(q,j(c._press,c),!0),a.on(s,j(c._release,c)),i.fn.init.call(c),c.bind(["press","release"],b||{})}
Template: Object
TimeView: function (b){var d=this,e;d.options=b,d.ul=a('<ul unselectable="on" class="k-list k-reset"/>').css({overflow:c.support.touch?"":"auto"}).delegate(n,k,z(d._click,d)).delegate(n,"mouseenter",function(){a(this).addClass(r)}).delegate(n,"mouseleave",function(){a(this).removeClass(r)}),d.list=a("<div class='k-list-container'/>").append(d.ul).mousedown(function(a){a.preventDefault()}),d._popup(),d.template=c.template('<li class="k-item" unselectable="on">#=data#</li>',{useWithBlock:!1})}
accessor: function (a){return{get:c.getter(a),set:c.setter(a)}}
animate: function R(b,c,d,e,f){b.each(function(b,g){g=a(g),g.queue(function(){P.promise(g,Q(c,d,e,f))})});return b}
attr: function (a){return"data-"+c.ns+a}
bind: function A(b,d,e){var f,g;d=c.observable(d),b=a(b);for(f=0,g=b.length;f<g;f++)z(b[f],d,d,e)}
calendar: Object
culture: function (a){if(a===b)return c.cultures.current;var d=c.cultures,e=d[a]||d[o];e.calendar=e.calendars.standard,d.current=e}
cultures: Object
data: Object
dataviz: Object
deepExtend: function I(a){var b=1,c=arguments.length;for(b=1;b<c;b++)J(a,arguments[b]);return a}
directions: Object
eventTarget: function (a){return a.target}
expr: function (a,b){a=a||"",a&&a.charAt(0)!=="["&&(a="."+a),b?a=$(a.split(".")):a="d"+a;return a}
format: function (b){var c=arguments;return b.replace(a,function(a,b,d){var e=c[parseInt(b)+1];return t(e,d?d.substring(1):"")})}
fx: Object
getOffset: function M(a,b){b||(b="offset");var c=a[b](),d=m.mobileOS;if(m.touch&&d.ios&&d.flatVersion<410){var e=b=="offset"?c:a.offset(),f=c.left==e.left&&c.top==e.top;if(f)return{top:c.top-window.scrollY,left:c.left-window.scrollX}}return c}
getter: function (a,b){return v[a]=v[a]||new Function("d","return "+c.expr(a,b))}
guid: function (){var a="",b,c;for(b=0;b<32;b++){c=j.random()*16|0;if(b==8||b==12||b==16||b==20)a+="-";a+=(b==12?4:b==16?c&3|8:c).toString(16)}return a}
history: f
htmlEncode: function X(a){return(""+a).replace(U,"&amp;").replace(V,"&lt;").replace(W,"&gt;")}
init: function (b,d){a(b).find("[data-"+c.ns+"role]").andSelf().each(function(){c.initWidget(this,{},d)})}
initWidget: function (d,e,f){var g,h,i,j,k,l,m;d=d.nodeType?d:d[0],l=d.getAttribute("data-"+c.ns+"role");if(!!l){m=be(d,"dataSource"),i=(f||c.ui).roles[l];if(!i)return;e=a.extend({},bf(d,i.fn.options),e),m&&(typeof m===p?e.dataSource=c.getter(m)(window):e.dataSource=m);for(j=0,k=i.fn.events.length;j<k;j++)h=i.fn.events[j],value=be(d,h),value!==b&&(e[h]=c.getter(value)(window));g=a(d).data("kendo"+i.fn.options.name),g?g.setOptions(e):g=new i(d,e);return g}}
isLocalUrl: function (a){return a&&!_.test(a)}
isNodeEmpty: function L(b){return a.trim(a(b).contents().filter(function(){return this.nodeType!=8}).html())===""}
keys: Object
logToConsole: function (a){typeof console!="undefined"&&console.log&&console.log(a)}
mobile: Object
notify: function E(a,b){var c=a.element,d=c[0].kendoBindingTarget;d&&A(c,d.source,b)}
ns: ""
observable: function (a){a instanceof e||(a=new e(a));return a}
parseDate: function (a,b,e){if(a instanceof Date)return a;var f=0,i=null,j,k,l;e?typeof e===p&&(c.culture(e),e=c.culture()):e=c.culture();if(!b){b=[],l=e.calendar.patterns,j=d.length;for(;f<j;f++)b[f]=l[d[f]];b[f]="ddd MMM dd yyyy HH:mm:ss",f=0}b=g(b)?b:[b],j=b.length;for(;f<j;f++){i=h(a,b[f],e);if(i)return i}return i}
parseEffects: function (a,b){var d={};typeof a=="string"?e(a.split(" "),function(a,e){var f=!u.test(e),g=e.replace(t,function(a,b,c){return b+":"+c.toLowerCase()}),h=g.split(":"),i=h[1],j={};h.length>1&&(j.direction=b&&f?c.directions[i].reverse:i),d[h[0]]=j}):e(a,function(a){var e=this.direction;e&&b&&!u.test(a)&&(this.direction=c.directions[e].reverse),d[a]=this});return d}
parseFloat: function (d,e){if(!d&&d!==0)return null;if(typeof d===q)return d;d=d.toString(),e=c.cultures[e]||c.cultures.current;var f=e.numberFormat,g=f.percent,h=f.currency,i=h.symbol,j=g.symbol,k=d.indexOf("-")>-1,l;if(b.test(d)){d=parseFloat(d),isNaN(d)&&(d=null);return d}d.indexOf(i)>-1?(f=h,l=f.pattern[0].replace("$",i).split("n"),d.indexOf(l[0])>-1&&d.indexOf(l[1])>-1&&(d=d.replace(l[0],"").replace(l[1],""),k=!0)):d.indexOf(j)>-1&&(f=g,i=j),d=d.replace("-","").replace(i,"").replace(a," ").split(f[","].replace(a," ")).join("").replace(f["."],"."),d=parseFloat(d),isNaN(d)?d=null:k&&(d*=-1);return d}
parseInt: function (a,b){var d=c.parseFloat(a,b);d&&(d=d|0);return d}
parseOptions: function bf(d,e){var f={},g;for(option in e)g=be(d,option),g!==b&&(bb.test(option)&&(g=c.template(a("#"+g).html())),f[option]=g);return f}
render: function (){return e.apply(n,i.concat(l.call(arguments)))}
roleSelector: function (a){return"["+c.attr("role")+"="+a+"]"}
setter: function (a){return w[a]=w[a]||new Function("d,value","d."+a+"=value")}
size: function K(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}
stringify: function (){return e.apply(n,i.concat(l.call(arguments)))}
support: Object
template: function (){return e.apply(n,i.concat(l.call(arguments)))}
toString: function t(a,c){if(c){if(a instanceof Date)return r(a,c);if(typeof a===q)return s(a,c)}return a!==b?a:""}
toggleClass: function (a,b,c,d){b&&(b=b.split(" "),l&&(c=f({exclusive:"all",duration:400,ease:"ease-out"},c),a.css(K,c.exclusive+" "+c.duration+"ms "+c.ease),setTimeout(function(){a.css(K,A).css(E)},c.duration)),e(b,function(b,c){a.toggleClass(c,d)}));return a}
touchLocation: function (a){return{idx:0,x:a.pageX,y:a.pageY}}
touchScroller: function (a,b){if(m.touch&&c.mobile.ui.Scroller){a.kendoMobileScroller(b);return a.data("kendoMobileScroller")}return!1}
ui: Object
unbind: function D(b){var c,d;b=a(b);for(c=0,d=b.length;c<d;c++)C(b[c])}
wrap: function H(b){var d=a.browser;if(!b.parent().hasClass("k-animation-container")){var e=b.css(c.support.transitions.css+"box-shadow")||b.css("box-shadow"),f=e?e.match(n)||[0,0,0,0,0]:[0,0,0,0,0],g=j.max(+f[3],+(f[4]||0)),h=-f[1]+g,i=+f[1]+g,k=+f[2]+g;d.opera&&(h=i=k=5),b.wrap(a("<div/>").addClass("k-animation-container").css({width:b.outerWidth(),height:b.outerHeight(),marginLeft:-h,paddingLeft:h,paddingRight:i,paddingBottom:k}))}else{var l=b.parent(".k-animation-container");l.is(":hidden")&&l.show(),l.css({width:b.outerWidth(),height:b.outerHeight()})}d.msie&&j.floor(d.version)<=7&&b.css({zoom:1});return b.parent()}
__proto__: Object


Object {cultures: Object, culture: function, format: function, toString: function, parseDate: function¡¦}
["cultures", "culture", "format", "toString", "parseDate", "parseInt", "parseFloat", "ui", "fx", "data", "mobile", "keys", "support", "animate", "ns", "attr", "wrap", "deepExtend", "size", "isNodeEmpty", "getOffset", "parseEffects", "toggleClass", "directions", "Observable", "Class", "Template", "template", "render", "stringify", "touchLocation", "eventTarget", "htmlEncode", "isLocalUrl", "expr", "getter", "setter", "accessor", "guid", "roleSelector", "logToConsole", "notify", "initWidget", "init", "parseOptions", "touchScroller", "unbind", "bind", "observable", "Drag", "Tap", "calendar", "DateView", "TimeView", "dataviz", "history"]
cultures
culture
format
toString
parseDate
parseInt
parseFloat
ui
fx
data
mobile
keys
support
animate
ns
attr
wrap
deepExtend
size
isNodeEmpty
getOffset
parseEffects
toggleClass
directions
Observable
Class
Template
template
render
stringify
touchLocation
eventTarget
htmlEncode
isLocalUrl
expr
getter
setter
accessor
guid
roleSelector
logToConsole
notify
initWidget
init
parseOptions
touchScroller
unbind
bind
observable
Drag
Tap
calendar
DateView
TimeView
dataviz
history
cultures
   cultures   
Object {en-US: Object, current: Object}
>>****>>  cultures  |  
Object {en-US: Object, current: Object}
>>>> object  ["name", "numberFormat", "calendars", "calendar"]
>>>> object  ["name", "numberFormat", "calendars", "calendar"]
culture
   culture   function (a){if(a===b)return c.cultures.current;var d=c.cultures,e=d[a]||d[o];e.calendar=e.calendars.standard,d.current=e}
>>****>>  culture  |  function (a){if(a===b)return c.cultures.current;var d=c.cultures,e=d[a]||d[o];e.calendar=e.calendars.standard,d.current=e}
5
>>>> continue | value is  culture  >  name 
format
   format   function (b){var c=arguments;return b.replace(a,function(a,b,d){var e=c[parseInt(b)+1];return t(e,d?d.substring(1):"")})}
>>****>>  format  |  function (b){var c=arguments;return b.replace(a,function(a,b,d){var e=c[parseInt(b)+1];return t(e,d?d.substring(1):"")})}
TypeError: Cannot read property 'constructor' of null


[ Sys ]

Object {cultures: Object, culture: function, format: function, toString: function, parseDate: function¡¦}
Class: function y(){}
DateView: function (b){var c=this,e=document.body,f=M.sharedCalendar;f||(f=M.sharedCalendar=new d.Calendar(a(j).hide().appendTo(e)),E.makeUnselectable(f.element)),c.calendar=f,c.options=b=b||{},c.popup=new d.Popup(a(j).addClass("k-calendar-container").appendTo(e),I(b.popup,b)),c._templates(),c.value(b.value)}
Drag: function (b,e){var g=this,h={},l,m="."+c.guid();e=e||{},l=g.filter=e.filter,g.threshold=e.threshold||0,b=a(b),i.fn.init.call(g),h={},h[I(r,m)]=j(g._move,g),h[I(s,m)]=j(g._end,g),k(g,{x:new K("X"),y:new K("Y"),element:b,surface:e.global?f:b,pressed:!1,eventMap:h,ns:m}),b.on(q,l,j(g._start,g)).on("dragstart",l,J),e.allowSelection||b.on("mousedown selectstart",l,J),d.touch&&g.surface[0].addEventListener("touchend",function(a){g.moved&&a.preventDefault()},!0),g.bind([F,B,C,D,E],e)}
Observable: function (){this._events={}}
Tap: function (a,b){var c=this;c.capture=!1,a[0].addEventListener(q,j(c._press,c),!0),a.on(s,j(c._release,c)),i.fn.init.call(c),c.bind(["press","release"],b||{})}
Template: Object
TimeView: function (b){var d=this,e;d.options=b,d.ul=a('<ul unselectable="on" class="k-list k-reset"/>').css({overflow:c.support.touch?"":"auto"}).delegate(n,k,z(d._click,d)).delegate(n,"mouseenter",function(){a(this).addClass(r)}).delegate(n,"mouseleave",function(){a(this).removeClass(r)}),d.list=a("<div class='k-list-container'/>").append(d.ul).mousedown(function(a){a.preventDefault()}),d._popup(),d.template=c.template('<li class="k-item" unselectable="on">#=data#</li>',{useWithBlock:!1})}
accessor: function (a){return{get:c.getter(a),set:c.setter(a)}}
animate: function R(b,c,d,e,f){b.each(function(b,g){g=a(g),g.queue(function(){P.promise(g,Q(c,d,e,f))})});return b}
attr: function (a){return"data-"+c.ns+a}
bind: function A(b,d,e){var f,g;d=c.observable(d),b=a(b);for(f=0,g=b.length;f<g;f++)z(b[f],d,d,e)}
calendar: Object
culture: function (a){if(a===b)return c.cultures.current;var d=c.cultures,e=d[a]||d[o];e.calendar=e.calendars.standard,d.current=e}
cultures: Object
data: Object
dataviz: Object
deepExtend: function I(a){var b=1,c=arguments.length;for(b=1;b<c;b++)J(a,arguments[b]);return a}
directions: Object
eventTarget: function (a){return a.target}
expr: function (a,b){a=a||"",a&&a.charAt(0)!=="["&&(a="."+a),b?a=$(a.split(".")):a="d"+a;return a}
format: function (b){var c=arguments;return b.replace(a,function(a,b,d){var e=c[parseInt(b)+1];return t(e,d?d.substring(1):"")})}
fx: Object
getOffset: function M(a,b){b||(b="offset");var c=a[b](),d=m.mobileOS;if(m.touch&&d.ios&&d.flatVersion<410){var e=b=="offset"?c:a.offset(),f=c.left==e.left&&c.top==e.top;if(f)return{top:c.top-window.scrollY,left:c.left-window.scrollX}}return c}
getter: function (a,b){return v[a]=v[a]||new Function("d","return "+c.expr(a,b))}
guid: function (){var a="",b,c;for(b=0;b<32;b++){c=j.random()*16|0;if(b==8||b==12||b==16||b==20)a+="-";a+=(b==12?4:b==16?c&3|8:c).toString(16)}return a}
history: f
htmlEncode: function X(a){return(""+a).replace(U,"&amp;").replace(V,"&lt;").replace(W,"&gt;")}
init: function (b,d){a(b).find("[data-"+c.ns+"role]").andSelf().each(function(){c.initWidget(this,{},d)})}
initWidget: function (d,e,f){var g,h,i,j,k,l,m;d=d.nodeType?d:d[0],l=d.getAttribute("data-"+c.ns+"role");if(!!l){m=be(d,"dataSource"),i=(f||c.ui).roles[l];if(!i)return;e=a.extend({},bf(d,i.fn.options),e),m&&(typeof m===p?e.dataSource=c.getter(m)(window):e.dataSource=m);for(j=0,k=i.fn.events.length;j<k;j++)h=i.fn.events[j],value=be(d,h),value!==b&&(e[h]=c.getter(value)(window));g=a(d).data("kendo"+i.fn.options.name),g?g.setOptions(e):g=new i(d,e);return g}}
isLocalUrl: function (a){return a&&!_.test(a)}
isNodeEmpty: function L(b){return a.trim(a(b).contents().filter(function(){return this.nodeType!=8}).html())===""}
keys: Object
logToConsole: function (a){typeof console!="undefined"&&console.log&&console.log(a)}
mobile: Object
notify: function E(a,b){var c=a.element,d=c[0].kendoBindingTarget;d&&A(c,d.source,b)}
ns: ""
observable: function (a){a instanceof e||(a=new e(a));return a}
parseDate: function (a,b,e){if(a instanceof Date)return a;var f=0,i=null,j,k,l;e?typeof e===p&&(c.culture(e),e=c.culture()):e=c.culture();if(!b){b=[],l=e.calendar.patterns,j=d.length;for(;f<j;f++)b[f]=l[d[f]];b[f]="ddd MMM dd yyyy HH:mm:ss",f=0}b=g(b)?b:[b],j=b.length;for(;f<j;f++){i=h(a,b[f],e);if(i)return i}return i}
parseEffects: function (a,b){var d={};typeof a=="string"?e(a.split(" "),function(a,e){var f=!u.test(e),g=e.replace(t,function(a,b,c){return b+":"+c.toLowerCase()}),h=g.split(":"),i=h[1],j={};h.length>1&&(j.direction=b&&f?c.directions[i].reverse:i),d[h[0]]=j}):e(a,function(a){var e=this.direction;e&&b&&!u.test(a)&&(this.direction=c.directions[e].reverse),d[a]=this});return d}
parseFloat: function (d,e){if(!d&&d!==0)return null;if(typeof d===q)return d;d=d.toString(),e=c.cultures[e]||c.cultures.current;var f=e.numberFormat,g=f.percent,h=f.currency,i=h.symbol,j=g.symbol,k=d.indexOf("-")>-1,l;if(b.test(d)){d=parseFloat(d),isNaN(d)&&(d=null);return d}d.indexOf(i)>-1?(f=h,l=f.pattern[0].replace("$",i).split("n"),d.indexOf(l[0])>-1&&d.indexOf(l[1])>-1&&(d=d.replace(l[0],"").replace(l[1],""),k=!0)):d.indexOf(j)>-1&&(f=g,i=j),d=d.replace("-","").replace(i,"").replace(a," ").split(f[","].replace(a," ")).join("").replace(f["."],"."),d=parseFloat(d),isNaN(d)?d=null:k&&(d*=-1);return d}
parseInt: function (a,b){var d=c.parseFloat(a,b);d&&(d=d|0);return d}
parseOptions: function bf(d,e){var f={},g;for(option in e)g=be(d,option),g!==b&&(bb.test(option)&&(g=c.template(a("#"+g).html())),f[option]=g);return f}
render: function (){return e.apply(n,i.concat(l.call(arguments)))}
roleSelector: function (a){return"["+c.attr("role")+"="+a+"]"}
setter: function (a){return w[a]=w[a]||new Function("d,value","d."+a+"=value")}
size: function K(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}
stringify: function (){return e.apply(n,i.concat(l.call(arguments)))}
support: Object
template: function (){return e.apply(n,i.concat(l.call(arguments)))}
toString: function t(a,c){if(c){if(a instanceof Date)return r(a,c);if(typeof a===q)return s(a,c)}return a!==b?a:""}
toggleClass: function (a,b,c,d){b&&(b=b.split(" "),l&&(c=f({exclusive:"all",duration:400,ease:"ease-out"},c),a.css(K,c.exclusive+" "+c.duration+"ms "+c.ease),setTimeout(function(){a.css(K,A).css(E)},c.duration)),e(b,function(b,c){a.toggleClass(c,d)}));return a}
touchLocation: function (a){return{idx:0,x:a.pageX,y:a.pageY}}
touchScroller: function (a,b){if(m.touch&&c.mobile.ui.Scroller){a.kendoMobileScroller(b);return a.data("kendoMobileScroller")}return!1}
ui: Object
unbind: function D(b){var c,d;b=a(b);for(c=0,d=b.length;c<d;c++)C(b[c])}
wrap: function H(b){var d=a.browser;if(!b.parent().hasClass("k-animation-container")){var e=b.css(c.support.transitions.css+"box-shadow")||b.css("box-shadow"),f=e?e.match(n)||[0,0,0,0,0]:[0,0,0,0,0],g=j.max(+f[3],+(f[4]||0)),h=-f[1]+g,i=+f[1]+g,k=+f[2]+g;d.opera&&(h=i=k=5),b.wrap(a("<div/>").addClass("k-animation-container").css({width:b.outerWidth(),height:b.outerHeight(),marginLeft:-h,paddingLeft:h,paddingRight:i,paddingBottom:k}))}else{var l=b.parent(".k-animation-container");l.is(":hidden")&&l.show(),l.css({width:b.outerWidth(),height:b.outerHeight()})}d.msie&&j.floor(d.version)<=7&&b.css({zoom:1});return b.parent()}
__proto__: Object


 * 
 */

