import logo from './logo.svg';
import './App.css';

///////////////////////////////////////////////////////
/* Using props children
const Wrapper = ({children})=>{
  const style = {
    border: '3px solid black',
    padding: 10
  }
  return <div style={style}>{children}</div>
}

function App() {
  return (
    <Wrapper>
      <h1>Title</h1>
      <p>Description</p>
    </Wrapper>
  );
}
*/
//////////////////////////////////////////////////

//Counter Ex
import {useState} from 'react'

const Counter = ()=>{
  const [count,setCount] = useState(0)
  const handleClick = (event)=>{setCount(count+parseInt(event.target.innerText))}
  return <div> 
    <h1>Counter</h1>
    <h3>{count}</h3>
    <button onClick={handleClick}>+1</button>
    <button onClick={handleClick}>-1</button>
  </div>
}

function App(){
  return <div style={{padding: 10, fontFamily: "NanumGothic"}}>
    <Counter/>
  </div>
}
/////////////////////////////////////




export default App;
