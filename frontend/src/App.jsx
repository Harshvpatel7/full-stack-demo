import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1>full stake </h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((jokes)=>{
          // <div key={jokes.id}>
         //   <h3>{joke.title}</h3>
         //   <p>{jokes.content}</p>

          // </div>
        }) 
      }
    </>
    
  )
}

export default App
