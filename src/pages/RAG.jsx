import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const RAG = () => {
    const quizQuestions = [
        {
            q: "What is the primary advantage of RAG over simply Fine-Tuning an LLM?",
            options: [
                "RAG is mathematically faster to calculate during generation.",
                "RAG allows the model to instantly access and cite newly added facts (e.g., today's news) without expensive and permanent neural retraining.",
                "Fine-tuning requires an internet connection, RAG does not.",
                "RAG allows the model to generate images."
            ],
            correct: 1
        },
        {
            q: "If an LLM has a massive 1 Million token Context Window, why do we still need Vector Databases?",
            options: [
                "Vector Databases provide the UI for the chat window.",
                "It is fundamentally cheaper and faster to filter a millions pages down to the top 3 most relevant pages, rather than paying an API to process all 1 million tokens every single time a user asks a question.",
                "Context Windows cannot read text, only code.",
                "Vector Databases prevent the 'Vanishing Gradient' effect during inference."
            ],
            correct: 1
        },
        {
            q: "What characterizes a severe failure caused by poor 'Chunking' in a RAG pipeline?",
            options: [
                "The Vector Database crashes from too many queries.",
                "The LLM responds in a different language.",
                "A critical sentence is cut perfectly in half during the data ingestion phase, severely limiting the LLM's understanding when that half-sentence is retrieved later.",
                "The Embedding model resets its weights to zero."
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
                Retrieval-Augmented Generation (RAG)
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>The Search Engine for the LLM</h2>
                <p>
                    LLMs are brilliant reasoners, but terrible historians. They suffer heavily from "Hallucinations"—confidently inventing facts when they don't know the answer. Furthermore, their knowledge is frozen in time at the exact moment their training finished. If training finished in 2023, the model knows nothing about 2024.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Data servers representing Vector Databases"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)', border: '2px solid var(--primary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Vector databases store conceptual knowledge for the LLM to retrieve.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    <strong>RAG</strong> solves this by acting as an open book test for the AI. Instead of asking the AI to memorize a corporate wiki (which is difficult via Fine-Tuning), we store the wiki in an external <strong>Vector Database</strong>.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    When a user asks "What is our company's refund policy?", we use a mathematical search algorithm to instantly scan millions of documents, find the exact paragraph discussing refunds, and secretly inject that paragraph into the LLM's prompt. We then tell the LLM: <em>"Using ONLY the following paragraph, answer the user's question."</em> This dramatically reduces hallucinations and ensures the answer is grounded in factual, instantly updatable truth.
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>Deep Dive: Embeddings and the Multi-Dimensional Grid</h2>
                <p>
                    To make a Vector Database work, the computer needs to understand the "meaning" of text. It does this via <strong>Embeddings</strong>. An Embedding model analyzes a sentence and outputs a massive list of numbers (a Vector) that pinpoints the exact physical location of that concept in a multi-dimensional mathematical universe (often 1,536 dimensions!).
                </p>
                <p style={{ marginTop: '1rem' }}>
                    In this mathematical space, the concept of "Dog" and "Puppy" are mapped incredibly close to each other. "Dog" and "Carburetor" are mapped millions of miles apart.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    When the user asks a question, we convert their question into a Vector (its coordinates on the map). The database then simply looks at its map and returns all the documents physically sitting closest to the question's coordinates. This is called calculating the <strong>Cosine Similarity</strong>.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Retrieval-Augmented Generation" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default RAG;
