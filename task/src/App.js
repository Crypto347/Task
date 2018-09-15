import React, { Component } from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import * as Actions from './actions/todo.actions';

import Aux from './hoc/Aux';
import Top from './Components/Top/Top';
import Button from './Components/Button/Button';



class App extends Component {
  state = {
    show: true
  }

  showHandler = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
            <Aux>
              <Top show={this.state.show}/>
              <Button  clicked={this.showHandler}>O</Button>
            </Aux>
    );
  }
}

export default connect(
  (state)=>{
      return {
          todos: state.todos
      };
  },
  (dispatch)=>{
      return {
          actions: bindActionCreators(Actions, dispatch)
      };
  }
)(App);
