import React from 'react';
import { motion } from 'framer-motion';
import StrictQuiz from '../components/StrictQuiz';

const Algorithms = () => {
    const quizQuestions = [
        {
            q: "Which search algorithm is optimal for finding the shortest path on an unweighted grid?",
            options: [
                "Depth-First Search (DFS)",
                "Breadth-First Search (BFS)",
                "A* Search",
                "Binary Search"
            ],
            correct: 1
        },
        {
            q: "What is the primary motivation for using A* Search over Dijkstra's Algorithm?",
            options: [
                "A* is easier to code in Python.",
                "Dijkstra's only works on unweighted graphs.",
                "A* uses a Heuristic (an educated guess) to aggressively bias the search towards the target, drastically reducing the number of nodes visited.",
                "A* uses less memory because it deletes visited nodes."
            ],
            correct: 2
        },
        {
            q: "What makes the Minimax algorithm conceptually powerful for classic board games like Chess?",
            options: [
                "It uses a neural network to evaluate board states.",
                "It simulates thousands of random games (Monte Carlo) to find the best move.",
                "It assumes the opponent plays perfectly to maximize their score, while making moves that minimize the opponent's maximum possible score.",
                "It guarantees a win every time."
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
                AI Search Algorithms
            </motion.h1>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2>The Fundamentals of Automated Problem Solving</h2>
                <p>
                    Before Neural Networks monopolized the term "AI", the field was dominated by Search Algorithms. If you need a robot to navigate a warehouse, or a computer to beat you at Chess, you don't always need a massive math equation; sometimes you just need to systematically explore every possible option.
                </p>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Circuit board pathways resembling search graphs"
                        style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', boxShadow: 'var(--glow-secondary)', border: '2px solid var(--secondary)' }}
                    />
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Visual representation of traversing complex pathways.</p>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    <strong>Graph Theory:</strong> Problems are represented as "Nodes" (a state, like a city, or a chess board layout) and "Edges" (actions you can take to move to another state). Algorithms are strategies to traverse these graphs to find the winning node.
                </p>
            </motion.section>

            <motion.section
                className="glass-panel"
                style={{ padding: '2rem', margin: '2rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2>A*: The Smart Path Finder</h2>
                <p>
                    Standard Breadth-First Search (BFS) explores equally in all directions, like a ripple in a pond. If the goal is 100 miles East, BFS will foolishly explore 99 miles West just to be safe. It finds the shortest path, but wastes immense processing power.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Dijkstra's Algorithm</strong> improves this by accounting for the "cost" of moving (e.g., driving slowly through traffic vs fast on a highway). But Dijkstra is still "blind" to the final destination. It explores universally.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>A* Star Search</strong> is the breakthrough. It combines the guaranteed shortest path of Dijkstra with a <strong>Heuristic</strong> (a smart guess, like checking if you are physically getting closer to the GPS coordinates of the goal). By biasedly exploring nodes that "look" like they are moving in the right direction, A* dramatically cuts down computation time while still guaranteeing the perfect route. It powers video game AI and GPS systems globally.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <StrictQuiz topic="Search Algorithms" questions={quizQuestions} />
            </motion.div>
        </div>
    );
};

export default Algorithms;
