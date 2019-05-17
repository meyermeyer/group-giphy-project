import React, { Component } from 'react'
import { connect } from 'react-redux'


export class FavoriteItem extends Component{
	render(){
		return(
			<p>FAVORITE GIF</p>
		)
	}
}

const mapRedux = (reduxState) => {
	return {
		reduxState
	}
}

export default connect(mapRedux)(FavoriteItem);