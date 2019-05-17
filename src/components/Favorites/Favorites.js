import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


export class Favorites extends Component {

    componentDidMount() {
        this.showCategories();
    }

    showCategories = () => {
        this.props.dispatch({type: `GET_CATS`})
    }

    state = {
        category: ''
    }

 // handle change of favorite category
 handleChangeFor = (event) => {
   console.log(event.target.value)
    this.setState({
        category: event.target.value
    });
    let url = `/api/favorite/${event.target.id}`
   axios.put(url)

    
  } // end handleChangeFor

  

  render() {
    console.log(this.state.category)
    return (
      <div>
        <ul>
            <li>Gifs will go here:</li>
            <select onChange={this.handleChangeFor}>
                    {this.props.reduxState.showCats.map((cat) => {
                    return (
                        <>
                            <option value={cat.id}>{cat.name}</option>
                        </>
                    )
                })}
            </select>
        </ul>
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

