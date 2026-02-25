import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

const Join = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'creator',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        // Simulate API call to Google Sheets
        setTimeout(() => {
            console.log('Form data submitted:', formData)
            setStatus('success')
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div style={{ maxWidth: '42rem', margin: '0 auto', padding: '3rem 0' }}>
            <AnimatePresence mode="wait">
                {status !== 'success' ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="glass-card p-8 md:p-12"
                    >
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Join the Waitlist</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Be the first to know when we launch and get exclusive early access perks.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="label">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="label">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label">I am a...</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="input-field"
                                    style={{ appearance: 'none' }}
                                >
                                    <option value="creator" style={{ background: '#0f172a', color: 'white' }}>Content Creator</option>
                                    <option value="business" style={{ background: '#0f172a', color: 'white' }}>Business / Brand</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">Message or Niche (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="input-field"
                                    style={{ resize: 'none' }}
                                    placeholder="Tell us a bit about yourself..."
                                />
                            </div>

                            <button
                                disabled={status === 'submitting'}
                                type="submit"
                                className="btn-primary flex items-center justify-center gap-2 w-full"
                            >
                                {status === 'submitting' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>Submit <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-12 text-center"
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '9999px' }}>
                                <CheckCircle2 size={64} style={{ color: '#22c55e' }} />
                            </div>
                        </div>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>You're on the list! 🎉</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Thanks for joining us, {formData.name.split(' ')[0]}! We'll reach out soon with more details about our launch.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            style={{ color: 'var(--brand-coral)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Back to form
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Join
