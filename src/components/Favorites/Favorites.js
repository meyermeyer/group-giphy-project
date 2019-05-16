
import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Favorites extends Component {

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
                    {this.props.reduxState.showCats.map((category, i) => {
                    return (
                        <div>
                            <option value={category}>{category}</option>
                            {/* <option value="vega">Vega</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="nsfw">NFSW</option>
                            <option value="meme">Meme</option> */}
                        </div>
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

