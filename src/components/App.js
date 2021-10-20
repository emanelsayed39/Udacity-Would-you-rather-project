import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import DashBoard from './DashBoard';

class App extends Component {
  componentDidMount(){
  this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
       <DashBoard/>
      </div>
    )
  }
}

export default connect()(App)
