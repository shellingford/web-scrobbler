'use strict';

/* global Connector */

Connector.playerSelector = '.recaster-mainWrapper';

Connector.artistSelector = '.recaster-currentArtist';

Connector.trackSelector = '.recaster-currentSong';

Connector.trackArtImageSelector = '.recaster-coverLink img';

Connector.isPlaying = function() {
	return $('.recaster-mainBt').hasClass('rc-active');
};
