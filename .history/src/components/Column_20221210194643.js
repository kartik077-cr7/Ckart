import React from 'react';
import { useState } from 'react';
import Dots from "../svg/vertical_dot.svg";
import Modal from './Modal';

const Column = ({column_name,index,handleFilterMain}) => {

	const [open, setOpen] = useState(false);
  
	const handleOpen = () => {
		console.log("opening modal ");
		setOpen(!open);
	};

	const handleClose = () => {
    setOpen(false);
	};

	const handleFilter = (val) => {

		console.log("index ",index," got filtered ",val);
		handleFilterMain(index,val);
	};

	return (
		<th key = {index} style={{position:"relative"}} onClick = {() => {if(open)setOpen(false) } }>
			{column_name}
			{open && <Modal handleFilter = {handleFilter} />}
			{ index !== 0 && <img 
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