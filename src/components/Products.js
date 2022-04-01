import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <ProductItem />
    </div>
  );
};

export default Products;
