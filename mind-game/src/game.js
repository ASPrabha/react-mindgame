import React, { Component } from 'react';
import {Modal} from 'react-materialize';
import { NavLink } from 'react-router-dom';
import Timer from './timer';
import Cards from './cards';
declare var jQuery: $;

export default class Game extends Component{
	constructor(props){
		super(props);

		this.handleOnComplete = this.handleOnComplete.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleWin = this.handleWin.bind(this);

		this.state = {
			paused: false,
      fontSize: 'auto',
      clickable: true,
      gameEnd : false,
	    numberOfClicks: 0
		}
	}

	handleOnComplete() {
		if(!this.state.gameEnd){
	  this.setState({gameEnd : true, clickable: false});
	  $('#modal1').modal('open');
	}
	}

	handleWin(clicks) {
  let wasPaused = this.state.paused;
  let userName = this.props.userName;
  this.setState({ gameEnd: true, clickable: false, paused: (wasPaused) ? false : true, numberOfClicks: clicks });

  let userDetails = { userName: userName, clicks: clicks };
  let historyBoard = JSON.parse(localStorage.getItem('historyboard'));
  historyBoard.push(userDetails);
  historyBoard.sort((a,b) => a.clicks - b.clicks);
  localStorage.setItem('historyboard', JSON.stringify(historyBoard));
  $('#modalWin').modal('open');
}


	handleOnClick() {
	  let wasPaused = this.state.paused;
	  let clickable = this.state.clickable;
	  this.setState({
	    paused: (wasPaused) ? false : true,
	    fontSize: (wasPaused) ? 'auto' : '45px',
	    clickable: (clickable) ? false : true,
	  });
	}

	render(){
			return(
			<div>
				<h4>Welcome {this.props.userName}</h4>
				<Timer paused={this.state.paused} fontSize = {this.state.fontSize} onComplete = {this.handleOnComplete} onClick = {this.handleOnClick}/>
				<Cards clickable = {this.state.clickable} handleWin = {this.handleWin} numberOfClicks={this.state.numberOfClicks}/>
				<Modal
				id='modal1'
  header='Time Out'
  actions={<div><NavLink to='/'>New Game</NavLink>  <NavLink to='/leaderBoard'>Leader Board</NavLink></div>} >
</Modal>
			</div>
		);
	}
}
