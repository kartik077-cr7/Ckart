import React from "react";
import Column from "./Column";

const Table = ({ data,headingColumns,title }) => {
	
	
	return (
		<div className="table-container">
			<div className="table-title">
				<h2>{title}</h2>
			</div>
			<table className="table-class">
				<thead>
					<tr>
						{headingColumns.map((col,index) => (
							<Column column_name={col} index={index}/>
						))}
					</tr>
				</thead>
			</table>
		</div>
	)
}

export default Table;