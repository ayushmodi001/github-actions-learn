import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>☁️ CloudVault</span>
        </div>
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#features" className="navbar-link" onClick={closeMenu}>Features</a>
          </li>
          <li className="navbar-item">
            <a href="#pricing" className="navbar-link" onClick={closeMenu}>Pricing</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Secure Cloud Storage for Everyone</h1>
        <p>Experience seamless file sync, sharing, and backup with enterprise-grade security</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'End-to-end encryption and advanced security protocols'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Ultra-fast upload and download speeds globally'
    },
    {
      icon: '📱',
      title: 'Access Anywhere',
      description: 'Seamless sync across all your devices'
    },
    {
      icon: '👥',
      title: 'Easy Sharing',
      description: 'Share files and folders with customizable permissions'
    },
    {
      icon: '💾',
      title: 'Unlimited Backups',
      description: 'Automatic backup of your important files'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team collaboration'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose CloudVault?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      storage: '5 GB',
      features: ['5 GB Storage', 'Basic Support', 'Web & Mobile Access']
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      storage: '1 TB',
      features: ['1 TB Storage', 'Priority Support', 'Advanced Sharing', 'Version History'],
      popular: true
    },
    {
      name: 'Business',
      price: '$19.99',
      period: '/month',
      storage: '3 TB',
      features: ['3 TB Storage', '24/7 Support', 'Team Management', 'Admin Controls']
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <div className="storage">{plan.storage} Storage</div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CloudVault</h4>
            <p>Secure cloud storage for everyone</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CloudVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}