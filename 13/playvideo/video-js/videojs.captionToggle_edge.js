( function() {

	videojs.plugin( 'ccToggle', function ( options ) {
		var init;
		init = function () {
			var player;

			player = this;
			$( 'div.vjs-captions-button.vjs-menu-button.vjs-control > div.vjs-menu' ).remove();
setTimeout(function(){
	var ccBtn = document.getElementsByClassName( 'vjs-captions-button vjs-menu-button vjs-control' )[ 0 ];
        ccBtn.setAttribute( 'style', 'color: #d52484' );
		player.va[0].show();
		player.trigger('captionstrackchange');
},1)
			$( 'div.vjs-captions-button.vjs-menu-button.vjs-control, div.vjs-subtitles-button.vjs-menu-button.vjs-control ' ).on( 'click', function() {
				var ccBtn = document.getElementsByClassName( 'vjs-captions-button vjs-menu-button vjs-control' )[ 0 ];
				var color = ccBtn.getAttribute( 'style' );
				var playerId = player.id(); //id

				if ( color === null ) {
					ccBtn.setAttribute( 'style', 'color: #d52484' );
					// player.textTracks( player.va[ 0 ].P, 'captions' ); //player.textTracks_[ 0 ].id_
					player.va[0].show();
					player.trigger('captionstrackchange');
				} else {
					ccBtn.removeAttribute( 'style' );
					// player.textTracks( undefined, 'captions' );
					player.va[0].disable();
					player.trigger('captionstrackchange');
				}
			} );

		};
		this.on( 'loadedmetadata', init );
	} );

} ).call( this );