import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx'

import './assets/css/ionicons.min.css'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import "./assets/js/main"
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/main.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="top">
      <Router />
    </div>
  </React.StrictMode>
);
