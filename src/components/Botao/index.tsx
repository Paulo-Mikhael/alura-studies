import React, { ReactNode } from "react";
import style from './Botao.module.scss'

interface Props{
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}

function Botao({ type, onClick, children }: Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;