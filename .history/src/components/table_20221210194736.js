import React from "react";
import Column from "./Column";

const Table = ({ data,headingColumns,title }) => {
	
	console.log("data received is ",data);
	
	const handleFilterMain = (index,val) => {
		console.log(" filtered on index ",index," val is ",val);
	};

	return (
		<div className="table-container">
			<div className="table-title">
				<h2>{title}</h2>
			</div>
			<table className="table-class">
				<thead>
					<tr>
						{headingColumns.map((col,index) => (
							<Column handleFilterMain={handleFilterMain} key={index} column_name={col} index={index}/>
						))}
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	)
}

export default Table;