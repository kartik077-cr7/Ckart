import React, { useState } from "react";

const Row = ({rowData,index}) => {

	const [rowClass,setRowClass] = useState("");

	const checkStatus = (data) => {
		if(data.key == 'status')
		{
			if(data.val == 'FALSE')
				return 'red';
			else 
				return 'green';
		}
		else 
			return '';
	}

	const handleClassChange = () => {
   
		if(rowClass === "")
		  setRowClass("row_class");
		else 
		  setRowClass("");

	};

	return (
    <tr className={rowClass} onClick={handleClassChange} key={index}>
		   {rowData.map((data, index) => <td key={index} className={checkStatus(data)}  data-heading={data.key}>{data.val}</td>)}
	  </tr>
	)
};

export default Row;