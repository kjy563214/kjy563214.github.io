var _createClass=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var getMousePos=function(e){var t=0,n=0;return(e=e||window.event).pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}},getRandomFloat=function(e,t){(Math.random()*(t-e)+e).toFixed(2)},HoverImgFx1=function(){function t(e){_classCallCheck(this,t),this.DOM={el:e},this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.reveal.style.overflow="hidden",this.DOM.reveal.innerHTML='<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url('+this.DOM.el.dataset.img+')"></div></div>',this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.DOM.letters=Array.from(this.DOM.el.querySelectorAll("span")),this.initEvents()}return _createClass(t,[{key:"initEvents",value:function(){var a=this;this.positionElement=function(e){var t=getMousePos(e),n=document.body.scrollLeft+document.documentElement.scrollLeft,e=document.body.scrollTop+document.documentElement.scrollTop;a.DOM.reveal.style.top=t.y-220-e+"px",a.DOM.reveal.style.left=t.x+1-n+"px"},this.mouseenterFn=function(e){a.positionElement(e),a.showImage(),a.animateLetters()},this.mousemoveFn=function(e){return requestAnimationFrame(function(){a.positionElement(e)})},this.mouseleaveFn=function(){a.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"showImage",value:function(){var e=this;TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:function(){e.DOM.reveal.style.opacity=1,TweenMax.set(e.DOM.el,{zIndex:1e3})}}).add("begin").set([this.DOM.revealInner,this.DOM.revealImg],{transformOrigin:"50% 100%"}).add(new TweenMax(this.DOM.revealInner,.4,{ease:Expo.easeOut,startAt:{x:"50%",y:"120%",rotation:50},x:"0%",y:"0%",rotation:0}),"begin").add(new TweenMax(this.DOM.revealImg,.4,{ease:Expo.easeOut,startAt:{x:"-50%",y:"-120%",rotation:-50},x:"0%",y:"0%",rotation:0}),"begin").add(new TweenMax(this.DOM.revealImg,.7,{ease:Expo.easeOut,startAt:{scale:2},scale:1}),"begin")}},{key:"hideImage",value:function(){var e=this;TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:function(){TweenMax.set(e.DOM.el,{zIndex:999})},onComplete:function(){TweenMax.set(e.DOM.el,{zIndex:""}),TweenMax.set(e.DOM.reveal,{opacity:0})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.6,{ease:Expo.easeOut,y:"-120%",rotation:-5}),"begin").add(new TweenMax(this.DOM.revealImg,.6,{ease:Expo.easeOut,y:"120%",rotation:5,scale:1.2}),"begin")}},{key:"animateLetters",value:function(){this.DOM.letters.forEach(function(e,t){TweenMax.set(e,{opacity:0});var n=2*t/100;TweenMax.to(e,.07*t+.2,{ease:Expo.easeOut,delay:n,startAt:{x:"100%"},x:"0%",opacity:1})})}}]),t}();function isImageType(e){return/\.(gif|jpg|jpeg|png)$/i.test(e)}