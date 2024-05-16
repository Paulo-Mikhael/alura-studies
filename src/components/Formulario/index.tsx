import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidV4 } from 'uuid';

class Formulario extends React.Component<{ 
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
 }>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state, selecionado: false, completado: false, id: uuidV4() }])
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar?" 
                        required
                        onChange={evento => {
                            this.setState({ ...this.state, tarefa: evento.target.value }); // "linkando o input com o objeto state"
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
                        value={this.state.tempo} 
                        name="tempo" 
                        id="tempo" 
                        min="00:01:00" 
                        max="01:30:00" 
                        required 
                        onChange={evento => {
                            this.setState({ ...this.state, tempo: evento.target.value });
                        }} 
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;