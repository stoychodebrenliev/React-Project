import BrandStory from './components/BrandStory.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Lookbook from './components/Lookbook.jsx'
import Process from './components/Process.jsx'
import Product from './components/Product.jsx'

function App() {
	return (
		<div>
			<Header />

			<main>

				<Hero />

				<Lookbook />

				<Product />

				<Process />

				<BrandStory />

				<Footer />
				
			</main>
		</div>
	)
}

export default App
