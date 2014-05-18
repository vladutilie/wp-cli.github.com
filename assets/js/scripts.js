(function($) {

	/**
	 * Keep search field open if it has any content
	 */
	function handleSearch( el ){
		var $el = $( el );
		if( "" !== $el.val() ){
			$el.addClass('focused');
		} else {
			$el.removeClass('focused');
		}
		$el.change( function(){ handleSearch( this ); } );
	}

	$(document).ready(function(){

		handleSearch( $('.main-nav .search') );

	});

})(jQuery); // Fully reference jQuery after this point.