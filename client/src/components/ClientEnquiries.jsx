import React from 'react';
const ClientBreakdown = require('../components/ClientBreakdown.jsx');



const ClientEnquiries = function (props) {

  const clientNodes = props.clientDetails.map(function(clientCase, index){
    const date = new Date(clientCase["created_at"]);
    const createdDate = date.toDateString();
    return (
      <ClientBreakdown 
      created={createdDate} key={index} enquirySource={clientCase["enquiry_source"]} message={clientCase["message"]}></ClientBreakdown>
      )
  })
    return(
      <table> 
      <tbody>
      {clientNodes}
      </tbody>
      </table>
      )
  }


module.exports = ClientEnquiries;