import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'

const DynamicFieldItem = (props) => {
  console.log(props);
  return(
    <div className="dynamic-field-item">
      <Input defaultValue={props.value} type="text" placeholder="Total years of experience" />
      <button className="remove">&times;</button>
    </div>
  )
}

class StepFour extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: [
        {
          id: 1,
          value: "Apple"
        },
        {
          id: 2,
          value: "Mango"
        },
        {
          id: 3,
          value: "Orange"
        }
      ]
    }
  }

  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Add your own information</h2>
        <div className="wizard-field">
          {this.state.fields.map((item) => {
            return <DynamicFieldItem key={item.id} value={item.value}/>
          })}
        </div>
        <button className="add-more">Add more</button>
      </div>
    )
  }
}

export default StepFour;