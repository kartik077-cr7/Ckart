import React from "react";

const Modal = ({handleFilter,active_no}) => {
   
	console.log("active no is ",active_no);
	return(
		<div className="modal">		
		    <ul>
					<li className = `{{active_no == 1 ? 'active':''}}` style={{ fontSize:"10px" }} onClick={() => handleFilter(1) }>ASC</li>
					<li className = `{{active_no == 1 ? 'active':''}}` style={{ fontSize:"10px" }} onClick={() => handleFilter(2) }>DESC</li>
				</ul>
		</div>
	)
};

export default Modal;