import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.h1
              className="text-5xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, yoyo: Infinity }}
            >
              IEEE
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      {!isLoading && <Home />}
    </div>
  );
};

export default App;
