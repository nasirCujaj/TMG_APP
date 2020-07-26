import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import TextField from '@material-ui/core/TextField'
import RaisedButton from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import SearchAppBar from './SearchAppBar'
import Icon from '@material-ui/core/Icon';
import FormControlLabelPosition from './CheckBox'
import MaterialUIPickers from './DatePicker'
import SimpleSelect from './Status.js'

 

export class SecondPage extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }



    render() {
        const { values, handleChange } = this.props;
 

        return (
            <MuiThemeProvider>
        <>
          <React.Fragment
            open
            fullWidth
            maxWidth='sm'
          >
            <SearchAppBar/>
            <div className="spaceDiv" style={{height: '20px'}}></div>
            <FormControlLabelPosition />
            <div style={{background: '#3385ff'}}>
            <MaterialUIPickers />
            </div>
            <SimpleSelect />
        
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={styles.button}
            >Continue</Button>
          </React.Fragment>
        </>
      </MuiThemeProvider>
        );
    }
}

const styles = {
  button:{
    margin: 15,
  }
}

export default SecondPage
