import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

export default class Timer extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}
	
	handleClick(){
		this.props.onClick();
	}
	handleComplete(){
		this.props.onComplete();
	}


  render () {
    return (
      <div className = 'App'>
         <ReactCountdownClock seconds={60}
          color="#000"
          alpha={0.5}
          size={100}
          paused= {this.props.paused}
  				pausedText= "▐▐ "
          onComplete={this.handleComplete}
          onClick = {this.handleClick} />
      </div>
    )
  }
}
