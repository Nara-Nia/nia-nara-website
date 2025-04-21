import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleLogin } from "../services/login";
import { useUserContext } from "../contexts/UserContext";

export default function SignIn() {
    const {user, setUser} = useUserContext();
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const navigate = useNavigate();

   useEffect(() => {
    async function handleAuth() {
        if (code) {
            await handleLogin(code, navigate, setUser);
        }
    }
    
    handleAuth()
   }, [])   
    
    return user ? (
        <div>
            <h1>Olá, {user.username}!</h1>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="Avatar" />
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
        </div>
    ) : (
        <div>
            <p>Autenticando...</p>
        </div>
    );
};
