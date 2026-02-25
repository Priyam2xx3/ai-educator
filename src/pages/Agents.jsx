import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const Agents = () => {
    const quizQuestions = [
        {
            q: "What defines an AI 'Agent' as opposed to a standard conversational LLM?",
            options: [
                "An Agent has a larger context window.",
                "An Agent has the programmatic ability to use external Tools (like a calculator, web browser, or API) and execute actions based on its own reasoning.",
                "An Agent is trained exclusively on reinforcement learning.",
                "An Agent runs locally rather than in the cloud."
            ],
            correct: 1
        },
        {
            q: "What is 'ReAct' Prompting in the context of Agents?",
            options: [
                "Reactionary Activation, a method to speed up generation.",
                "A JavaScript framework for building LLM UIs.",
                "Reasoning + Acting. The model is forced to write out its 'Thought' process before calling an 'Action', drastically improving its reliability in multi-step tasks.",
                "Restricted Actions, a safety protocol to stop the Agent."
            ],
            correct: 2
        },
        {
            q: "If an Agent gets stuck in a loop calling a 'Search' tool repeatedly without finding the answer, what architectural component is likely failing?",
            options: [
                "The Memory/Observation digestion. It isn't 'remembering' that the previous search failed, or it isn't extracting the right lesson from the error message.",
                "The Temperature is too low.",
                "The Vector Database is out of storage.",
                "The API key has expired."
            ],
            correct: 0
        }
    ];

    return (
        <div className="page-content">
            <motion.h1
                className="page-header text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Autonomous AI Agents
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>Giving the Brain Hands and Eyes</h2>
                <p>
                    A Large Language Model (like GPT-4) is a "Brain in a Jar." It is brilliant at reasoning, but it cannot <em>do</em> anything. It cannot book a flight, send an email, or scrape a website. It just generates text.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Futuristic robot operating machinery"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: 'var(--glow-primary)', border: '2px solid var(--primary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>An AI Agent translating reasoning into tangible environmental actions.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    An <strong>AI Agent</strong> solves this by taking the LLM "Brain" and attaching it to a framework of <strong>Tools</strong>. We tell the LLM: <em>"You have access to a calculator, a web browser, and an email API. Look at the user's goal, write a plan, determine which tool you need, output the exact JSON command to use that tool, read the result, and repeat until the goal is achieved."</em>
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>The Architecture of Autonomy: ReAct</h2>
                <p>
                    The industry standard for building Agents is the <strong>ReAct</strong> pattern (Reasoning and Acting). Without ReAct, an LLM might carelessly guess the answer or use a tool blindly. ReAct forces the LLM into a strict loop:
                </p>
                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'decimal' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>Thought:</strong> The LLM must explicitly write down its reasoning. <em>"The user wants the square root of Apple's stock price. I don't know the price. I need to search the web first."</em>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>Action:</strong> The LLM outputs a structured command to the Python script running it: <code>[USE_TOOL: WebSearch, QUERY: "AAPL stock price today"]</code>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>Observation:</strong> The Python script executes the real Google search and feeds the text result back into the LLM's prompt. <em>"Result: $185.20"</em>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <strong>Thought:</strong> The LLM updates its plan. <em>"I now have the price: 185.20. I need to calculate the square root. I will use the calculator tool."</em>
                    </li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                    This loop continues autonomously—sometimes running for hundreds of steps—until the LLM arrives at the final answer. Frameworks like LangChain, LlamaIndex, and AutoGen manage this complex orchestration.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Autonomous Agents" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default Agents;
