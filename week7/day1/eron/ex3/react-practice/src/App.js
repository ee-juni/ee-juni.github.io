// import logo from './logo.svg';
import './App.css'
import React, { Component }  from 'react';

function Board(props) {
  const isAdmin = true
  return <div>
    <h1 style={{color: props.color}}>{props.title}</h1>
    <p>{props.title.length ===10 ? <button>length is 10</button> : null}</p>
    <User name={props.user.name} profile_image={props.user.profile_image}></User>
    { isAdmin ? <button>수정</button>: null}
  </div>
}

function User(props) {
  return <div>
    <img src={props.profile_image} alt="A random image"></img>
    <p>{props.name}</p>
    </div>
}

const contents = [
  {
    title: "Da titl Uno",
    color: "red",
    user: {
      name: "Juni",
      profile_image: "https://placeimg.com/300/300/any"
    }
  },
  {
    title: "Da titl Duos",
    color: "orange",
    user: {
      name: "Jess",
      profile_image: "https://placeimg.com/330/300/any"
    }
  },
  {
    title: "Da titl Tres",
    color: "green",
    user: {
      name: "July",
      profile_image: "https://placeimg.com/360/300/any"
    }
  }
]

function App() {
  return <div>
    {contents.map((content)=>
    <Board title={content.title} color={content.color} user={content.user}></Board>
    )}
  </div>
  // return <div>
  //   <Board title={contents.title} color={contents.color} user={contents.user}></Board>
  // </div>
  // return <MyComponent user={{name:'Elice'}} color={'blue'}>
  //   <div>Hello</div>
  // </MyComponent>
}

const MyComponent = props =>{
  const {user, color, children} = props
  return <div style={{color}}>
    <p>{user.name}님의 하위 element는!</p>
    {children}
  </div>
}

export default App;
