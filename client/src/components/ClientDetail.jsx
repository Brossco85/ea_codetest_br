import React from 'react';

const ClientDetail = function (props) {

return (

<tr id="enquiry">
  <td>{props.created}</td>
  <td>{props.enquirySource}</td>
  <td>{props.message}</td>
  <td><button>View</button></td>
</tr>

  )

}

module.exports = ClientDetail;