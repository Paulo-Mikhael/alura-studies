import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidV4 } from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
}

function Formulario({ setTarefas }: Props){
    const [state, setState] = useState<ITarefa>({
        tarefa: "",
        tempo: "00:00",
        selecionado: false,
        completado: false,
        id: ''
    })
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, { ...state, id: uuidV4() }])
        setState({
            ...state,
            tarefa: "",
            tempo: "00:00",
        });
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    value={state.tarefa}
                    placeholder="O que você quer estudar?" 
                    required
                    onChange={evento => {
                        setState({ ...state, tarefa: evento.target.value }); // "linkando o input com o objeto state"
                    }}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time" 
                    step="1" 
                    value={state.tempo} 
                    name="tempo" 
                    id="tempo" 
                    min="00:00:01" 
                    max="01:30:00" 
                    required 
                    onChange={evento => {
                        setState({ ...state, tempo: evento.target.value });
                    }} 
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;