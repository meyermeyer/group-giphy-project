import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IconButton} from '@material-ui/core';
import {FavoriteBorder, Favorite} from '@material-ui/icons';
import '../SearchResult/SearchResult.css'


class SearchResult extends Component{

	state = {
		isFavorite: false
	}

	favoriteClick = (event) => {
		console.log('favorited!');
		this.setState({
			// FOR NOW..... on click, we just want to change the appearance of the button,
			// I think the actual deleting of gif from favorites will be done somewhere else
			isFavorite: true
		})
		console.log('favorite click url:', this.props.link)
		this.props.dispatch({ type: 'SAVE_FAV', payload: this.props.link })
	};//end favoriteClick

	render(){
		let favoriteButton;
		if (this.state.isFavorite) {
			favoriteButton = (
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Favorite this gif!">
					<Favorite /></IconButton>)
		} else {
			favoriteButton = (
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Favorite this gif!">
					<FavoriteBorder /></IconButton>)
		}//end if/else statement
		return(
			<div className="polaroid">
				<div className="column">
				<img className = "gifImage" src={this.props.gif.images.downsized_medium.url} alt="gif" />
				<br></br>
				<p>Really love this gif? Favorite it!</p>{favoriteButton}
				</div>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(SearchResult);