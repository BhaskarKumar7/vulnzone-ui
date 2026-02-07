import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import AttackRangesPage from './pages/AttackRangesPage'
import SolutionsPage from './pages/SolutionsPage'

function App() {
  return (
    <div className="bg-[#0b0f19] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/ranges" element={<AttackRangesPage />} />
      </Routes>
    </div>
  )
}

export default App
