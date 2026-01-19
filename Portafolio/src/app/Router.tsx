// src/app/Router.tsx

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Contacto from '../pages/Contacto/Contacto'
import SobreMi from '../pages/SobreMi/SobreMi';
import Proyectos from '../pages/Proyectos/Proyectos';
import Home from '../pages/Home/Home';

const Router = () => (
    <BrowserRouter>
    <Layout>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="about" element={<SobreMi/>} />
            <Route path="projects" element={<Proyectos/>} />
            <Route path="contact" element={<Contacto/>} />  
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </Layout>
    </BrowserRouter>
);

export default Router;