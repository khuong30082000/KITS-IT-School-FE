import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';

// const element = <h1>Hello world</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = (
//   <div>
//     <Welcome name="sara" age="18" />
//     <Welcome name="hellen" age="20" />
//     <Welcome name="alex" age="30" />
//   </div>
// );
// function tick() {

//   root.render(element);
// }

// setInterval(tick, 1000);

root.render(
  // element
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
