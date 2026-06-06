import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import CycleEducation from './pages/CycleEducation'
import HormonalChanges from './pages/HormonalChanges'
import MenstrualHealth from './pages/MenstrualHealth'
import LifeStages from './pages/LifeStages'
import SymptomGuide from './pages/SymptomGuide'
import Wellness from './pages/Wellness'
import Resources from './pages/Resources'
import About from './pages/About'
import ProductsGuide from './pages/ProductsGuide'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cycle" element={<CycleEducation />} />
        <Route path="/hormones" element={<HormonalChanges />} />
        <Route path="/menstrual-health" element={<MenstrualHealth />} />
        <Route path="/life-stages" element={<LifeStages />} />
        <Route path="/symptoms" element={<SymptomGuide />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsGuide />} />
      </Routes>
    </Layout>
  )
}
