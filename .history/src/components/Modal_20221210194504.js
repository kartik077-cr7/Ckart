import React from "react";

const Modal = ({handleFilter}) => {
   
	return(
		<div className="modal">		
		    <ul>
					<li style={{ fontSize:"10px" }} onClick={() => handleFilter(1) }>ASC</li>
					<li style={{ fontSize:"10px" }} onClick={() => handleFilter(2) }>DESC</li>
				</ul>
		</div>
	)
};

export default Modal;