import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './views/Nav';
import Products from './views/Products';
import AllProducts from './pages/AllProducts';
import ShowProduct from './pages/ShowProduct';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path={'/'} element={<Navigate to="/products" />} />
                        <Route path={'/products'} element={<Products />}>
                            <Route index element={<AllProducts />} />
                            <Route path=":id" element={<ShowProduct />} />
                            <Route path="new" element={<NewProduct />} />
                            <Route path=":id/edit" element={<EditProduct />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;