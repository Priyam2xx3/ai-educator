import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const MachineLearning = () => {
    const quizQuestions = [
        {
            q: "Which algorithm predicts a continuous numerical value instead of a category?",
            options: ["Logistic Regression", "K-Nearest Neighbors", "Linear Regression", "Naive Bayes"],
            correct: 2
        },
        {
            q: "What does the 'Bias-Variance Tradeoff' primarily refer to?",
            options: [
                "The balance between training speed and inference speed.",
                "The balance between underfitting (oversimplification) and overfitting (memorization).",
                "The amount of bias in the dataset vs the variance in hardware performance.",
                "Choosing between Supervised and Unsupervised learning."
            ],
            correct: 1
        },
        {
            q: "Why do we scale or normalize features (like Age and Income)?",
            options: [
                "To make the dataset take up less hard drive space.",
                "To prevent distance-based algorithms from treating larger numbers as mathematically more 'important'.",
                "To convert strings into numbers.",
                "Because it is required by the Python language."
            ],
            correct: 1
        }
    ];

    return (
        <div className="page-content">
            <motion.h1
                className="page-header text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Machine Learning Concepts
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>The Foundation of Modern AI</h2>
                <p>
                    Machine Learning (ML) is fundamentally a massive paradigm shift in how we approach computing. For decades, traditional programming relied on hardcoding explicit rules (e.g., <code>if email contains "viagra", then mark as spam</code>). This brittle approach collapses when faced with nuanced, complex data like images or human language.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Machine Learning flips the script. Instead of providing the rules and the data to get an answer, we provide the <strong>data</strong> and the <strong>answers</strong>, and the machine learning algorithm automatically deduces the underlying <strong>rules</strong>. Through iterative mathematical optimization (minimizing a "Loss Function"), models calculate billions of probabilities to find patterns invisible to the human eye.
                </p>

                {/* Integrating an external visual directly into the content as requested */}
                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Abstract circuitry representing machine learning algorithms"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: 'var(--glow-primary)', border: '2px solid var(--primary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Visual representation of data nodes and neural pathways.</p>
                </div>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>Algorithm Deep Dive: The Random Forest</h2>
                <p>
                    While Neural Networks get all the hype, <strong>Random Forest</strong> remains the king of tabular (spreadsheet) data in real-world enterprise environments. To understand why it's so powerful, we must first understand its flaw: The Decision Tree.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    A single Decision Tree is like playing "20 Questions". It splits data based on features (e.g., "Is Age &gt; 30?", "Is Income &gt; $50k?"). The problem? A single tree will eagerly memorize the hyper-specific quirks of your training data, creating a massive, tangled tree that performs flawlessly on training data but fails spectacularly on new data (classic Overfitting/High Variance).
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>The "Forest" Solution:</strong> A Random Forest refuses to rely on one tree. It creates 500 different, shallow trees. But here is the genius part: it intentionally cripples them. Each tree is only allowed to look at a random, small subset of the data, and a random subset of the features.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Because they are all looking at different fragments of the puzzle, they all make slightly different mistakes. But when you average their predictions together (an "Ensemble"), their individual mathematical errors cancel each other out, leaving behind a highly accurate, incredibly robust prediction that perfectly balances the Bias-Variance tradeoff.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Machine Learning" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default MachineLearning;
