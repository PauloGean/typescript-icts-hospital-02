import Titulo from "./titulo";
import { Link } from "react-router-dom";
import './menu.css'
export function Menu() {
    return (
        <>
            <nav className="divMenu menu">
                <ul>
                    <li>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/compras" >
                            Compras
                        </Link>
                    </li>
                    <li>
                        <Link to="/alunos" >
                            Alunos
                        </Link>
                    </li>
                    <li>
                        <Link to="/pg1" >
                            Pagina 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/pg2" >
                            Pagina 2
                        </Link>
                    </li>

                    <li>
                        <Link to="/componentMaterial" >
                            Material
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}