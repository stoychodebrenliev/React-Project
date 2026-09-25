import { Link } from "react-router"

export default function Register() {
    return (
        <main className="auth-page">
            <section className="auth-section">
                <h1>Create an Account</h1>
                <p>Please fill out the form below to create an account.</p>

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
                        placeholder="Create a password"
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        required
                    />

                    <button type="submit">Register</button>

                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </section>
        </main>

    )

}