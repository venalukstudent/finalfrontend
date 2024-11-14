import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="product-wrapper">
      {/* header section start */}
      <header className="product-header">
        <h1>Our Products</h1>
      </header>
      {/* headersection end */}

      {/* product layout  start*/}
      <div>
        <h3>Our best Food</h3>
        <section className="products">
          <ProductCard image="./Images/8.png" productName="Ayam woku belanga" />
          <ProductCard image="./Images/2.jpg" productName="Nasi kuning" />
          <ProductCard image="./Images/3.jpg" productName="Tinutuan" />
        </section>

        <h3>Our Exclusive Local dish</h3>
        <section className="products">
          <ProductCard image="./Images/4.png" productName="Kuah Asang" />
          <ProductCard image="./Images/5.png" productName="Cakalang Fufu" />
          <ProductCard image="./Images/6.png" productName="Ayam isi buluh" />
        </section>
        <h3>Our Exclusive deserts</h3>
        <section className="products">
          <ProductCard image="./Images/9.png" productName="Es Pisang ijo" />
          <ProductCard image="./Images/10.png" productName="Klappertart" />
          <ProductCard image="./Images/11.png" productName="Es Brenebon" />
        </section>
      </div>
      {/* Product layout ends */}
    </section>
  );
};

export default Products;
