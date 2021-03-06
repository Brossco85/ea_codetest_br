import React from 'react';
const ClientInput = require('../components/ClientInput.jsx');
const ClientName = require('../components/ClientName.jsx');
const ClientEnquiries = require('../components/ClientEnquiries.jsx');
const CaseDetail = require('../components/CaseDetail.jsx');



const CaseblocksContainer =  React.createClass({
  getInitialState: function(){
    return{clientReference: undefined, clientName: undefined, clientEnquiries: [], showCaseDetails: undefined }
  },

  componentDidMount: function() {
    if (this.state.clientReference){
      this.getClientDetail(this.state.clientReference)
    }
    
    
  },

  render() {
    return (
      <div className="wrapper" >
      <header className="header">Simple CaseBlocks App</header>
      <ClientInput handleClientSelected={this.handleClientSelected} />
      <ClientName clientName={this.state.clientName} />
      <ClientEnquiries clientDetails={this.state.clientEnquiries} handleCaseDetails={this.handleCaseDetails}/>
      {this.state.showCaseDetails ? <CaseDetail caseDetails={this.state.clientEnquiries[this.state.showCaseDetails]} /> : null}
      </div>
      )
  },

  getClientDetail (clientReference) {
    const authToken = 'bDm1bzuz38bpauzzZ_-z';
    const url = `https://login.caseblocks.com/case_blocks/search?query=client_reference:${clientReference}&auth_token=${authToken}`
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      const client = JSON.parse(request.responseText);
      if (request.status === 200 && client.length > 0){
        const name =  client[1]["cases"][0]["client_name"];
        this.setState({clientName: name});
        const enquiries = client[0]["cases"];
        this.setState({clientEnquiries: enquiries});

      }
      else {
        console.log("Sorry Client not found")
        this.setState({clientName: undefined});
        this.setState({clientEnquiries: []});
        this.setState({showCaseDetails: undefined});
      }
    }.bind(this);
    request.send(null);
  },

  handleClientSelected (event){
    if(event.target.value){
      const clientReference = event.target.value;
      this.setState({showCaseDetails: undefined});
      this.setState({clientReference: clientReference});
      this.getClientDetail(clientReference);
    }
  },

  handleCaseDetails (event){
    if(event.target.value){
      this.setState({showCaseDetails: event.target.value})
    }
  }


})

module.exports = CaseblocksContainer;
