(function(){function g(a){var b;if(Object.create)b=Object.create(a);else{function c(){}c.prototype=a,b=new c}return b}var a=Object.prototype,b=Array.prototype,c=Function.prototype,d=String.prototype,e=a.hasOwnProperty,f=b.slice;c.bind||(c.bind=function(a){function d(){if(this instanceof d){var e=g(b.prototype),h=b.apply(e,c.concat(f.call(arguments)));return Object(h)===h?h:e}return b.apply(a,c.concat(f.call(arguments)))}var b=this;if(typeof b!="function")throw new TypeError("Bind must be called on a function");var c=f.call(arguments,1);return d}),Object.keys||(Object.keys=function(){var a=!{toString:""}.propertyIsEnumerable("toString"),b=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=b.length;return function(d){if(d!==Object(d))throw new TypeError(d+" is not an object");var f=[];for(var g in d)e.call(d,g)&&f.push(g);if(a)for(var h=0;h<c;h++)e.call(d,b[h])&&f.push(b[h]);return f}}()),Array.isArray||(Array.isArray=function(b){return a.toString.call(b)==="[object Array]"}),b.forEach||(b.forEach=function(a,b){for(var c=0,d=this.length>>>0;c<d;c++)c in this&&a.call(b,this[c],c,this)}),b.map||(b.map=function(a,b){var c=this.length>>>0,d=new Array(c);for(var e=0;e<c;e++)e in this&&(d[e]=a.call(b,this[e],e,this));return d}),b.filter||(b.filter=function(a,b){var c=[],d;for(var e=0,f=this.length>>>0;e<f;e++)e in this&&(d=this[e],a.call(b,d,e,this)&&c.push(d));return c}),b.every||(b.every=function(a,b){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&!a.call(b,this[c],c,this))return!1;return!0}),b.some||(b.some=function(a,b){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&a.call(b,this[c],c,this))return!0;return!1}),b.reduce||(b.reduce=function(a){if(typeof a!="function")throw new TypeError(a+" is not an function");var b=this.length>>>0,c=0,d;if(arguments.length>1)d=arguments[1];else do{if(c in this){d=this[c++];break}if(++c>=b)throw new TypeError("reduce of empty array with on initial value")}while(!0);for(;c<b;c++)c in this&&(d=a.call(null,d,this[c],c,this));return d}),b.reduceRight||(b.reduceRight=function(a){if(typeof a!="function")throw new TypeError(a+" is not an function");var b=this.length>>>0,c=b-1,d;if(arguments.length>1)d=arguments[1];else do{if(c in this){d=this[c--];break}if(--c<0)throw new TypeError("reduce of empty array with on initial value")}while(!0);for(;c>=0;c--)c in this&&(d=a.call(null,d,this[c],c,this));return d}),b.indexOf||(b.indexOf=function(a,b){var c=this.length>>>0;b=Number(b)||0,b=Math[b<0?"ceil":"floor"](b),b<0&&(b=Math.max(b+c,0));for(;b<c;b++)if(b in this&&this[b]===a)return b;return-1}),b.lastIndexOf||(b.lastIndexOf=function(a,b){var c=this.length>>>0;b=Number(b)||c-1,b=Math[b<0?"ceil":"floor"](b),b<0&&(b+=c),b=Math.min(b,c-1);for(;b>=0;b--)if(b in this&&this[b]===a)return b;return-1}),d.trim||(d.trim=function(){var a=["\\s","00A0","1680","180E","2000-\\u200A","200B","2028","2029","202F","205F","3000"].join("\\u"),b=new RegExp("^["+a+"]+"),c=new RegExp("["+a+"]+$");return function(){return String(this).replace(b,"").replace(c,"")}}()),Date.now||(Date.now=function(){return+(new Date)})})();
