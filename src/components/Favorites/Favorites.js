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
    console.log(this.state.category)
    return (
      <div>
        <p>Gifs will go here:</p>
			{this.props.reduxState.showFavs.map((aFav) => {
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

