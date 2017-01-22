import React from 'react';
import ReactDOM from 'react-dom'; 
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
const CaseBlocksContainer = require('./containers/CaseBlocksContainer.jsx');


window.onload = () => {

  ReactDOM.render(
    <CaseBlocksContainer />, document.getElementById('app')
    );

};