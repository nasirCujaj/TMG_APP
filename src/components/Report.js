import React, { Component } from 'react'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import IncidentPage from './IncidentPage'

export class Report extends Component {

    state = {
        step: 1,
        safeState: '',
        victimOrNO: '',
        incidentDate: '',
        incidentTime: '',
        incidentLocation: ''

    }

    //Next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }


    //Previous Step
    PrevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle Field Change

    handleChange = input => e => {
        this.setState(
            { [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { safeState, victimOrNO, incidentDate, incidentTime,
             incidentLocation } = this.state;
        const values = { safeState, victimOrNO, incidentDate, incidentTime,
                incidentLocation }

                switch (step) {
                    case 1:
                      return (
                        <SecondPage
                          nextStep={this.nextStep}
                          handleChange={this.handleChange}
                          values={values}
                        />
                      );
                    case 2:
                        return (
                            <ThirdPage
                              nextStep={this.nextStep}
                              PrevStep={this.PrevStep}
                              handleChange={this.handleChange}
                              values={values}
                            />
                          );
                    case 3:
                        return (
                            <IncidentPage
                              nextStep={this.nextStep}
                              PrevStep={this.PrevStep}
                              handleChange={this.handleChange}
                              values={values}
                            />
                          );

       }
    }
}

export default Report
