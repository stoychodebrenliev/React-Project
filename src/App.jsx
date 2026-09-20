import BrandStory from './components/BrandStory.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Recipes from './components/Recipes.jsx'
import Process from './components/Process.jsx'
import Product from './components/OurYoghurt.jsx'

function App() {
	return (
		<div>
			<Header />

			<main>

				<Hero />

				<Recipes />

				<Product />

				<Process />

				<BrandStory />

			</main>

			<Footer />
		</div>
	)
}

export default App
