import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'
import Select from './form-controls/Select'

class StepTwo extends React.Component {
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Your Location</h2>
        <div className="wizard-field">
          <Select type="text" placeholder="Choose Country">
            <option value="chennai">India</option>
            <option value="bangalore">China</option>
            <option value="hyderabad">Sri Lanka</option>
          </Select>
          <Select type="text" placeholder="Choose State">
            <option value="chennai">Tanil Nadu</option>
            <option value="bangalore">Karnataka</option>
            <option value="hyderabad">Telangana</option>
          </Select>
          <Select type="text" placeholder="Choose City">
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bengalore</option>
            <option value="hyderabad">Hyderabad</option>
          </Select>
        </div>
        <div className="wizard-navigation">
          <Link to="/step-one" className="prev-step"><i className="material-icons">keyboard_arrow_left</i> Return Back</Link>
          <Link to="/step-three" className="next-step">Proceed Next <i className="material-icons">keyboard_arrow_right</i></Link>
        </div>
      </div>
    )
  }
}

export default StepTwo;