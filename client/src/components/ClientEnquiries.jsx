import React from 'react';
const ClientDetail = require('../components/ClientDetail.jsx');



const ClientEnquiries = function (props) {

  const clientNodes = props.clientDetails.map(function(clientCase, index){
    const date = new Date(clientCase["created_at"]);
    const createdDate = date.toDateString();
    return (
      
      <ClientDetail
      created={createdDate} key={index} case={index} handleCaseDetails={props.handleCaseDetails}enquirySource={clientCase["enquiry_source"]} message={clientCase["message"]}>
      </ClientDetail>

      )
  })
  return(
    <div id="container">
    {clientNodes}
    </div>
    )
}


module.exports = ClientEnquiries;