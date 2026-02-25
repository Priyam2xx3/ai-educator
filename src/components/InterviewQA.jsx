import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/interview.css';

const InterviewQA = ({ questions }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="interview-qa-container">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>
                Comprehensive Interview Prep ({questions.length} Questions)
            </h3>
            <div className="qa-list">
                {questions.map((q, index) => (
                    <motion.div
                        key={index}
                        className="qa-item glass-panel"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 > 1 ? 0 : index * 0.05 }}
                    >
                        <button
                            className="qa-question-btn"
                            onClick={() => toggleQuestion(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className="qa-q-text"><strong>Q{index + 1}:</strong> {q.question}</span>
                            {openIndex === index ? <ChevronUp size={20} className="qa-icon" /> : <ChevronDown size={20} className="qa-icon" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="qa-answer-container"
                                >
                                    <div className="qa-answer-text">
                                        <strong style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>Answer:</strong>
                                        <span className="text-muted" dangerouslySetInnerHTML={{ __html: q.answer.replace(/\n/g, '<br/>') }} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InterviewQA;
