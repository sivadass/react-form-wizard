import React from 'react';
import Input from './form-controls/Input'

class StepOne extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="form-group">
          <Input type="email" />
        </div>
      </div>
    )
  }
}

export default StepOne;