import utils from 'enyo/src/utils.js';
import options from 'enyo/src/options.js';

var config = global.moon && global.moon.config;

/**
* Global *design-time* configuration options for Moonstone
*
* @param {Boolean} Set accelerate `false` to prefer position properties over CSS transforms.
* @module moonstone/options
*/
export default utils.mixin({
	/** @lends module:moonstone/options */
	accelerate: true,
	renderOnShow: {
		expandableListDrawer: true
	}
}, options, config);
