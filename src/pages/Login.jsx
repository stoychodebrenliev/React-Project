import { Link, useNavigate } from "react-router"
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        setErrorMessage("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if(error) {
            setErrorMessage(error.message);
            return;
        }

        navigate("/");
    }

    return (
        <main className="auth-page">
            <section className="auth-section">
                <h1>Login to Your Account</h1>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="stoycho@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>

                    {errorMessage && <p>{errorMessage}</p>}
                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </form>
            </section>
        </main>

    )

}