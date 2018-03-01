import React from 'react';

class Select extends React.Component {
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
        <select 
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
          className="form-control"
          defaultValue={this.props.placeholder}
        >
            <option default hidden>{this.props.placeholder}</option>
            {this.props.children}
        </select>
      </div>
    )
  }
}

export default Select;