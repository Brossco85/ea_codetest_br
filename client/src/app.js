import React from 'react';
import ReactDOM from 'react-dom'; 
const CaseBlocksContainer = require('./containers/CaseBlocksContainer.jsx');


window.onload = () => {

  ReactDOM.render(
    <CaseBlocksContainer />, document.getElementById('app')
    );

};