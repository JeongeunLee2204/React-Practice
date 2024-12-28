function ProductBox({ product }) {
    if (!product) {
      console.log("유효하지 않은 제품입니다. product:", product);
      return <p>유효하지 않은 제품입니다.</p>;
    }
  
    return (
      <div>
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}
        />
        <h2>{product.title}</h2>
        <p>{product.content}</p>
        <p>{product.price}원</p>
      </div>
    );
  }
  
  export default ProductBox;
  