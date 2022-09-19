import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../views/ProductForm';


const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [product, setProduct] = useState(null);
  const [errorObject, setErrorObject] = useState({})


  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, baseUrl]);

  const updateProduct = (e, product) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, product)
      .then(() => navigate('/products'))
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorObj = {}
        for (const key in errorResponse) {
            errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
    }, [product]);
  };

  return (
    product &&
    <ProductForm 
      formText={'Edit Product'}
      submitHandler={updateProduct} 
      initialProduct={product} 
      errorObject={errorObject} 
    />
  );
};

export default EditProduct;