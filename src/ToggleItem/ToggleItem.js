import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/ToggleItem~ToggleItem} kind.
* @module moonstone/ToggleItem
*/

import kind from 'enyo/src/kind.js';

import CheckboxItem from '../CheckboxItem/CheckboxItem.js';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.js';

/**
* {@link module:moonstone/ToggleItem~ToggleItem} is a control that combines a {@link module:moonstone/ToggleSwitch~ToggleSwitch}
* with a text label.
*
* @class ToggleItem
* @extends module:moonstone/CheckboxItem~CheckboxItem
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/ToggleItem~ToggleItem.prototype */ {

	/**
	* @private
	*/
	name: 'moon.ToggleItem',

	/**
	* @private
	*/
	kind: CheckboxItem,

	/**
	* @private
	*/
	icon: 'circle',

	/**
	* @private
	*/
	classes: 'moon-toggle-item',

	/**
	* @private
	*/
	checkboxOnRight: true,

	/**
	* @private
	*/
	componentOverrides: {
		client: {classes: 'moon-toggle-item-label-wrapper'},
		input: {kind: ToggleSwitch, spotlight: false}
	}
});
