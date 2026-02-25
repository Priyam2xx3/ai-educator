import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="app-container">
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="main-layout">
                <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

                <AnimatePresence mode="wait">
                    <motion.main
                        className="content-area"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
            </div>

            <footer className="footer glass-panel">
                <p>Built for the Curriculum of the Future.</p>
            </footer>
        </div>
    );
};

export default Layout;
