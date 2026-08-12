import { motion } from 'framer-motion'
import { Rocket, ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
//test

const Home = () => {
    return (
        <>
            {/* ── Hero ───────────────────────────────────────── */}
            <div className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="badge"
                    style={{ marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                >
                    <Sparkles size={16} />
                    <span>Launching Soon • Early Access</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-headline"
                >
                    Everything You Need to Grow with{' '}
                    <br />
                    <span style={{ color: 'var(--primary-color)' }}>Influencers</span>
                </motion.h1>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "5px",
    padding: "12px 0",
    marginBottom: "20px",
  }}
>
  {[
    { name: "YouTube", icon: SiYoutube },
    { name: "TikTok", icon: SiTiktok },
    { name: "Instagram", icon: SiInstagram },
  ].map(({ name, icon: Icon }) => (
    <div
      key={name}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "transparent",
        border: "1px solid var(--primary-color)",
        borderRadius: "9999px",
        padding: "8px 16px",
        cursor: "default",
      }}
    >
      <Icon
        style={{
          fontSize: "15px",
        }}
      />

      <span
        style={{
          color: "#000000ff",
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        {name}
      </span>
    </div>
  ))}
</motion.div>
                <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="hero-cta flex items-center gap-4"
>
  <Link to="/join" className="btn-primary">
    Join Us <ArrowRight size={20} />
  </Link>

  <Link to="" className="btn-primary">
    Book a Demo
  </Link>
</motion.div>

                {/* Rocket Illustration */}
                <div className="rocket-section">
                    <motion.div
                        animate={{ y: [0, -40, 0], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'relative', zIndex: 20 }}
                    >
                        <div className="rocket-container">
                            <Rocket
                                size={'clamp(60px, 10vw, 120px)' as unknown as number}
                                style={{ color: 'white', transform: 'rotate(-45deg)', width: 'clamp(60px, 10vw, 120px)', height: 'clamp(60px, 10vw, 120px)' }}
                            />
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
                                    style={{ width: '1rem', height: '1rem', borderRadius: '9999px', backgroundColor: 'rgba(26, 55, 1, 0.5)', filter: 'blur(4px)' }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating glow behind rocket */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 55, 1, 0.1)', borderRadius: '9999px', filter: 'blur(64px)', zIndex: -1 }}
                    />
                </div>
            </div>

            {/* ── Feature Cards ──────────────────────────────── */}
            {/* Row 1: 3 cards */}
            <div className="features-grid">
                <div className="glass-card glass-card-interactive card-padding">
                    <TrendingUp className="card-icon" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="card-title">Get Paid Nearby 📍</h3>
                    <p className="card-body">Discover creators and opportunities around you with our interactive map feature. Find collaborators close to your location and start working together instantly.</p>
                </div>

                <div className="glass-card glass-card-interactive card-padding">
                    <Users className="card-icon" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="card-title">Collaborate with Purpose 🤝</h3>
                    <p className="card-body">Every collaboration creates impact. 5% of every collaboration goes towards charity, helping support meaningful causes.</p>
                </div>

                <div className="glass-card glass-card-interactive card-padding">
                    <Sparkles className="card-icon" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="card-title">AI-Powered Search 🤖</h3>
                    <p className="card-body">Find exactly what you need with semantic AI search. Easily discover the right creators, manage campaigns, and organize content calendars.</p>
                </div>
            </div>

            {/* Row 2: 2 cards — centred */}
            <div className="features-grid-centered">
                <div className="glass-card glass-card-interactive card-padding">
                    <Rocket className="card-icon" style={{ color: 'var(--primary-color)' }} />
                    <h3 className="card-title">No Commitments ⚡</h3>
                    <p className="card-body">Connect and collaborate freely. Businesses and creators can work together without contracts or long-term obligations.</p>
                </div>

                <div className="glass-card glass-card-interactive card-padding">
                    <div className="card-icon" style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.375rem)' }}>LKR</div>
                    <h3 className="card-title">Start Small. Start Smart. 💰</h3>
                    <p className="card-body">No big budgets required. Launch campaigns or find editors and creators starting from just LKR 1,000.</p>
                </div>
            </div>
        </>
    )
}

export default Home
