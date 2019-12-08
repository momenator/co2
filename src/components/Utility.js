import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from './Button';
import Card from '@material-ui/core/Card';
import { DatePicker } from "@material-ui/pickers";
import moment from 'moment';
import { useSnackbar } from 'notistack';
import AutoComp from './AutoComp';
import { addUserData } from '../lib/data';

const opts = ['heating', 'electricity', 'water'];
const snackOption = {
  variant: 'success',
  autoHideDuration: 1000
}

const calculateUtilCo2 = (choice, num) => {
  const smallChoice = choice.toLowerCase();
  num = Number(num);
  if (smallChoice.includes('electric')) {
    return Number(num * 0.28307).toFixed(2);
  } else if (smallChoice.includes('heat')) {
    return Number(num * 0.18746).toFixed(2);
  } else if (smallChoice.includes('water')) {
    return Number((num * 0.344) + (num * 0.708)).toFixed(2);
  }
  return 0;
}

const getUnit = (choice) => {
  const smallChoice = choice.toLowerCase();
  if (smallChoice.includes('electric') || smallChoice.includes('heat')) {
    return 'kWh';
  } else if (smallChoice.includes('water')) {
    return 'm^3';
  }
  return '';
}

const MCube = () => <span>m<sup>3</sup></span>;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    margin: "20px auto",
  },
  card: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  datePicker: {
    width: '100%',
    margin: '0 auto',
  },
  btn: {
    margin: '10px auto'
  }
}));

const Utility = () => {
  const classes = useStyles();
  const [choice, setChoice] = useState('');
  const [val, setVal] = useState(0);
  const [date, setDate] = useState(new Date());

  const computedVal = calculateUtilCo2(choice, val);
  const unit = getUnit(choice);

  const formattedDate = moment(date).format('MMMM YYYY');
  const { enqueueSnackbar } = useSnackbar();

  const canAdd = !!computedVal && computedVal > 0 && !!unit && !!date;

  return <div style={{ padding: 10 }}>
    <AutoComp items={opts} setValue={setChoice} label="Source"/>
    <TextField
      label="Value"
      id="outlined-start-adornment"
      className={clsx(classes.textField)}
      type="number"
      onChange={(e) => setVal(e.target.value)}
      InputProps={{
        startAdornment: <InputAdornment position="start">
          { unit === 'm^3' ? <MCube/> : unit }
        </InputAdornment>,
      }}
      variant="outlined"
    />
    <DatePicker
      className={classes.datePicker}
      variant="inline"
      inputVariant="outlined"
      openTo="year"
      views={["year", "month"]}
      label="Year and Month"
      value={date}
      onChange={setDate}
    />
    {
      canAdd && <Card 
        className={classes.card}>
        <p>Your CO<sub>2</sub> Consumption in {formattedDate} for {choice}</p>
        <h2>{computedVal} CO<sub>2</sub>e</h2>
      </Card>
    }
    {
      canAdd && <Button onClick={() => {
        addUserData({ 
          unit,
          date,
          choice,
          rawValue: val,
          computedValue: computedVal,
        });
        enqueueSnackbar('Added new entry', snackOption);
      }} label="Add"/>
    }
  </div>
}

export default Utility;
