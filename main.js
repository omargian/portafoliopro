document.addEventListener("DOMContentLoaded", function() {
    if (window.bootstrap) {
      // código para ejecutar si Bootstrap está presente
      console.log('Bootstrap está presente');
    } else {
      // código para ejecutar si Bootstrap no está presente
      console.log('Bootstrap no está presente');
    }
  });




/*-------------------------------------------*/
/*-------------------------------------------*/
/*  1. TYPING JS
/*-------------------------------------------*/
/*-------------------------------------------*/

!function($){"use strict";var Typed=function(el,options){this.el=$(el);this.options=$.extend({},$.fn.typed.defaults,options);this.isInput=this.el.is("input");this.attr=this.options.attr;this.showCursor=this.isInput?false:this.options.showCursor;this.elContent=this.attr?this.el.attr(this.attr):this.el.text();this.contentType=this.options.contentType;this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.stringsElement=this.options.stringsElement;this.strings=this.options.strings;this.strPos=0;this.arrayPos=0;this.stopNum=0;this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=0;this.stop=false;this.cursorChar=this.options.cursorChar;this.shuffle=this.options.shuffle;this.sequence=[];this.build()};Typed.prototype={constructor:Typed,init:function(){var self=this;self.timeout=setTimeout(function(){for(var i=0;i<self.strings.length;++i)self.sequence[i]=i;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.typewrite(self.strings[self.sequence[self.arrayPos]],self.strPos)},self.startDelay)},build:function(){var self=this;if(this.showCursor===true){this.cursor=$('<span class="typed-cursor">'+this.cursorChar+"</span>");this.el.after(this.cursor)}if(this.stringsElement){this.strings=[];this.stringsElement.hide();console.log(this.stringsElement.children());var strings=this.stringsElement.children();$.each(strings,function(key,value){self.strings.push($(value).html())})}this.init()},typewrite:function(curString,curStrPos){if(this.stop===true){return}var humanize=Math.round(Math.random()*(100-30))+this.typeSpeed;var self=this;self.timeout=setTimeout(function(){var charPause=0;var substr=curString.substr(curStrPos);if(substr.charAt(0)==="^"){var skip=1;if(/^\^\d+/.test(substr)){substr=/\d+/.exec(substr)[0];skip+=substr.length;charPause=parseInt(substr)}curString=curString.substring(0,curStrPos)+curString.substring(curStrPos+skip)}if(self.contentType==="html"){var curChar=curString.substr(curStrPos).charAt(0);if(curChar==="<"||curChar==="&"){var tag="";var endTag="";if(curChar==="<"){endTag=">"}else{endTag=";"}while(curString.substr(curStrPos+1).charAt(0)!==endTag){tag+=curString.substr(curStrPos).charAt(0);curStrPos++;if(curStrPos+1>curString.length){break}}curStrPos++;tag+=endTag}}self.timeout=setTimeout(function(){if(curStrPos===curString.length){self.options.onStringTyped(self.arrayPos);if(self.arrayPos===self.strings.length-1){self.options.callback();self.curLoop++;if(self.loop===false||self.curLoop===self.loopCount)return}self.timeout=setTimeout(function(){self.backspace(curString,curStrPos)},self.backDelay)}else{if(curStrPos===0){self.options.preStringTyped(self.arrayPos)}var nextString=curString.substr(0,curStrPos+1);if(self.attr){self.el.attr(self.attr,nextString)}else{if(self.isInput){self.el.val(nextString)}else if(self.contentType==="html"){self.el.html(nextString)}else{self.el.text(nextString)}}curStrPos++;self.typewrite(curString,curStrPos)}},charPause)},humanize)},backspace:function(curString,curStrPos){if(this.stop===true){return}var humanize=Math.round(Math.random()*(100-30))+this.backSpeed;var self=this;self.timeout=setTimeout(function(){if(self.contentType==="html"){if(curString.substr(curStrPos).charAt(0)===">"){var tag="";while(curString.substr(curStrPos-1).charAt(0)!=="<"){tag-=curString.substr(curStrPos).charAt(0);curStrPos--;if(curStrPos<0){break}}curStrPos--;tag+="<"}}var nextString=curString.substr(0,curStrPos);if(self.attr){self.el.attr(self.attr,nextString)}else{if(self.isInput){self.el.val(nextString)}else if(self.contentType==="html"){self.el.html(nextString)}else{self.el.text(nextString)}}if(curStrPos>self.stopNum){curStrPos--;self.backspace(curString,curStrPos)}else if(curStrPos<=self.stopNum){self.arrayPos++;if(self.arrayPos===self.strings.length){self.arrayPos=0;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.init()}else self.typewrite(self.strings[self.sequence[self.arrayPos]],curStrPos)}},humanize)},shuffleArray:function(array){var tmp,current,top=array.length;if(top)while(--top){current=Math.floor(Math.random()*(top+1));tmp=array[current];array[current]=array[top];array[top]=tmp}return array},reset:function(){var self=this;clearInterval(self.timeout);var id=this.el.attr("id");this.el.empty();if(typeof this.cursor!=="undefined"){this.cursor.remove()}this.strPos=0;this.arrayPos=0;this.curLoop=0;this.options.resetCallback()}};$.fn.typed=function(option){return this.each(function(){var $this=$(this),data=$this.data("typed"),options=typeof option=="object"&&option;if(data){data.reset()}$this.data("typed",data=new Typed(this,options));if(typeof option=="string")data[option]()})};$.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:false,backDelay:500,loop:false,loopCount:false,showCursor:true,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

/*-------------------------------------------*/
/*-------------------------------------------*/
/*  2. SMOOTH SCROLL JS
/*-------------------------------------------*/
/*-------------------------------------------*/

"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c,d){"use strict";var e={init:function(c,d){this.options=a.extend({},a.fn.singlePageNav.defaults,c),this.container=d,this.$container=a(d),this.$links=this.$container.find("a"),""!==this.options.filter&&(this.$links=this.$links.filter(this.options.filter)),this.$window=a(b),this.$htmlbody=a("html, body"),this.$links.on("click.singlePageNav",a.proxy(this.handleClick,this)),this.didScroll=!1,this.checkPosition(),this.setTimer()},handleClick:function(b){var c=this,d=b.currentTarget,e=a(d.hash);b.preventDefault(),e.length&&(c.clearTimer(),"function"==typeof c.options.beforeStart&&c.options.beforeStart(),c.setActiveLink(d.hash),c.scrollTo(e,function(){c.options.updateHash&&history.pushState&&history.pushState(null,null,d.hash),c.setTimer(),"function"==typeof c.options.onComplete&&c.options.onComplete()}))},scrollTo:function(a,b){var c=this,d=c.getCoords(a).top,e=!1;c.$htmlbody.stop().animate({scrollTop:d},{duration:c.options.speed,easing:c.options.easing,complete:function(){"function"!=typeof b||e||b(),e=!0}})},setTimer:function(){var a=this;a.$window.on("scroll.singlePageNav",function(){a.didScroll=!0}),a.timer=setInterval(function(){a.didScroll&&(a.didScroll=!1,a.checkPosition())},250)},clearTimer:function(){clearInterval(this.timer),this.$window.off("scroll.singlePageNav"),this.didScroll=!1},checkPosition:function(){var a=this.$window.scrollTop(),b=this.getCurrentSection(a);null!==b&&this.setActiveLink(b)},getCoords:function(a){return{top:Math.round(a.offset().top)-this.options.offset}},setActiveLink:function(a){var b=this.$container.find("a[href$='"+a+"']");b.hasClass(this.options.currentClass)||(this.$links.removeClass(this.options.currentClass),b.addClass(this.options.currentClass))},getCurrentSection:function(d){var e,f,g,h;for(e=0;e<this.$links.length;e++)f=this.$links[e].hash,a(f).length&&(g=this.getCoords(a(f)),d>=g.top-this.options.threshold&&(h=f));var i=a(c).height()-a(b).height();if(d==i){var j=this.$links.length;j>0&&(h=this.$links[j-1].hash)}return h||(0===this.$links.length?null:this.$links[0].hash)}};a.fn.singlePageNav=function(a){return this.each(function(){var b=Object.create(e);b.init(a,this)})},a.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"current",easing:"swing",updateHash:!1,filter:"",onComplete:!1,beforeStart:!1}}(jQuery,window,document);

/*-------------------------------------------*/
/*-------------------------------------------*/
/*  3. STICKY HEADER JS
/*-------------------------------------------*/
/*-------------------------------------------*/

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
      // Node/CommonJS
      module.exports = factory(require('jquery'));
  } else {
      // Browser globals
      factory(jQuery);
  }
}

