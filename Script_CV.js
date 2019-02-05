// window.addEventListener("scroll", function() 
// { 

// Calculez le déplacement ici ...

// document.getElementById('progress_bar').value = 20px; 
// });


$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight = 
    
    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;
  
  		$('.scroll-line').css('width', (scrolled + '%'));
});