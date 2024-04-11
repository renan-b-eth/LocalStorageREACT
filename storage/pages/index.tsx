"use client";

import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage: React.FC = () =>{


    const router = useRouter(); // instanciando um objeto
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () =>{
        if(username == 'admin' && password == 'admin'){
            localStorage.setItem("isLoggedIn", 'True'); // parte nova
            router.push('/dashboard')
        } else {
            setError("Usuário e/ou senha incorretos!")
        }
    }

    return(
        <>
            <h1>Login</h1>
            <form>
                <label> Usuário: </label><input type="text" placeholder="Usuário" value = { username } onChange={ (e) => setUsername(e.target.value)}></input> <br></br>
                <label> Senha: </label><input type="password" placeholder="Senha" value = { password } onChange={ (e) => setPassword(e.target.value)}></input> <br></br>
                { error && <span>{error}</span> } 
                <button onClick={handleLogin}>Logar</button>
            </form>
        </>

    )
}

export default LoginPage;