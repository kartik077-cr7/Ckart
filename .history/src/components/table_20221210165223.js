import React from "react";
import Column from "./Column";

const Table = ({ data,headingColumns,title }) => {
	
	console.log("data received is ",data);
	
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
				<tbody>
					{adjustedData.map((data,index)) => <td key={index}>{data.}</td>}
				</tbody>
			</table>
		</div>
	)
}

export default Table;