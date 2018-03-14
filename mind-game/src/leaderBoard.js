import React, { Component } from 'react';
import {Table} from 'react-materialize';


export default class LeaderBoard extends Component{

	render(){
		let leaderBoard = JSON.parse(localStorage.getItem('historyboard'));

		if(leaderBoard){
			return(
			<div>
				<h3>Leader Board</h3>
				<Table>
  <thead>
    <tr>
      <th>Position</th>
      <th>Name</th>
      <th>No. of Clicks</th>
    </tr>
  </thead>

  <tbody>
  {
  leaderBoard.map((user, index) => {
      return ( <tr>
        <td > {index + 1} </td> 
        <td > {user.userName} </td> 
        <td > {user.clicks} </td>
        </tr>)
      })
  }

  </tbody>
</Table>
			</div>
		);
		}else{
			return(
			<div>
				<h3>Leader Board</h3>
			</div>
		);
		}
		
	}
}
