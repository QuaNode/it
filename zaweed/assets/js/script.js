
(function (){
  //appends the overlay to each button
  var $body = $("body");
  var $button = $(".buton");
  var $blankATags = $("a[href^='#']");
  var $thumbs = $(".thumb");

  function animateMaterial(e) {
      var $clicked = $(this);
      //gets the clicked coordinates
      var offset = $clicked.offset();
      var relativeX = (e.pageX - offset.left);
      var relativeY = (e.pageY - offset.top);
      var width = $clicked.width();
      var $ripple = $clicked.find('.ripple');

      //puts the ripple in the clicked coordinates without animation
      $ripple.addClass("notransition");
      $ripple.css({"top" : relativeY, "left": relativeX});
      $ripple[0].offsetHeight;
      $ripple.removeClass("notransition");

      //animates the button and the ripple
      $clicked.addClass("hovered");
      $ripple.css({ "width": width * 2, "height": width*2, "margin-left": -width, "margin-top": -width });

      setTimeout(function(){
          //resets the overlay and button
          $ripple.addClass("notransition");
          $ripple.attr("style", "");
          $ripple[0].offsetHeight;
          $clicked.removeClass("hovered");
        $ripple.removeClass("notransition");
      }, 500 );
  }

  // smotting scrolling
   function onBlankClick(event) {
     var $this = $(this), // caching the object $(this)
         href = $this.attr('href'), // get all href value attribute from anchor tag
         $target = $(href);// makeing the href variables like an Object because it's changing

         if( $target.length > 0){
           event.preventDefault(); // by default a tag will link you to another page but now i need another function that moving from part to anoter in my website

           //to make smooth scrolling
           $body.animate({
             scrollTop: $target.offset().top
           }, 2000)
         }
   }

   var flktyTwo = new Flickity( '.main-carousel-hero', {
       cellAlign: 'left',
       contain: true,
       wrapAround: true,
       prevNextButtons: false,
       autoPlay: 3000
     });

   var flkty = new Flickity( '.main-carousel', {
       cellAlign: 'left',
       contain: true,
       wrapAround: true,
       prevNextButtons: false,
       autoPlay: 5000
     });


  $(document).ready(function() {
    $button.each( function(){
      $(this).append("<div class='ripple'></div>");
    });
    $button.on("click", animateMaterial);

    $button.animateCss('animated fadeIn');
    $blankATags.on('click', onBlankClick);

    $('.venobox').venobox();


  });

})();
