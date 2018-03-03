import React from 'react';

class DynamicFieldItem extends React.Component {
  render(){
    return(
      <div className="dynamic-field-group">
        <input
          defaultValue={this.props.value}
          type="text"
          ref={(input) => this.input = input} 
          className="form-control"
        />
        <button className="remove" onClick={this.props.handleRemove.bind(this, this.props.id)}>&times;</button>
      </div>
    )
  }
}

export default DynamicFieldItem;