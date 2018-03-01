import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'

class StepFour extends React.Component {
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Your Location</h2>
        <div className="wizard-field">
          <div style={{display: 'flex'}}>
            <Input type="text" placeholder="Total years of experience" />
            <button style={{width: '64px', fontSize: '20px'}} className="remove">&times;</button>
          </div>
        </div>
        <div className="wizard-navigation">
          <Link to="/step-three" className="prev-step"><i className="material-icons">keyboard_arrow_left</i> Return Back</Link>
          <Link to="/step-one" className="next-step">Proceed Next <i className="material-icons">keyboard_arrow_right</i></Link>
        </div>
      </div>
    )
  }
}

export default StepFour;