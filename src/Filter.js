import React from 'react';

const createFilter = Context => {
  class Filter extends React.Component {
    static contextType = Context;

    render() {
      return (
        <Context.Provider value={{ value: 'bar' }}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
  return Filter;
}

export default createFilter;
