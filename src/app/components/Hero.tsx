'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Sabine Morrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Web Designer & Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Creating beautiful, responsive, and user-friendly websites that make an impact
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}