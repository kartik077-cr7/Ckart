import React from 'react';
import { Modal } from '@mui/material';
import Dots from "../svg/vertical_dot.svg";

const Column = ({column_name,index}) => {

	return (
		<th key = {index}>
			{column_name}
		  <img 
				src = {Dots}
				style={{
					width: "10px",
					height: "10px",
					position: "absolute",
					top: "500px",
					left: "20%",
					cursor: "pointer",
				}}
			 />
		</th>
	)
};

export default Column;