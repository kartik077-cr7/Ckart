import React from 'react';
import { Modal } from '@mui/material';

const Column = ({column_name,index}) => {

	return (
		<th key = {index}>{column_name}</th>
	)
};

export default Column;