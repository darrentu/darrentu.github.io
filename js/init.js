(function($){
  $(function(){
  	$('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $('.anim').hover(
       function(){ $(this).addClass('z-depth-5') },
       function(){ $(this).removeClass('z-depth-5') }
)