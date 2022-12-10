import React from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';
import Dots from "../svg/vertical_dot.svg";

const Column = ({column_name,index}) => {

	const [open, setOpen] = useState(false);
  
	const handleOpen = () => {
		console.log("opening modal ");
		setOpen(true);
	};

	const handleClose = () => {
    setOpen(false);
	};

	return (
		<th key = {index} style={{position:"relative"}}>
			{column_name}
			{ index != 0 && <img 
			  onClick = {handleOpen}
				src = {Dots}
				style={{
					width: "10px",
					height: "10px",
					top: "15px",
					right: "0px",
					position: "absolute",		
					cursor: "pointer",
				}}
			 />
			}
		</th>
	)
};

export default Column;