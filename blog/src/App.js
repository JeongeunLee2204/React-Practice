/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [title, useTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let posts = "강남 우동 맛집";

  let [like, useLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titlenum, setTitlenum] = useState(0);
  let [input, setInput] = useState("");
  let [today, setToday] = useState(["1월 1일", "1월 2일", "1월 3일"]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick={()=>{
        let copy=[...title]
        copy.sort();
        useTitle(copy);
      }}>가나다순정렬</button>
      <div className="list">
      <h4>{title[0]} <span onClick={() => {useLike(like + 1);}}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={()=>{
        let copy=[...title];
        copy[0]="여자 코트 추천";
        useTitle(copy);
      }}>여자코트추천</button>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitlenum(i);
              }}
            >
              {a}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] += 1;
                  useLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...title];
                  copy.splice({ i } - 1, 1);
                  useTitle(copy);

                  let copy2 = [...like];
                  copy2.splice({ i } - 1, 1);
                  useLike(copy2)

                  let copy3 = [...today];
                  copy3.splice({ i } - 1, 1);
                  setToday(copy3)
                }}
              >
                삭제
              </button>
            </h4>

            <p>{today[i]} 발행</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />{" "}
      <button
        onClick={() => {
          if (input === "") return;
          let copy = [...title];
          copy.unshift(input);
          useTitle(copy);
          let copy2 = [...like];
          copy2.unshift(0);
          useLike(copy2);

          const now = new Date();
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1);
          const day = String(now.getDate());
          let copy3 = [...today];
          copy3.unshift(year + "년 " + month + "월 " + day + "일");
          setToday(copy3);
        }}
      >
        등록
      </button>
      {modal ? (
        <Modal
          color={"gray"}
          title={title}
          alter={() => {
            let copy = [...title];
            copy[0] = "여자 코트 추천";
            useTitle(copy);
          }}
          titlenum={titlenum}
        />
      ) : null}
    </div>
  );
}

export default App;

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.titlenum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.alter();
        }}
      >
        글수정
      </button>
    </div>
  );
}

const COM = () => {
  return <p>hi i'mcomponent</p>;
};
