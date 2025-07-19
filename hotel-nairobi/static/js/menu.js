$(function(){var items=$('.overlapblackbg, .slideLeft');var wsmenucontent=$('.wsmenucontent');var menuopen=function(){$(items).removeClass('menuclose').addClass('menuopen');}
var menuclose=function(){$(items).removeClass('menuopen').addClass('menuclose');}
$('#navToggle').click(function(){if(wsmenucontent.hasClass('menuopen')){$(menuclose)}else{$(menuopen)}});wsmenucontent.click(function(){if(wsmenucontent.hasClass('menuopen')){$(menuclose)}});$('#navToggle,.overlapblackbg').on('click',function(){$('.wsmenucontainer').toggleClass("mrginleft");});$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');$('.wsmenu-list li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');$('.wsmenu-mobile').click(function(){$('.wsmenu-list').slideToggle('slow');});$('.wsmenu-click').click(function(){$(this).siblings('.wsmenu-submenu').slideToggle('slow');$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');$(this).siblings('.megamenu').slideToggle('slow');});});$(document).ready(function(){$(".second-toggle").click(function(){$(".smenu").toggleClass("speed-in");$("#cd-shadow-layer").toggleClass("is-visible");});$("ul.megacollink li").click(function(){$(".menu-img-block").not(this).removeClass("menu-img-block-open");$(this).children('.menu-img-block').toggleClass("menu-img-block-open");});});$(document).ready(function(){$(".sharing-button").click(function(){$(".FixedSocialIconsNew").toggleClass("FixedSocialIconsNew-open");$(".sharing-button").toggleClass("sharing-button-move");});$(".second-toggle").click(function(){$(".close-btn").toggleClass("close-btn-open");});$('#mailus').on('click',function(e){$('.search-form').toggleClass("search-open");e.preventDefault();});$(".second-toggle").click(function(){$(".close-button").toggleClass("close-btn-open");});$(".close-button").click(function(){$("#main-nav").removeClass("speed-in");$(".close-button").removeClass("close-btn-open");});});
function validate_book_engine(formname)
{
var formn   =$("#"+formname);
var name    =$("#pname",formn).val().trim();
var email   =$("#pemail",formn).val().trim();
var phone_no=$("#pphone",formn).val().trim();
var wdate   =$("#scheckin",formn).val().trim();
var ddate   =$("#scheckout",formn).val().trim();
var adult   =$("#sadults",formn).val().trim();
var children=$("#schild",formn).val().trim();
//var comment    =$("#comment").val().trim();




if(name=='')
{

alert("Please Enter Your Name");
$("#pname").focus();
return false;

}
if(email=='')

{
alert("Please Enter Email ID");
$("#pemail").focus();
return false;
 }
var txtemailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	if(txtemailpattern.test(email)==false)
	{	

                alert("Please Enter Valid Email ID");
                $("#pemail").focus();
		 return false;
	}

if(phone_no=="" )
	{
        alert("Please Enter Phone Number.");
	$("#pphone").focus();
return false;
	} 
if(phone_no.length != 10 && phone_no.length != 12 )  
        {  
        alert("Please Enter Valid Phone Number.");
	$("#pphone").focus();
	
       return false;
        } 

if(wdate=='')
{

alert("Please Select Check In Date");
$("#checkinw").focus();
return false;

}


if(ddate=='')
{

alert("Please Select Check Out Date");
$("#checkoutw").focus();
return false;

}

/*
 if(room=='')
{

$(".error2").html("Please Select Apartment");
$("#sroom").focus();
return false;

}
*/
if(adult=='')
{

alert("Please Select Adult");
$("#sadults").focus();
return false;

}









if(children=='')
{

alert("Please Select Children");
$("#schild").focus();
return false;

}
/*
if(comment=='')
{

$(".error").html("Please Enter Enquiry");
$("#comment").focus();
return false;

}
*/
else
{


$("#processing2").show();





$.ajax({
type: "POST",
			url: "http://panarihotels.com/hotel-nairobi/enquiry/book_process.php",
			cache: false,
			data:$('#form-mobile').serializeArray(),
			}).done(function( msg ) {
                                       
              if(msg==1)
                {
                    alert("Your Enquiry has been Submitted Successfully");
                   
                   $('#form-mobile')[0].reset();
                   $("#processing2").hide();

                 }
              else  if(msg==6)
                {

                 alert("Please Enter All values");
                 $("#processing2").hide();
                }
                else  if(msg==6)
                {

                 alert("Please Enter All values");
                 $("#processing2").hide();
                }
             
                else  if(msg==3)
                {

                 alert("CheckIn Or CheckOut Date should be equal to today's date or greater than");
                 $("#processing2").hide();
                }
                  else  if(msg==20)
                {

                 alert("CheckOut Date should be equal to Check In date or greater than");
                 $("#processing2").hide();
                }
                  else  if(msg==4)
                {

                 alert("Mobile No. length should be 10 or 12");
                 $("#processing2").hide();
                }
                  else  if(msg==5)
                {

                 alert("Please enter a valid email");
                 $("#processing2").hide();
                }
                else
                {

               alert(msg);
               $("#processing2").hide();

                }



});


}
return false;
}

function trim(str)
{
	return str.replace(/^\s+|\s+$/g,'');
}

function checkNumber(textBox)
{
	while (textBox.value.length > 0 && isNaN(textBox.value)) {
		textBox.value = textBox.value.substring(0, textBox.value.length - 1)
	}

	textBox.value = trim(textBox.value);

}
