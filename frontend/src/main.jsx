import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { About } from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Navbar from './components/Navbar.jsx';

// Optional: Placeholder if you forgot to import Event
import Event from './pages/Event.jsx';

// Create a wrapper component where hooks like useLocation can be used
function AppWrapper() {
  const location = useLocation();

  // Example: hide Navbar on "/event" page
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);
