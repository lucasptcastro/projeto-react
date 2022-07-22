import React, { useState } from 'react';

import Botao from './Botao.jsx'

import "./AdicionarTarefa.css"

const AdicionarTarefa = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')
 
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
        <div className='adicionar-tarefa-container'>
            <input onChange={handleInputChange} value={inputData} className='adicionar-tarefa-input' type="text" />
            <div className="adicionar-tarefa-botao-container">
            <Botao onClick={handleAddTaskClick}>Adicionar</Botao>
            </div>
        </div>
    );
};
 
export default AdicionarTarefa;