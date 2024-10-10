import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import ConditionalComponent from './components/ConditionalComponents';
import Counter from './components/Counter';
import GithubUser from './components/GithubUser';

function App() {
  return (
    <div>
      <GithubUser
        userName="leodacosta1"/>
    </div>   
  )
}

export default App;
