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
    let array = this.state.fields;
		let index = array.findIndex((x => x.id == id));
		array.splice(index, 1);
		this.setState({
			fields: array
		})
  }
  handleAdd = () => {
    let item = [{
      id: uuid(),
      value: ""
    }]
    let array = this.state.fields.concat(item);
    this.setState({
      fields: array
    })
  }
  handleUpdate = (id, value) => {
    let array = this.state.fields;
		let index = array.findIndex((x => x.id == id));
		array[index].value = value
		this.setState({
			fields: array
		})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.fields);
  }
  render(){
    return(
      <div className="wizard-container">
        <h2 className="wizard-title">Add your own information</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="wizard-field">
          {this.state.fields.map((item) => {
            return <DynamicFieldItem 
              key={item.id} 
              id={item.id}
              value={item.value} 
              handleRemove={this.handleRemove}
              handleUpdate={this.handleUpdate}
            />
          })}
        </div>
        <button className="add-more" onClick={this.handleAdd}>Add more</button>
        <button className="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default StepFour;