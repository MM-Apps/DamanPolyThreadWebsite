$(function () {

    "use strict";

    var $bgobj = $(".parallax-about-us"); // assigning the object
    var $bgobj = $(".parallax-profile"); // assigning the object
    var $bgobj = $(".parallax-quality"); // assigning the object
    var $bgobj = $(".parallax-infrastructure"); // assigning the object
    var $bgobj = $(".parallax-ppf"); // assigning the object
    var $bgobj = $(".parallax-nwf"); // assigning the object
    var $bgobj = $(".parallax-bct"); // assigning the object
    var $bgobj = $(".parallax-enquiry"); // assigning the object
    var $bgobj = $(".parallax-career"); // assigning the object
    var $bgobj = $(".parallax-contact"); // assigning the object

    $(window).on("scroll", function () {

        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

        // Put together our final background position

        var coords = '100% ' + yPos + 'px';

        // Move the background

        $bgobj.css({ backgroundPosition: coords });

    });
        $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);
		
	});

});
