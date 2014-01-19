// (function ($) {
// }(jQuery));

$$(function() {
	$$('.header--icon').tap(function(event) {
		event.preventDefault();
    	// affects "span" children/grandchildren
    	$('.reveal').toggleClass('visible');
    });
});