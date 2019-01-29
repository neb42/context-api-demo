// @flow

import React from 'react';

import makeFilter from './Filter';
import makeField from './Field';
import makeResult from './makeResult';

const createFilter = (key: string) => {
  const Context = React.createContext(`filter-${key}`);
  const Filter = makeFilter(Context);
  Filter.Field = makeField(Context);
  Filter.Result = makeResult(Context);
  return Filter;
};

export default createFilter;
