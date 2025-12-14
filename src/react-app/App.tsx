import { useState } from "react";
import "./App.css";

// ===== HEADER COMPONENT =====
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="header">
			<div className="container header-container">
				<a href="/" className="logo">
					<span className="logo-icon">🐕</span>
					<span className="logo-text">TAIL TALES</span>
				</a>

				<nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
					<a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
					<a href="#ingredients" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Ingredients</a>
					<a href="#products" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
					<a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Login</a>
				</nav>

				<a href="#contact" className="btn btn-outline header-cta">
					Contact
				</a>

				<button 
					className="mobile-menu-btn"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
				</button>
			</div>
		</header>
	);
}

// ===== HERO COMPONENT =====
function Hero() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			setSubmitted(true);
			setEmail("");
		}
	};

	return (
		<section className="hero">
			<div className="hero-pattern"></div>
			<div className="container hero-container">
				<div className="hero-content">
					<h1 className="hero-title animate-fade-in-up">
						<span className="hero-title-accent">TAIL TALES:</span>
						<br />
						Ayurvedic Treats for Your Furry Friend
					</h1>
					<p className="hero-subtitle animate-fade-in-up delay-1">
						Natural, sourced from India. We carefully craft each treat with ancient Ayurvedic wisdom, 
						bringing wellness and joy to your beloved pets.
					</p>
					
					{!submitted ? (
						<form className="hero-form animate-fade-in-up delay-2" onSubmit={handleSubmit}>
							<div className="input-group">
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="hero-input"
								/>
								<button type="submit" className="btn btn-primary">
									Sign Up for Early Access
								</button>
							</div>
						</form>
					) : (
						<div className="hero-success animate-fade-in">
							<span className="success-icon">✓</span>
							<p>Thank you! We'll notify you when we launch.</p>
						</div>
					)}
				</div>

				<div className="hero-visual animate-fade-in delay-3">
					<div className="hero-image-container">
						<div className="hero-dog-placeholder">
							<span className="dog-emoji">🐕‍🦺</span>
							<p>Happy & Healthy</p>
						</div>
						<div className="hero-glow"></div>
					</div>
				</div>
			</div>
			<div className="hero-wave">
				<svg viewBox="0 0 1440 120" preserveAspectRatio="none">
					<path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" fill="var(--cream)"/>
				</svg>
			</div>
		</section>
	);
}

// ===== PRODUCT CARD COMPONENT =====
interface ProductCardProps {
	name: string;
	description: string;
	emoji: string;
	color: string;
	delay: number;
}

function ProductCard({ name, description, emoji, color, delay }: ProductCardProps) {
	return (
		<article className={`product-card animate-fade-in-up delay-${delay}`} style={{ "--card-accent": color } as React.CSSProperties}>
			<div className="product-image">
				<span className="product-emoji">{emoji}</span>
			</div>
			<div className="product-info">
				<h3 className="product-name">{name}</h3>
				<p className="product-description">{description}</p>
				<button className="btn btn-secondary product-btn">
					Pre Order
				</button>
			</div>
		</article>
	);
}

