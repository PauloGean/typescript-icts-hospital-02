import React, { useState } from 'react';
import './App.css';
import Titulo from './components/titulo';

function AlunosCrud() {

  let titulo = "Curso de FronEnd React";
  let [txtAluno, setTxtAluno] = useState("");
  let [txtFilter, setTxtFilter] = useState("");
  let [alunos, setAlunos] = useState<string[]>([])
  let [indexEdit, setIndexEdit] = useState(-1)


  function atualizar() {
    let novaList = [...alunos];
    novaList[indexEdit] = txtAluno;
    setAlunos(novaList);
    setTxtAluno("");
    setIndexEdit(-1);
  }

  function editar(item: string) {
    const index = alunos.findIndex(e => e.toLowerCase() == item.toLowerCase())
    setIndexEdit(index)
    setTxtAluno(item);
  }
  function salvarOuAtualizar() {
    if(indexEdit==-1){
      salvar();
    }else{
      atualizar();
    }
  }

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
      salvarOuAtualizar();
    }
  }

  function removerByIndex(index: number) {
    //debugger;
    let novaList = [...alunos];
    //novaList.splice  posicao , quantidade
    novaList.splice(index, 1)
    setAlunos(novaList);
  }

  function removebyObj(item: string) {
    const index = alunos.findIndex(e => e.toLowerCase() == item.toLowerCase())
    removerByIndex(index)
  }


  return (
    <div className="App">
      <h1>{titulo}</h1>
      <Titulo></Titulo>
      <h2>Presentes</h2>
      <h5>Aluno: {txtAluno}</h5>
      <input type="text" onKeyDown={onEnter} value={txtAluno} onChange={e => setTxtAluno(e.target.value)}></input>
      {/* condicao ?  se verdadeiro : se falso */}
      {indexEdit == -1 ?
        <button type='button' onClick={e => salvar()}>Add</button>
        :
        <button type='button' onClick={e => atualizar()}>Atualizar</button>
      }

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
                <button type='button' onClick={e => editar(item)}>Editar</button>
                <button type='button' onClick={e => removebyObj(item)}>Remover</button>
              </div>
            )
          })

          :

          alunos.map((item, index) => {
            return (
              <div>
                <span key={index}>{index} - {item}</span>
                <button type='button' onClick={e => editar(item)}>Editar</button>

                <button type='button' onClick={e => removebyObj(item)}>Remover</button>
              </div>
            )
          })

      }
    </div>
  );
}
export default AlunosCrud;
