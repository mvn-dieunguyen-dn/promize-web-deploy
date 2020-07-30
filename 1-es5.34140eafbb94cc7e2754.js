function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{eSVu:function(e,n,i){"use strict";i.d(n,"a",(function(){return a})),i.d(n,"b",(function(){return f})),i.d(n,"c",(function(){return d}));var t=i("ofXK"),s=i("fXoL");i("HDdC"),i("DH7j"),i("lJxs"),i("XoHu"),i("Cfvw");var r,c,l,o=new s.q("NgValueAccessor"),u=["*"],a=((l=function(){function e(n,i,t){_classCallCheck(this,e),this.el=n,this.zone=i,this.platformId=t,this.afterChange=new s.n,this.beforeChange=new s.n,this.breakpoint=new s.n,this.destroy=new s.n,this.init=new s.n,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.unslick()}},{key:"ngAfterViewInit",value:function(){this.ngAfterViewChecked()}},{key:"ngAfterViewChecked",value:function(){var e=this;if(!Object(t.n)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){var n=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===n?this.unslick():(this._addedSlides.forEach((function(n){e.slides.push(n),e.zone.runOutsideAngular((function(){e.$instance.slick("slickAdd",n.el.nativeElement)}))})),this._addedSlides=[],this._removedSlides.forEach((function(n){var i=e.slides.indexOf(n);e.slides=e.slides.filter((function(e){return e!==n})),e.zone.runOutsideAngular((function(){e.$instance.slick("slickRemove",i)}))})),this._removedSlides=[]):n>0&&this.initSlick()}}},{key:"initSlick",value:function(){var e=this;this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular((function(){e.$instance=jQuery(e.el.nativeElement),e.$instance.on("init",(function(n,i){e.zone.run((function(){e.init.emit({event:n,slick:i})}))})),e.$instance.slick(e.config),e.zone.run((function(){var n;e.initialized=!0,e.currentIndex=(null===(n=e.config)||void 0===n?void 0:n.initialSlide)||0})),e.$instance.on("afterChange",(function(n,i,t){e.zone.run((function(){e.afterChange.emit({event:n,slick:i,currentSlide:t,first:0===t,last:i.$slides.length===t+i.options.slidesToScroll}),e.currentIndex=t}))})),e.$instance.on("beforeChange",(function(n,i,t,s){e.zone.run((function(){e.beforeChange.emit({event:n,slick:i,currentSlide:t,nextSlide:s}),e.currentIndex=s}))})),e.$instance.on("breakpoint",(function(n,i,t){e.zone.run((function(){e.breakpoint.emit({event:n,slick:i,breakpoint:t})}))})),e.$instance.on("destroy",(function(n,i){e.zone.run((function(){e.destroy.emit({event:n,slick:i}),e.initialized=!1}))}))}))}},{key:"addSlide",value:function(e){this._addedSlides.push(e)}},{key:"removeSlide",value:function(e){this._removedSlides.push(e)}},{key:"slickGoTo",value:function(e){var n=this;this.zone.runOutsideAngular((function(){n.$instance.slick("slickGoTo",e)}))}},{key:"slickNext",value:function(){var e=this;this.zone.runOutsideAngular((function(){e.$instance.slick("slickNext")}))}},{key:"slickPrev",value:function(){var e=this;this.zone.runOutsideAngular((function(){e.$instance.slick("slickPrev")}))}},{key:"slickPause",value:function(){var e=this;this.zone.runOutsideAngular((function(){e.$instance.slick("slickPause")}))}},{key:"slickPlay",value:function(){var e=this;this.zone.runOutsideAngular((function(){e.$instance.slick("slickPlay")}))}},{key:"unslick",value:function(){var e=this;this.$instance&&(this.zone.runOutsideAngular((function(){e.$instance.slick("unslick")})),this.$instance=void 0),this.initialized=!1}},{key:"ngOnChanges",value:function(e){var n=this;if(this.initialized){var i=e.config;if(i.previousValue!==i.currentValue&&void 0!==i.currentValue){var t=i.currentValue.refresh,s=Object.assign({},i.currentValue);delete s.refresh,this.zone.runOutsideAngular((function(){n.$instance.slick("slickSetOption",s,t)}))}}}}]),e}()).\u0275fac=function(e){return new(e||l)(s.Jb(s.l),s.Jb(s.z),s.Jb(s.B))},l.\u0275cmp=s.Db({type:l,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[s.yb([{provide:o,useExisting:Object(s.S)((function(){return l})),multi:!0}]),s.xb],ngContentSelectors:u,decls:1,vars:0,template:function(e,n){1&e&&(s.Wb(),s.Vb(0))},encapsulation:2}),l),d=((c=function(){function e(n,i,t){_classCallCheck(this,e),this.el=n,this.platformId=i,this.carousel=t}return _createClass(e,[{key:"ngOnInit",value:function(){Object(t.m)(this.platformId)&&this.carousel.addSlide(this)}},{key:"ngOnDestroy",value:function(){Object(t.m)(this.platformId)&&this.carousel.removeSlide(this)}}]),e}()).\u0275fac=function(e){return new(e||c)(s.Jb(s.l),s.Jb(s.B),s.Jb(a,1))},c.\u0275dir=s.Eb({type:c,selectors:[["","ngxSlickItem",""]]}),c),f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:r}),r.\u0275inj=s.Gb({factory:function(e){return new(e||r)},imports:[[t.b]]}),r)}}]);