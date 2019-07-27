import React from 'react';
import './App.css';

function Eventhandling() {
	function clicked(){
		alert("You have performed the obvious");
	}
return (
	<div>
	<button onClick={clicked}> Event Handling </button>
	</div>
	);
}
export default Eventhandling;