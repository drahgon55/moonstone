import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/FormCheckbox~FormCheckbox} kind.
* @module moonstone/FormCheckbox
*/

import kind from 'enyo/src/kind.js';

import CheckboxItem from '../CheckboxItem/CheckboxItem.js';

/**
* {@link module:moonstone/FormCheckbox~FormCheckbox} is a labeled checkbox
* designed for use in form layouts. Unlike {@link module:moonstone/CheckboxItem~CheckboxItem},
* which it extends, `moonstone/FormCheckbox` provides a circular "hit target"
* that is always visible, regardless of whether the checkbox is currently checked.
*
* @class FormCheckbox
* @extends module:moonstone/CheckboxItem~CheckboxItem
* @ui
* @public
*/

export default kind(
	/** @lends module:moonstone/FormCheckbox~FormCheckbox.prototype */ {

	/**
	* @private
	*/
	name: 'moon.FormCheckbox',

	/**
	* @private
	*/
	kind: CheckboxItem,

	/**
	* @private
	*/
	classes: 'moon-formcheckbox-item'
});
