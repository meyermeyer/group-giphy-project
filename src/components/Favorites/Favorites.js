import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';


export class Favorites extends Component {

    componentDidMount() {
        this.showCategories();
		this.showFavorites();
    }

	showFavorites = () => {
		this.props.dispatch({type: 'GET_FAVS'})
	}

    showCategories = () => {
        this.props.dispatch({type: `GET_CATS`})
    }

    state = {
        category: ''
    }

 // handle change of favorite category
 handleChangeFor = (event) => {
    this.setState({
        category: event.target.value
    });
    
  } // end handleChangeFor

  

  render() {
    console.log(this.state.category)
    return (
      <div>
        <p>Gifs will go here:</p>
			{this.props.reduxState.showFavs.map((aFav) => {
				return(
					<FavoriteItem key={aFav.id} fav={aFav} url={aFav.gif_url}/>
				)
			})}
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

export default connect(mapRedux) (Favorites);

