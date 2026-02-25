import React from 'react';
import { motion } from 'framer-motion';

const References = () => {
    return (
        <div className="page-content">
            <motion.h1
                className="page-header text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Curated References & Resources
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>The AI Engineer's Toolkit</h2>
                <p>You cannot master Artificial Intelligence solely through reading. The field moves too fast. Below is a curated list of the authoritative texts, frameworks, and communities you must engage with to stay relevant.</p>

                <div className="cards-grid" style={{ marginTop: '2rem' }}>
                    <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Hugging Face</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>The GitHub of Machine Learning. Access hundreds of thousands of open-source models (including Llama 3) and datasets.</p>
                    </a>

                    <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>PyTorch</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>The undisputed industry standard framework for Deep Learning research and production.</p>
                    </a>

                    <a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>arXiv (cs.AI)</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Where the frontier happens. Every major AI breakthrough is published here first as a pre-print paper.</p>
                    </a>

                    <a href="https://www.deeplearning.ai/" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>DeepLearning.AI</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Andrew Ng's phenomenal courses, from the foundational ML Specialization to advanced GenAI topics.</p>
                    </a>

                    <a href="https://python.langchain.com/docs/get_started/introduction" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>LangChain</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>The leading framework for building LLM-powered applications, RAG pipelines, and autonomous Agents.</p>
                    </a>

                    <a href="https://karpathy.ai/" target="_blank" rel="noopener noreferrer" className="card glass-panel" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Andrej Karpathy's "Zero to Hero"</h3>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>The absolute best video series for understanding neural networks and transformers from scratch in code.</p>
                    </a>
                </div>
            </motion.section>

            <motion.div
                className="glass-panel"
                style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--primary)', boxShadow: 'var(--glow-primary)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h3 style={{ marginBottom: '1rem' }}>Final Test</h3>
                <p>Ready to prove your understanding across the entire curriculum?</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert("The Final Exam is currently locked. Master all modules first.")}>
                    Begin Final Exam (Locked)
                </button>
            </motion.div>

        </div>
    );
};

export default References;
