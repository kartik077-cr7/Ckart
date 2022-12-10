import React from "react";
import Column from "./Column";
import Row from "./Row";
const Table = ({ data,headingColumns,title,handleFilter,sortedCol }) => {
	
	const rowDatas = data.map((row,index) => { 
		
		let rowData = [];
		let i = 0;

		for(const key in row){
			rowData.push({
				key: headingColumns[i],
				val: row[key]
			});
			i++;
		}
   
		return <Row	rowData={rowData}/>
	})

	return (
		<div className="table-container">
			<div className="table-title">
				<h2>{title.toUpperCase()}</h2>
			</div>
			<table className="table-class">
				<thead>
					<tr>
						{headingColumns.map((col,index) => (
							<Column sortedCol={sortedCol} handleFilter={handleFilter} key={index} column_name={col} index={index}/>
						))}
					</tr>
				</thead>
				<tbody>
					{rowDatas}
				</tbody>
			</table>
		</div>
	)
}

export default Table;