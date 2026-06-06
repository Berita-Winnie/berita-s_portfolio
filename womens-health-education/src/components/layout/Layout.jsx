import { ThemeProvider } from '../../context/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-parchment dark:bg-plum-deep transition-colors duration-300">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
