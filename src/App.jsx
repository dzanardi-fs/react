import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting : 'Hey',
  title : 'React'
};

function getTitle(title){
  return title;
}
//const myElement = <h1>Hello {welcome.title}</h1>;
const myElement = React.createElement('h1',null,`Hello ${welcome.title}`);

function App() {
  return(
    <div>
        <h1>Hello {welcome.greeting} {welcome.title}!!!</h1>
        <h1>Hello {getTitle('React (función)')}!!!</h1>
        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' />
        <hr/>
        {myElement}
    </div>
  );
}

export default App
