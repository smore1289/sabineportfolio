'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'React', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'Node.js', 'UI/UX Design',
    'Responsive Design', 'Web Animation'
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a passionate designer with a keen eye for detail and a love for creating
                seamless user experiences. With expertise in modern web technologies, AI tools and automation workflows, I bring ideas to life
                through clean, modern interfaces, interactivity and stunning design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My approach combines technical excellence with creative problem-solving, ensuring that every
                project not only looks beautiful but also performs flawlessly across all devices.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm
                             border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}