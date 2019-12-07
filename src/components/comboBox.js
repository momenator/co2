/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={products}
      getOptionLabel={option => option.title}
      style={{ width: "100%" , margin: "0 auto"}}
      renderInput={params => (
        <TextField {...params} label="Search Products" variant="outlined" fullWidth />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const products = [
  { title: 'Dairy Milk', category: "Milk", co2: "100"},
  { title: 'Soy Milk', category: "Milk", co2: "50"},
  { title: 'Almond Milk', category: "Milk", co2: "70" },
  { title: 'Oat Milk', category: "Milk", co2:"50" },
  { title: 'Banana', category: "Fruit", co2: "xx" },
  { title: "Orange", category: "Fruit", co2: "xxx" },
  { title: 'Rize Milk', category:"Milk", co2: "xx" },
  { title: 'Apple', category: "Fruit", co2: "xxx" },
];