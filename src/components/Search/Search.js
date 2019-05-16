import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, IconButton, TextField} from '@material-ui/core';
import {FavoriteBorder, Favorite} from '@material-ui/icons';

class Search extends Component {

	state = {
		favorited: [],
		search: '',
		isFavorite: false
	}

	favoriteClick = (event) => {
		console.log('favorited!');
		this.setState({
			isFavorite: !this.state.isFavorite
		})
	};//end favoriteClick

	handleChange = (event) => {
		// capture search term entered into input and set as local search term state
		this.setState({
			search: event.target.value
		})
	};//end handleChange

	searchSubmit = event => {
		event.preventDefault();
		console.log('submit search!')
		// pass the search url to our saga
		let url = `/api/search?query=${this.state.search}`
		
		
		axios.get(url)
		.then(response => {
			console.log(response.data);
			
			this.props.dispatch({type: 'GET_RESULTS', payload: response.data})
		})
		.catch(error => {
			console.log('in searchSubmit', error);
		})
		// clear local search state
		this.setState({
			search: ''
		})
	};//end searchSubmit

	render(){
		//console.log('search:', this.state.search);
		let favoriteButton;
		if(this.state.isFavorite){
			favoriteButton =(
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Add to shopping cart">
					<Favorite />
				</IconButton>
			)
		}else{
			favoriteButton = (
				<IconButton color="primary" onClick={this.favoriteClick} aria-label="Add to shopping cart">
					<FavoriteBorder />
				</IconButton>
			)
		}//end if/else statement
		return(
			<div className="searchDiv">
				<form className="searchForm" onSubmit={this.searchSubmit} >
					<TextField
						onChange={this.handleChange} id="outlined-name" margin="normal"
						variant="outlined" label="Search for a gif!" placeholder="What gifs you want?"/>
						<br></br>
					<Button type="submit" variant="contained" 
						color="primary">Search!</Button>
						<br></br>
					{favoriteButton}

				</form>

				<div className="displaySearchDiv">
					<p>GIFS GO HERE</p>
					{/* {this.props.reduxState.displayResults.map((gif, i) => {
						return(
							<img key={i} src={this.props.reduxState.displayResults.gif.PATH} alt="id?"/>
							<Button type="submit" variant="contained"
								color="primary">Favorite!</Button>
						)
					})} */}
				</div>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(Search);