import React from 'react';
const ClientEnquiries = require('../components/ClientEnquiries.jsx');

class ClientDetail extends React.Component {
 constructor(props){
   super(props);
   this.state = {client: []}
 }

 componentDidMount() {
   this.buildURL(this.props.reference);
   console.log(this.state.client)

 }

 render(){
  console.log(this.state.client[0])
  return(
    <div>
    <ClientEnquiries details={this.state.client}></ClientEnquiries>
    </div>
    )

}

buildURL(reference) {
  const authToken = 'bDm1bzuz38bpauzzZ_-z';
  const url = `https://login.caseblocks.com/case_blocks/search?query=client_reference:${reference}&auth_token=${authToken}`
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    const data = JSON.parse(request.responseText);
    console.log(data)
    this.setState({client: data});
  }.bind(this);
  request.send(null);
}


}

module.exports = ClientDetail;