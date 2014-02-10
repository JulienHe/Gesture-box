var revealWidth = $('.reveal').width(), revealPosition= '', myTimer = '', $listElement = $('.main__feed__list--element');

function toggleDialog(){
	//Show - hide the dialog box
	$('.main,.reveal').toggleClass('noEvent');
	$('.dialog').toggleClass('visible');
}

function toggleArticle(){
	//Show/hide the main list and the article
	$('.main--feed--article').toggleClass('visible');
	$('.main--feed--list').toggleClass('hide');
}

function toggleReveal(){
	//Show hide reveal
	$('.reveal').toggleClass('visible');
	$('.main').toggleClass('fixedItem');
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
	Hammer($listElement).on("swipe", function(event) {
		console.log(this, event);
		//Determine if it's left or right's swipe
		if(event.gesture.direction == 'left'){
			$(this).addClass('readed');
		}else if(event.gesture.direction == 'right'){
			$(this).removeClass('readed');
		}
	});

    //Hold an element in the list
    Hammer($listElement).on("hold", function(event) {
    	toggleDialog();
    });

    //Hide the dialog
    Hammer($('.dialog__list--cancel')).on("tap", function(event) {
    	var eventTap = $(this).data('event');
    	event.preventDefault();
    	if(eventTap == 'closeDialog'){
    		toggleDialog();
    	}
    });

    //View article
    Hammer($listElement).on("tap", function(event) {
    	
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

    //like a post
    Hammer($listElement).on("doubletap", function(event) {
    	//Clear the timer and continue with the doubleTap
    	clearTimeout(myTimer);
    	//Prevent the default 
    	event.preventDefault();
		$(this).find('.main__feed__list__element--like').fadeIn(200,function(){
			$(this).delay(300).fadeOut(400);
		});
	});

    //Hide the article
    Hammer($('.hideArticle')).on("tap", function(event) {
    	toggleArticle();
    });
});