import { Button } from "@mui/material";
import { Menu } from "../components/menu";
import Rodape from "../components/rodape";
import Titulo from "../components/titulo";

export function Home() {
    return (
        <>
        <Titulo titulo="Home"></Titulo>
        <Menu></Menu>

        <Button variant="contained">Hello World</Button>

        <Rodape empresa="Paula Tenjano LTDA" ano={2023} ></Rodape>
        </>
    );
}