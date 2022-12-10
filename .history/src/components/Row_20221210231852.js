import React, { useState } from "react";

const Row = ({rowData}) => {

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

	return (
    <tr style={{backgroundColor:"pink"}} onClick={() => console.log("clicked ",index)} key={index}>
		   {rowData.map((data, index) => <td key={index} className={checkStatus(data)}  data-heading={data.key}>{data.val}</td>)}
	  </tr>
	)
};

export default Row;