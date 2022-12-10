import React from "react";

const Modal = ({handleFilter,active_no}) => {
   
	console.log("active no is ",active_no);

	const helper = (val) => {
      
		 if(active_no == val)
		  return "active";
	}

	return(
		<div className="modal">		
		    <ul>
					<li className = {helper(1)} style={{ fontSize:"10px" }} onClick={() => handleFilter(1) }>ASC</li>
					<li className = `{{active_no == 2 ? 'active':''}}` style={{ fontSize:"10px" }} onClick={() => handleFilter(2) }>DESC</li>
				</ul>
		</div>
	)
};

export default Modal;