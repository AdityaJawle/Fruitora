import { useEffect, useState } from 'react'
import './App.css'
import mangoImg from './assets/fruit-mango.svg'
import strawberryImg from './assets/fruit-strawberry.svg'
import appleImg from './assets/fruit-apple.svg'
import citrusImg from './assets/fruit-citrus.svg'
import fruitBoxImg from './assets/fruit-box.svg'

const featuredFruits = [
  {
    name: 'Alphonso Mango',
    price: '$12.99',
    unit: 'per box',
    badge: 'Best Seller',
    image: mangoImg,
    description: 'Naturally sweet mangoes picked at peak ripeness for smoothies, desserts, and gifting.',
  },
  {
    name: 'Strawberry Basket',
    price: '$8.49',
    unit: 'per basket',
    badge: 'Fresh Pick',
    image: strawberryImg,
    description: 'Bright, juicy strawberries sourced daily for breakfast bowls and healthy snacking.',
  },
  {
    name: 'Green Apple Pack',
    price: '$6.75',
    unit: 'per pack',
    badge: 'Family Choice',
    image: appleImg,
    description: 'Crisp apples with a refreshing bite, ideal for lunch boxes and fruit platters.',
  },
  {
    name: 'Citrus Mix Crate',
    price: '$14.20',
    unit: 'per crate',
    badge: 'Vitamin Boost',
    image: citrusImg,
    description: 'A colorful blend of oranges, lemons, and mandarins packed with juicy goodness.',
  },
]

const highlights = [
  { title: 'Farm-to-door delivery', text: 'Harvested from trusted growers and delivered within 24 hours in insulated boxes.' },
  { title: 'Seasonal subscriptions', text: 'Weekly and monthly fruit plans designed for homes, cafes, and wellness stores.' },
  { title: 'Quality guarantee', text: 'Every order is hand-checked for freshness, size, and flavor before dispatch.' },
]

