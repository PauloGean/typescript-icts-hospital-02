import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlunosView from "../pages/Alunos";
import { Home } from "../pages/Home";
import ListaCompras from "../pages/ListaCompras";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compras" element={<ListaCompras />} />
                <Route path="/alunos" element={<AlunosView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;