import React, { Component } from 'react';

class ttable extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	range:12
        };
    };

	render() {

		let j = this.props.match.params.node;
		let Conponents=[];

		for (let i=1;i<=this.state.range;i++){
			let text = j+" x "+ i+" = "+(j*i);

			Conponents.push(text);
			Conponents.push(<br />);
		};


		return(
		<div>
		<h1>Times table for {this.props.match.params.node}</h1>
		
		<h2>{Conponents}</h2>
		
		</div>
		)
	}
}
// <DisplayTT />
// class DisplayTT extends React.Component{
	
// 	render(){

// 		console.log(this.props.match.params.node);

// 		let j = this.props.match.params.node;
// 			let Conponents=[];

// 		for (let i=1;i<=this.state.range;i++){
// 			let text = j+"x"+ i+"="+(j*i)+"  "+(j+1)+"x"+i+"="+((j+1)*i);

// 			Conponents.push('<h2>{text}</h2><br />');
// 		};

// 	 	return (
// 			<div>{Conponents}</div>
// 		);
// 	}
// };


export default ttable;