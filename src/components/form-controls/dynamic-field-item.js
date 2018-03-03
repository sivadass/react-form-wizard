import React from 'react';

class DynamicFieldItem extends React.Component {
  handleValue = () => {
    this.props.handleUpdate(this.props.id, this.input.value);
  }
  render(){
    return(
      <div className="dynamic-field-group">
        <input
          defaultValue={this.props.value}
          type="text"
          ref={(input) => this.input = input} 
          onBlur={this.handleValue}
          className="form-control"
          placeholder="Type here"
        />
        <button className="remove" onClick={this.props.handleRemove.bind(this, this.props.id)}>&times;</button>
      </div>
    )
  }
}

export default DynamicFieldItem;