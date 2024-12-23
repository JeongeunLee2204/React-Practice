import Data from "../data/data";

function ProductBox(props) {
    const product = Data[props.id];
    
    return (
        <div>
             <img
                src={product.imageUrl} // 이미지 URL 직접 삽입
                alt={product.title} // 이미지 대체 텍스트
                style={{
                    width: "100%",
                    maxWidth: "500px", // 최대 크기 설정
                    height: "auto" // 비율 유지
                }}
            />

            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <p>{product.price}원</p>
        </div>
    );
}

export default ProductBox;
