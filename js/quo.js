// Generated by CoffeeScript 1.6.3
/*
Basic Quo Module

@namespace Quo
@class Base

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/(function(){"use strict";var e;e=function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m;r=[];u=Object.prototype;o=/^\s*<(\w+|!)[^>]*>/;n=[1,9,11];t=/^\.([\w-]+)$/;s=/^#[\w\d-]+$/;l=/^[\w-]+$/;a=document.createElement("table");f=document.createElement("tr");i={tr:document.createElement("tbody"),tbody:a,thead:a,tfoot:a,td:f,th:f,"*":document.createElement("div")};e=function(t,n){var r;if(!t)return v();if(e.toType(t)==="function")return e(document).ready(t);r=d(t,n);return v(r,t)};e.query=function(e,n){var r;if(t.test(n))r=e.getElementsByClassName(n.replace(".",""));else if(l.test(n))r=e.getElementsByTagName(n);else if(s.test(n)&&e===document){r=e.getElementById(n.replace("#",""));r||(r=[])}else r=e.querySelectorAll(n);return r.nodeType?[r]:Array.prototype.slice.call(r)};e.extend=function(e){Array.prototype.slice.call(arguments,1).forEach(function(t){var n,r;r=[];for(n in t)r.push(e[n]=t[n]);return r});return e};e.toType=function(e){return u.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};e.each=function(t,n){var r,i,s,o,u;i=void 0;s=void 0;if(e.toType(t)==="array")for(i=o=0,u=t.length;o<u;i=++o){r=t[i];n.call(r,i,r)===!1&&t}else for(s in t)n.call(t[s],s,t[s])===!1&&t;return t};e.map=function(t,n){var r,i,s,o;o=[];r=void 0;i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){s=n(t[r],r);s!=null&&o.push(s);r++}}else for(i in t){s=n(t[i],i);s!=null&&o.push(s)}return h(o)};e.mix=function(){var e,t,n,r,i;n={};e=0;r=arguments.length;while(e<r){t=arguments[e];for(i in t)m(t,i)&&t[i]!==undefined&&(n[i]=t[i]);e++}return n};v=function(e,t){t==null&&(t="");e=e||r;e.selector=t;e.__proto__=v.prototype;return e};d=function(t,r){var i,s;i=null;s=e.toType(t);if(s==="array")i=c(t);else if(s==="string"&&o.test(t)){i=p(t.trim(),RegExp.$1);t=null}else if(s==="string"){i=e.query(document,t);r&&(i.length===1?i=e.query(i[0],r):i=e.map(function(){return e.query(i,r)}))}else if(n.indexOf(t.nodeType)>=0||t===window){i=[t];t=null}return i};p=function(t,n){var r;n==null&&(n="*");n in i||(n="*");r=i[n];r.innerHTML=""+t;return e.each(Array.prototype.slice.call(r.childNodes),function(){return r.removeChild(this)})};c=function(e){return e.filter(function(e){if(e!=null)return e})};h=function(e){return e.length>0?r.concat.apply(r,e):e};m=function(e,t){return u.hasOwnProperty.call(e,t)};v.prototype=e.fn={};e.fn.each=function(e){this.forEach(function(t,n){return e.call(t,n,t)});return this};e.fn.filter=function(t){return e(r.filter.call(this,function(n){return n.parentNode&&e.query(n.parentNode,t).indexOf(n)>=0}))};e.fn.forEach=r.forEach;e.fn.indexOf=r.indexOf;return e}();this.Quo=this.$$=e;"use strict";(function(e){var t,n,r,i,s,o,u,a,f,l,c;t={TYPE:"GET",MIME:"json"};r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"};n=0;e.ajaxSettings={type:t.TYPE,async:!0,success:{},error:{},context:null,dataType:t.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0};e.ajax=function(n){var r,u,l,h;l=e.mix(e.ajaxSettings,n);l.type===t.TYPE?l.url+=e.serialize(l.data,"?"):l.data=e.serialize(l.data);if(i(l.url))return s(l);h=l.xhr();h.onreadystatechange=function(){if(h.readyState===4){clearTimeout(r);return f(h,l)}};h.open(l.type,l.url,l.async);a(h,l);l.timeout>0&&(r=setTimeout(function(){return c(h,l)},l.timeout));try{h.send(l.data)}catch(p){u=p;h=u;o("Resource not found",h,l)}return h};e.get=function(t,n,r,i){return e.ajax({url:t,data:n,success:r,dataType:i})};e.post=function(e,t,n,r){return u("POST",e,t,n,r)};e.put=function(e,t,n,r){return u("PUT",e,t,n,r)};e["delete"]=function(e,t,n,r){return u("DELETE",e,t,n,r)};e.json=function(t,n,r){return e.ajax({url:t,data:n,success:r})};e.serialize=function(e,t){var n,r;t==null&&(t="");r=t;for(n in e)if(e.hasOwnProperty(n)){r!==t&&(r+="&");r+=""+encodeURIComponent(n)+"="+encodeURIComponent(e[n])}return r===t?"":r};s=function(t){var r,i,s,o;if(t.async){i="jsonp"+ ++n;s=document.createElement("script");o={abort:function(){e(s).remove();if(i in window)return window[i]={}}};r=void 0;window[i]=function(n){clearTimeout(r);e(s).remove();delete window[i];return l(n,t)};s.src=t.url.replace(RegExp("=\\?"),"="+i);e("head").append(s);t.timeout>0&&(r=setTimeout(function(){return c(o,t)},t.timeout));return o}return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")};f=function(e,t){e.status>=200&&e.status<300||e.status===0?t.async&&l(e,t):o("QuoJS.ajax: Unsuccesful request",e,t)};l=function(e,t){t.success.call(t.context,e)};o=function(e,t,n){n.error.call(n.context,e,t,n)};a=function(e,t){var n;t.contentType&&(t.headers["Content-Type"]=t.contentType);t.dataType&&(t.headers.Accept=r[t.dataType]);for(n in t.headers)e.setRequestHeader(n,t.headers[n])};c=function(e,t){e.onreadystatechange={};e.abort();o("QuoJS.ajax: Timeout exceeded",e,t)};u=function(t,n,r,i,s){return e.ajax({type:t,url:n,data:r,success:i,dataType:s,contentType:"application/x-www-form-urlencoded"})};return i=function(e){return RegExp("=\\?").test(e)}})(e);"use strict";(function(e){var t,n;t=["-webkit-","-moz-","-ms-","-o-",""];e.fn.addClass=function(e){return this.each(function(){return this.classList.add(e)})};e.fn.removeClass=function(e){return this.each(function(){return this.classList.remove(e)})};e.fn.toggleClass=function(e){return this.each(function(){var t;t=this.classList.contains(e)?"remove":"add";return this.classList[t](e)})};e.fn.hasClass=function(e){return this.length>0&&this[0].classList.contains(e)};e.fn.listClass=function(){if(this.length>0)return this[0].classList};e.fn.style=e.fn.css=function(e,t){var r;if(t!=null)return this.each(function(){return this.style[e]=t});r=this[0];return r.style[e]||n(r,e)};e.fn.vendor=function(e,n){var r,i,s,o;o=[];for(i=0,s=t.length;i<s;i++){r=t[i];o.push(this.style(""+r+e,n))}return o};return n=function(e,t){return document.defaultView.getComputedStyle(e,"")[t]}})(e);"use strict";(function(e){e.fn.attr=function(t,n){if(this.length>0&&e.toType(t)==="string")return n?this.each(function(){return this.setAttribute(t,n)}):this[0].getAttribute(t)};e.fn.removeAttr=function(t){if(this.length>0&&e.toType(t)==="string")return this.each(function(){return this.removeAttribute(t)})};e.fn.data=function(e,t){return this.attr("data-"+e,t)};e.fn.removeData=function(e){return this.removeAttr("data-"+e)};e.fn.val=function(e){return e?this.each(function(){return this.value=e.toString()}):this.length>0?this[0].value:null};e.fn.show=function(){return this.style("display","block")};e.fn.hide=function(){return this.style("display","none")};return e.fn.offset=function(){var e,t;if(this.length>0){e=this[0].getBoundingClientRect();t={left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}}return t}})(e);"use strict";(function(e){var t,n,r,i,s,o;r=null;t=/WebKit\/([\d.]+)/;n={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/};e.isMobile=function(){this.environment();return r.isMobile};e.environment=function(){var e,t;if(!r){t=navigator.userAgent;e=s(t);r={browser:i(t),isMobile:!!e,screen:o(),os:e}}return r};i=function(e){var n;n=e.match(t);return n?n[0]:e};s=function(e){var t,r,i;for(r in n){i=e.match(n[r]);if(i){t={name:r==="iphone"||r==="ipad"||r==="ipod"?"ios":r,version:i[2].replace("_",".")};break}}return t};return o=function(){return{width:window.innerWidth,height:window.innerHeight}}})(e);"use strict";(function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p;t=1;i={};r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};n={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"};s=/complete|loaded|interactive/;e.fn.on=function(t,n,r){return n==null||e.toType(n)==="function"?this.bind(t,n):this.delegate(n,t,r)};e.fn.off=function(t,n,r){return n==null||e.toType(n)==="function"?this.unbind(t,n):this.undelegate(n,t,r)};e.fn.ready=function(t){return s.test(document.readyState)?t.call(this,e):e.fn.addEvent(document,"DOMContentLoaded",function(){return t.call(this,e)})};e.fn.bind=function(e,t){return this.each(function(){return h(this,e,t)})};e.fn.unbind=function(e,t){return this.each(function(){return p(this,e,t)})};e.fn.delegate=function(t,n,r){return this.each(function(i,s){return h(s,n,r,t,function(n){return function(r){var i,u;u=e(r.target).closest(t,s).get(0);if(u){i=e.extend(o(r),{currentTarget:u,liveFired:s});return n.apply(u,[i].concat([].slice.call(arguments,1)))}}})})};e.fn.undelegate=function(e,t,n){return this.each(function(){return p(this,t,n,e)})};e.fn.trigger=function(t,n,r){e.toType(t)==="string"&&(t=f(t,n));r!=null&&(t.originalEvent=r);return this.each(function(){return this.dispatchEvent(t)})};e.fn.addEvent=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n};e.fn.removeEvent=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null};f=function(e,t){var n;n=document.createEvent("Events");n.initEvent(e,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null);t&&(n.quoData=t);return n};h=function(t,n,r,s,o){var f,l,h,p;n=a(n);h=c(t);l=i[h]||(i[h]=[]);f=o&&o(r,n);p={event:n,callback:r,selector:s,proxy:u(f,r,t),delegate:f,index:l.length};l.push(p);return e.fn.addEvent(t,p.event,p.proxy)};p=function(t,n,r,s){var o;n=a(n);o=c(t);return l(o,n,r,s).forEach(function(n){delete i[o][n.index];return e.fn.removeEvent(t,n.event,n.proxy)})};c=function(e){return e._id||(e._id=t++)};a=function(t){var r;r=(typeof e.isMobile=="function"?e.isMobile():void 0)?t:n[t];return r||t};u=function(e,t,n){var r;t=e||t;r=function(e){var r;r=t.apply(n,[e].concat(e.data));r===!1&&e.preventDefault();return r};return r};l=function(e,t,n,r){return(i[e]||[]).filter(function(e){return e&&(!t||e.event===t)&&(!n||e.callback===n)&&(!r||e.selector===r)})};return o=function(t){var n;n=e.extend({originalEvent:t},t);e.each(r,function(e,r){n[e]=function(){this[r]=function(){return!0};return t[e].apply(t,arguments)};return n[r]=function(){return!1}});return n}})(e);"use strict";e.Gestures=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p;p=!1;f={};s=null;c=null;e(document).ready(function(){var t;t=e(document.body);t.bind("touchstart",h);t.bind("touchmove",l);t.bind("touchend",o);return t.bind("touchcancel",i)});t=function(e){f[e.name]=e.handler;return r(e.events)};n=function(t,n,r){return e(t).trigger(n,r,c)};h=function(e){p=!0;c=e||event;s=u(e);return a("start",e.target,s)};l=function(e){if(!p)return;c=e||event;s=u(e);return a("move",e.target,s)};o=function(e){if(!p)return;c=e||event;a("end",e.target,s);return p=!1};i=function(e){p=!1;return a("cancel")};r=function(t){t.forEach(function(t){return e.fn[t]=function(n){return e(document.body).delegate(this.selector,t,n)}});return this};a=function(e,t,n){var r,i,s;s=[];for(i in f){r=f[i];r[e]&&s.push(r[e].call(r,t,n))}return s};u=function(t){var n,r;r=e.isMobile()?t.touches:[t];return function(){var e,t,i;i=[];for(e=0,t=r.length;e<t;e++){n=r[e];i.push({x:n.pageX,y:n.pageY})}return i}()};return{add:t,trigger:n}}(e);"use strict";e.Gestures.add({name:"basic",events:["tap","hold","singleTap","doubleTap","touch"],handler:function(e){var t,n,r,i,s,o,u,a,f,l,c,h;n=15;t={TAP:250,DOUBLE_TAP:400,HOLD:400};u=null;f=null;h=!0;c=null;l=null;a=null;o=function(n,i){if(i.length===1){l={time:new Date,x:i[0].x,y:i[0].y};c=n;return u=setTimeout(function(){return e.trigger(n,"hold",i[0])},t.HOLD)}return r()};s=function(e,t){var i,s;if(l!==null){i=t[0].x-l.x;s=t[0].y-l.y;if(i>n||s>n||t.length>1)return r()}};i=function(n,r){var i;e.trigger(n,"touch",r[0]);if(!l)return;clearTimeout(u);i=new Date;if(i-l.time<t.TAP){if(i-a<t.DOUBLE_TAP){clearTimeout(f);e.trigger(n,"doubleTap",r[0]);return a=null}a=i;e.trigger(n,"tap",r[0]);return f=setTimeout(function(){return e.trigger(n,"singleTap",r[0])},t.DOUBLE_TAP+5)}};r=function(){l=null;h=!1;clearTimeout(u);return clearTimeout(f)};return{start:o,move:s,end:i,cancel:r}}(e.Gestures)});"use strict";e.Gestures.add({name:"drag",events:["drag","dragging"],handler:function(e){var t,n,r,i,s,o,u,a,f,l,c;t=20;c=null;f=null;l=null;a=null;i=function(e,t){if(t.length>=2){c=e;f=t.length;return l=s(t)}};r=function(e,t){var n;if(t.length===f){n=o(t);a={touches:t,delta:n};return u(!0)}};n=function(e,t){if(l&&a){u(!1);f=null;l=null;return a=null}};o=function(e){var t;t=s(e);return{x:t.x-l.x,y:t.y-l.y}};s=function(e){var t,n,r,i,s;n=0;r=0;for(i=0,s=e.length;i<s;i++){t=e[i];n+=parseInt(t.x);r+=parseInt(t.y)}return{x:n/e.length,y:r/e.length}};u=function(n){if(n)return e.trigger(c,"dragging",a);if(Math.abs(a.delta.x)>t||Math.abs(a.delta.y)>t)return e.trigger(c,"drag",a)};return{start:i,move:r,end:n}}(e.Gestures)});"use strict";e.Gestures.add({name:"pinch",events:["pinch","pinching","pinchIn","pinchOut"],handler:function(e){var t,n,r,i,s,o,u,a,f;t=20;f=null;a=null;u=null;i=function(e,t){if(t.length===2){f=e;return a=o(t[0],t[1])}};r=function(e,t){var n;if(a&&t.length===2){n=o(t[0],t[1]);u={touches:t,delta:n-a};return s(!0)}};n=function(e,t){if(a&&u){s(!1);a=null;return u=null}};o=function(e,t){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))};s=function(n){var r;if(n)return e.trigger(f,"pinching",u);if(Math.abs(u.delta)>t){e.trigger(f,"pinch",u);r=u.delta>0?"pinchOut":"pinchIn";return e.trigger(f,r,u)}};return{start:i,move:r,end:n}}(e.Gestures)});"use strict";(function(e){e.fn.text=function(e){return e!=null?this.each(function(){return this.textContent=e}):this.length>0?this[0].textContent:""};e.fn.html=function(t){var n;if(t!=null){n=e.toType(t);return this.each(function(){var r=this;return n==="string"?this.innerHTML=t:n==="array"?t.forEach(function(t){return e(r).html(t)}):this.innerHTML+=e(t).html()})}return this.length>0?this[0].innerHTML:""};e.fn.remove=function(){return this.each(function(){if(this.parentNode!=null)return this.parentNode.removeChild(this)})};e.fn.empty=function(){return this.each(function(){return this.innerHTML=null})};e.fn.append=function(t){var n;n=e.toType(t);return this.each(function(){var r=this;return n==="string"?this.insertAdjacentHTML("beforeend",t):n==="array"?t.forEach(function(t){return e(r).append(t)}):this.appendChild(t)})};e.fn.prepend=function(t){var n;n=e.toType(t);return this.each(function(){var e=this;return n==="string"?this.insertAdjacentHTML("afterbegin",t):n==="array"?t.each(function(t,n){return e.insertBefore(n,e.firstChild)}):this.insertBefore(t,this.firstChild)})};return e.fn.replaceWith=function(t){var n;n=e.toType(t);this.each(function(){var e=this;if(this.parentNode)return n==="string"?this.insertAdjacentHTML("beforeBegin",t):n==="array"?t.each(function(t,n){return e.parentNode.insertBefore(n,e)}):this.parentNode.insertBefore(t,this)});return this.remove()}})(e);"use strict";e.Gestures.add({name:"rotation",events:["rotate","rotating","rotateLeft","rotateRight"],handler:function(e){var t,n,r,i,s,o,u,a,f,l,c,h;t=5;n=20;h=null;a=0;c=null;u=null;s=function(e,t){if(t.length===2){h=e;a=0;return c=f(t[0],t[1])}};i=function(e,t){var r;if(c&&t.length===2){r=f(t[0],t[1])-c;u&&Math.abs(u.delta-r)>n&&(r+=360*l(u.delta));if(Math.abs(r)>360){a++;r-=360*l(u.delta)}u={touches:t,delta:r,rotationsCount:a};return o(!0)}};r=function(e,t){if(c&&u){o(!1);h=null;a=0;c=null;u=null;return c=null}};l=function(e){return e<0?-1:1};f=function(e,t){var n;n=Math.atan2(e.y-t.y,e.x-t.x);return(n<0?n+2*Math.PI:n)*180/Math.PI};o=function(n){var r;if(n)return e.trigger(h,"rotating",u);if(Math.abs(u.delta)>t){e.trigger(h,"rotate",u);r=u.delta>0?"rotateRight":"rotateLeft";return e.trigger(h,r,u)}};return{start:s,move:i,end:r}}(e.Gestures)});"use strict";e.Gestures.add({name:"swipe",events:["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","swiping","swipingHorizontal","swipingVertical"],handler:function(e){var t,n,r,i,s,o,u,a,f,l;t=20;l=null;a=null;f=null;u=null;i=function(e,t){if(t.length===1){l=e;a=t[0];return u=null}};r=function(e,t){var n,r;if(t.length===1){n={x:t[0].x-a.x,y:t[0].y-a.y};r=u===null;u={x:t[0].x,y:t[0].y,delta:n};return s(!0,r)}return u=null};n=function(e,t){if(u){s(!1);return u=null}};s=function(n,r){var i,s,a,c,h;r==null&&(r=!1);if(n){r&&(f=o(u.delta.x,u.delta.y));f!==null&&e.trigger(l,"swiping"+f,u);return e.trigger(l,"swiping",u)}s=[];Math.abs(u.delta.y)>t&&s.push(u.delta.y<0?"Up":"Down");Math.abs(u.delta.x)>t&&s.push(u.delta.x<0?"Left":"Right");if(s.length){e.trigger(l,"swipe",u);h=[];for(a=0,c=s.length;a<c;a++){i=s[a];h.push(e.trigger(l,"swipe"+i,u))}return h}};o=function(e,t){var n;n=null;Math.round(Math.abs(e/t))>=2?n="Horizontal":Math.round(Math.abs(t/e))>=2&&(n="Vertical");return n};return{start:i,move:r,end:n}}(e.Gestures)});"use strict";(function(t){var n,r,i,s;n="parentNode";t.fn.find=function(n){var r;this.length===1?r=e.query(this[0],n):r=this.map(function(){return e.query(this,n)});return t(r)};t.fn.parent=function(e){var t;t=e?i(this):this.instance(n);return r(t,e)};t.fn.children=function(e){var t;t=this.map(function(){return Array.prototype.slice.call(this.children)});return r(t,e)};t.fn.siblings=function(e){var t;t=this.map(function(e,t){return Array.prototype.slice.call(t.parentNode.children).filter(function(e){return e!==t})});return r(t,e)};t.fn.get=function(e){return this[e]||null};t.fn.first=function(){return t(this[0])};t.fn.last=function(){return t(this[this.length-1])};t.fn.closest=function(e,n){var r,i;i=this[0];r=t(e);r.length||(i=null);while(i&&r.indexOf(i)<0)i=i!==n&&i!==document&&i.parentNode;return t(i)};t.fn.next=function(){return s.call(this,"nextSibling")};t.fn.prev=function(){return s.call(this,"previousSibling")};t.fn.instance=function(e){return this.map(function(){return this[e]})};t.fn.map=function(e){return t.map(this,function(t,n){return e.call(t,n,t)})};i=function(e){var n;n=[];while(e.length>0)e=t.map(e,function(e){e=e.parentNode;if(e!==document&&n.indexOf(e)<0){n.push(e);return e}});return n};r=function(e,n){return n!=null?t(e).filter(n):t(e)};return s=function(e){var n;n=this[0][e];while(n&&n.nodeType!==1)n=n[e];return t(n)}})(e)}).call(this);