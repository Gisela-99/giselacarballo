// src/app/Router.tsx

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/about" element={<div>About Me</div>} />
            <Route path="/projects" element={<div>Projects</div>} />
            <Route path="/contact" element={<div>Contact</div>} />  
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;