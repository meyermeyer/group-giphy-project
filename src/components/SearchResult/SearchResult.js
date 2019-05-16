import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IconButton} from '@material-ui/core';
import {FavoriteBorder, Favorite} from '@material-ui/icons';

class SearchResult extends Component{

	state = {
		isFavorite: false
	}

	favoriteClick = (event) => {
		console.log('favorited!');
		this.setState({
			isFavorite: !this.state.isFavorite
		})
		if (this.state.isFavorite) {
			this.setState({

			})
		}
	};//end favoriteClick

	render(){
		let favoriteButton;
		if (this.state.isFavorite) {
			favoriteButton = (
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Favorite this gif!">
					<Favorite />
				</IconButton>
			)
		} else {
			favoriteButton = (
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Favorite this gif!">
					<FavoriteBorder />
				</IconButton>
			)
		}//end if/else statement
		return(
			<div className="gifDisplayDiv">
				<img src={this.props.gif.images.downsized_medium.url} alt="gif" />
				<br></br>
				<p>Really love this gif? Favorite it!</p>{favoriteButton}
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(SearchResult);