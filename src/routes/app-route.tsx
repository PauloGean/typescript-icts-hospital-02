import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlunosView from "../pages/Alunos";
import { ComponentesMaterial } from "../pages/ComponentesMaterial";
import { Home } from "../pages/Home";
import ListaCompras from "../pages/ListaCompras";
import { Pagina1, Pagina1111 } from "../pages/Pagina1";
import { Pagina2 } from "../pages/Pagina2";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compras" element={<ListaCompras />} />
                <Route path="/alunos" element={<AlunosView />} />
                <Route path="/pg1" element={<Pagina1 />} />
                <Route path="/pg2" element={<Pagina2 />} />
                <Route path="/componentMaterial" element={<ComponentesMaterial />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;