(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'auto'
  },
  $window = $(window),
  $document = $(document),
  sticked = [],
  windowHeight = $window.height(),
  scroller = function() {
    var scrollTop = $window.scrollTop(),
      documentHeight = $document.height(),
      dwh = documentHeight - windowHeight,
      extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
        elementTop = s.stickyWrapper.offset().top,
        etse = elementTop - s.topSpacing - extra;

      //update height in case of dynamic content
      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement
            .css({
              'width': '',
              'position': '',
              'top': '',
              'z-index': ''
            });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      }
      else {
        var newTop = documentHeight - s.stickyElement.outerHeight()
          - s.topSpacing - s.bottomSpacing - scrollTop - extra;
        if (newTop < 0) {
          newTop = newTop + s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }
        if (s.currentTop !== newTop) {
          var newWidth;
          if (s.getWidthFrom) {
              newWidth = $(s.getWidthFrom).width() || null;
          } else if (s.widthFromWrapper) {
              newWidth = s.stickyWrapper.width();
          }
          if (newWidth == null) {
              newWidth = s.stickyElement.width();
          }
          s.stickyElement
            .css('width', newWidth)
            .css('position', 'fixed')
            .css('top', newTop)
            .css('z-index', s.zIndex);

          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }


          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        }

        // Check if sticky has reached end of container and stop sticking
        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

        if( unstick ) {
          s.stickyElement
            .css('position', 'absolute')
            .css('top', '')
            .css('bottom', 0)
            .css('z-index', '');
        } else {
          s.stickyElement
            .css('position', 'fixed')
            .css('top', newTop)
            .css('bottom', '')
            .css('z-index', s.zIndex);
        }
      }
    }
  },
  resizer = function() {
    windowHeight = $window.height();

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i];
      var newWidth = null;
      if (s.getWidthFrom) {
          if (s.responsiveWidth) {
              newWidth = $(s.getWidthFrom).width();
          }
      } else if(s.widthFromWrapper) {
          newWidth = s.stickyWrapper.width();
      }
      if (newWidth != null) {
          s.stickyElement.css('width', newWidth);
      }
    }
  },
  methods = {
    init: function(options) {
      var o = $.extend({}, defaults, options);
      return this.each(function() {
        var stickyElement = $(this);

        var stickyId = stickyElement.attr('id');
        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
        var wrapper = $('<div></div>')
          .attr('id', wrapperId)
          .addClass(o.wrapperClassName);

        stickyElement.wrapAll(function() {
          if ($(this).parent("#" + wrapperId).length == 0) {
                  return wrapper;
          }
});

        var stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
        }

        if (stickyElement.css("float") === "right") {
          stickyElement.css({"float":"none"}).parent().css({"float":"right"});
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop    = null;

        sticked.push(o);

        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },

    setWrapperHeight: function(stickyElement) {
      var element = $(stickyElement);
      var stickyWrapper = element.parent();
      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },

    setupChangeListeners: function(stickyElement) {
      if (window.MutationObserver) {
        var mutationObserver = new window.MutationObserver(function(mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        });
        mutationObserver.observe(stickyElement, {subtree: true, childList: true});
      } else {
        if (window.addEventListener) {
          stickyElement.addEventListener('DOMNodeInserted', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
        } else if (window.attachEvent) {
          stickyElement.attachEvent('onDOMNodeInserted', function() {
            methods.setWrapperHeight(stickyElement);
          });
          stickyElement.attachEvent('onDOMNodeRemoved', function() {
            methods.setWrapperHeight(stickyElement);
          });
        }
      }
    },
    update: scroller,
    unstick: function(options) {
      return this.each(function() {
        var that = this;
        var unstickyElement = $(that);

        var removeIdx = -1;
        var i = sticked.length;
        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
              splice.call(sticked,i,1);
              removeIdx = i;
          }
        }
        if(removeIdx !== -1) {
          unstickyElement.unwrap();

          unstickyElement
            .css({
              'width': '',
              'position': '',
              'top': '',
              'float': '',
              'z-index': ''
            })
          ;
        }
      });
    }
  };

// should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
if (window.addEventListener) {
  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', resizer, false);
} else if (window.attachEvent) {
  window.attachEvent('onscroll', scroller);
  window.attachEvent('onresize', resizer);
}

$.fn.sticky = function(method) {
  if (methods[method]) {
    return methods[method].apply(this, slice.call(arguments, 1));
  } else if (typeof method === 'object' || !method ) {
    return methods.init.apply( this, arguments );
  } else {
    $.error('Method ' + method + ' does not exist on jQuery.sticky');
  }
};

$.fn.unstick = function(method) {
  if (methods[method]) {
    return methods[method].apply(this, slice.call(arguments, 1));
  } else if (typeof method === 'object' || !method ) {
    return methods.unstick.apply( this, arguments );
  } else {
    $.error('Method ' + method + ' does not exist on jQuery.sticky');
  }
};
$(function() {
  setTimeout(scroller, 0);
});
}));

