import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Zap, Shield, ChevronRight } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <motion.h1
                    className="text-gradient"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Master Artificial Intelligence
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A premium, zero-to-hero curriculum designed for the curious mind.
                    Dive deep into Neural Networks, Transformers, and Autonomous Agents through
                    strict quizzes and crystal-clear analogies.
                </motion.p>
                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link to="/roadmap" className="btn btn-primary">
                        Start Learning <ChevronRight size={18} />
                    </Link>
                    <Link to="/transformers" className="btn btn-outline">
                        Skip to GenAI
                    </Link>
                </motion.div>
            </section>

            <div className="cards-grid">
                <motion.div className="card glass-panel" whileHover={{ y: -10 }}>
                    <Brain className="card-icon" />
                    <h3>Deep Explanations</h3>
                    <p>We don't do 1-line definitions. Prepare to understand the intense mathematical and logical reasoning behind why AI systems make decisions.</p>
                </motion.div>

                <motion.div className="card glass-panel" whileHover={{ y: -10 }}>
                    <Sparkles className="card-icon" />
                    <h3>Strict Validation</h3>
                    <p>Every module ends with a strict knowledge check. One mistake means restarting the quiz until perfection is achieved.</p>
                </motion.div>

                <motion.div className="card glass-panel" whileHover={{ y: -10 }}>
                    <Zap className="card-icon" />
                    <h3>Premium UI/UX</h3>
                    <p>Enjoy learning in a distraction-free, highly stylized environment with dynamic themes matching your mood.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
