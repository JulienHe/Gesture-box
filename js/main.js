function toggleDialog(){
	$('.main,.reveal').toggleClass('noEvent');
	$('.dialog').toggleClass('visible');
}

function toggleArticle(){
	//Show/hide the main list and the article
	$('.main--feed--article').toggleClass('visible');
	$('.main--feed--list').toggleClass('hide');
}


// jQuery part
$(function(){

	//Height for the reveal scroll
	//get the height of the header
	var headerHeight = $('.reveal .header').height();

	//get the height of the window (Size of your screen)
	var windowHeight = $(window).height();

	//set the height of the reveal scroll
	$('.reveal .reveal__content').height(windowHeight - headerHeight);

});

// QuoJS part
$$(function() {
	$$('.hideReveal,.showReveal').tap(function(event) {
		event.preventDefault();
    	//affects "span" children/grandchildren
    	$('.reveal').toggleClass('visible');
    	$('.main').toggleClass('fixedItem');
    });

	$$('.main__feed__list--element').swipeRight(function(event){
		console.log(event.type);
		$(this).toggleClass('readed');
	});

	$$('[class|=dialog__list]').singleTap(function(event){
		var eventTap = $(this).data('event');
		event.preventDefault();
		if(eventTap == 'closeDialog'){
			toggleDialog();
		}else{
			console.log(eventTap);
		}
	});

    //Hold an element in the list
    $$('.main__feed__list--element').hold(function(event){
    	console.log(event.type);
    	event.preventDefault();
    	toggleDialog();
    });

    $$('.main__feed__list--element,.hideArticle').singleTap(function(event){
    	console.log(event.type);
    	event.preventDefault();
    	toggleArticle();
    });

    //like a post
    $$('.main__feed__list--element').doubleTap(function(event){
    	console.log(event.type);
    	//event.preventDefault();
    	$(this).find('.main__feed__list__element--like').fadeIn(200,function(){
    		$(this).delay(300).fadeOut(400);
    	});
    });
});