import React from "react";

const Table = ({ data,headingColumns,title }) => {
	
	
	return (
		<div className="table-container">
			<div className="table-title">
				<h2>{title}</h2>
			</div>
			<table className="table-class">
				<thead>
					<tr>
						{}
					</tr>
				</thead>
			</table>
		</div>
	)
}

export default Table;