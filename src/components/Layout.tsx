import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'
import '../index.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout-root">
            <div className="bg-glow-1" />
            <div className="bg-glow-2" />

            {/* Subtle floating shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '25%',
                    right: '5%',
                    width: '16rem',
                    height: '16rem',
                    backgroundColor: 'rgba(100, 93, 121, 0.05)',
                    borderRadius: '9999px',
                    filter: 'blur(64px)'
                }}
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '5%',
                    width: '24rem',
                    height: '24rem',
                    backgroundColor: 'rgba(190, 114, 99, 0.05)',
                    borderRadius: '9999px',
                    filter: 'blur(64px)'
                }}
            />

            <nav style={{ position: 'fixed', top: '1rem', left: '1rem', right: '1rem', zIndex: 50 }}>
                <div className="nav-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" className="nav-logo-link">
                            <img src={logo} alt="CreatorMap Logo" className="nav-logo-img" />
                        </Link>
                    </div>
                    <a href="/join" className="btn-primary nav-btn">Join Waitlist</a>
                </div>
            </nav>

            <main style={{ paddingTop: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {children}
            </main>

            <footer style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <p>© 2026 CreatorMap. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout
