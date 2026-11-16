import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/Scrim~Scrim} kind.
* @module moonstone/Scrim
*/

import kind from 'enyo/src/kind.js';
import Scrim from 'enyo/src/Scrim/Scrim.js';

/**
* {@link module:moonstone/Scrim~Scrim} is a Moonstone-styled
* {@link module:enyo/Scrim~Scrim}.
*
* @class Scrim
* @extends module:enyo/Scrim~Scrim
* @ui
* @public
*/
var MoonScrim = kind(
	/** @lends module:moonstone/Scrim~Scrim.prototype */ {

	/**
	* @private
	*/
	name: 'moon.Scrim',

	/**
	* @private
	*/
	kind: Scrim,

	/**
	* @private
	*/
	classes: 'moon-scrim'
});

new Scrim.ScrimSingleton(MoonScrim, 'scrim', {floating: true, classes: 'moon-scrim moon-scrim-translucent'});
new Scrim.ScrimSingleton(MoonScrim, 'scrimTransparent', {floating: true, classes: 'moon-scrim moon-scrim-transparent'});

export default MoonScrim;
