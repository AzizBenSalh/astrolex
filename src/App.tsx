import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import AstroLearning from './pages/astrolearning';
import Quiz from './pages/astrolearning/quiz';
import Blog from './pages/astrolearning/blog';
import Videos from './pages/astrolearning/videos';
import Explore from './pages/explore';
import Events from './pages/explore/events';
import SolarSystem from './pages/explore/solar-system';
import Universe from './pages/explore/universe';
import Technology from './pages/explore/technology';
import Visualization from './pages/visualization';
import SolarSystemVisualization from './pages/visualization/solar-system';
import GravitySimulator from './pages/visualization/gravity';
import KeplerVisualization from './pages/visualization/kepler';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgot-password';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/astrolearning" element={<AstroLearning />} />
          <Route path="/astrolearning/quiz" element={<Quiz />} />
          <Route path="/astrolearning/blog" element={<Blog />} />
          <Route path="/astrolearning/videos" element={<Videos />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/events" element={<Events />} />
          <Route path="/explore/solar-system" element={<SolarSystem />} />
          <Route path="/explore/universe" element={<Universe />} />
          <Route path="/explore/technology" element={<Technology />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/visualization/solar-system" element={<SolarSystemVisualization />} />
          <Route path="/visualization/gravity" element={<GravitySimulator />} />
          <Route path="/visualization/kepler" element={<KeplerVisualization />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;