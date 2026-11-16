/**
* Mixin that provides accessibility support for {@link module:moonstone/DateTimePickerBase~DateTimePickerBase}.
*
* @module moonstone/DateTimePickerBase/DateTimePickerBaseAccessibilitySupport
*/

import kind from 'enyo/src/kind.js';

/**
* @name DateTimePickerBaseAccessibilitySupport
* @mixin
*/
export default {

	/*
	* @private
	*/
	updateAccessibilityAttributes: kind.inherit(function (sup) {
		return function (was, is, prop) {
			sup.apply(this, arguments);
			this.$.client.set('accessibilityDisabled', this.accessibilityDisabled);
		};
	})
};
