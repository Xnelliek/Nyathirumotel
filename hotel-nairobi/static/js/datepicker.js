$(function() {
    $("#checkinw").datepicker({
        minDate: 0,

onSelect: function() {
       var date = new Date($(this).val());
        var ret = new Date(date.setDate(date.getDate() + 1));
      var year = ret.getFullYear(), month = (ret.getMonth() + 1), day = ret.getDate();
        
        
       $("#checkoutw").val(month+"/"+day+"/"+year);
       
        
    }
    }).datepicker("setDate", new Date());

    $("#checkoutw").datepicker({
        minDate: 0
    });

$("#scheckin").datepicker({dateFormat:'dd-mm-yy',minDate:0}).datepicker("setDate", new Date());$("#scheckout").datepicker({dateFormat:'dd-mm-yy',minDate:0});
    $("#gcheckindate1").datepicker({ dateFormat: 'dd-mm-yy',maxDate: 0 });
	$("#gcheckoutdate1").datepicker({ dateFormat: 'dd-mm-yy',maxDate: 0 });
    $("#checkin").datepicker();
    $("#checkout").datepicker();
    $("#pdate").datepicker();
    $("#rcheckin").datepicker();
    $("#rcheckout").datepicker();
    $("#cdate").datepicker();
    $("#edate").datepicker();
    $("#sdate").datepicker();
    $("#hdate").datepicker();
	$("#checkidate").datepicker();
	$("#checkodate").datepicker();
          
});
$(document).ready(function() {
    $(".book-btn").click(function() {
        $(".search-form-wrapper").slideToggle();
        $(this).toggleClass("downarrow");
    });
    $(".book-now").click(function() {
        $(".search-form-wrapper").slideToggle();
    });
    $("#hide").click(function(e) {
        $(".search-form-wrapper").slideToggle();
        $(".book-btn").addClass("downarrow");
    });
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("#search-fixed").addClass("search-fixed");
        $(".search-form-wrapper").addClass("afsc")
    } else {
        $("#search-fixed").removeClass("search-fixed");
        $(".search-form-wrapper").removeClass("afsc")
    }
});
