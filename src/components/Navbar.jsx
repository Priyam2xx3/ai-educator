import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, MonitorPlay, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Neon Dark' },
    { id: 'synthwave', icon: MonitorPlay, label: 'Synthwave' },
    { id: 'ocean', icon: Sparkles, label: 'Deep Ocean' }
];

const Navbar = ({ toggleSidebar }) => {
    const [theme, setTheme] = useState('dark');
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('ai-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('ai-theme', newTheme);
        setIsThemeMenuOpen(false);
    };

    const CurrentThemeIcon = themes.find(t => t.id === theme)?.icon || Moon;

    return (
        <nav className="navbar glass-panel-nav">
            <Link to="/" className="logo">
                <motion.span
                    animate={{ textShadow: ["0 0 5px var(--primary)", "0 0 20px var(--primary)", "0 0 5px var(--primary)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ✦
                </motion.span>
                AI<span>Educator</span>
            </Link>

            <div className="nav-actions">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/roadmap" className="nav-link">Roadmap</Link>

                <div className="theme-selector-container">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                        className="icon-btn"
                        title="Change Theme"
                    >
                        <CurrentThemeIcon size={20} />
                    </motion.button>

                    <AnimatePresence>
                        {isThemeMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="theme-dropdown glass-panel"
                            >
                                {themes.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => handleThemeChange(t.id)}
                                        className={`theme-option ${theme === t.id ? 'active' : ''}`}
                                    >
                                        <t.icon size={16} /> {t.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button onClick={toggleSidebar} className="mobile-menu-btn icon-btn">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
