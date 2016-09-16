
//$('#myModal').on('shown.bs.modal', function () {
//  $('#myInput').focus()
//})

var $myCarousel = $("#myCarousel");
$myCarousel.on("slide.bs.carousel", function (event) {
	var $currentSlide = $myCarousel.find(".active iframe");


	if (!$currentSlide.length) { return; }


	var player = Froogaloop($currentSlide[0]);
	player.api("pause");
});

var t;

var start = $('#myCarousel').find('.active').attr('data-interval');
t = setTimeout("$('#myCarousel').carousel({interval: 1000});", start-1000);

$('#myCarousel').on('slid.bs.carousel', function () {
     clearTimeout(t);
     var duration = $(this).find('.active').attr('data-interval');

     $('#myCarousel').carousel('pause');
     t = setTimeout("$('#myCarousel').carousel();", duration-1000);
})

$('.carousel-control.right').on('click', function(){
    clearTimeout(t);
});

$('.carousel-control.left').on('click', function(){
    clearTimeout(t);
});

var start = $('#myCarousel').find('.active').attr('data-interval');
t = setTimeout("$('#myCarousel').carousel({interval: 1000});", start-1000);
