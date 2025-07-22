import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SkillAnalysis from './pages/SkillAnalysis';
import LearningPath from './pages/LearningPath';
import LogIn from './pages/Login';
// import Jobs from './pages/Jobs';
import Career from './pages/Career';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    // <div className="min-h-screen bg-gray-200">
       <Router>
       <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skill-analysis' element={<SkillAnalysis />} />
          <Route path='/learning-path'>
             <Route index element={<LearningPath />} />
             <Route path='/learning-path/roadmap' element={<Roadmap />} />
          </Route>
          <Route path='/login' element={<LogIn />} />
          <Route path='/career' element={<Career />} />
        </Routes>
       </Router>
    // </div>
  );
}

export default App;