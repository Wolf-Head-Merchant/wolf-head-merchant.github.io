$('.carousel').carousel({
    pause: "false"
});

var $myCarousel = $("#myCarousel");
$myCarousel.on("slide.bs.carousel", function (event) {
	var $currentSlide = $myCarousel.find(".active iframe");


	if (!$currentSlide.length) { return; }


	var player = Froogaloop($currentSlide[0]);
	player.api("pause");
});
