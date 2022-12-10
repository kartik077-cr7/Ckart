import React from "react";
import Column from "./Column";

const Table = ({ data,headingColumns,title,handleFilter }) => {
	
	console.log("data received is ",data);
	

  
	const datas = tableData.map((row,index) => {
		let rowData = [];
		let i = 0;

		for(const key in row){
			rowData.push({
				key: headingColumns[i],
				val: row[key]
			});
			i++;
		}

		return <tr key={index}>{rowData.map((data,index)) => <td key={index}></td> }</tr>
	})

	return (
		<div className="table-container">
			<div className="table-title">
				<h2>{title}</h2>
			</div>
			<table className="table-class">
				<thead>
					<tr>
						{headingColumns.map((col,index) => (
							<Column handleFilter={handleFilter} key={index} column_name={col} index={index}/>
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