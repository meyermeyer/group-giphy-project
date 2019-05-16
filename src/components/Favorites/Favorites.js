import React, { Component } from 'react'
import { connect } from 'react-redux'


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
    this.setState({
        category: event.target.value
    });
    
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
                            <option value={cat.name}>{cat.name}</option>
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

