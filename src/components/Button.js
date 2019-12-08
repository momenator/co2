import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  btn: {
    margin: '10px auto'
  }
}));

const CustomButton = ({ onClick, label }) => {
  const classes = useStyles();
  return <span onClick={onClick}>
    <Button 
      className={classes.btn}
      variant="contained" color="primary">
      { label }
    </Button>
  </span>
}

export default CustomButton;