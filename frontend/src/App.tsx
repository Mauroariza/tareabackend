import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DeviceDetailPage from './pages/DeviceDetailPage';
import AdminPanel from './pages/AdminPanel';
import NavBar from './components/Navbar';
import SignInPage from './pages/Signin';
import SignUpPage from './pages/Signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/device/:id" element={<DeviceDetailPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;