import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/RadioItemGroup~RadioItemGroup} kind.
* @module moonstone/RadioItemGroup
*/

import kind from 'enyo/src/kind.js';
import Group from 'enyo/src/Group/Group.js';

import RadioItem from '../RadioItem/RadioItem.js';

/**
* {@link module:moonstone/RadioItemGroup~RadioItemGroup} is a container in which
* a group of {@link module:moonstone/RadioItem~RadioItem} objects are laid out
* horizontally. Within a group, only one item may be active at a time; tapping
* on an item will deactivate any previously-tapped item.
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
* 		RadioItemGroup = require('moonstone/RadioItemGroup');
*
* 	{kind: RadioItemGroup, onActivate: 'buttonActivated', components: [
* 		{content: 'Lions', selected: true},
* 		{content: 'Tigers'},
* 		{content: 'Bears'}
* 	]}
* ```
*
* @class RadioItemGroup
* @extends module:enyo/Group~Group
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/RadioItemGroup~RadioItemGroup.prototype */ {

	/**
	* @private
	*/
	name: 'moon.RadioItemGroup',

	/**
	* @private
	*/
	kind: Group,

	/**
	* @private
	*/
	classes: 'moon-radio-item-group',

	/**
	* @private
	*/
	defaultKind: RadioItem
});
