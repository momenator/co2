import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SearchIcon from '@material-ui/icons/Search';

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
        icon={<DashboardIcon/>}
      />
      <BottomNavigationAction label="Footprint"
        component={Link}
        to="/footprint"
        icon={<AssessmentIcon/>}
      />
      <BottomNavigationAction label="Search"
        component={Link}
        to="/search"
        icon={<SearchIcon/>}
      />
      <BottomNavigationAction label="Challenges"
        component={Link}
        to="/challenges"
        icon={<DirectionsRunIcon />}
      />
    </BottomNavigation>
  );
}

export default Nav;

