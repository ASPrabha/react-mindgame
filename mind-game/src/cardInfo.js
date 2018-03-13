import React, { Component } from 'react';
import {Col, CardPanel } from 'react-materialize';

export default class CardInfo extends Component{
	constructor(props){
		super(props);

		this.handleCardClick = this.handleCardClick.bind(this);
	}

	handleCardClick(e){
		this.props.onClick(this.props.card);
	}

	render(){
		const background = 'https://image.freepik.com/free-vector/dark-blue-watercolor-background-design_1034-737.jpg';
		const flag = this.props.card.flipFlag;
		if(flag){
			return(
			<Col s={3}>
			<CardPanel className='small'>
				<img alt='flower' className="responsive-image" src={this.props.card.img} height='100px' width="100%" />
			</CardPanel>
			</Col>
		);
		} else{
		return(
			<Col s={3}>
			<CardPanel className='small' onClick = {this.handleCardClick}>
				<img alt='flower' className="responsive-image" src={background} height='100px' width="100%" />
			</CardPanel>
			</Col>
		);
	}
	}
}
