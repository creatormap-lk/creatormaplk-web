import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Join from './pages/Join'
import Legal from './pages/Legal'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/terms" element={<Legal key="terms" doc="terms" />} />
          <Route path="/privacy" element={<Legal key="privacy" doc="privacy" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
