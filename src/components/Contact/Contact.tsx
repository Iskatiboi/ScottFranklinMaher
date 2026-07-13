import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { FiMail, FiGithub } from 'react-icons/fi';
import AvailabilityCard from './AvailabilityCard';
import ContactCard from './ContactCard';
import CTABanner from './CTABanner';
import Toast from './Toast';
import './Contact.css';

const EMAIL = 'scottfranklinmaher@gmail.com';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    setShowToast(true);
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="contact-heading">Let's Work Together</h2>
          <p className="contact-subtitle">
            Whether you're looking for a developer, have a project in mind, or
            simply want to connect, I'd love to hear from you. I'm always open
            to new opportunities, collaborations, and exciting challenges.
          </p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-left">
            <AvailabilityCard />
          </div>
          <div className="contact-right">
            <ContactCard
              icon={<FiMail size={18} />}
              title="Email"
              description="The best way to reach me for opportunities or project inquiries."
              buttonLabel="Send an Email"
              href={`mailto:${EMAIL}`}
              onCopy={handleCopyEmail}
              index={0}
            />
            <ContactCard
              icon={<FiGithub size={18} />}
              title="GitHub"
              description="Explore my projects, open-source contributions, and development journey."
              buttonLabel="View GitHub"
              href="https://github.com/Iskatiboi"
              index={1}
            />
          </div>
        </div>

        <CTABanner />
      </div>

      <Toast
        show={showToast}
        message="Email copied to clipboard!"
        onDismiss={() => setShowToast(false)}
      />
    </section>
  );
}
