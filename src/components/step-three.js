import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'

class StepThree extends React.Component {
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Your Work Experience</h2>
        <div className="wizard-field">
          <Input type="text" placeholder="Total years of experience" />
          <Input type="text" placeholder="Last company name" />
          <Input type="text" placeholder="Role in the last company" />
        </div>
        <div className="wizard-navigation">
          <Link to="/step-two" className="prev-step"><i className="material-icons">keyboard_arrow_left</i> Return Back</Link>
          <Link to="/step-four" className="next-step">Proceed Next <i className="material-icons">keyboard_arrow_right</i></Link>
        </div>
      </div>
    )
  }
}

export default StepThree;