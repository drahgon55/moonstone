import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/Divider~Divider} kind.
* @module moonstone/Divider
*/

import kind from 'enyo/src/kind.js';
import utils from 'enyo/src/utils.js';
import Control from 'enyo/src/Control/Control.js';

import Marquee from '../Marquee/Marquee.js';
var MarqueeItem = Marquee.Item,
	MarqueeSupport = Marquee.Support;

/**
* {@link module:moonstone/Divider~Divider} is a simply styled component that may be used as a separator
* between groups of components.
*
* @class Divider
* @mixes module:moonstone/MarqueeSupport~MarqueeSupport
* @mixes module:moonstone/MarqueeItem~MarqueeItem
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/Divider~Divider.prototype */ {

	/**
	* @private
	*/
	name: 'moon.Divider',

	/**
	* @private
	*/
	kind: Control,

	/**
	* @private
	*/
	classes: 'moon-divider moon-divider-text',

	/**
	* @private
	*/
	mixins: [MarqueeSupport, MarqueeItem],

	/**
	* @private
	*/
	marqueeOnSpotlight: false,

	/**
	* @private
	*/
	marqueeOnRender: true,

	/**
	* @private
	*/
	contentChanged: function () {
		this.content = this.content.split(' ').map(utils.cap).join(' ');
		Control.prototype.contentChanged.apply(this, arguments);
	}
});
