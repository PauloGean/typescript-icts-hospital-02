import './titulo.css'

interface PropTitulo{
    titulo:string;
    subtitulo?:string;
}  
function Titulo(pros:PropTitulo){
    return (
        <>
        <h1 className='meutitulo'>{pros.titulo}</h1>
        </>
    );
}
export default Titulo;