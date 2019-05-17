import React, { Component } from 'react'
import { connect } from 'react-redux'


export class FavoriteItem extends Component{

	state = {
		category: ''
	}

	// handle change of favorite category
	handleChangeFor = (event) => {
		this.setState({
			category: event.target.value
		});
	} // end handleChangeFor

	
	render(){
		return(
			<div className="favoritesDisplayDiv">
				<img src={this.props.fav.gif_url} alt="gif" />
				<p>Add a category to your gif:</p>
				<select onChange={this.handleChangeFor}>
					{this.props.reduxState.showCats.map((cat) => {
						return (
								<option key={cat.id} value={cat.name}>{cat.name}</option>
						)
					})}
				</select>
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