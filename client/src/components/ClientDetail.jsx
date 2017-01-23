import React from 'react';

const ClientDetail = function (props) {

  return (
    <div className="enquiry">
    <h3>{props.enquirySource}</h3>
    <h3>{props.created}</h3>
    <p>{props.message}</p>
    <button>View</button>
    </div>
    )

}

module.exports = ClientDetail;