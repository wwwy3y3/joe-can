$(function(){
    $(window).scroll(function() {              
      $('#cd-menu-trigger,#cd-lateral-nav,.one').toggle($(document).scrollTop()  >= $("#p106").offset().top);
    });
})




$(function(){
    $(window).scroll(function() {              
      $('.arrow').toggle($(document).scrollTop()  >= $("#hero2").offset().top);
    });
})


$(function(){
    $(window).scroll(function() {              
      $('.eye').toggle($(document).scrollTop()  <= $("#hero1").offset().top);
    });
})













window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}





$(document).ready(function () {
    
    $(".link").on('click', function (event)  {
        
        var targetDiv = $(this).data('target');
      
        $('span.active').removeClass('active');
        $(this).toggleClass('active');

        $('div.active').removeClass('active').hide();
        $(targetDiv).addClass('active').slideToggle("fast")    
        
    });
    
});








var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}












var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
		
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
				
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}



var divState = {};
function popup(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
		
        
			  divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');	
     
    }
}

  
  
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0}else{if(++counter>settings.failure_limit){return false}}})}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed}$.extend(settings,options)}$container=settings.container===undefined||settings.container===window?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(event){return update()})}this.each(function(){var self=this;var $self=$(self);self.loaded=false;$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)}$("<img />").bind("load",function(){$self.hide().attr("src",$self.data(settings.data_attribute))[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.data(settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(event){if(!self.loaded){$self.trigger("appear")}})}});$window.bind("resize",function(event){update()});if(/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)){$window.bind("pageshow",function(event){if(event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear")})}})}$(window).load(function(){update()});return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.height()+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return!$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return!$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return $.inviewport(a,{threshold:0})},"above-the-fold":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return!$.rightoffold(a,{threshold:0})}})})(jQuery,window,document)},{}],2:[function(require,module,exports){require("../node_modules/lazyload/jquery.lazyload.js");$(window).on("resize",function(){heroFill()});$(document).on("ready",function(){heroFill();$("img.lazy").lazyload({threshold:600,effect:"fadeIn"});$("body").removeClass("preload")});$(document).on("scroll",function(){});var heroFill=function(){var windowHeight=$(window).height();$(".hero").css("height",windowHeight+"px");$("body").removeClass("preload")}},{"../node_modules/lazyload/jquery.lazyload.js":1}]},{},[2]);
  
  