import { motion } from 'motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import LiquidEther from './LiquidEther/LiquidEther';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Pickle Turf',
    description:
      'Pickleball court booking & reservation system with inventory management and automated revenue tracking.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: '7 Evelyn',
    description:
      'E-commerce platform for selling products and goods.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'PeerHelp',
    description:
      'Campus help webapp with geotracker, real-time chat, and points-based system for connecting students.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Client Portfolio',
    description:
      'Personal portfolio website for a freelance client.',
    tags: ['Astro'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      <div className="projects-overlay">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          PROJECTS
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.15,
                ease: 'easeOut',
              }}
            >
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
