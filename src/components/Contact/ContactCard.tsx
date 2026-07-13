import { motion } from 'motion/react';
import './ContactCard.css';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  onCopy?: () => void;
  index?: number;
}

export default function ContactCard({
  icon,
  title,
  description,
  buttonLabel,
  href,
  onCopy,
  index = 0,
}: ContactCardProps) {
  const handleClick = () => {
    if (onCopy) {
      onCopy();
    } else if (href) {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.15,
        ease: 'easeOut',
      }}
    >
      <div className="contact-card-icon">{icon}</div>
      <h3 className="contact-card-title">{title}</h3>
      <p className="contact-card-desc">{description}</p>
      <button
        className="contact-card-btn"
        onClick={handleClick}
      >
        {buttonLabel}
      </button>
    </motion.div>
  );
}
