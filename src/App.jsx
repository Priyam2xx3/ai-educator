import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import ML from './pages/ML';
import DL from './pages/DL';
import Transformers from './pages/Transformers';
import LLMs from './pages/LLMs';
import RAG from './pages/RAG';
import Agents from './pages/Agents';
import Algorithms from './pages/Algorithms';
import References from './pages/References';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/ml" element={<ML />} />
          <Route path="/dl" element={<DL />} />
          <Route path="/transformers" element={<Transformers />} />
          <Route path="/llm" element={<LLMs />} />
          <Route path="/rag" element={<RAG />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
