import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GetPersonInfo from './UseOfReactComponent';
import {Counter, ToggleButton , ExampleForStateComponent} from './UseStateAndState';
import { EventHandlingExample, FormExample } from './EventHandling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <GetPersonInfo/> 
   <Counter/>
   <ToggleButton/>
   <ExampleForStateComponent Count= {5} Message = {"I am Don"}/> */}


   <EventHandlingExample/>

   <FormExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
