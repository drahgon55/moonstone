import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/ContextualPopupButton~ContextualPopupButton} kind.
* @deprecated Since 2.6
* @module moonstone/ContextualPopupButton
*/

import kind from 'enyo/src/kind.js';

import Button from '../Button/Button.js';

/**
* {@link module:moonstone/ContextualPopupButton~ContextualPopupButton} is a {@link module:moonstone/Button~Button} with additional
* styling applied.
*
* For more information, see the documentation on
* [Buttons]{@linkplain $dev-guide/building-apps/controls/buttons.html} in the
* Enyo Developer Guide.
*
* @class ContextualPopupButton
* @extends module:moonstone/Button~Button
* @ui
* @public
* @deprecated
*/

export default kind(
	/** @lends module:moonstone/ContextualPopupButton~ContextualPopupButton.prototype */ {

	/**
	* @private
	*/
	name: 'moon.ContextualPopupButton',

	/**
	* @private
	*/
	kind: Button,

	/**
	* @private
	*/
	classes: 'contextual-popup-button'
});
