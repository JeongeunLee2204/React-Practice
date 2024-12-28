import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function DetailPage(props) {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const [tab, setTab] = useState(0);

  const product = props.pData.find((item) => item.id === numericId);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("5초 지남");
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${product.id + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mt-4">
        <TabContent tab={tab} />
      </div>
    </div>
  );
}

export default DetailPage;

function TabContent({ tab }) {
  return [
    <div>상품 설명 내용입니다.</div>,
    <div>리뷰 내용입니다.</div>,
    <div>Q&A 내용입니다.</div>,
  ][tab];
}
