$(function() {

  $(".fancybox").fancybox();

  $('.overlay').on('click',function() {
    // get the neighbor link
    var $link = $(this).next();
    var imagePath = $link.attr('href');
    var caption = $link.data('caption'); // gets us whatever is in data-caption
    // open fancybox
    $.fancybox(imagePath);
    // append the capton and the +
    console.log("We need to put this caption in:" + caption);
    $('.fancybox-inner').append("<div class='captionWrap'><span class='plus'>+</span> <p class='caption'>" + caption + "</caption></div>");
    $('.caption').addClass('animated fadeInUp');

  }); //END overlay



  // delegate the click to the body so that when the span is added, it will work
  $('body').on('click','span.plus',function(){
    $('p.caption').toggleClass('visible');
  });



  $(".fancybox").fancybox({ //These are the settings to change the open/close speeds but the overlay function above isn't stopping them from applying. The arrows show up without the overlay function too.
    padding: 0,

    openEffect : 'fade',
    openSpeed  : 700,

    closeEffect : 'fade',
    closeSpeed  : 700
  });

}); //END document ready
