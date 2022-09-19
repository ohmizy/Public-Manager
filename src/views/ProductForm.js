import { useState } from "react";
import { Link } from "react-router-dom";

const ProductForm = (props) => {
  const { submitHandler, initialProduct, formText, errorObject } = props;
  const [formState, setFormState] = useState(initialProduct);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="card">
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            {/* TITLE START */}
            <div className="input-group  mb-3">
              <span className="input-group-text">Product</span>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={formState.title}
                onChange={changeHandler}
              />
            </div>
            {errorObject.title ? (
              <p className="form-text text-danger">{errorObject.title}</p>
            ) : (
              ""
            )}
            {/* TITLE END */}
            {/* PRICE START */}
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control"
                value={formState.price}
                onChange={changeHandler}
              />
              <span className="input-group-text">.00</span>
            </div>
            {errorObject.price ? (
              <p className="form-text text-danger mb-3">{errorObject.price}</p>
            ) : (
              ""
            )}
            {/* PRICE END */}
            {/* DESCRIPTION START */}
            <div className="input-group mb-3">
              <span className="input-group-text">Description</span>
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                value={formState.description}
                onChange={changeHandler}
              />
            </div>
            {errorObject.description ? (
              <p className="form-text text-danger mb-3">
                {errorObject.description}
              </p>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">{formText}</button>
              <button className="btn btn-primary btn-sm ms-3">
                <Link className="nav-link" to={"/products"}>
                  Cancel
                </Link>
              </button>
            </div>
            {/* DESCRIPTION END */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
