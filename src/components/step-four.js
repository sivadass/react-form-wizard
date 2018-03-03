import React from 'react';
import { Link } from 'react-router-dom'
import Input from './form-controls/Input'
import DynamicFieldItem from './form-controls/dynamic-field-item'
import uuid from 'uuid/v1';

class StepFour extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: [
        {
          id: uuid(),
          value: "Apple"
        },
        {
          id: uuid(),
          value: "Mango"
        },
        {
          id: uuid(),
          value: "Orange"
        },
        {
          id: uuid(),
          value: "Grapes"
        }
      ]
    }
  }
  handleRemove = (id) => {
    console.log(id);
  }
  handleAdd = (value) => {
    console.log('ok')
    value = "";
    let item = {
      id: uuid(),
      value: value
    }
    let array = this.state.fields.push(item);
    this.setState({
      fields: array
    })
  }
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Add your own information</h2>
        <div className="wizard-field">
          {this.state.fields.map((item) => {
            return <DynamicFieldItem 
              key={item.id} 
              id={item.id}
              value={item.value} 
              handleRemove={this.handleRemove}
            />
          })}
        </div>
        <button className="add-more" onClick={this.handleAdd}>Add more</button>
      </div>
    )
  }
}

export default StepFour;