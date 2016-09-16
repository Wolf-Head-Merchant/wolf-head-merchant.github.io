
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
