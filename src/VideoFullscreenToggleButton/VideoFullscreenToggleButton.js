/**
* Contains the declaration for the {@link module:moonstone/VideoFullscreenToggleButton~VideoFullscreenToggleButton} kind.
* @module moonstone/VideoFullscreenToggleButton
*/

import '../../index.js';

import kind from 'enyo/src/kind.js';

import $L from '../i18n.js';
import IconButton from '../IconButton/IconButton.js';

/**
* {@link module:moonstone/VideoFullscreenToggleButton~VideoFullscreenToggleButton} is a specialized {@link module:moonstone/IconButton~IconButton};
* when placed inside a {@link module:moonstone/VideoPlayer~VideoPlayer}, the button may be tapped to toggle
* the video player's fullscreen state.
*
* @class VideoFullscreenToggleButton
* @extends module:moonstone/IconButton~IconButton
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/VideoFullscreenToggleButton~VideoFullscreenToggleButton */ {

	/**
	* @private
	*/
	name: 'moon.VideoFullscreenToggleButton',

	/**
	* @private
	*/
	kind: IconButton,

	/**
	* @private
	*/
	icon : 'exitfullscreen',

	/**
	* @private
	*/
	small: false,

	/**
	* @private
	*/
	classes : 'moon-icon-exitfullscreen-font-style',

	/**
	* @private
	*/
	events: {
		/**
		* {@link module:moonstone/VideoPlayer~VideoPlayer#onRequestToggleFullscreen}
		*/
		onRequestToggleFullscreen:''
	},

	/**
	* @private
	*/
	handlers: {
		/**
		* @fires module:moonstone/VideoPlayer~VideoPlayer#onRequestToggleFullscreen
		*/
		ontap: 'doRequestToggleFullscreen'
	},

	// Accessibility

	/**
	* @private
	*/
	ariaObservers: [
		{path: 'icon', method: function () {
			if (this.icon === 'exitfullscreen') {
				this.set('accessibilityLabel', $L('original screen'));
			} else {
				this.set('accessibilityLabel', $L('full screen'));
			}
		}}
	]
});
