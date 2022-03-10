import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
const [time, setTime] = useState(0)
const [start, setStart] = useState(false)

useEffect( () => {
  let interval = null;

  if(start){
    interval = setInterval(() => {
      setTime(prevTime => prevTime +10)
    }, 10);
  }else{
    clearInterval(interval);
  }

  console.log(start)
  return () => clearInterval(interval);
}, [start])
//in html: 
//for the milliseconds divide the time by 10 because that is the value of a millisecond 
//then modulo 1000. 
//Append this to a zero so that when the time starts there will be a zero already instead of just one digit. 
//we will slice and pass in a parameter of -2 so that when the number becomes two digits the zero will be removed
//do the same for seconds and minutes.

  return (
    <div className='App'>
      <h1>Chronometer</h1>
      <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 1000).slice(-2)}</span>
      </h2>

      <div>
        {!start &&
        <button onClick={() => setStart(true)}>Start</button>
        }
        {start &&
        <button onClick={() => setStart(false)}>Stop</button>
        }
        {time>0 &&
        <button onClick={() => {setTime(0); setStart(false)}}>Reset</button>
        }
      </div>
    </div>        
  )
}
  


export default App;
