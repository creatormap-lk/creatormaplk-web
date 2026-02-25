import { motion } from 'framer-motion'
import { Rocket, ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center py-12 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="badge mb-8"
            >
                <Sparkles size={16} />
                <span>Launching Soon • Early Access</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1.5rem' }}
            >
                Connecting <span className="gradient-text">Businesses</span> & <br className="hidden md:block" />
                <span style={{ color: 'var(--brand-coral)' }}>Content Creators</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
                style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '40rem' }}
            >
                The ultimate platform for creative growth. We bridge the gap between vision and execution, helping you scale with the right partners.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 mb-20"
            >
                <Link to="/join" className="btn-primary flex items-center gap-2">
                    Join Us <ArrowRight size={20} />
                </Link>
            </motion.div>

            {/* Rocket Illustration Section */}
            <div className="flex items-center justify-center mb-20" style={{ position: 'relative', width: '100%', maxWidth: '30rem', aspectRatio: '1/1' }}>
                <motion.div
                    animate={{
                        y: [0, -40, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ position: 'relative', zIndex: 20 }}
                >
                    <div className="rocket-container">
                        <Rocket size={120} style={{ color: 'white', transform: 'rotate(-45deg)' }} />
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="rocket-glow"
                        />
                    </div>

                    {/* Exhaust particles */}
                    <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 0, scale: 1 }}
                                animate={{ opacity: [0, 1, 0], y: [0, 40], scale: [1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                                style={{ width: '1rem', height: '1rem', borderRadius: '9999px', backgroundColor: 'rgba(190, 114, 99, 0.5)', filter: 'blur(4px)' }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Floating background elements for the rocket */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(100, 93, 121, 0.1)', borderRadius: '9999px', filter: 'blur(64px)', zIndex: -1 }}
                />
            </div>

            {/* Sub-features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 text-left">
                <div className="glass-card p-8">
                    <TrendingUp style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Growth</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Empowering brands to reach new heights through creator collaboration.</p>
                </div>
                <div className="glass-card p-8">
                    <Sparkles style={{ color: 'var(--brand-purple)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Innovation</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>A modern approach to influencer marketing and content strategy.</p>
                </div>
                <div className="glass-card p-8">
                    <Users style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Collaboration</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Building lasting connections between visionaries and creators.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
