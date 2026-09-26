import { Link, useNavigate, Navigate } from "react-router"
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Register({user}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/" />;
    }

    async function handleRegister(e) {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        if(password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
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
                <h1>Create an Account</h1>
                <p>Please fill out the form below to create an account.</p>

                <form onSubmit={handleRegister}>
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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Register</button>

                    {errorMessage && <p>{errorMessage}</p>}
                    {successMessage && <p>{successMessage}</p>}
                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </section>
        </main>

    )

}