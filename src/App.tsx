import React, { useState } from 'react';
import './App.css';

function App() {

  let titulo = "Curso de FronEnd React";
  let [txtAluno, setTxtAluno] = useState("");
  let [txtFilter, setTxtFilter] = useState("");
  let [alunos, setAlunos] = useState<string[]>([])

  function salvar() {
    // find busca 1 elemento na lista com uma condicao 
    let resultado = alunos.find(e => e.toLowerCase() == txtAluno.toLowerCase());
    if (resultado == undefined) {
      let novaList = [...alunos, txtAluno];
      setAlunos(novaList);
      setTxtAluno("");
    } else {
      alert("Já existe : " + txtAluno);
    }
  }

  function onEnter(event: any) {
    //console.log(event.keyCode) ==13
    if (event.key === 'Enter') {
      salvar();
    }
  }

  function removerByIndex(index: number) {
    //debugger;
    let novaList = [...alunos];
    //novaList.splice  posicao , quantidade
    novaList.splice(index, 1)
    setAlunos(novaList);
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <h2>Presentes</h2>
      <h5>Aluno: {txtAluno}</h5>
      <input type="text" onKeyDown={onEnter} value={txtAluno} onChange={e => setTxtAluno(e.target.value)}></input>
      <button type='button' onClick={e => salvar()}>Add</button>
      <br />
      <br />
      <h2>Buscar</h2>
      <input type="text" onChange={e => setTxtFilter(e.target.value)}></input>

      {
       txtFilter.length > 0 ?

       alunos.filter(e => e.toLowerCase().includes(txtFilter.toLowerCase())).map((item, index) => {
          return (
            <div>
              <span key={index}>{index} - {item}</span>
              <button type='button' onClick={e => removerByIndex(index)}>Remover</button>
            </div>
          )
        })

        :

        alunos.map((item, index) => {
          return (
            <div>
              <span key={index}>{index} - {item}</span>
              <button type='button' onClick={e => removerByIndex(index)}>Remover</button>
            </div>
          )
        })

      }
    </div>
  );
}
export default App;
