var revealWidth = $('.reveal').width(),revealPosition= '',myTimer = '';


function toggleDialog(){
	$('.main,.reveal').toggleClass('noEvent');
	$('.dialog').toggleClass('visible');
}

function toggleArticle(){
	//Show/hide the main list and the article
	$('.main--feed--article').toggleClass('visible');
	$('.main--feed--list').toggleClass('hide');
}

function toggleReveal(){
	$('.reveal').toggleClass('visible');
	$('.main').toggleClass('fixedItem');
}

// Maximum milliseconds between two taps before they are not considered 
// a doubletap anymore.
var maxInterval = 500;

// Timestamp (a.k.a: "UNIX epoch" - milliseconds since 1 january 1970)
// Here it is set to Infinity because the first tap should always work.
var lastTap = Infinity;

/*!
 * Longer but easier to understand solution
 */

// Here we declare ou "shouldDoNextTap" function.
function shouldDoNextTap (type) {
	// If the type is a "tap" event
	// continue ...
	if(type == 'tap') {
		// If the interval between the last tap and now is superior to our max.
		// continue ..
		if(lastTap - Date.now() < maxInterval) {
			// Reset our timer to the current epoch (time)
			lastTap = Infinity;
			// Don't let the "tap" event be triggered
			return false;
		}
		// othewise
		else {
			// Reset our timer to the current epoch (time)
			lastTap = Date.now();
			// Do let the "tap" event be triggered
			return true;
		}
	}
}


// jQuery part
$(function(){

	//Height for the reveal scroll
	//get the height of the header
	var headerHeight = $('.header').height();

	//get the height of the window (Size of your screen)
	var windowHeight = $(window).height();

	//set the height of the reveal scroll
	$('[data-scrollable]').height(windowHeight - headerHeight);

	//Show or hide reveal
	Hammer($('.showReveal')).on("tap", function(event) {
		console.log(event);
		toggleReveal();
	});

	//Show or hide reveal
	Hammer($('.hideReveal')).on("tap", function(event) {
		console.log(this, event);
		toggleReveal();
	});

	// Swipe an element
	Hammer($('.main__feed__list--element')).on("swipe", function(event) {
		console.log(this, event);
		//Determine if it's left or right's swipe
		if(event.gesture.direction == 'left'){
			$(this).addClass('readed');
		}else if(event.gesture.direction == 'right'){
			$(this).removeClass('readed');
		}
	});

    //Hold an element in the list
    Hammer($('.main__feed__list--element')).on("hold", function(event) {
    	console.log(event);
    	toggleDialog();
    });

    //Hide the dialog
    Hammer($('.dialog__list--cancel')).on("tap", function(event) {
    	console.log(event);
    	var eventTap = $(this).data('event');
    	event.preventDefault();
    	if(eventTap == 'closeDialog'){
    		toggleDialog();
    	}
    });

    //View article
    Hammer($('.main__feed__list--element')).on("tap", function(event) {
    	console.log(event.type);

    	// Without Ajax
    	// if(shouldDoNextTap(event.type)) {
    	// 	toggleArticle();
    	// }
    	clearTimeout(myTimer);
    	me = $(this);

		myTimer = setTimeout(function () {
			//Get the link from the data-attribute
    		var url = me.data('link');
    		console.log(url);
    		$.ajax({
				type:'GET',
				url: url,
				data: {},
				success: function(data) {
					//On success get the data
					console.log(data);
					//Add the content to the right place
					$('.main__feed__article--element').html(data);
					toggleArticle();
				}, error: function(jqXHR, textStatus, errorThrown) {
					//On fail, get status
					console.log(jqXHR); 
				}
			});
		}, 175);
    });


    //Hide the article
    Hammer($('.hideArticle')).on("tap", function(event) {
    	console.log(event.type);
    	toggleArticle();
    });

    //like a post
    Hammer($('.main__feed__list--element')).on("doubletap", function(event) {
    	clearTimeout(myTimer);
    	console.log(event.type);
    	event.stopPropagation();
    	event.preventDefault();
		//event.preventDefault();
		$(this).find('.main__feed__list__element--like').fadeIn(200,function(){
			$(this).delay(300).fadeOut(400);
		});
	});

});