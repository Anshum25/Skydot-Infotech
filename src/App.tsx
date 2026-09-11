import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

// Import pages
import HomePage from '@/pages/page'
import AboutPage from '@/pages/about/page'
import ContactPage from '@/pages/contact/page'
import WorkPage from '@/pages/work/page'
import InsightsPage from '@/pages/insights/page'
import SolutionsPage from '@/pages/solutions/page'
import SolutionDetailPage from '@/pages/solutions/[slug]/page'
import ProductsPage from '@/pages/products/page'
import ProductDetailPage from '@/pages/products/[slug]/page'
import IndustriesPage from '@/pages/industries/page'
import IndustryDetailPage from '@/pages/industries/[slug]/page'
import WorkDetailPage from '@/pages/work/[slug]/page'

import { AnimatePresence } from 'framer-motion'
import { PageTransition } from '@/components/animations/page-transition'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/work/:slug" element={<PageTransition><WorkDetailPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><InsightsPage /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
        <Route path="/solutions/:slug" element={<PageTransition><SolutionDetailPage /></PageTransition>} />
        <Route path="/products" element={<PageTransition><ProductsPage /></PageTransition>} />
        <Route path="/products/:slug" element={<PageTransition><ProductDetailPage /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/industries/:slug" element={<PageTransition><IndustryDetailPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

import { Preloader } from '@/components/animations/preloader'

function AppShell() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Preloader />
      <Navbar />
      <main className="flex-1 bg-background relative z-10">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