const categories = [
  { label: 'Tropical', image: mangoImg },
  { label: 'Berries', image: strawberryImg },
  { label: 'Citrus', image: citrusImg },
  { label: 'Organic', image: appleImg },
]

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('fruitora-theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('fruitora-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className={`fruit-app ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 brand-mark" href="#home">
            Fruitora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#fruitNavbar"
            aria-controls="fruitNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="fruitNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefits">Benefits</a>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <a className="btn btn-success px-4 rounded-pill" href="#featured">
                  Order Now
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <button
                  type="button"
                  className="theme-toggle btn rounded-pill px-4"
                  onClick={() => setIsDarkMode((currentMode) => !currentMode)}
                >
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section py-5" id="home">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-tag rounded-pill px-3 py-2 d-inline-block mb-3">
                Fresh fruit marketplace
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Fresh fruits that make healthy shopping feel premium.
              </h1>
              <p className="lead text-muted mb-4">
                Discover handpicked seasonal fruits, quick delivery, and curated fruit boxes
                for families, cafes, and wellness lovers.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a className="btn btn-success btn-lg rounded-pill px-4" href="#featured">
                  Explore Products
                </a>
                <a className="btn btn-outline-dark btn-lg rounded-pill px-4" href="#benefits">
                  Why Choose Us
                </a>
              </div>
              <div className="row g-3 stats-row">
                <div className="col-sm-4">
                  <div className="stat-card p-3 rounded-4 h-100">
                    <h3 className="fw-bold mb-1">12K+</h3>
                    <p className="mb-0 text-muted">Happy customers</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="stat-card p-3 rounded-4 h-100">
                    <h3 className="fw-bold mb-1">48</h3>
                    <p className="mb-0 text-muted">Farm partners</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="stat-card p-3 rounded-4 h-100">
                    <h3 className="fw-bold mb-1">24h</h3>
                    <p className="mb-0 text-muted">Fast delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-showcase p-4 p-md-5">
                <div className="showcase-card main-card rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <p className="text-uppercase small fw-semibold mb-2">This week&apos;s box</p>
                      <h2 className="fw-bold mb-0">Sunshine Harvest</h2>
                    </div>
                    <span className="price-pill">$18.50</span>
                  </div>
                  <div className="hero-fruit-image mb-4">
                    <img src={fruitBoxImg} alt="Fresh fruit box with assorted fruits" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 text-muted">6 premium fruit varieties</p>
                    <button className="btn btn-warning rounded-pill px-4">Add to Cart</button>
                  </div>
                </div>
                <div className="floating-note note-top rounded-4 p-3">
                  <strong>97% freshness score</strong>
                  <p className="mb-0 text-muted small">Rated by repeat customers this month</p>
                </div>
                <div className="floating-note note-bottom rounded-4 p-3">
                  <strong>Free delivery over $25</strong>
                  <p className="mb-0 text-muted small">Available in selected city zones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-5" id="categories">
          <div className="container">
            <div className="text-center mb-5">
              <p className="section-label">Shop by category</p>
              <h2 className="section-title">Fruit collections for every craving</h2>
            </div>
            <div className="row g-4">
              {categories.map((category) => (
                <div className="col-6 col-lg-3" key={category.label}>
                  <div className="category-card text-center p-4 rounded-4 h-100">
                    <div className="category-icon mb-3">
                      <img src={category.image} alt={category.label} />
                    </div>
                    <h3 className="h5 mb-0">{category.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" id="featured">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
              <div>
                <p className="section-label">Featured products</p>
                <h2 className="section-title mb-0">Popular picks from our fruit market</h2>
              </div>
              <a className="btn btn-outline-success rounded-pill px-4" href="#shop">
                View Full Catalog
              </a>
            </div>
            <div className="row g-4">
              {featuredFruits.map((fruit) => (
                <div className="col-md-6 col-xl-3" key={fruit.name}>
                  <article className="product-card card border-0 h-100">
                    <div className="product-image-wrap">
                      <img className="product-image" src={fruit.image} alt={fruit.name} />
                    </div>
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="product-badge">{fruit.badge}</span>
                        <span className="fruit-emoji">Fresh</span>
                      </div>
                      <h3 className="h4">{fruit.name}</h3>
                      <p className="text-muted flex-grow-1">{fruit.description}</p>
                      <div className="d-flex justify-content-between align-items-end mt-3">
                        <div>
                          <div className="product-price">{fruit.price}</div>
                          <small className="text-muted">{fruit.unit}</small>
                        </div>
                        <button className="btn btn-success rounded-pill px-3">Buy Now</button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" id="benefits">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="benefits-panel h-100 rounded-4 p-4 p-lg-5">
                  <p className="section-label text-light">Why Fruitora</p>
                  <h2 className="text-white mb-3">Freshness, trust, and vibrant presentation in one store.</h2>
                  <p className="text-white-50 mb-0">
                    We blend the convenience of online shopping with the quality standards of a
                    neighborhood fruit market.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  {highlights.map((item) => (
                    <div className="col-md-4" key={item.title}>
                      <div className="highlight-card rounded-4 p-4 h-100">
                        <h3 className="h5 mb-3">{item.title}</h3>
                        <p className="text-muted mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="shop">
          <div className="container">
            <div className="cta-strip rounded-4 p-4 p-lg-5">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <p className="section-label mb-2">Seasonal offer</p>
                  <h2 className="mb-3">Get 20% off your first fruit box order today.</h2>
                  <p className="text-muted mb-0">
                    Start your healthy routine with premium farm-fresh bundles, beautifully packed and
                    delivered quickly.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a className="btn btn-dark btn-lg rounded-pill px-4" href="#home">
                    Start Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 text-muted">Fruitora Market (c) 2026. Fresh fruit, faster.</p>
          <p className="mb-0 text-muted">Organic picks | Same-day dispatch | Secure checkout</p>
        </div>
      </footer>
    </div>
  )
}

export default App
