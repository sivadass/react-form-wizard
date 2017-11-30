import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'

class StepTwo extends React.Component {
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Your </h2>
        <div className="wizard-field">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="number" placeholder="Phone Number" />
        </div>
        <div className="wizard-navigation">
          <Link to="/step-two" className="prev-step"><i className="material-icons">keyboard_arrow_left</i> Return Back</Link>
          <Link to="/step-two" className="next-step">Proceed Next <i className="material-icons">keyboard_arrow_right</i></Link>
        </div>
      </div>
    )
  }
}

export default StepTwo;