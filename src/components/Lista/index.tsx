import React, { useState } from "react";
import style from './Lista.module.scss'
import Item from "./item";
import { ITarefa } from "../../types/tarefa";

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props){
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id} 
                        tarefa={item.tarefa} 
                        tempo={item.tempo} 
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;