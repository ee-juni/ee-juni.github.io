import logo from './logo.svg';
import './App.css';


import {useState} from 'react'


function App() {
  const [user, setUser] = useState({name:"name", school:"school"})
  const handleUserInput = (event)=>{
    const {name, value} = event.target
    const newUser = {...user}
    newUser[name]=value
    setUser(newUser)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <br/> My name is {user.name}
          <br/> I am from {user.school}.
          <br/><br/>
          Name: <input name="name" onChange={handleUserInput}/>
          <br/>School: <input name="school" onChange={handleUserInput}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <br/><br/>  Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
