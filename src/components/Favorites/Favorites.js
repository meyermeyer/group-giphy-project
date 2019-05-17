
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

export class Favorites extends Component {

  componentDidMount() {
    this.showCategories();
    this.showFavorites();
  }

  showFavorites = () => {
    this.props.dispatch({ type: 'GET_FAVS' })
  }

  showCategories = () => {
    this.props.dispatch({ type: `GET_CATS` })
  }

  render() {
    return (
      <div>
        <h2>Here are all your favorited gifs!</h2>
			{this.props.reduxState.showFavs.map((aFav) => {
				console.log('aFav.id', aFav.id)
				return(
					<FavoriteItem key={aFav.id} fav={aFav}/>
				)
			})}

      </div>
    )
  }
}

const mapRedux = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapRedux)(Favorites);

