import React, { Component } from 'react';

import Aux from './hoc/Aux';
import Top from './Components/Top/Top';


class App extends Component {

  render() {
    return (<Aux>
              <Top/>
            </Aux>
    );
  }
}

export default App;
