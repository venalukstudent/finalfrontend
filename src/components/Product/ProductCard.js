import React, { useState } from "react";

const ProductCard = ({ image, productName }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div
              style={{
                border: "4px solid rgba(255, 128, 0, 0.3)",
                borderTop: "4px solid #FF8000",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                animation: "spin 1s linear infinite",
              }}
            />
          </div>
        )}
        <img
          src={image}
          alt={productName}
          onLoad={handleImageLoad}
          style={{
            display: isLoading ? "none" : "block",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="product-info">
        <h4>{productName}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
