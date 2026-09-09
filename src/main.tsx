import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@/components/theme-provider'
import { HelmetProvider } from 'react-helmet-async'
import { SmoothScroll } from '@/components/layout/smooth-scroll'
import './pages/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
