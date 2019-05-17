import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Chip} from '@material-ui/core';


export class FavoriteItem extends Component{

	// handle change of favorite category
	handleChangeFor = (event) => {
		console.log('category change GIF id:', this.props.fav.id)
		let url = `/api/favorite/${this.props.fav.id}`
		axios.put(url, {cat_id: event.target.value})
	};
	
	handleClick = () => {
		console.log('you clicked the thing');
	} // end handleChangeFor

	
	render(){
		return(
			<div className="favoritesDisplayDiv">
				<img src={this.props.fav.gif_url} alt="gif" />
				<p>Add a category to your gif:</p>
				<select onChange={this.handleChangeFor}>
					{this.props.reduxState.showCats.map((cat) => {
						return (
							<>
								<option value={cat.id}>{cat.name}</option>
							</>
						)
					})}
				</select>
				<Chip
					label="Clickable Deletable Chip"
					onClick={this.handleClick} />
			</div>
		)
	}
}

const mapRedux = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapRedux)(FavoriteItem);