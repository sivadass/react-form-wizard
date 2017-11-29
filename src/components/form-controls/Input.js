import React from 'react';

class Input extends React.Component {
  handleChange(){
    console.log('hi...');
  }
  render(){
    return(
      <input type={this.props.type}  onChange={this.handleChange.bind(this)}/>
    )
  }
}

export default Input;