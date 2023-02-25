import React, { useState } from 'react';
import './App.css';
import { ItemCompra } from './models/ItemCompra';

function ListaCompras() {

  let [txtItemCompra, setTxtItemCompra] = useState("");
  let [txtItemQuant, setTxtItemQuant] = useState(1);


  let [txtFilter, setTxtFilter] = useState("");
  let [items, setItems] = useState<ItemCompra[]>([])
  let [indexEdit, setIndexEdit] = useState(-1)


  function atualizar() {
    let novaList = [...items];
    // novaList[indexEdit] = txtItemCompra;
    setItems(novaList);
    setTxtItemCompra("");
    setIndexEdit(-1);
  }

 
  function salvarOuAtualizar() {
    if(indexEdit==-1){
      salvar();
    }else{
      atualizar();
    }
  }

  function salvar() {
    debugger;
    // find busca 1 elemento na lista com uma condicao 
    let resultado = items.find(e => e.nome.toLowerCase() == txtItemCompra.toLowerCase());
    if (resultado == undefined) {
      // Instanciando Objeto Item Compra
      const item = new ItemCompra();
      // Setando valor do texto para atributo nome
      item.nome = txtItemCompra;
      item.quant = txtItemQuant;

      let novaList = [...items, item];
      setItems(novaList);
      setTxtItemCompra("");
    } else {
      alert("Já existe : " + txtItemCompra);
    }
  }


  function onEnter(event: any) {
    //console.log(event.keyCode) ==13
    if (event.key === 'Enter') {
      salvarOuAtualizar();
    }
  }




  return (
    <div className="App">
      <h2>Lista de Compras</h2>
      <h5>Item: {txtItemCompra}</h5>
      <input type="text" onKeyDown={onEnter} value={txtItemCompra} onChange={e => setTxtItemCompra(e.target.value)}></input>
      <input type="number" onKeyDown={onEnter} value={txtItemQuant} onChange={e => setTxtItemQuant(+e.target.value)}></input>

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

          items.filter(e => e.nome.toLowerCase().includes(txtFilter.toLowerCase())).map((item, index) => {
            return (
              <div  key={index}>
                  <span>{item.nome}</span>  -  <span>{item.quant}</span>
               
              </div>
            )
          })

          :

          items.map((item, index) => {
            return (
              <div  key={index}>
                 <span> {item.nome}</span> -  <span>{item.quant}</span>

              </div>
            )
          })

      }
    </div>
  );
}
export default ListaCompras;
