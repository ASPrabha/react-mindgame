import React, { Component } from 'react';
import Timer from './timer';
import Cards from './cards';

export default class Game extends Component{
	render(){
		return(
			<div>
				<h4>Welcome {this.props.userName}</h4>
				<Timer />
				<Cards />
			</div>
		);
	}
}
