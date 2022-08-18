import logo from './logo.svg';
import './App.css';
import { useMemo, useEffect, useState} from 'react'

function App() {

  const [number, setNumber] = useState(0)
  const [isKr, setIsKr] = useState(true)
  const location = useMemo( ()=>{return {country: isKr? "Korea":"Other"}})
  useEffect(()=>{console.log("useEffect called")},[location])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <br/>
        <p>나라: {location.country}</p>
        <button onClick={()=>setIsKr(!isKr)}>Update</button>
        <br/><br/>
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
