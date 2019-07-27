import React, { Component } from 'react';

class area extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	length : 1,
        	width : 1,
        	result : 1.0000,
        	selectedOption : 'Area',
        	operation : 'Area of rectangle',
        	dimension : '&sup2;'
        };
    };

    componentDidMount(){
        console.log('Did Mount. Length: '+this.state.length +' Width: ' + this.state.width + ' Result: '+ this.state.result);
    };

    componentDidUpdate(_prevProps, prevState){
    	
     	if (prevState.length !== this.state.length || 
     		prevState.width !== this.state.width ||
     		prevState.selectedOption !== this.state.selectedOption)
     	{
     		if (this.state.selectedOption === 'Area'){
    		this.setState({result: (this.state.length * this.state.width), operation : 'Area of rectangle'});
	    	} else if (this.state.selectedOption === 'Eclipse'){

	    		this.setState({result: (Math.PI *((this.state.length)/2) * ((this.state.width)/2)), operation : 'Area of eclipse'});
	    	} else if (this.state.selectedOption === 'Diagonal'){

	    		this.setState({result: Math.sqrt(Math.pow(this.state.length,2) + Math.pow(this.state.width,2)), operation : 'Diagonal length'});
	    	console.log('DIagonal: '+ this.state.result);
	    	}
   		};
     };

    handleLengthChange = (e) => {
    	this.setState({length:e.target.value});
    	    };

    handleWidthChange = (e) => {
    	this.setState({width:e.target.value});
    	    }; 

   	handleOptionChange = (e) => {
   		this.setState({selectedOption: e.target.value});
   	};

	render() {
    	console.log('Render length: '+this.state.length +' Width: ' + this.state.width + 
    		' Result: '+ this.state.result);
   
          return (<div>
                <h1>Find your area </h1>
                <form>
	                <div>
		                <label> Length:  </label>
		                <input id="length" value={this.props.length} onChange={this.handleLengthChange} />
	                </div>
	                <br/>
	                <div>
		                <label> Width : </label>
		                <input id="width" value={this.props.width}  onChange={this.handleWidthChange}/>
	                </div>
	                <br/>
	                <div>
		                <div className="radio">
			                <label>
				                <input type="radio" value="Area" 
				                checked={this.state.selectedOption === 'Area'} 
                      			onChange={this.handleOptionChange} />
				                Area
			                </label>
		                </div>
		                <div className="radio">
			                <label>
				                <input type="radio" value="Eclipse" 
				                checked={this.state.selectedOption === 'Eclipse'} 
                      			onChange={this.handleOptionChange}/>
				                Area of eclipse
		                	</label>
		                </div>
		                <div className="radio">
			                <label>
				                <input type="radio" value="Diagonal" 
				                checked={this.state.selectedOption === 'Diagonal'} 
                      			onChange={this.handleOptionChange}/> 
				                Diagonal
			                </label>
		                </div>
	                </div>
	                <h1>{this.state.operation}</h1>
	                <h1>{this.state.result} m&sup2; </h1>
                </form>
            </div>
        )
    }
}

export default area;