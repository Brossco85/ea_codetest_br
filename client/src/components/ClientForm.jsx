import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
const ClientDetail = require('../components/ClientDetail.jsx');



class ClientForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
   ReactDOM.render(<ClientDetail />, document.getElementById('app'));
 }

 render() {
  return(
    <form className="client-reference" onSubmit={this.handleSubmit}>
    <input type='text' placeholder="Client Reference" value={this.state.value} onChange={this.handleChange} />
    <button type="submit">Enter</button>
    </form>
    )
}

}

module.exports = ClientForm;