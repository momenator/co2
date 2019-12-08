import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GridDisplay = ({ items, itemsPerRow, spacing }) => {
  const classes = useStyles();
  return <Grid container spacing={spacing}>
    {
      items.map(item => (
        <Grid item xs={12/itemsPerRow}>
          <Paper className={classes.paper}>
            {item}
          </Paper>
        </Grid>
      ))
    }
  </Grid>
};

export default GridDisplay;