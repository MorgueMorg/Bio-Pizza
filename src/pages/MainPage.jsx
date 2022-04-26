import { Container } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import FiltersBlock from "../components/FiltersBlock";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const MainPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <FiltersBlock getProducts={getProducts} />
        </div>
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MainPage;