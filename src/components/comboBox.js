import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({ items, setValue, label }) => <Autocomplete
  id="combo-box-demo"
  options={items}
  onChange={(_, value) => {
    if (value && setValue) {
      setValue(value);
    } else if (setValue) {
      setValue('');
    }
  }}
  groupBy={option => option.split(' ')[0]}
  getOptionLabel={option => String(option)}
  style={{ width: "100%", margin: "0 auto"}}
  renderInput={params => (
    <TextField {...params} 
      label={label} variant="outlined" fullWidth={true} />
  )}
/>;

ComboBox.defaultProps = {
  label: 'Search'
}


export default ComboBox;