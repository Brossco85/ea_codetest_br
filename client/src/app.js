import React from 'react';
import ReactDOM from 'react-dom';
const CaseBlocksContainer = require('./CaseBlocksContainer.jsx')


window.onload = function(){

  ReactDOM.render(
    <CaseBlocksContainer />, document.getElementById('app')
    );
  
};