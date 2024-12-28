import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "./../data/store";
import { useDispatch } from "react-redux";

function DetailPage(props) {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const [tab, setTab] = useState(0);
  const [fade2, setFade2] = useState("start");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const product = props.pData.find((item) => item.id === numericId);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade2("end");
      let copy = JSON.parse(localStorage.getItem('watched'))
      copy.find((a) => a === product.id)
        ? null
        : localStorage.setItem('watched', JSON.stringify([...copy, product.id])); 
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  let watched = JSON.parse(localStorage.getItem('watched'));
console.log(watched); // [1, 2, 3]

  

  return (
    <div className={`container ${fade2}`}>
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
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addItem({
                  id: product.id,
                  name: product.title,
                  count: 1,
                })
              );
              console.log("주문됨");
              navigate("/cart");
            }}
          >
            주문하기
          </button>
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
  const [fade, setFade] = useState("start");

  useEffect(() => {
    setFade("start");
    const timeout = setTimeout(() => setFade("end"), 100);
    
    return () => clearTimeout(timeout);
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
