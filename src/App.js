import React, { Component } from 'react';
import createFoo from './createFilter';
import './App.css';

class App extends Component {
  filter = createFoo('foo');

  render() {
    const Filter = this.filter;
    return (
      <div className="App">
        <Filter.Filter>
          <Filter.Option />
        </Filter.Filter>
      </div>
    );
  }
}

export default App;
