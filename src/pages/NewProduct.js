import { useState } from "react";
import axios from "axios";
import ProductForm from "../views/ProductForm";
import { useOutletContext, useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errorObject, setErrorObject] = useState({});

  const initialProduct = {
    title: "",
    price: 0,
    description: "",
  };

  const insertProduct = (e, product) => {
    e.preventDefault();
    axios
      .post(baseUrl, product)
      .then(() => navigate("/products"))
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorObj = {};
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message;
        }
        setErrorObject(errorObj);
      });
  };

  return (
    <ProductForm
      formText={"Add Product"}
      submitHandler={insertProduct}
      initialProduct={initialProduct}
      errorObject={errorObject}
    />
  );
};

export default NewProduct;
