import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        	<div>
                <h1>Home Page</h1>
                <p>This is where we start the journey</p>
                <div>
					<h1>Select Times table</h1>
					<ListLinks />		
				</div>
            </div>
        )
    }
}


class ListLinks extends React.Component{
  render(){
		const numbers = [1,2,3,4,5,6,7,9,10,11,12];

		const linkList = numbers.map(function(val, index) { 
			  return (<div><Link key={index} to={'/ttable/'+val}>{val}</Link></div> ); 
			 // return(<h1>This is rubbish</h1>)
			}
		);
	    return (
		    <div>{linkList}</div>
	    );
	}
};

export default home;