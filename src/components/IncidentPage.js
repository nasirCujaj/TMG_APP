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
import InjuredBoolean from './InjuredBoolean.js'
import TextArea from './TextArea'
import UploadButtons from './UploadButton'
 

export class IncidentdPage extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PrevStep();
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
            <InjuredBoolean />
            <p>Describe the incident in your own words: (Max 500)</p>
            <TextArea />
            <UploadButtons />
            
            
            
            
            
            <br />


            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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



export default IncidentdPage