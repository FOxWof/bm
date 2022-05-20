import React, { createContext, useState, useEffect } from 'react';

export const OrcamentoContext = createContext({});

export default function OrcamentoProvider({ children }) {

    const [numPneu, setNumPneu] = useState();
    const [servico, setServico] = useState();
    const [formaPagamento, setFormaPagamento] = useState();
    const [quantidade, setQuantidade] = useState();





    function get_numPneu(value) {
        setNumPneu(value);
    }



    function get_servico(value) {
        setServico(value);

    }



    function get_formaPagamento(value) {
        setFormaPagamento(value);
    }


    
    function get_qntd(value) {
        setQuantidade(value);
    }





    return (
        <OrcamentoContext.Provider value={{get_numPneu, get_servico, get_formaPagamento, get_qntd, quantidade, numPneu, servico, formaPagamento}}>
            {children}
        </OrcamentoContext.Provider>
    )
}


