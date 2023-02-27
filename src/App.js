import React,{ useState } from "react";
import "./App.css";

const App = () => {
  const [doing, setDoing] = useState ([
    { id: 1, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보기!', },
    { id: 2, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보자!', },
    { id: 3, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보고!', },
    { id: 4, bigTd:'리액트를 공부하자', smallTd:'리액트 노션 보자기!', },
  ]);
  const [bigTd, setBigTd] = useState('');
  const [smallTd, setSmallTd] = useState('');

  const changeBidTdHandler = (event) => {
    setBigTd(event.target.value);
  };
  const changeSmallTdHandler = (event) => {
    setSmallTd(event.target.value);
  };
  const clickButtonForAdd = () => {
    const newDoing = {
      id: doing + 1,
      bigTd,
      smallTd,
    };

    setDoing([...doing, newDoing])
  };
  const clickDelButtonHandler = (id) => {
    const newDoing = doing.filter(doing => doing.id !== id)
    setDoing(newDoing)
  }
  const clickDoneButtonHandler = () => {
    
  };

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
        내용 &nbsp;
        <input 
          value = {smallTd}
          onChange = {changeSmallTdHandler}/>
        <button onClick={clickButtonForAdd}>추가하기</button>
      </div>

      <h1>Working..🐰</h1>
      <div className="toDoBox">
        {doing.map((item) => {
          return (
          <div key={item.id} className="box-style">
          <p>{item.bigTd}</p>
          <p>{item.smallTd}</p>
          <button onClick={()=>clickDelButtonHandler(item.id)}>삭제하기</button>
          <button onClick={clickDoneButtonHandler}>완료</button>
        </div> 
          );
        })}
      </div>
      <br />
      <h1>Done..!🐻‍❄</h1>
    </div>
  );
}

export default App;
