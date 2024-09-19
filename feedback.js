/* 
jQuery.fitHeights by Paravel™

Author: Dave Rupert
Author URL: http://daverupert.com/
Based on: https://github.com/filamentgroup/jQuery-Equal-Heights 

*/
(function(){
  
    $.fn.fitHeights = function() {
      
      var items = $(this);
      function setHeights() {
        
        var currentTallest = 0;
    
        items.css({ 'min-height' : currentTallest });  // unset min-height to get actual new height
  
        // right now this causes a noticeable shift in height on resize. workarounds?
        
        items.each(function(){
          
          if( $(this).height() > currentTallest ) { currentTallest = $(this).height(); }
        });
  
        items.css({ 'min-height' : currentTallest });
      
      }
      
      setHeights();
      $(window).on('resize', setHeights);
      return this;
    };
  })(jQuery);
  
  $(window).load(function(){
      /* $(groupOfItems).fitHeights(); */
    $('.grid-testimonials p').fitHeights();
  });