import MyComponent from "./IntroductionToReactComponent"; 

import { Component } from "react";


export default class GetPersonInfo extends Component {


    render(){
    return (
      <>
       <MyComponent name = {"aamir"} age = {28} />
       <MyComponent name = {"naushi"} age = {27} />
      
      </>
      
    );
    }
}