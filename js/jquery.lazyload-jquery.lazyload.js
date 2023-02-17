"use strict";!function(l,g,h,i){var j=l(g);l.fn.lazyload=function(a){function b(){var b=0;m.each(function(){var c=l(this);if(!n.skip_invisible||c.is(":visible"))if(l.abovethetop(this,n)||l.leftofbegin(this,n));else if(!(l.belowthefold(this,n)||l.rightoffold(this,n)))c.trigger("appear"),b=0;else if(++b>n.failure_limit)return!1})}var c,m=this,n={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:g,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return a&&(i!==a.failurelimit&&(a.failure_limit=a.failurelimit,delete a.failurelimit),i!==a.effectspeed&&(a.effect_speed=a.effectspeed,delete a.effectspeed),l.extend(n,a)),c=n.container===i||n.container===g?j:l(n.container),0===n.event.indexOf("scroll")&&c.bind(n.event,function(){return b()}),this.each(function(){var e=this,f=l(e);e.loaded=!1,(f.attr("src")===i||!1===f.attr("src"))&&f.is("img")&&f.attr("src",n.placeholder),f.one("appear",function(){if(!this.loaded){if(n.appear){var a=m.length;n.appear.call(e,a,n)}l("<img />").bind("load",function(){var a=f.attr("data-"+n.data_attribute);f.hide(),f.is("img")?f.attr("src",a):f.css("background-image","url('"+a+"')"),f[n.effect](n.effect_speed),e.loaded=!0;var b=l.grep(m,function(a){return!a.loaded});if(m=l(b),n.load){var c=m.length;n.load.call(e,c,n)}}).attr("src",f.attr("data-"+n.data_attribute))}}),0!==n.event.indexOf("scroll")&&f.bind(n.event,function(){e.loaded||f.trigger("appear")})}),j.bind("resize",function(){b()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&j.bind("pageshow",function(a){a.originalEvent&&a.originalEvent.persisted&&m.each(function(){l(this).trigger("appear")})}),l(h).ready(function(){b()}),this},l.belowthefold=function(c,a){var b;return b=a.container===i||a.container===g?(g.innerHeight?g.innerHeight:j.height())+j.scrollTop():l(a.container).offset().top+l(a.container).height(),b<=l(c).offset().top-a.threshold},l.rightoffold=function(c,a){var b;return b=a.container===i||a.container===g?j.width()+j.scrollLeft():l(a.container).offset().left+l(a.container).width(),b<=l(c).offset().left-a.threshold},l.abovethetop=function(c,a){var b;return b=a.container===i||a.container===g?j.scrollTop():l(a.container).offset().top,b>=l(c).offset().top+a.threshold+l(c).height()},l.leftofbegin=function(c,a){var b;return b=a.container===i||a.container===g?j.scrollLeft():l(a.container).offset().left,b>=l(c).offset().left+a.threshold+l(c).width()},l.inviewport=function(b,c){return!(l.rightoffold(b,c)||l.leftofbegin(b,c)||l.belowthefold(b,c)||l.abovethetop(b,c))},l.extend(l.expr[":"],{"below-the-fold":function(a){return l.belowthefold(a,{threshold:0})},"above-the-top":function(a){return!l.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return l.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return!l.rightoffold(a,{threshold:0})},"in-viewport":function(a){return l.inviewport(a,{threshold:0})},"above-the-fold":function(a){return!l.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return l.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return!l.rightoffold(a,{threshold:0})}})}(jQuery,window,document);