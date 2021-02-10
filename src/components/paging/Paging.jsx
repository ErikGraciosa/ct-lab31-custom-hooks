import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ increment, decrement, count }) => {
  return (
    <div>
      <button onClick={decrement}>-1</button>
      <span>--{count}--</span>
      <button onClick={increment}>+1</button>
    </div>
  );
};

Paging.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  count: PropTypes.number.isRequired
};

export default Paging;
