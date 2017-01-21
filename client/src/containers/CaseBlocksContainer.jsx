import React from 'react';
const ClientInput = require('../components/ClientInput.jsx')


const CaseblocksContainer =  React.createClass({
  getInitialState: function(){
    return{caseDetails: []}
  },

componentDidMount: function() {
  const authToken = 'bDm1bzuz38bpauzzZ_-z';
  const url = `https://login.caseblocks.com/case_blocks/search?query=client_reference:29&auth_token=${authToken}`
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
  const data = JSON.parse(request.responseText);
  this.setState({caseDetails: data});
  }.bind(this);
  request.send();
},
render: function () {
  return (
  <div >
  <h1>CaseBlocks App</h1>
  <ClientInput />
  </div>
  )
}


})

module.exports = CaseblocksContainer;
