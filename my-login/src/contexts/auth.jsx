//import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvicer = ({children}) => {

    const navigate = useNavigate();
    const [user,setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false);

    },[]);

    const login = (email, password) => {

        console.log("login auth", {email,password});

        //api criar uma session

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));


        if(password === "123"){
            
            setUser({id: "123",email});
            navigate("/")
            
            

        }else{
            alert("email ou senha incorretos")
        }

       
    };

    const logout = () => {
        console.log("logout");
        //vai remover da memoria volatil 
        localStorage.removeItem("user")
        //vai setar valor como nulo
        setUser(null);
        // Vai redircionar para a página de login
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}