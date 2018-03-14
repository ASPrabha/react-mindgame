import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Row, Col} from 'react-materialize';

export default class Home extends Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onChange(e.target.value);
	}

	render(){
		return(
			<Row>
			<Col s={12}>
				<h4>Enter your name to continue</h4>
				<input type="text" onChange={this.handleChange} required />
				<NavLink waves='light' to="/startGame"> Start Game</NavLink>
			</Col>
			</Row>
		);
	}
}