import React from 'react';
import ReactDOM from 'react-dom';


let currDate = new Date(2023, 12, 22, 15);
currDate = currDate.getHours();
let greeting = '';


if (currDate >= 1 && currDate < 12) {
  greeting = 'Good Morning';
} else if (currDate >= 12 && currDate < 19) {
  greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Night';
  }

ReactDOM.render(
  
    <h1>Hello Sir { greeting }</h1>,
  document.getElementById('root')


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
);
