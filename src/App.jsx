import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient.js";

import BrandStory from './components/BrandStory.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Recipes from './components/Recipes.jsx'
import Process from './components/Process.jsx'
import Product from './components/OurYoghurt.jsx'

import RecipesPage from './pages/RecipesPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		async function getUser() {
			const { data } = await supabase.auth.getSession();
			console.log("Session data:", data);
			setUser(data.session?.user ?? null);
		}

		getUser();

		const { data } = supabase.auth.onAuthStateChange(
			(event, session) => {
				console.log("Auth state change:", event, session);
				setUser(session?.user ?? null);
			}
		);

		return () => {
			data.subscription.unsubscribe();
		};
	}, [])
	return (
		<div>
			<Header user={user} />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<main>

								<Hero />

								<Recipes />

								<Product />

								<Process />

								<BrandStory />

							</main>

							<Footer />
						</>
					}
				/>

				<Route path="/recipes" element={<RecipesPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>

		</div>
	)
}

export default App
