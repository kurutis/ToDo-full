import { useState } from "react";
import { useLoginMutation } from "../../app/apiSlice";
import s from "./Login.module.scss";

export let Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await login({ password, email }).unwrap();
            console.log('Response from login:', response);
            localStorage.setItem('token', response.token);
            alert('Вход выполнен');
        } catch (err) {
            alert('Ошибка входа: ' + (err.data?.message || 'Неизвестная ошибка'));
            console.error('Ошибка:', err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <input type="submit" value={isLoading ? "Загрузка..." : "Войти"} disabled={isLoading} />
            </form>
        </div>
    );
};