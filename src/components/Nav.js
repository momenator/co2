import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const Nav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels={true}
      className={classes.root}
    >
      <BottomNavigationAction label="Home" 
        component={Link}
        to="/"
      />
      <BottomNavigationAction label="About"
        component={Link}
        to="/about"
      />
      <BottomNavigationAction label="Users"
        component={Link}
        to="/users"
      />
    </BottomNavigation>
  );
}

export default Nav;

