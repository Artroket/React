import React from 'react';
import './App.css';

const App = () =>{
  return (
    <div>
    <Header />
    <Technologies />
    </div>
  );
}

const Header = () =>{
  return (
    <div>
    <a href ='#s'>Home</a>
    <a href ='#s'>Feed</a> 
    <a href ='#s'>Messages</a>
    </div>
  );
}

const Technologies = () =>{
  return(
    <div>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Js</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default App;
