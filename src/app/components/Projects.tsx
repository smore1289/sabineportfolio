'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Modern E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      image: '/window.svg',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work and professional experience.',
      image: '/globe.svg',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: '#'
    },
    {
      title: 'File Management System',
      description: 'A cloud-based file management system with drag-and-drop functionality and secure sharing.',
      image: '/file.svg',
      tags: ['TypeScript', 'Node.js', 'AWS'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block mt-4 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}