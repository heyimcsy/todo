import React,{ useState } from "react";
import "./App.css";

const App = () => {
  const [doing, setDoing] = useState ([
    { id: 1, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보기!'},
    { id: 2, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보자!'},
    { id: 3, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보고!'},
    { id: 4, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보자기!'},
  ]);
  const [bigTd, setBigTd] = useState('');
  const [smallTd, setSmallTd] = useState('');

  const changeBidTdHandler = (event) => {
    setBigTd(event.target.value);
  }
  const changeSmallTdHandler = (event) => {
    setSmallTd(event.target.value);
  }

  return (
    <div className="App">
      <div className="headStyle">
      <p>My Todo List</p> 
      <p>React</p>
      </div>
      <div>
        제목 &nbsp;
        <input 
          value = {bigTd}
          onChange = {changeBidTdHandler}/>
          {bigTd}
        내용 &nbsp;
        <input 
          value = {smallTd}
          onChange = {changeSmallTdHandler}/>
          {smallTd}
        <button>추가하기</button>
      </div>
      <h1>Working..</h1>
      <div className="toDoBox">
        {doing.map((item) => {
          return (
          <div key={item.id} className="box-style">
          <p>{item.bigTd}</p>
          <p>{item.smallTd}</p>
        </div> 
          );
        })}
      </div>
    </div>
  );
}

export default App;
