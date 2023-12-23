import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate = new Date(2023, 12, 22, 15);
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {};


if (currDate >= 1 && currDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if (currDate >= 12 && currDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
  } else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
  }

ReactDOM.render(


  <div>
  

    <h1>

      Hello Sir, <span style={cssStyle}>  { greeting } </span>  
      
    </h1>
  </div>,
  document.getElementById('root')


// If you want to start measuring performance in your app, pass a 
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
);
