$(function(){
	$("body").on("click", "button.play, button.start, button.pause, button.stop, button.move, button.subs", function(event){
		if ($(this).hasClass('pause')){
			if ($(this).attr('data-status') == 'pause'){
				$(this).text('Play');
				$(this).attr('data-status', 'play');
			} else if($(this).attr('data-status') == 'play'){
				$(this).text('Pause');
				$(this).attr('data-status', 'pause');
			}
		}
		$.post( $(this).attr('data-href') ).done(function ( data ) {
			console.log('done');
		});
		event.preventDefault();
	});
});