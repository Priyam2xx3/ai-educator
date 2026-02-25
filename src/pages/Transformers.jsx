import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const Transformers = () => {
    const quizQuestions = [
        {
            q: "What was the critical flaw in RNNs that led to the invention of Transformers?",
            options: [
                "RNNs could not process numbers, only text.",
                "RNNs required too much VRAM.",
                "RNNs process text sequentially (word-by-word), preventing parallel computation and limiting their memory of long sentences.",
                "RNNs relied too heavily on Convolutional filters."
            ],
            correct: 2
        },
        {
            q: "Since Transformers process the entire sentence at once, how do they know the order of the words?",
            options: [
                "They use an LSTM loop.",
                "They inject Positional Embeddings (sine/cosine waves) directly into the word vectors.",
                "Order does not matter in modern Natural Language Processing.",
                "They sort the words alphabetically before processing."
            ],
            correct: 1
        },
        {
            q: "What is the primary mathematical operation driving the 'Self-Attention' mechanism?",
            options: [
                "Euclidean Distance",
                "The Scaled Dot-Product",
                "Logistic Regression",
                "Backpropagation"
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
                The Transformer Architecture
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>"Attention Is All You Need" (2017)</h2>
                <p>
                    Before Transformers, reading text was handled by Recurrent Neural Networks (RNNs). They were incredibly slow because they had to read sequentially: "I"... then "went"... then "to"... then "the"... If the sentence was 1,000 words long, by the time it reached the end, it had forgotten the beginning.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Complex matrix calculations"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)', border: '2px solid var(--secondary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Visual metaphor of Self-Attention linking every word to every other word simultaneously.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    In 2017, Google researchers fundamentally shattered this limitation. They threw away the sequential loop entirely and replaced it with a massively parallel mathematical operation called <strong>Self-Attention</strong>. A Transformer looks at every single word in the 1,000-word sentence <em>at the exact same time</em>. It calculates an "Attention Score" (a dot product matrix) between every word and every other word, determining which words are contextually related regardless of how far apart they are.
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>The Q, K, V Metaphor</h2>
                <p>
                    Self-Attention calculates its connections using three vectors for each word: <strong>Query (Q)</strong>, <strong>Key (K)</strong>, and <strong>Value (V)</strong>. To truly understand this, imagine you are at a crowded cocktail party looking for the bartender:
                </p>
                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Query (Q):</strong> What you are looking for. (<em>"I am thirsty, who has drinks?"</em>)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Key (K):</strong> What other objects are broadcasting about themselves. (The bartender says, <em>"I have drinks!"</em>)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Value (V):</strong> The actual information contained. (The martini itself).</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                    The Transformer mathematically multiplies the Query of the word "bank" with the Keys of all other words. If it sees the word "river" nearby, the "water" Key perfectly aligns with the "geography" Query, resulting in a high Attention Score. If it sees "money", a different Key aligns. This completely solves contextual ambiguity in language.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Transformers" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default Transformers;
