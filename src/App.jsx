import { Routes, Route, HashRouter } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App