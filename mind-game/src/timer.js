import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

export default class Timer extends Component{
	// const OPTIONS = { prefix: 'seconds elapsed!', delay: 1000}
  render () {
    return (
      <div>
         <Countdown date={Date.now() + 59999} />
      </div>
    )
  }
}
