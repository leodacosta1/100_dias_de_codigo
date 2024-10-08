import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import ConditionalComponent from './components/ConditionalComponents';

function App() {
  return (
    <div>
      <ConditionalComponent/>
    </div>
    
    /*
    <div>
      <MyComponent
        title="Título via propriedades(props)"
        desciption="Descrição via pripriedades(props)"
      />      
    </div>
    */
  )
}

export default App;
