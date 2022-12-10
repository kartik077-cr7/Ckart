import React from "react";

const Modal = () => {
   
	const handleClicko = (val) => {
		console.log("clicke ",val);
	}

	return(
		<div className="modal">		
		    <ul>
					<li style={{fontSize:"10px"}} onClick={() => handleClicko(1) }>ASC</li>
					<li style={{fontSize:"10px"}} onClick={() => handleClicko(2) }>DESC</li>
				</ul>
		</div>
	)
};

export default Modal;