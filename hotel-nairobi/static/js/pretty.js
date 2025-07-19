$('.nav-tabs').scrollingTabs();
 $(document).ready(function(){
 $("[rel^='lightbox']").prettyPhoto();});
 
   $(document).ready(function(){

        $(".close-vid").click(function(){
            $(".intro-vid").hide();
            $(".top-menu1").css({"height": "347px"});
            $(".body-wrapper").css({"top": "0%"});

        });
//        , "top": "-420px"


        $(".expand-vid").click(function () {
            $(".intro-vid").toggleClass("expand  iframe");
            $("iframe").addClass("iframe");
            $(".more-vid, .expand-vid ").hide();

        });

    });
	
	 autoPlayYouTubeModal();

  
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
          $('.modal').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }