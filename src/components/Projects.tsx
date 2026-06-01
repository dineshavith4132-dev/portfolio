import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, glassmorphism design, and sections for showcasing projects, skills, and contact information.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    demo: '#',
    category: 'Web Development',
  },
  {
    title: 'Calculator Application',
    description:
      'A fully functional calculator application with a clean and intuitive user interface. Supports basic arithmetic operations, keyboard input, and maintains calculation history for reference.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com',
    demo: '#',
    category: 'Web App',
  },
  {
    title: 'Student Management System',
    description:
      'A comprehensive CRUD-based system for managing student data. Features include adding, updating, and deleting student records with a relational database backend and dynamic search functionality.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'DBMS', 'MySQL'],
    github: 'https://github.com',
    demo: '#',
    category: 'Backend',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">What I've Built</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            A selection of projects that demonstrate my skills and passion for building useful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass border border-border-default rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 glass text-xs font-medium text-accent-primary border border-accent-primary/20 rounded-full">
                    <Layers size={11} />
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/15 text-accent-primary text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 glass border border-border-default hover:border-accent-primary/30 text-text-secondary hover:text-accent-primary text-sm font-medium rounded-xl transition-all duration-300"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent-primary/10 border border-accent-primary/20 hover:bg-accent-primary hover:text-bg-primary text-accent-primary text-sm font-medium rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline text-sm"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
