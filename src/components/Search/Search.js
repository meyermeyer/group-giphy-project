import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import SearchResult from '../SearchResult/SearchResult';
class Search extends Component {

	state = {
		search: ''
	}

	handleChange = (event) => {
		// capture search term entered into input and set as local search term state
		this.setState({
			search: event.target.value
		})
	};//end handleChange

	searchSubmit = event => {
		event.preventDefault();
		console.log('submit search!', this.state.search)
		// pass the search url to our saga
		let url = `/api/search?query=${this.state.search}`
		this.props.dispatch({type: 'GET_RESULTS', payload: url})
		this.setState({
			search: ''
		})
	};//end searchSubmit

	handleCLick = () => {
		this.props.history.push('/api/favorite')
	}

	render(){
		//console.log('search:', this.state.search);
		return(
			<div className="searchDiv">
				<form className="searchForm" onSubmit={this.searchSubmit} >
					<TextField
						onChange={this.handleChange} id="outlined-name" margin="normal"
						variant="outlined" label="Search for a gif!" placeholder="What gifs you want?"/>
						<br></br>
					<Button type="submit" variant="contained" 
						color="primary" >Search!</Button>
				</form>

				<Button type="submit" variant="contained"
					color="primary" onClick = {this.handleCLick}>GO TO FAVORITES</Button>

				<div className="displaySearchDiv">
					<h2>GIFS</h2>
					{this.props.reduxState.displayResults.map((aGif) => {
						return(
							<SearchResult key={aGif.id} gif={aGif} link={aGif.images.downsized_medium.url} />
						)
					})}
				</div>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(Search);