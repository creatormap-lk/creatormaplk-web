import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Proxied to https://gql-dev.creatormap.lk (see netlify.toml / vite.config.ts) since the backend sends no CORS headers
const CONTENT_URL = {
    terms: '/legal-content/terms.md',
    privacy: '/legal-content/privacy.md',
}

const Legal = ({ doc }: { doc: 'terms' | 'privacy' }) => {
    const [content, setContent] = useState<string | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        let cancelled = false
        window.scrollTo(0, 0)

        fetch(CONTENT_URL[doc])
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.text()
            })
            .then(text => { if (!cancelled) setContent(text) })
            .catch(err => {
                console.error('Error loading legal content:', err)
                if (!cancelled) setError(true)
            })

        return () => { cancelled = true }
    }, [doc])

    return (
        <div className="legal-container">
            <motion.div
                key={doc}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card legal-card"
            >
                {error ? (
                    <p className="text-center" style={{ color: 'var(--text-secondary)' }}>
                        Couldn't load this page. Please try again later.
                    </p>
                ) : content === null ? (
                    <div className="flex justify-center">
                        <Loader2 className="animate-spin" />
                    </div>
                ) : (
                    <div className="legal-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                // Keep internal links (e.g. /privacy) inside the SPA
                                a: ({ href = '', children }) =>
                                    href.startsWith('/')
                                        ? <Link to={href}>{children}</Link>
                                        : <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default Legal
