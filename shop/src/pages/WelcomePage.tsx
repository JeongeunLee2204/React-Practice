import "../App.css";
import ProductBox from "../components/productBox.tsx";
import Data from "../data/data.ts";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function WelcomePage() {
  const [pData, setpData] = useState(Data);
  const [bTime, setbTime] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="main-bg"></div>

      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : pData && pData.length > 0 ? (
          pData.map((product) => (
            <ProductBox key={product.id} id={product.id} product={product} />
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>

      <Button
        style={{ display: bTime >= 3 ? "none" : "block" }}
        onClick={() => {
          if (bTime < 3) {
            setLoading(true);
            axios
              .get(`https://codingapple1.github.io/shop/data${bTime + 1}.json`)
              .then((result) => {
                console.log(result.data);
                setpData([...pData, ...result.data]);
                setbTime(bTime + 1);
              })
              .catch(() => {
                console.log("실패함");
              })
              .finally(() => {
                setLoading(false);
              });
          }
        }}
      >
        더보기
      </Button>
    </div>
  );
}

export default WelcomePage;
