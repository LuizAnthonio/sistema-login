import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css"

const LoginPage = () => {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log("Enviado", {email, password})


        login(email, password); // integração com o meu contexto / api

        setEmail('')
        setPassword('')
    };

    //<p>{String(authenticated)}</p>

    return (
        

        <div className="section">

            <div className="infos">

                <div className="container-single">

                    <div className="text-title">

                    <h1>Hello World</h1>

                   

                    </div>
                   
                </div>

                

            </div>

            

            <div className="section-login">

                <div id="login">
                <h1 className="title">Login do Sistema</h1>
                

                <div className="text-paragrafo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consequuntur vero dolorem! </p>
                </div>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="field">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="actions">
                        <button type="submit">Entrar</button>
                    </div>


                </form>
                
                </div>



                

                </div>


                


            

        </div>

        
  
    
    
    
    )
}

export default LoginPage;