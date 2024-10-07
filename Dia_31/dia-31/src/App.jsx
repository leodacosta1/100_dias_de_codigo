import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div>
      <MyComponent
        title="Título via propriedades(props)"
        desciption="Descrição via pripriedades(props)"
      />
    </div>
  )
}

export default App;
