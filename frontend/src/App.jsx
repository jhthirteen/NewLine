import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LearningHome from './pages/LearningHome.jsx'

export default function App() {
    return(
        <Routes>
            {/* Default home page for the site */}
            <Route path="/" element={<LandingPage />}></Route>
            {/* Overview page of all learning modules a user is enroleld in */}
            <Route path="/learning-home" element={<LearningHome />}></Route>
        </Routes>
    )
}