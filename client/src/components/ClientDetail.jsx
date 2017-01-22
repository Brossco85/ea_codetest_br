import React from 'react';

const ClientDetail = function (props) {
  return(
    <div>
    <h2>Client:</h2>
    <h3>{props.clientName}</h3>
    </div>
    )
}

module.exports = ClientDetail;