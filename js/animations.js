//Initially the tweet-submit button and the character show button should be hidden//
$(document).ready(function(){

	$('#tweet-controls').hide();
	//On-click in the text box the tweet buttons should re-appear.
	$('.tweet-compose').on('click', function(){
		$('#tweet-controls').show();
		$('.tweet-compose').css({height: '5em'});
	});
	$('.tweet-compose').on('keypress', function(){//On key press the character counter will decrease.
		do($('#char-count').text( Math.max(0, Number($('#amountSpan').text()) + 1) )){
			
		};
		// // $('#char-count').text( Number($('#amountSpan').text()) - 1);
		// var charCounter = $('#amountSpan').val();
		// if(charCounter > 0){
	});
});