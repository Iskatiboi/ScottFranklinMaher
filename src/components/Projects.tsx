import { motion } from 'motion/react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import LiquidEther from './LiquidEther/LiquidEther';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  shortDesc: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Pickle Turf',
    description:
      'A court reservation system for pickleball facilities. Players book courts with instant confirmation; owners manage inventory, set dynamic pricing, and track revenue through an admin dashboard without manual spreadsheets.',
    shortDesc: 'Court booking with admin dashboard, inventory, and revenue tracking.',
    highlights: [
      'Admin dashboard for revenue & inventory management',
      'Real-time court availability & instant booking',
      'JWT authentication with role-based access',
    ],
    tags: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Vercel'],
  },
  {
    title: '7 Evelyn',
    description:
      'A full-stack e-commerce platform where customers browse products, add to cart, and check out securely. Admins manage inventory, process orders, and track fulfillment through a dedicated dashboard.',
    shortDesc: 'Product catalog, secure checkout, and admin order management.',
    highlights: [
      'Shopping cart with secure checkout flow',
      'Admin dashboard for orders & inventory',
      'Customer order tracking & status updates',
    ],
    tags: ['Django', 'DRF', 'PostgreSQL', 'Stripe', 'Vercel'],
  },
  {
    title: 'PeerHelp',
    description:
      'A real-time campus assistance platform where students request and offer help using live geolocation, instant messaging via WebSockets, and a gamified points system that rewards participation.',
    shortDesc: 'On-campus help with live maps, real-time chat, and rewards.',
    highlights: [
      'Live geolocation tracking with interactive maps',
      'Real-time messaging via WebSockets',
      'Gamified points & leaderboard system',
    ],
    tags: ['Django', 'DRF', 'PostgreSQL', 'WebSockets', 'Maps API'],
  },
  {
    title: 'Client Portfolio',
    description:
      'A performance-optimized portfolio site built with Astro\'s islands architecture. Features responsive layouts, optimized image delivery, structured SEO metadata, and automated CI/CD through Vercel.',
    shortDesc: 'Responsive portfolio with SEO, optimized assets, and CI/CD.',
    highlights: [
      'Astro islands architecture for fast loads',
      'SEO metadata & image optimization',
      'Automated CI/CD via Vercel',
    ],
    tags: ['Astro', 'Vercel'],
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={15}
          cursorSize={80}
          resolution={0.35}
          iterationsPoisson={16}
          iterationsViscous={16}
          BFECC={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
      </div>

      <div className="projects-overlay">
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
              <p className="project-card-desc project-card-desc-long">{project.description}</p>
              <p className="project-card-desc project-card-desc-short">{project.shortDesc}</p>
              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h} className="project-highlight">{h}</li>
                ))}
              </ul>
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
