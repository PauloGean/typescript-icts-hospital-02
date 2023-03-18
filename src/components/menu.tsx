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

                </ul>
            </nav>
        </>
    );
}