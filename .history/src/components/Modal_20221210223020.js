import React from "react";

const Modal = ({handleFilter,active_no}) => {
   
	console.log("active no is ",active_no);

	const helper = (val) => {
      
		 if(active_no == val)
		  return "active";
	}

	return(	
		    <ul className="modal">
					<li className = {helper(1)} style={{ fontSize:"10px" }} onClick={() => handleFilter(1) }>ASC</li>
					<li className = {helper(2)} style={{ fontSize:"10px" }} onClick={() => handleFilter(2) }>DESC</li>
				</ul>
	)
};

export default Modal;