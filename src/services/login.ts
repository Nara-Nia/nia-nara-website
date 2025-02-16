import axios from 'axios';
import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';

export const handleLogin = async (code: string, navigate: NavigateFunction, setUser: React.Dispatch<React.SetStateAction<any | null>>) => {
    try {
        const response = await axios.post(
            "https://discord.com/api/oauth2/token",
            new URLSearchParams({
                client_id: "1174352498203570237",
                client_secret: "ndP_3Vic2cq4vapYFwJx5VdOpmP08hfw",
                grant_type: "authorization_code",
                code,
                redirect_uri: "http://localhost:5173/sign-in"
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const accessToken = response.data.access_token;

        const userData = await axios.get("https://discord.com/api/users/@me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        // Atualiza o estado do usuário usando setUser
        setUser(userData.data);

        // Armazena o usuário no cookie por 1 dia
        Cookies.set("discord_user", JSON.stringify(userData.data), { expires: 1 });

        // Redireciona para a página principal após o login
        navigate("/sign-in");

    } catch (err) {
        // console.error("Erro na troca de token:", err.response?.data);
    }
};
