import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

const titleBox = {
  height: '100vh',
  color: 'yellow',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
backgroundColor:'lightblue'
};

root.render(
  <div>

    <div style={titleBox}>
      <div style={{backgroundColor:'navy',padding:'1em',borderRadius:'20px',cursor:'pointer'}}>My First Project</div>

    </div>


  </div>

);


reportWebVitals();
