import React, {createContext, useState} from 'react';
import { View } from 'react-native';



 export const AuthContext = createContext({});

 export default function AuthProvider({children}){


    const [usuario, setUsario] = useState();

    




    return(
        <AuthContext.Provider value={{ verifica_user_logado: !!usuario, usuario }}>
            {children}
        </AuthContext.Provider>
    )


 }