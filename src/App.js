import React from 'react';
import './App.css';
import Header from "./Components/Header";
import NavHeader from "./Components/NavHeader";

class App extends React.Component{
  state= {
    bootstrap:[]
  }

render(){
  return(
    <div className="App">
      <Header />
      <NavHeader />
      <header className="App-header">
        <h1 className="site-header"></h1>
      </header>
    </div>

  );
}
}

export default App;
