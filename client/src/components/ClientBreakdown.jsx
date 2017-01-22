import React from 'react';

const ClientBreakdown = function (props) {

  console.log(props.created)
return (
<div>
  <h2>{props.created}</h2>
  <h2>{props.enquirySource}</h2>
  <h2>{props.message}</h2>

</div>

  )

}

module.exports = ClientBreakdown;