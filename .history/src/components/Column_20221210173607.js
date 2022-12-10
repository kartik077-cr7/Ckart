import React from 'react';
import { Modal } from '@mui/material';
import { useState } from 'react';
import Dots from "../svg/vertical_dot.svg";

const Column = ({column_name,index}) => {

	const [open, setOpen] = useState(false);
  
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
    setOpen(false);
	};

	return (
		<th key = {index} style={{position:"relative"}}>
			{column_name}
			<Modal
			        hideBackdrop
							open={open}
							onClose={handleClose}
							aria-labelledby="child-modal-title"
							aria-describedby="child-modal-description"
			>
				<Box>
					<button>ASC</button>
					<button>DESC</button>
				</Box>
			</Modal>
			{ index != 0 && <img 
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