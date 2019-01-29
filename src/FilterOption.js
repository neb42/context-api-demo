import React from 'react';

const createFilterOption = Context => {
  class FilterOption extends React.Component {
    static contextType = Context;

    render() {
      return (
        <span>{this.context.value}</span>
      );
    }
  }
  return FilterOption;
}

export default createFilterOption;
