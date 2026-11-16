import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/ToggleSwitch~ToggleSwitch} kind.
* @module moonstone/ToggleSwitch
*/

import kind from 'enyo/src/kind.js';
import util from 'enyo/src/utils.js';

import Checkbox from '../Checkbox/Checkbox.js';

/**
* {@link module:moonstone/ToggleSwitch~ToggleSwitch}, which extends {@link module:moonstone/Checkbox~Checkbox}, is a control
* that looks like a switch with 'on' and 'off' states. When the toggle switch is
* tapped, it switches its state and fires an
* [onChange]{@link module:enyo/Checkbox~Checkbox#onChange} event.
*
* @class ToggleSwitch
* @extends module:moonstone/Checkbox~Checkbox
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/ToggleSwitch~ToggleSwitch.prototype */ {

	/**
	* @private
	*/
	name: 'moon.ToggleSwitch',

	/**
	* @private
	*/
	kind: Checkbox,

	/**
	* @private
	*/
	icon: 'circle',

	/**
	* @private
	*/
	classes: 'moon-toggle-switch',

	/**
	* @private
	*/
	rendered: function () {
		Checkbox.prototype.rendered.apply(this, arguments);
		// wait until after we're rendered to allow animation.
		util.asyncMethod(this, function () {
			this.addClass('animated');
		});
	}
});
