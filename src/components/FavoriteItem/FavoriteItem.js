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
		axios.put(url, event.target.value)
	} // end handleChangeFor

	
	render(){
		return(
			<div className="favoritesDisplayDiv">
				<p>FAVORITE GIF</p>
				<img src={this.props.fav.gif_url} alt="gif" />
				<select onChange={this.handleChangeFor}>
					{this.props.reduxState.showCats.map((cat) => {
						return (
							<>
								<option value={cat.name}>{cat.name}</option>
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