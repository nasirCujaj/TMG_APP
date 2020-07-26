import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Do you want to stay anonymous?</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Yes"
          labelPlacement="start"
        />
         <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="No "
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}