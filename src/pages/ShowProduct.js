import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AllProducts from "../pages/AllProducts";

import axios from "axios";

const ShowProduct = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card">
      <h5 className="card-header">Product Details</h5>
      {product && (
        <div className="card-body">
          <h5 className="card-title">Title: {product.title}</h5>
          <h6>Price: {product.price}</h6>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
