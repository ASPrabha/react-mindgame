import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

export default class Header extends Component{

	render(){
		return(
			<header>
				<Navbar brand='Memory Game' left>
	        <NavItem><NavLink to='/'>Home</NavLink></NavItem>
	        <NavItem><NavLink to='/leaderBoard'>Leader Board</NavLink></NavItem>
        </Navbar>
   		</header>
		);
	}
}