/*-------------------------------------------*/
/*-------------------------------------------*/
/*  4. OWL CAROUSEL JS
/*-------------------------------------------*/
/*-------------------------------------------*/

"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);

/*-------------------------------------------*/
/*-------------------------------------------*/
/*  5. WAYPOINT JS
/*-------------------------------------------*/
/*-------------------------------------------*/
/*

*/
/*-------------------------------------------*/
/*-------------------------------------------*/
/*  6. COUNTER JS
/*-------------------------------------------*/
/*-------------------------------------------*/




/*-------------------------------------------*/
/*-------------------------------------------*/
/*  7. BOOTSTRAP JS
/*-------------------------------------------*/
/*-------------------------------------------*/


/*-------------------------------------------*/
/*-------------------------------------------*/
/*  8. LOADMORE JS
/*-------------------------------------------*/
/*-------------------------------------------*/


    /*
   * ----------------------------------------------------------------------------------------
   *  SMOOTH SCROLL JS
   * ----------------------------------------------------------------------------------------
   */

  
    $(".navbar-nav").singlePageNav({
      speed: 1e3,
      currentClass: "active",
      offset: 80
    });


$(function() {
  "use strict";
  /*
   * ----------------------------------------------------------------------------------------
   *  PRELOADER JS
   * ----------------------------------------------------------------------------------------
   */

  $('.preloader').fadeOut();
  $('.preloader-area').delay(350).fadeOut('slow');

  /*
   * ----------------------------------------------------------------------------------------
   *  SCROLL TO ABOUT SECTION JS
   * ----------------------------------------------------------------------------------------
   */

  $(".button-scroll").on("click", function() {
    var scrollTo = $(this).attr("data-scrollTo");
    $("body, html").animate({
      scrollTop: $("#" + scrollTo).offset().top - 60
    }, 1e3)
  });

  $(".button-scroll2").on("click", function() {
    var scrollTo = $(this).attr("data-scrollTo");
    $("body, html").animate({
      scrollTop: $("#" + scrollTo).offset().top - 80
    }, 1e3)
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  STICKY HEADER JS
   * ----------------------------------------------------------------------------------------
   */

  $(".menu-area").sticky({
    topSpacing: 0,
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  SLIDER (OWL CAROUSEL) JS
   * ----------------------------------------------------------------------------------------
   */

  $(".testimonial-list").owlCarousel({
    items: 1,
    autoPlay: true,
    navigation: false,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: true,
    autoHeight: true,
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  BOTTOM TO TOP SCROLL JS
   * ----------------------------------------------------------------------------------------
   */

  $('.scrollup').on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  COUNTER JS
   * ----------------------------------------------------------------------------------------
   */
    $('.counter_up').counterUp({
        delay: 10,
        time: 1000
    });
});

