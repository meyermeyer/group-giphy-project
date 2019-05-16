import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component {
	render(){
		return(
			<p>HERE IS THE SEARCH</p>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(Search);