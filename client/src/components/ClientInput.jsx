import React from 'react';
const ClientName = require('../components/ClientName.jsx');



class ClientInput extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);

 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }


 render() {
  return(
    <div id="input">
    <input type='text' placeholder="Client Reference" value={this.state.value} onChange={this.handleChange}/>
    <div>
    <button type="submit"  value={this.state.value} onClick={this.props.handleClientSelected}>Enter</button>
    </div>
    </div>
    )
}

}

module.exports = ClientInput;