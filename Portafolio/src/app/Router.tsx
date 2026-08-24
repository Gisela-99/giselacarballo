// src/app/Router.tsx

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';

const Router = () => (
    <BrowserRouter>
    <Layout>
        <Routes>   
            <Route index element={<Home/>} /> 
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </Layout>
    </BrowserRouter>
);

export default Router;