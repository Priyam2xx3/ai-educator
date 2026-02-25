import React from 'react';
import { motion } from 'framer-motion';
import { Map, Brain, Cpu, Zap, Link } from 'lucide-react';
import '../styles/home.css';

const roadmapData = [
    { id: 1, title: 'Machine Learning', path: '/ml', icon: Brain, status: 'core' },
    { id: 2, title: 'Deep Learning', path: '/dl', icon: Cpu, status: 'core' },
    { id: 3, title: 'Transformers', path: '/transformers', icon: Zap, status: 'advanced' },
    { id: 4, title: 'LLMs', path: '/llm', icon: Brain, status: 'advanced' },
    { id: 5, title: 'RAG', path: '/rag', icon: Cpu, status: 'expert' },
    { id: 6, title: 'AI Agents', path: '/agents', icon: Zap, status: 'expert' },
];

const Roadmap = () => {
    return (
        <div className="page-content">
            <motion.h1
                className="page-header text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Map className="inline-icon" /> Engineer's Roadmap
            </motion.h1>

            <motion.p
                className="text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{ marginBottom: '2rem' }}
            >
                Follow this structured path to master Modern Artificial Intelligence. Proceed sequentially.
            </motion.p>

            <div className="roadmap-grid">
                {roadmapData.map((item, index) => (
                    <motion.a
                        key={item.id}
                        href={item.path}
                        className={`card glass-panel roadmap-card ${item.status}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={`status-badge ${item.status}`}>
                            {item.status.toUpperCase()}
                        </div>
                        <item.icon size={32} className="card-icon" style={{ marginBottom: '1rem' }} />
                        <h3>Phase {item.id}: {item.title}</h3>
                        <p className="text-muted" style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Enter Module <Link size={14} />
                        </p>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
