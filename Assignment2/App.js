import React, { Component } from 'react';
import Display from './Display'
import './MyApp.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="bacon"> <h3>AKshay KUmar</h3></div>
      <h1 className="heading-section"> Choose your dreams wisely </h1>
      <p> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Display  name="Amit" age="20" birthmonth="April"/>
      <Display name="Akshay" age="21" birthmonth="February"/>

      </div>
    );
  }
}

export default App;
