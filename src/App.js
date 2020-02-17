import React from 'react';
import logo from './logo.svg';
import './App.css';
let string = 'Hello, I am Chase';
let array = [1,2,3,4,5,6,7,8,9];


fetch('/array',{
  method:'POST',
  body: JSON.stringify({
    updateValue: 4
  })
})
  .then((res) => res.json())
  .then((myJson) => {
    console.log(myJson);
  });



fetch('/array')
  .then((res) => res.json())
  .then((myJson) => {
    console.log(myJson);
  });


//console.log(await(await fetch('/array').json()) //need to be in async function call

//i'm going to add a line for kicks 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        <br/>{string}
        <br/>{array.map(el => <div>{el}</div>)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
