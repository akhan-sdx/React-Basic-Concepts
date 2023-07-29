import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GetPersonInfo from './UseOfReactComponent';
import {Counter, ToggleButton , ExampleForStateComponent} from './UseStateAndState';
import { EventHandlingExample, FormExample } from './EventHandling';
import { Greeting } from './IntroductionToReactComponent';
import Timer from './ComponentLifeCycle';
import LifecycleExample from './ComponentLifeCycle';
import { BrowserRouter as Router, Route,Routes , Link} from 'react-router-dom';
import DestructuredProps from './DestructuringProps';
import SetStateExample from './stateAndProps';
import {UseEffectExplanation,ThemeButton} from './hooks';
import ReduxElement from './ReduxPracticleExample';
import ReduxClassComponent from "./ReduxClassComponentExample"
import MousePositionComponent from './CustomHookExample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
      {/* <GetPersonInfo/> 
   <Counter/>
   <ToggleButton/>
   <ExampleForStateComponent Count= {5} Message = {"I am Don"}/> */}


   {/* <EventHandlingExample/>

   <FormExample/> */}

   {/* <Greeting/>
   <Counter/>
   <LifecycleExample/> */}

   {/* <Router>

      <ul className="App-header">
        <li>
          <Link to="/greeting">Greeting</Link>
        </li>
      </ul>
      <Routes>
        <Route path={"/greeting"} Component={Greeting} />

      </Routes>

   </Router> */}

 {/* <DestructuredProps name={"aamir"} age = {26}></DestructuredProps> */}


   {/* <SetStateExample name= {"Aamir Khan"}/> */}
   {/* <UseEffectExplanation/>
   <ThemeButton/>
       */}

       {/* <ReduxElement/> */}

       <ReduxClassComponent/>
       <MousePositionComponent/>
    </div>
  );
}

export default App;
