import React, { Component } from 'react';
import {Switch, Route}  from 'react-router-dom';
import Header from './header';
import Home from './home';
import Game from './game';
import LeaderBoard from './leaderBoard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      leaderBoard : [],
      currentUser : '',

    }

    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser(userName){
    this.setState({currentUser : userName});
  }

  render() {
    return (
      // <MuiThemeProvider>
      <div className = 'App'>
        <Header />
        <Switch>
          <Route exact path='/' render = {() => <Home onChange = {this.setCurrentUser} />}/>
          <Route path='/startGame' render = {() => <Game userName = {this.state.currentUser} />}/>
          <Route path='/leaderBoard' component={LeaderBoard}/>
        </Switch>
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
