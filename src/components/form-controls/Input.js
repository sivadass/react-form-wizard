import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <div className="form-group">
        <input 
          type={this.props.type} 
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
          placeholder={this.props.placeholder}
          className="form-control"
        />
      </div>
    )
  }
}

export default Input;