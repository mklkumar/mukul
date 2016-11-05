$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 50) // 70px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });
});

$(window).scroll(function(){
	if($('.navbar-default').offset().top > 70)
	{
		$('.navbar-default').addClass('top-nav-collapse');
	}
	else
	{
		$('.navbar-default').removeClass('top-nav-collapse');
	}
});


$('.jumbotron').height($(window).height()+50);
$('.message-box').css({'marginTop':$(window).height()*0.4});

$('.home-slider').flexslider({
	animation: "slide",
	directionNav: false,
	controlNav: false,
	direction: "vertical",
	slideshowSpeed: 2500,
	animationSpeed: 500,
	smoothHeight: false
});

/*============================================
Backstretch Images
==============================================*/

/* validation */

$(document).ready(function(){
	$("#contactform").validate({
		rules:{
			user: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		}
	});
	
	/* contact */
	$("#contactform").on('submit', function(){
		var user = $("#user").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();
		
		$.ajax({
			url: contact.php,
			type: 'POST',
			data: { user: user, email: email, phone: phone, message: message},
		}).success(function(data){
			$("#reply").text(data);
		});
	});	
});
