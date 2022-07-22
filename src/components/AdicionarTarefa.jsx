import React from 'react';

import Botao from './Botao.jsx'

import "./AdicionarTarefa.css"

const AdicionarTarefa = () => {
    return (
        <div className='adicionar-tarefa-container'>
            <input className='adicionar-tarefa-input' type="text" />
            <Botao>Adicionar</Botao>
        </div>
    );
};
 
export default AdicionarTarefa;