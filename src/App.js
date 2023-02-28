import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [doing, setDoing] = useState([
    { id: 1, bigTd: "리액트를 공부하자", smallTd: "리액트 노션 보기!", completed: false, },
    { id: 2, bigTd: "리액트를 공부하자", smallTd: "리액트 노션 보자!", completed: false, },
    { id: 3, bigTd: "리액트를 공부하자", smallTd: "리액트 노션 보고!", completed: true, },
    { id: 4, bigTd: "리액트를 공부하자", smallTd: "리액트 노션 보자기!", completed:true, },
  ]);
  const [bigTd, setBigTd] = useState("");
  const [smallTd, setSmallTd] = useState("");

  const changeBidTdHandler = (event) => {
    setBigTd(event.target.value);
  };
  const changeSmallTdHandler = (event) => {
    setSmallTd(event.target.value);
  };
  const clickButtonForAdd = () => {
    const newDoing = {
      id: doing.length + 1,
      bigTd,
      smallTd,
      completed: false,
    };

    setDoing([...doing, newDoing]);
  };
  const clickDelButtonHandler = (id) => {
    const newDoing = doing.filter((doing) => doing.id !== id);
    setDoing(newDoing);
  };
  const clickDoneButtonHandler = (id) => {
    const letDoing = doing.map((doing) => {
      if (doing.id === id) {
        if (doing.completed === false) {
          doing.completed = true
        } else {
          doing.completed = false
        }
      }
      return doing;
     }); 
     setDoing([...letDoing]);
  };

  return (
    <div className="App">
      <div className="headStyle">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div>
        제목 &nbsp;
        <input value={bigTd} onChange={changeBidTdHandler} />
        내용 &nbsp;
        <input value={smallTd} onChange={changeSmallTdHandler} />
        <button onClick={clickButtonForAdd}>추가하기</button>
      </div>

      <div>
        <div className="toDoBox">
          <h1>Working..🐰</h1>
          {doing.map((item) => {
            
            if (item.completed === false){
              return (
                <div key={item.id} >
                <p>{item.bigTd}</p>
                <p>{item.smallTd}</p>
                <button onClick={() => clickDelButtonHandler(item.id)}>
                  삭제하기
                </button>
                <button onClick={() => clickDoneButtonHandler(item.id)}>완료</button>
                
              </div>
            );
            }
          })}
        </div>
            <h1>Done..!🐻‍❄</h1>
          {doing.map((item) => {
            
            if (item.completed === true){
              return (
                <div key={item.id} >
                <p>{item.bigTd}</p>
                <p>{item.smallTd}</p>

                <button onClick={() => clickDelButtonHandler(item.id)}>
                  삭제하기
                </button>
                <button onClick={() => clickDoneButtonHandler(item.id)}>취소</button>
                </div>
            );
            }
          })}
        </div>
    </div>
  );
};

export default App;