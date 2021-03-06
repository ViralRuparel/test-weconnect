import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const myButton = (props) => {
  return (
    <Button {...props} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

myButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default myButton;