// ===== PRODUCTS SECTION =====
function Products() {
	const products = [
		{
			name: "Turmeric Bites",
			description: "Anti-inflammatory golden treats with organic turmeric & black pepper for optimal absorption.",
			emoji: "🟠",
			color: "#E8A94A"
		},
		{
			name: "Turmeric Chews",
			description: "Soft, chewy treats infused with pure turmeric to support joint health and immunity.",
			emoji: "🟡",
			color: "#F5C542"
		},
		{
			name: "Garlic Chews",
			description: "Natural flea & tick deterrent with safe amounts of aged garlic for your pup's protection.",
			emoji: "🧄",
			color: "#C9B896"
		},
		{
			name: "Amla Treats",
			description: "Vitamin C powerhouse from Indian gooseberry for a shiny coat and strong immunity.",
			emoji: "🟢",
			color: "#7DD3C0"
		}
	];

	return (
		<section id="products" className="products-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Our Ayurvedic Collection</h2>
					<p className="section-subtitle">
						Each treat is crafted with love using time-tested Indian herbs and ingredients
					</p>
				</div>
				<div className="products-grid">
					{products.map((product, index) => (
						<ProductCard
							key={product.name}
							{...product}
							delay={index + 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

// ===== ABOUT SECTION =====
function About() {
	return (
		<section id="about" className="about-section">
			<div className="container about-container">
				<div className="about-content animate-fade-in-up">
					<h2 className="section-title">Why Tail Tales?</h2>
					<div className="about-grid">
						<div className="about-card">
							<span className="about-icon">🌿</span>
							<h3>100% Natural</h3>
							<p>No artificial preservatives, colors, or flavors. Just pure, wholesome ingredients from nature.</p>
						</div>
						<div className="about-card">
							<span className="about-icon">🇮🇳</span>
							<h3>Sourced from India</h3>
							<p>Premium herbs and spices sourced directly from trusted Indian farms and suppliers.</p>
						</div>
						<div className="about-card">
							<span className="about-icon">🐾</span>
							<h3>Vet Approved</h3>
							<p>Each recipe is developed and approved by veterinary nutritionists for your pet's safety.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// ===== INGREDIENTS SECTION =====
function Ingredients() {
	const ingredients = [
		{ name: "Turmeric", benefit: "Anti-inflammatory", emoji: "🟡" },
		{ name: "Amla", benefit: "Vitamin C Boost", emoji: "🟢" },
		{ name: "Ashwagandha", benefit: "Stress Relief", emoji: "🌿" },
		{ name: "Coconut Oil", benefit: "Healthy Coat", emoji: "🥥" },
		{ name: "Moringa", benefit: "Superfood", emoji: "🌱" },
		{ name: "Flaxseed", benefit: "Omega-3s", emoji: "🫘" },
	];

	return (
		<section id="ingredients" className="ingredients-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title section-title-light">The Power of Ayurveda</h2>
					<p className="section-subtitle section-subtitle-light">
						Ancient wisdom meets modern pet nutrition
					</p>
				</div>
				<div className="ingredients-grid">
					{ingredients.map((ingredient, index) => (
						<div key={ingredient.name} className={`ingredient-card animate-fade-in-up delay-${(index % 5) + 1}`}>
							<span className="ingredient-emoji">{ingredient.emoji}</span>
							<h4 className="ingredient-name">{ingredient.name}</h4>
							<p className="ingredient-benefit">{ingredient.benefit}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// ===== FOOTER COMPONENT =====
function Footer() {
	return (
		<footer id="contact" className="footer">
			<div className="container footer-container">
				<div className="footer-brand">
					<a href="/" className="logo footer-logo">
						<span className="logo-icon">🐕</span>
						<span className="logo-text">TAIL TALES</span>
					</a>
					<p className="footer-tagline">
						Ayurvedic wellness for your furry family members.
					</p>
				</div>

				<div className="footer-links">
					<div className="footer-column">
						<h4>Company</h4>
						<a href="#about">About Us</a>
						<a href="#ingredients">Ingredients</a>
						<a href="#products">Products</a>
					</div>
					<div className="footer-column">
						<h4>Support</h4>
						<a href="#">FAQ</a>
						<a href="#">Shipping</a>
						<a href="#">Returns</a>
					</div>
					<div className="footer-column">
						<h4>Connect</h4>
						<a href="#">Instagram</a>
						<a href="#">Facebook</a>
						<a href="#">Twitter</a>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; {new Date().getFullYear()} Tail Tales. Made with 💚 in India.</p>
				</div>
			</div>
		</footer>
	);
}

// ===== MAIN APP =====
function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Ingredients />
				<Products />
			</main>
			<Footer />
		</>
	);
}

export default App;
