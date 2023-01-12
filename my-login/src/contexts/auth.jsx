//import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSession } from '../services/api';

export const AuthContext = createContext();




export const AuthProvicer = ({children}) => {

    const navigate = useNavigate();
    const [user,setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){

               

            setUser(JSON.parse(recoveredUser))
            /*setUser(
                 {
                id: "123",
                email:"teste@gmail.com",
                password:"123"
                }
            )*/
        }

        setLoading(false);

    },[]);

    const login = async (email, password) => {

      
       //console.log("login auth", {email,password});

        const response = await createSession(email, password);

      

        //const response = await createSession2(email,password);
        //console.log(response.data)

        //console.log("login", response.data);

        const loggedUser = response.data.user;

        const token = response.data.token;

        //api criar uma session

       
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token",token);

           // const loggedUser = {
        //    id: "123",
        //    email,
       // };
       

       api.defaults.headers.Authorization = `Bearer ${token}`;

        
            //setUser({id: "123",email});
            setUser(loggedUser);
            navigate("/")
            
    
   

       
    };

    const logout = () => {
        console.log("logout");
        //vai remover da memoria volatil 
        localStorage.removeItem("user")
        localStorage.removeItem("token")

        
        api.defaults.headers.Authorization = null;

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