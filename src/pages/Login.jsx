import { Link } from "react-router-dom"

export default function Login() {
    return (
        <main className="auth-page">
            <section className="auth-section">
                <h1>Login to Your Account</h1>

                <form>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="stoycho@gmail.com"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />

                    <button type="submit">Login</button>

                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </form>
            </section>
        </main>

    )

}