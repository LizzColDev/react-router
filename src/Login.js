import React, { useState } from 'react'
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

function Login(){
    const auth = useAuth();
    const [userName, setUserName] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login(userName);
    }

    if(auth.user){
        return <Navigate to='/profile'/>
    }
    return(
        <>
            <h1>
                Login Page
            </h1>
            <form onSubmit={login}> 
                <label>Escribe tu nombre de usuario
                    <input 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <button type='submit'>Entrar</button>
            </form>
        </>

    );
};

export {Login}