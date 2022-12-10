import React from 'react';

const Column = ({column_name,index}) => {

	return (
		<th key = {index}>{column_name}</th>
	)
};

export default Column;