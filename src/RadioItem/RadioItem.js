import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/RadioItem~RadioItem} kind.
* @module moonstone/RadioItem
*/

import kind from 'enyo/src/kind.js';

import SelectableItem from '../SelectableItem/SelectableItem.js';

/**
* {@link module:moonstone/RadioItem~RadioItem} is a modified {@link module:moonstone/Item~Item} designed for use inside
* a {@link module:moonstone/RadioItemGroup~RadioItemGroup}.
*
* For more information, see the documentation on
* [Radio Items]{@linkplain $dev-guide/building-apps/controls/radio-items.html}
* in the Enyo Developer Guide.
*
* @class RadioItem
* @extends module:moonstone/SelectableItem~SelectableItem
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/RadioItem~RadioItem.prototype */ {

	/**
	* @private
	*/
	name: 'moon.RadioItem',

	/**
	* @private
	*/
	kind: SelectableItem,

	/**
	* @private
	*/
	create: function() {
		SelectableItem.prototype.create.apply(this, arguments);
		this.removeClass('moon-selectable-item');
		this.addClass('moon-radio-item');
	}
});
