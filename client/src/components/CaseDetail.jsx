import React from 'react';

const CaseDetail = function (props) {

  return (
    <div className="case-details">
    <h3>Title: {props.caseDetails.title}</h3>
    <h3>Enquiry Reference: {props.caseDetails.client_enquiry_reference}</h3>
    <h3>Current State ID: {props.caseDetails.current_state_id}</h3>
   
    </div>
    )

}

module.exports = CaseDetail;