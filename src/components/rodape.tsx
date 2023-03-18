import './rodape.css'

interface PropRodape {
    empresa: string;
    ano: number;
    fone?: string;
}
function Rodape(pros: PropRodape) {
    return (
        <>
  
            <div className='div-rodape'>
                <span>Copyright:</span>
                <span id='empresa-nome'>{pros.empresa} -</span>
                <span>{pros.ano}</span>
            </div>
        </>
    );
}
export default Rodape;