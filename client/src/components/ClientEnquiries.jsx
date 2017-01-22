import React from 'react';
const ClientBreakdown = require('../components/ClientBreakdown.jsx');



const ClientEnquiries = function (props) {

  const clientNodes = props.clientDetails.map(function(clientCase, index){
    return (
      <ClientBreakdown 
      created={clientCase["created_at"]} key={index} enquirySource={clientCase["enquiry_source"]} message={clientCase["message"]}></ClientBreakdown>
      )
  })
    return(
      <div> 
      {clientNodes}
      </div>
      )
  }


module.exports = ClientEnquiries;