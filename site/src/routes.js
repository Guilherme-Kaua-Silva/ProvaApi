import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Pagina1 from './pages/pagina.js'

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pagina1 />} />
            </Routes>
        </BrowserRouter>
    );
}