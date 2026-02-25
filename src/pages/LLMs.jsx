import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const LLMs = () => {
    const quizQuestions = [
        {
            q: "What defines an LLM as 'Large' compared to earlier NLP models?",
            options: [
                "It can read larger file sizes like PDFs.",
                "It contains tens or hundreds of billions of 'Parameters' (neural weights) trained on terabytes of internet text.",
                "It runs on massive CPU clusters instead of GPUs.",
                "It uses a larger Context Window."
            ],
            correct: 1
        },
        {
            q: "What is RLHF and why is it crucial for models like ChatGPT?",
            options: [
                "Reinforcement Learning from Human Feedback: It aligns the model's raw, chaotic text generation to be helpful, safe, and conversational.",
                "Recurrent Logarithmic Hashing Functions: It speeds up the text generation process.",
                "Rapid Learning for High Fidelity: It allows the model to learn new facts in real-time.",
                "It stands for the 4 primary components of a Transformer."
            ],
            correct: 0
        },
        {
            q: "How does LoRA (Low-Rank Adaptation) make fine-tuning a massive 70B parameter model possible on a single consumer graphics card?",
            options: [
                "By deleting 99% of the model's neurons before training.",
                "By converting the model entirely to INT4 precision.",
                "By freezing the base model and injecting tiny, temporary, mathematically compressed matrices into the layers, changing only 0.1% of weights.",
                "By training the model on the CPU instead of the GPU."
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
                Large Language Models (LLMs)
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>Scaling the Transformer to Billions</h2>
                <p>
                    A Large Language Model (LLM) is simply a massive Transformer (usually Decoder-only, like GPT-4) scaled up to an absurd degree. Early AI models had thousands of mathematical "Parameters" (weights connecting neurons). Modern LLMs have hundreds of billions.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="AI chatting interface visualization"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: 'var(--glow-accent)', border: '2px solid var(--accent)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>The conversational UI interface masking massive neural complexity.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    <strong>Pre-Training:</strong> These giants are fed petabytes of data—effectively the entire public internet. But they aren't explicitly taught grammar or physics. They are trained on a deceptively simple objective: <em>Predict the next word</em> (Autoregressive Next-Token Prediction).
                </p>
                <p style={{ marginTop: '1rem' }}>
                    If you give a model the sentence "The cat sat on the ___", it predicts "mat". However, by forcing a 100-billion parameter neural network to predict the next word across Wikipedia, Reddit, and GitHub, the network is mathematically forced to build a highly complex internal model of the world (including logic, coding syntax, and facts) just to accurately guess that next word.
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>From Raw Text to ChatGPT: SFT and RLHF</h2>
                <p>
                    A raw, pre-trained base model is incredibly intelligent but completely useless as an assistant. If you prompt it with "Write me a poem about a dog", it might predict the next words to be "Write me a poem about a cat" (just mimicking internet forum lists). It doesn't know it's supposed to <em>answer</em> the prompt.
                </p>
                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>Supervised Fine-Tuning (SFT):</strong> We take the smart base model and train it on tens of thousands of perfect human conversations. (Input: User asks question. Output: Assistant provides perfect answer). The model learns the <em>format</em> of being a helpful chatbot.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>RLHF (Reinforcement Learning from Human Feedback):</strong> We make the model generate 4 different answers to a single question. A human ranks them from best to worst. We use these rankings to train a "Reward Model", which then automatically grades and trains the LLM using Reinforcement Learning to prefer polite, accurate, and safe responses over toxic or hallucinated ones.
                    </li>
                </ul>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Large Language Models" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default LLMs;
