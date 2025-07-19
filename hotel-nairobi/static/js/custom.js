  $(window).ready(function(){
      $('.flexslider').flexslider({
        animation: "fade",
       
        start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
		before: function(){captionMoveOut();},           //Callback: function(slider) - Fires asynchronously with each slider animation
		after: function(){captionMoveIn();},            //Callback: function(slider) - Fires after each slider animation completes
		end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
		added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
		removed: function(){} 
      });
      
      $('.flex-caption').hide();
      
       $('.flex-caption').fadeIn(2000);
    });
    
    function captionMoveIn() {
		$('.flex-caption')
		.animate({top: "35%"},0)
		.fadeIn(2000)
	;};
	
	
	function captionMoveOut() {
		$('.flex-caption')
		.animate({top: "-40%"},700)
		.fadeOut("normal")
		
	;};
    


$(window).ready(function(){

  
  /*room page slider*/
  
  $('.roomsslider .flexslider').flexslider
  ({
  animation: "fade",
  pauseOnAction:true,
  itemWidth:1148, 
  start: function(slider){$('.slider').removeClass('loading');}
  });
  
  /*wedding page carasoul*/
    $('#myCarousel').carousel({
pause:true,
    interval: false
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});
});
 var isAlreadyPopUp=false;

   $(window).scroll(function() {   
 if(!isAlreadyPopUp){   
    var scroll = $(window).scrollTop();
   
	
    if (scroll >= 400) {
   $('.ovrlay').fadeIn();
   $('#popup').fadeIn();
 isAlreadyPopUp=true;
    } /*else {
    $('.ovrlay').fadeOut();
   $('#popup').fadeOut();
    }
	*/
	  
	  }
});

   $(document).ready(function(e) {
        $('#popup').animate({"top":"6%","marginTop":"0px","marginLeft":"auto","marginRight":"auto"},1000);
		$(".close-btn-pop").click(function(){
		$(".ovrlay").fadeOut();
		$("#popup").fadeOut();
		});
		$(".ignore-now").click(function() {
		$(".ovrlay").fadeOut();			
		$("#popup").fadeOut();	
		});
		$(".ovrlay").click(function() {
		$(".ovrlay").fadeOut();			
		$("#popup").fadeOut();
		});
		$("#book-btn").click(function() {
		$(".ovrlay").fadeOut();			
		$("#popup").animate({"top":"-220%"},500);
		$(".search-form-wrapper").slideToggle();
		});
		/*$(#booking1).click(function(){
		$(".ovrlay").fadeOut();			
		$("#popup").animate({"top":"-220%"},500);	
		});*/
		
    });
	
	$(document).ready(function(e) {
	$('.book-now').click(function(){
	//$('.form-wrapp').removeClass('.form-wrapp hideform');
	 $(".ovrlay").fadeOut();
        $("#popup").animate({
            "top": "-500%"
        }, 500);	
		$(".ovrlay").fadeOut();
        $("#popup").animate({
            "top": "-500%"
        }, 500);;
	});
});
	var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
     if (mobile) {$('.map').hide();}


function init_map(){var myOptions = {zoom:15,center:new google.maps.LatLng(-1.3288473,36.8559068),mapTypeId: google.maps.MapTypeId.ROADMAP};

map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

var iconBase = 'http://www.panarihotels.com/hotel-nairobi/images/';
var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<p><b>The Panari Hotel</b></p>'+
            '</div>'+
            '</div>';

marker = new google.maps.Marker({map: map,animation: google.maps.Animation.DROP,position: new google.maps.LatLng(-1.3288473,36.8559068),icon: iconBase + 'map-icon.png'});
marker.addListener('click', toggleBounce);
infowindow = new google.maps.InfoWindow({content:contentString });

google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});

infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
/* jquery search */
(function(window){var searchEl=document.querySelector("#input");var labelEl=document.querySelector("#label");labelEl.addEventListener("click",function(){if(classie.has(searchEl,"focus")){classie.remove(searchEl,"focus");classie.remove(labelEl,"active");}else{classie.add(searchEl,"focus");classie.add(labelEl,"active");}});document.addEventListener("click",function(e){var clickedID=e.target.id;if(clickedID!="search-terms"&&clickedID!="search-label"){if(classie.has(searchEl,"focus")){classie.remove(searchEl,"focus");classie.remove(labelEl,"active");}}});}(window));
/* jquery search */

/* jquery placeholder */
$(function(){$("input, textarea").placeholder()});(function(e,t,n){function r(e){var t={};var r=/^jQuery\d+$/;n.each(e.attributes,function(e,n){if(n.specified&&!r.test(n.name)){t[n.name]=n.value}});return t}function i(e,t){var r=this;var i=n(r);if(r.value==i.attr("placeholder")&&i.hasClass("placeholder")){if(i.data("placeholder-password")){i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id"));if(e===true){return i[0].value=t}i.focus()}else{r.value="";i.removeClass("placeholder");r==o()&&r.select()}}}function s(){var e;var t=this;var s=n(t);var o=this.id;if(t.value==""){if(t.type=="password"){if(!s.data("placeholder-textinput")){try{e=s.clone().attr({type:"text"})}catch(u){e=n("<input>").attr(n.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":s,"placeholder-id":o}).bind("focus.placeholder",i);s.data({"placeholder-textinput":e,"placeholder-id":o}).before(e)}s=s.removeAttr("id").hide().prev().attr("id",o).show()}s.addClass("placeholder");s[0].value=s.attr("placeholder")}else{s.removeClass("placeholder")}}function o(){try{return t.activeElement}catch(e){}}var u=Object.prototype.toString.call(e.operamini)=="[object OperaMini]";var a="placeholder"in t.createElement("input")&&!u;var f="placeholder"in t.createElement("textarea")&&!u;var l=n.fn;var c=n.valHooks;var h=n.propHooks;var p;var d;if(a&&f){d=l.placeholder=function(){return this};d.input=d.textarea=true}else{d=l.placeholder=function(){var e=this;e.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":s}).data("placeholder-enabled",true).trigger("blur.placeholder");return e};d.input=a;d.textarea=f;p={get:function(e){var t=n(e);var r=t.data("placeholder-password");if(r){return r[0].value}return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e);var u=r.data("placeholder-password");if(u){return u[0].value=t}if(!r.data("placeholder-enabled")){return e.value=t}if(t==""){e.value=t;if(e!=o()){s.call(e)}}else if(r.hasClass("placeholder")){i.call(e,true,t)||(e.value=t)}else{e.value=t}return r}};if(!a){c.input=p;h.value=p}if(!f){c.textarea=p;h.value=p}n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(i);setTimeout(function(){e.each(s)},10)})});n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})})}})(this,document,jQuery);
/* jquery placeholder */
/* jquery classie */
(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);
/* jquery classie */	
