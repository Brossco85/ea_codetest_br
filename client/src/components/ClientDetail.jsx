import React from 'react';


class ClientDetail extends React.Component {
  constructor(props) {
   super(props);
 }


 render() {
  return (
    <div className="enquiry">
    <h3>Source: {this.props.enquirySource}</h3>
    <h3>Created: {this.props.created}</h3>
    <p>Message: {this.props.message}</p>
    <button type="submit" value={this.props.case} onClick={this.props.handleCaseDetails} >More Information</button>
    </div>
    )
}

}

module.exports = ClientDetail;
