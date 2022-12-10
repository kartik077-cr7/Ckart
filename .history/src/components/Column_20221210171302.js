import React from 'react';
import { Modal } from '@mui/material';
import Dots from "../svg/vertical_dot.svg";

const Column = ({column_name,index}) => {

	return (
		<th key = {index}>{column_name}
		  <img src = {Dots}/>
		</th>
	)
};

export default Column;