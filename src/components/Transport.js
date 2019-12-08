import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import { DatePicker } from "@material-ui/pickers";
import moment from 'moment';
import { useSnackbar } from 'notistack';
import AutoComp from './AutoComp';
import { transport as transportData } from '../data/transport';
import Button from './Button';
import { addUserData } from '../lib/data';


const opts = transportData.map(t => t.description);
const snackOption = {
  variant: 'success',
  autoHideDuration: 1000
}

const calculateUtilCo2 = (choice, num) => {
  const smallChoice = choice.toLowerCase();
  num = Number(num);
  const tData = transportData
    .find(t => t.description.toLocaleLowerCase() === smallChoice);

  if (tData && tData.value) {
    return Number(num * Number(tData.value)).toFixed(2)(3);
  }

  return 0;
}

const getUnit = (choice) => {
  return 'km';
}

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

const Transport = () => {
  const classes = useStyles();
  const [choice, setChoice] = useState('');
  const [val, setVal] = useState(0);
  const [date, setDate] = useState(new Date());
  const { enqueueSnackbar } = useSnackbar();

  const computedVal = calculateUtilCo2(choice, val);
  const unit = getUnit(choice);

  const formattedDate = moment(date).format('MMMM YYYY');
  const canAdd = !!computedVal && computedVal > 0 && !!unit && !!date;

  return <div style={{ padding: 10 }}>
    <AutoComp items={opts} setValue={setChoice} label="Mode of Transport"/>
    <TextField
      label="Distance"
      id="outlined-start-adornment"
      className={clsx(classes.textField)}
      type="number"
      onChange={(e) => setVal(e.target.value)}
      InputProps={{
        startAdornment: <InputAdornment position="start">
          { unit }
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

export default Transport;
