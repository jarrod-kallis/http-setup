import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

class App extends Component {
  componentDidMount() {
    console.log('[App] did mount');
  }

  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
