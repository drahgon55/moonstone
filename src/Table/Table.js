import '../../index.js';

/**
* Contains the declaration for the {@link module:moonstone/Table~Table},
* {@link module:moonstone/Table~TableCell}, and {@link module:moonstone/Table~TableRow} kinds.
* @module moonstone/Table
*/

import kind from 'enyo/src/kind.js';
// Renamed: moonstone declares kinds of the same names below. In CommonJS these
// were `var` redeclarations and the enyo value was still in scope when the
// `kind:` base was read; an import plus a `var` of one name is a SyntaxError.
import EnyoTable from 'enyo/src/Table/Table.js';
import EnyoTableRow from 'enyo/src/TableRow/TableRow.js';
import EnyoTableCell from 'enyo/src/TableCell/TableCell.js';

/**
* {@link module:moonstone/Table~TableCell} extends {@link module:enyo/TableCell~TableCell},
* adding Moonstone visual styling.
*
* @class TableCell
* @extends module:enyo/TableCell~TableCell
* @ui
* @public
*/
var TableCell = kind(
	/** @lends module:moonstone/Table~TableCell.prototype */ {

	/**
	* @private
	*/
	name: 'moon.TableCell',

	/**
	* @private
	*/
	kind: EnyoTableCell,

	/**
	* @private
	*/
	classes: 'moon-table-cell'
});

/**
* {@link module:moonstone/Table~TableRow} extends {@link module:enyo/TableRow~TableRow},
* adding Moonstone visual styling.
*
* @class TableRow
* @extends module:enyo/TableRow~TableRow
* @ui
* @public
*/
var TableRow = kind(
	/** @lends module:moonstone/Table~TableRow.prototype */ {

	/**
	* @private
	*/
	name: 'moon.TableRow',

	/**
	* @private
	*/
	kind: EnyoTableRow,

	/**
	* @private
	*/
	classes: 'moon-table-row',

	/**
	* @private
	*/
	spotlight: true,

	/**
	* @private
	*/
	defaultKind: TableCell
});

/**
* {@link module:moonstone/Table~Table} extends {@link module:enyo/Table~Table}, adding Moonstone visual styling.
*
* @class Table
* @extends module:enyo/Table~Table
* @ui
* @public
*/
var Table = kind(
	/** @lends module:moonstone/Table~Table.prototype */ {

	/**
	* @private
	*/
	name: 'moon.Table',

	/**
	* @private
	*/
	kind: EnyoTable,

	/**
	* @private
	*/
	classes: 'moon-table',

	/**
	* @private
	*/
	defaultKind: TableRow
});

/**
* Exports {@link module:moonstone/Table~TableRow}
*/
Table.Row = TableRow;

/**
* Exports {@link module:moonstone/Table~TableCell}
*/
Table.Cell = TableCell;

export default Table;
