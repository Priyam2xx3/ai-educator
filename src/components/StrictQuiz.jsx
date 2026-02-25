import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import '../styles/quiz.css';

const StrictQuiz = ({ topic, questions }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [quizState, setQuizState] = useState('idle'); // idle, playing, failed, passed
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const startQuiz = () => {
        setCurrentIdx(0);
        setQuizState('playing');
        setSelectedAnswer(null);
    };

    const handleAnswer = (optionIdx) => {
        if (quizState !== 'playing') return;

        setSelectedAnswer(optionIdx);
        const isCorrect = optionIdx === questions[currentIdx].correct;

        if (isCorrect) {
            setTimeout(() => {
                if (currentIdx === questions.length - 1) {
                    setQuizState('passed');
                } else {
                    setCurrentIdx(prev => prev + 1);
                    setSelectedAnswer(null);
                }
            }, 1000);
        } else {
            setTimeout(() => {
                setQuizState('failed');
            }, 1000);
        }
    };

    return (
        <div className="quiz-container glass-panel">
            <div className="quiz-header">
                <h3><Award className="inline-icon" /> Knowledge Check: {topic}</h3>
                {quizState === 'playing' && (
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(currentIdx / questions.length) * 100}%` }}
                        ></div>
                    </div>
                )}
            </div>

            <AnimatePresence mode="wait">
                {quizState === 'idle' && (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="quiz-screen center-content"
                    >
                        <p>Ready to test your knowledge on {topic}? <br />
                            <span className="warning">Warning: 1 mistake and you start over!</span>
                        </p>
                        <button className="btn btn-primary" onClick={startQuiz}>Start Quiz</button>
                    </motion.div>
                )}

                {quizState === 'playing' && (
                    <motion.div
                        key={`q-${currentIdx}`}
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                        className="quiz-screen"
                    >
                        <h4 className="question-text">Q{currentIdx + 1}: {questions[currentIdx].q}</h4>
                        <div className="options-grid">
                            {questions[currentIdx].options.map((opt, i) => {
                                let btnClass = "option-btn";
                                if (selectedAnswer !== null) {
                                    if (i === questions[currentIdx].correct) btnClass += " correct";
                                    else if (i === selectedAnswer) btnClass += " incorrect";
                                    else btnClass += " disabled";
                                }

                                return (
                                    <button
                                        key={i}
                                        className={btnClass}
                                        onClick={() => handleAnswer(i)}
                                        disabled={selectedAnswer !== null}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {quizState === 'failed' && (
                    <motion.div
                        key="failed"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="quiz-screen center-content failed-state"
                    >
                        <XCircle size={64} className="danger-icon bounce" />
                        <h3>Incorrect!</h3>
                        <p className="text-muted">An AI Engineer must be precise. The system has reset.</p>
                        <button className="btn btn-outline" onClick={startQuiz}>
                            <RotateCcw size={16} style={{ marginRight: '8px' }} /> Try Again
                        </button>
                    </motion.div>
                )}

                {quizState === 'passed' && (
                    <motion.div
                        key="passed"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="quiz-screen center-content success-state"
                    >
                        <CheckCircle size={64} className="success-icon pulse" />
                        <h3>Module Mastered!</h3>
                        <p className="text-muted">Flawless execution. You truly understand {topic}.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StrictQuiz;
