import React from 'react';

const ClientName = function (props) {
  return(
    <div>
    <h1 id="client">{props.clientName}</h1>
    </div>
    )
}

module.exports = ClientName;