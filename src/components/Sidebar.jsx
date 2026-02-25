import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Home, Map, BrainCircuit, Cpu, Zap,
    MessageSquare, Database, Bot, BarChart, Link
} from 'lucide-react';
import '../styles/sidebar.css';

const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/roadmap', label: 'Roadmap', icon: Map },
    { path: '/ml', label: 'Machine Learning', icon: BrainCircuit },
    { path: '/dl', label: 'Deep Learning', icon: Cpu },
    { path: '/transformers', label: 'Transformers', icon: Zap },
    { path: '/llm', label: 'LLMs', icon: MessageSquare },
    { path: '/rag', label: 'RAG', icon: Database },
    { path: '/agents', label: 'AI Agents', icon: Bot },
    { path: '/algorithms', label: 'Algorithms', icon: BarChart },
    { path: '/references', label: 'References', icon: Link },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
            <motion.aside
                className={`sidebar glass-panel-sidebar ${isOpen ? 'active' : ''}`}
                initial={false}
            >
                <div className="nav-links">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeSidebar}
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        >
                            <item.icon size={20} className="sidebar-icon" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
