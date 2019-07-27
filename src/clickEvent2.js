import React from 'react';
import './App.css';

class Eventhandling extends React.Component{
	constructor(){
		super();
		this.state={count:0,message:"Jobbing",colour:"green", duality:" "};
		this.clicked=this.clicked.bind(this);
	}

clicked(){

	// if (this.state.count < 10 ) {
	// this.setState({
	// 	count: parseInt(this.state.count)+1
	// });}
	// else{this.setState({count: 0,colour:"Green", duality: " "});

	// };

	// if (this.state.count ==0){
	// }
	// else if (this.state.count % 2 == 0) { 
	// 	this.setState({colour:"Blue",duality: " Even"});
	// } else {
	// 	this.setState({colour:"Red",duality: " Odd"});
	// };

	const data = {
		count: this.state.count,
		colour: 'green',
		duality: ''
	}
	if (data.count < 10 ) {
		data.count++;
	} else {
		data.count = 0;
	};

	if(data.count == 0) {
		data.colour = 'green';
		data.duality = ' ';
	} else if (data.count % 2  == 0) {
		data.colour = 'blue';
		data.duality = 'Even';
	} else {
		data.colour = 'red';
		data.duality = 'Odd';
	}

	this.setState(data);
}

render(){
	console.log(this.state);
return (
	<div>
	<h4 style={{color:this.state.colour}}> {this.state.message} {this.state.duality} </h4>
	<p style={{color:this.state.colour} {font-size:this.state.count}}> {this.state.count} </p>
	<button onClick={this.clicked}> Increment {this.state.count} </button>
	</div>
	);
}
}

export default Eventhandling;