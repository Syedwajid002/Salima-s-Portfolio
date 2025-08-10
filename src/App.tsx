import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CsIm from './pages/CsIm'
import SalimaKPIBudget from './pages/KpiBudget';
import TeamLeadershipToolsStandalone from './pages/TlHr';
import EthicsAssignment from './pages/ethics'
import SalimaCoachingToolkit from './pages/Coaching';
import SummaryPage from './pages/Summary';
import PortfolioTimeline from './pages/Timeline';
function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CsIm" element={<CsIm />} />
          <Route path="/KPI" element={<SalimaKPIBudget />} />
          <Route path='TeamLeader' element={<TeamLeadershipToolsStandalone />} />
          <Route path="/ethics" element={<EthicsAssignment />} />
          <Route path="/coaching" element={<SalimaCoachingToolkit />} />
          <Route path="/salimas-summary" element={<SummaryPage />} />
          <Route path="/timeline" element={<PortfolioTimeline />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;