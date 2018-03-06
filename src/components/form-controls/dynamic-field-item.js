import React from 'react';

class DynamicFieldItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formControlType: "input"
    }
  }
  handleFormControlType = (e) => {
    this.setState({
      formControlType: e.target.value
    })
  }
  handleValue = () => {
    this.props.handleUpdate(this.props.id, this.input.value);
  }
  renderFormControl(type) {
    switch(type) {
      case 'input':
       return (
        <input
          defaultValue={this.props.value}
          type="text"
          ref={(input) => this.input = input} 
          onBlur={this.handleValue}
          className="form-control"
          placeholder="Type here"
        />
       )
      case 'checkbox':
        return (
          <div className="option-type checkbox">
            <input type="text" className="form-control" placeholder="Option 1"/>
            <input type="text" className="form-control" placeholder="Option 2"/>
            <input type="text" className="form-control" placeholder="Option 3"/>
          </div>
        )
      case 'radio':
        return (
          <div className="option-type checkbox">
            <input type="radio" name="gender" value="male" /> Male<br/>
            <input type="radio" name="gender" value="female" /> Female<br/>
            <input type="radio" name="gender" value="other" /> Other
          </div>
        )
      case 'select':
        return (
          <select 
            className="form-control"
            ref={(input) => this.input = input} 
            onBlur={this.handleValue}
            defaultValue={this.props.value}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        )
      case 'textarea':
        return (
          <textarea  
            className="form-control"
            ref={(input) => this.input = input} 
            onBlur={this.handleValue}
          />
        )
      default:
        return (
          <input
            defaultValue={this.props.value}
            type="text"
            ref={(input) => this.input = input} 
            onBlur={this.handleValue}
            className="form-control"
            placeholder="Type here"
          />
        )
    }
  }
  render(){
    return(
      <div className="dynamic-field-group">
        <select className="form-control-selector" value={this.state.formControlType} onChange={this.handleFormControlType}>
          <option value="input">Input</option>
          <option value="select">Select</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
          <option value="textarea">Textarea</option>
        </select>
        {this.renderFormControl(this.state.formControlType)}
        <button className="remove" onClick={this.props.handleRemove.bind(this, this.props.id)}>&times;</button>
      </div>
    )
  }
}

export default DynamicFieldItem;