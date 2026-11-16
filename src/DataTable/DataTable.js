import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/DataTable~DataTable} kind.
* @module moonstone/DataTable
*/

import kind from 'enyo/src/kind.js';
import DataTable from 'enyo/src/DataTable.js';

import TableRow from 'enyo/src/TableRow/TableRow.js';

/**
* {@link module:moonstone/DataTable~DataTable} is an {@link module:enyo/DataTable~DataTable} with Moonstone visual
* styling applied.
*
* @class DataTable
* @extends module:enyo/DataTable~DataTable
* @ui
* @public
*/
export default kind(
	/** @lends module:moonstone/DataTable~DataTable.prototype */ {

	/**
	* @private
	*/
	name: 'moon.DataTable',

	/**
	* @private
	*/
	kind: DataTable,

	/**
	* @private
	*/
	defaultKind: TableRow,

	/**
	* @method
	* @private
	*/
	reset: function () {
		DataTable.prototype.reset.apply(this, arguments);
		this.container.resize();
	}
});
