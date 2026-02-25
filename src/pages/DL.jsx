import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const DeepLearning = () => {
    const quizQuestions = [
        {
            q: "What does backpropagation fundamentally calculate?",
            options: [
                "The highest probability class in a dataset.",
                "The derivative (gradient) of the loss function with respect to every weight in the network.",
                "The optimal learning rate for the Adam optimizer.",
                "The distance between a new point and its K-nearest neighbors."
            ],
            correct: 1
        },
        {
            q: "Why are Convolutional Neural Networks (CNNs) superior to standard fully-connected networks for image processing?",
            options: [
                "They train faster because they don't require GPUs.",
                "They use Cross-Entropy mathematically differently.",
                "They inherently understand the spatial grid structure of an image (pixels next to each other matter) and use shared weights (filters).",
                "They do not suffer from the Vanishing Gradient Problem."
            ],
            correct: 2
        },
        {
            q: "What is the primary cause of the Vanishing Gradient Problem?",
            options: [
                "Repeatedly dividing by the square root of the dimensions in Attention.",
                "Using datasets that are too large for the GPU memory.",
                "Multiplying tiny derivative values repeatedly through many layers during backpropagation, causing the gradient to shrink to zero.",
                "Setting the Learning Rate too high."
            ],
            correct: 2
        }
    ];

    return (
        <div className="page-content">
            <motion.h1
                className="page-header text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Deep Learning Architecture
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>The Architecture of the "Brain"</h2>
                <p>
                    If Machine Learning is the foundation, Deep Learning is the skyscraper built on top. Deep Learning throws away the need for human "Feature Engineering" (manually telling a model that a cat consists of pointy ears and whiskers). Instead, it uses massive, multi-layered Artificial Neural Networks that learn to extract these features entirely on their own.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Glowing neural network nodes connected by lines"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: 'var(--glow-secondary)', border: '2px solid var(--secondary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>A visualization of hidden layers inside a Deep Neural Network.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    <strong>The Neural Math:</strong> At its core, a single "neuron" performs a simple calculation: <code>y = Activation(Weight * Input + Bias)</code>. It takes an input signal from a previous layer, multiplies it by a learned "weight" indicating importance, adds a tiny "bias", and finally passes it through an "Activation Function" (like ReLU or Sigmoid).
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Why the Activation Function? If we only multiply and add, the entire network, even highly complex ones, just collapses mathematically into one giant linear equation. A straight line cannot map the incredibly curved, complex reality of a human face or speech. The non-linear activation function allows the network to bend and warp its understanding to map perfectly to reality.
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>The Curse of Depth: Vanishing Gradients</h2>
                <p>
                    Through the 1990s and 2000s, researchers hit a wall. As they added more layers to make the network "deeper" and smarter, the network suddenly stopped learning entirely. Why? The math of Backpropagation.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    When the network makes an error at the end, it uses Calculus (the Chain Rule) to calculate the "gradient"—a tiny number telling each weight how to adjust. To reach the very first layer of the network, this tiny decimal number is multiplied by the tiny decimal numbers of the layers above it.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Multiply 0.1 * 0.1 * 0.1 * 0.1. Very quickly, the gradient shrinks exponentially until it hits absolute zero before reaching the early layers. The early layers are "starved" of gradient information and simply stop updating their weights. The network is essentially paralyzed, unable to learn basic features. This was solved in 2012 by the breakthrough activation function <strong>ReLU (Rectified Linear Unit)</strong>, which stops the gradient from shrinking during derivation.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Deep Learning" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default DeepLearning;
