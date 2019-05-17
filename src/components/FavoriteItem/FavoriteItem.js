import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


export class FavoriteItem extends Component{

	// state = {
	// 	category: ''
	// }

	// handle change of favorite category
	handleChangeFor = (event) => {
		// this.setState({
		// 	category: event.target.value
		// });
		console.log('category change GIF id:', this.props.fav.id)
		let url = `/api/favorite/${this.props.fav.id}`
		axios.put(url, {cat_id: event.target.value})
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