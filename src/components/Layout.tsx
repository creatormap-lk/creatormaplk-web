import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo3.png'
import '../index.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout-root">
            {/* Floating background glows */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'fixed',
                    top: '20%',
                    right: '5%',
                    width: 'clamp(10rem, 20vw, 24rem)',
                    height: 'clamp(10rem, 20vw, 24rem)',
                    backgroundColor: 'rgba(26, 55, 1, 0.05)',
                    borderRadius: '9999px',
                    filter: 'blur(64px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'fixed',
                    bottom: '20%',
                    left: '5%',
                    width: 'clamp(14rem, 28vw, 32rem)',
                    height: 'clamp(14rem, 28vw, 32rem)',
                    backgroundColor: 'rgba(26, 55, 1, 0.05)',
                    borderRadius: '9999px',
                    filter: 'blur(64px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Navigation */}
            <nav>
                <div className="nav-container">
                    <Link to="/" className="nav-logo-link">
                        <img src={logo} alt="CreatorMap Logo" className="nav-logo-img" />
                    </Link>
                    <Link to="/join" className="btn-primary nav-btn">Join Waitlist</Link>
                </div>
            </nav>

            {/* Page content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer>
                <p>© 2026 CreatorMap. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout
