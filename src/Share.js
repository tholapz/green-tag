import React from 'react';
import loader from './ajax-loader.gif';
import result from './result.png';
import social from './social.png';

const Share = React.createClass({
	getInitialState() {
	    return {
	        loading: true  
	    };
	},

	componentDidMount() {
	    window.setTimeout(()=>{
	    	this.setState({loading:false});
	    },1000);
	},
	handleClickTry(e){
		e.preventDefault();
		this.props.change('upload',true);
	},
	render(){
		var content = <noscript/>;
		if (this.state.loading) {
			content = <img src={loader} alt="now loading..."/>
		} else if ( this.props.detected ) {
			content = (
				<div className="content">
					<p>done!</p>
					<img src={result}/>
					<h2>Sustainable Cloth Detected!</h2>
					<h3>Congratulations! You are now part of the movement to make our world a better place.</h3>
					<h3><a target="_blank" href="http://www.fairtradewinds.net/">Learn more about how you can contribute to Sustainable Fashion movement</a></h3>
					<div style={{textAlign:'left', fontSize:'1rem'}}>Share This:</div>
					<img style={{width:'100%'}} src={social}/>
				</div>
			);
		} else {
			content = (
				<div>
					<p>We couldn't find any Sustainable product in the picture</p>
					<a onClick={this.handleClickTry}><h1 style={{fontSize:'3rem'}}>Try again</h1></a>
				</div>
			);
		}
		return (
			<div className="App">
				<h1>Result</h1>
				{content}
			</div>
		);
	}
});

export default Share;
