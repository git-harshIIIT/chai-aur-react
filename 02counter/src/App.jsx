import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(5)

  // let counter =5;

  const addValue=()=>{
    setCounter(counter+1)
  } 

  const decreaseValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
    
  )
}

export default App
