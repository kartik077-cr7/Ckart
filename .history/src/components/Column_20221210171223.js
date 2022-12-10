import React from 'react';
import { Modal } from '@mui/material';
import Dots from "../svg/vertical_dot";

const Column = ({column_name,index}) => {

	return (
		<th key = {index}>{column_name}
		</th>
	)
};

export default Column;