import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GetPersonInfo from './useOfReactComponent';
import {Counter, ToggleButton , ExampleForStateComponent} from './useStateAndState';
import { EventHandlingExample, FormExample } from './eventHandling';
import { Greeting } from './IntroductionToReactComponent';
import Timer from './componentLifeCycle';
import LifecycleExample from './componentLifeCycle';
import { BrowserRouter as Router, Route,Routes , Link} from 'react-router-dom';
import DestructuredProps from './destructuringProps';
import SetStateExample from './stateAndProps';
import {UseEffectExplanation,ThemeButton} from './hooks';
import ReduxElement from './reduxPracticleExample';
import ReduxClassComponent from "./reduxClassComponentExample"

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
    </div>
  );
}

export default App;
