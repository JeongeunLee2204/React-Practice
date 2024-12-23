import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  // pData 배열에서 고유 id가 numericId와 일치하는 상품 찾기
  const product = props.pData.find((item) => item.id === numericId);

  // id가 일치하는 상품이 없을 경우 처리
  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  useEffect(()=>{
    setTimeout(() => {
      console.log("5초지남");
    }, 5000);

  },[]);

  function Detail(){
    let [num, setNum]=useState("")
    useEffect(()=>{
      if(isNaN(num)==true){
        alert('그러지마세요');
      }
    },[num])
    return (<input onChange={(e)=>{setNum(e.target.value)}}/>)
  }

  return (
    <div className="container">
      <Detail/>
      <div className="row">
        <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${product.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
