import React, { Component } from 'react';
import {Row} from 'react-materialize';
import CardInfo from './cardInfo';
 
export default class Cards extends Component{



	constructor(props){
		super(props);
		let cardDetails = [{
		img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
		id: 1,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	},
	{
		img: 'https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg',
		id: 2,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	},
	{
		img: 'https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56288c05aaf4467b469c7e0e7bdabc2d&w=1000&q=80',
		id: 3,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqIkhLMPVqiEuf7chPnt1l4zNr3MwVaOHNEMbYiN9DCPURvf2Vg',
		id: 4,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSe7g4cn361FcFbgW5XB15JodTwJ8EGO0XwbhU8F1U_uJ-0gJ',
		id: 5,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	},
		{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysyOBYd5ZFuOd3gpd_uu1pLxh_mqMoXlDz_y5GNxzKHTFEtRS',
		id: 6,
		randomKey : Math.floor(Math.random() * 50),
		flipFlag : false,
		cardGroup: 'base'
	}
	];

	let shuffledCardDetails = cardDetails.map((e,i)=>{
		return {img : e.img, id : e.id, randomKey : e.randomKey, flipFlag : e.flipFlag, cardGroup : 'duplicate'}
	});

	shuffledCardDetails.sort((a,b) => a.randomKey-b.randomKey);
	function shuffleArray(cardDetails) {
    for (let i = cardDetails.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cardDetails[i];
        cardDetails[i] = cardDetails[j];
        cardDetails[j] = temp;
    }
    return cardDetails;
	}
	cardDetails = shuffleArray(cardDetails);
	
		this.state = {
			cardDetails : cardDetails,
			shuffledCardDetails : shuffledCardDetails,
			lastFlipCard : {id: 0, group: ''},
			cardsToBeClosed: [],
			cardsFound : []
		}

		this.handleFlip = this.handleFlip.bind(this);
	}


	handleFlip(card) {
		console.log(card);
  	let lastFlip = this.state.lastFlipCard;
	  let cardDetails = this.state.cardDetails;
	  let shuffledCardDetails = this.state.shuffledCardDetails;
	  let cardsToBeClosed = this.state.cardsToBeClosed;
	  let cardsFound = this.state.cardsFound;
  	let flippedCard = {id: card.id, group: card.cardGroup };

	  if(cardsToBeClosed.length>0){
  		cardDetails.forEach((cardOne) => {
  			let closingCards1 = cardsToBeClosed.pop();
  			let closingCards2 = cardsToBeClosed.pop();

  			if(closingCards1 && closingCards1.id === cardOne.id && closingCards1.group === cardOne.cardGroup){
	    		cardOne.flipFlag = false;
	    	}else{
	    		cardsToBeClosed.push(closingCards1);
	    	}
	    	if(closingCards2 && closingCards2.id === cardOne.id && closingCards2.group === cardOne.cardGroup){
	    		cardOne.flipFlag = false;
	    	}
	    	else{
	    		cardsToBeClosed.push(closingCards2);
	    	}
  		});
  		shuffledCardDetails.forEach((cardOne) => {
  			let closingCards1 = cardsToBeClosed.pop();
  			let closingCards2 = cardsToBeClosed.pop();

  			if(closingCards1 && closingCards1.id === cardOne.id && closingCards1.group === cardOne.cardGroup){
	    		cardOne.flipFlag = false;
	    	}else{
	    		cardsToBeClosed.push(closingCards1);
	    	}
	    	if(closingCards2 && closingCards2.id === cardOne.id && closingCards2.group === cardOne.cardGroup){
	    		cardOne.flipFlag = false;
	    	}
	    	else{
	    		cardsToBeClosed.push(closingCards2);
	    	}
  		});
  	}

  	cardDetails.forEach((cardOne) => {
	    if (lastFlip.id > 0) {
	      if (cardOne.id === card.id && cardOne.cardGroup === card.cardGroup) {
	      	cardOne.flipFlag = true;
	        if (card.id === lastFlip.id && card.cardGroup !== lastFlip.group) {
	        	cardsFound.push(flippedCard);
	        	cardsFound.push(lastFlip);
	        	lastFlip = {id: 0, group: '' };
	  				this.setState({lastFlipCard: lastFlip});
	        } else {
	          cardsToBeClosed.push(lastFlip);
	          cardsToBeClosed.push(flippedCard);
	          lastFlip = {id: 0, group: '' };
	  				this.setState({lastFlipCard: lastFlip});
	        }
	      }
	    }
	    else{
	    	if(cardOne.cardGroup === flippedCard.group && flippedCard.id === cardOne.id){
	    		this.setState({lastFlipCard: flippedCard});
	    	}
	    	if(cardOne.id === card.id && cardOne.cardGroup === card.cardGroup){
	    		cardOne.flipFlag = true;
	    	}
	    }
	  });
  	shuffledCardDetails.forEach((cardOne) => {
	    if (lastFlip.id > 0) {
	      if (cardOne.id === card.id && cardOne.cardGroup === card.cardGroup) {
	      	cardOne.flipFlag = true;
	        if (card.id === lastFlip.id && card.cardGroup !== lastFlip.group) {
	        	cardsFound.push(flippedCard);
	        	cardsFound.push(lastFlip);
	        	lastFlip = {id: 0, group: '' };
	  				this.setState({lastFlipCard: lastFlip});
	        } else {
	          cardsToBeClosed.push(lastFlip);
	          cardsToBeClosed.push(flippedCard);
	          lastFlip = {id: 0, group: '' };
	  				this.setState({lastFlipCard: lastFlip});
	        }
	      }
	    }
	    else{
	    	if(cardOne.cardGroup === flippedCard.group && flippedCard.id === cardOne.id){
	    		this.setState({lastFlipCard: flippedCard});
	    	}
	    	if(cardOne.id === card.id && cardOne.cardGroup === card.cardGroup){
	    		cardOne.flipFlag = true;
	    	}
	    }
	  });
	  
	  this.setState({cardDetails: cardDetails, shuffledCardDetails: shuffledCardDetails, cardsToBeClosed: cardsToBeClosed, cardsFound: cardsFound});
	  if(cardsFound.length === 12){
	  	alert('you won');
	  }
	}


	render(){
		return(
			<Row>
			{
				this.state.cardDetails.map((cardOne,index) => {
	      	return(<div><CardInfo card={cardOne} onClick = {this.handleFlip} key={cardOne.id} />
	      	<CardInfo card={this.state.shuffledCardDetails[index]} onClick = {this.handleFlip} key={this.state.shuffledCardDetails[index].id + 6} /></div>)
	      })
			}
			</Row>
		);
	}
}