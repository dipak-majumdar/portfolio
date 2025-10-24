import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
import Home from './pages/Home';
import About from './pages/About';
// import Navbar from './components/Navbar';
import Header from './components/Header';

import en from './assets/locales/en.json';

// import { getLocale } from "./helpers/localeHandler";

function App() {
    // const locale = getLocale();

  return (
    <Router>
      <>
        <Header t={en} />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home home={en.pages.home} projects={en.projects} skills={en.skills} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
