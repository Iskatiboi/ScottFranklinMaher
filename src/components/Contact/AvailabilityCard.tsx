import { FiMapPin, FiClock } from 'react-icons/fi';
import './AvailabilityCard.css';

export default function AvailabilityCard() {
  return (
    <div className="availability-card">
      <div className="availability-status">
        <span className="availability-dot" />
        <span className="availability-label">Available for Opportunities</span>
      </div>
      <p className="availability-text">
        Open to software engineering roles, internships, freelance web development projects, and collaborations.
      </p>
      <div className="availability-meta">
        <span className="availability-meta-item">
          <FiMapPin size={14} /> Philippines
        </span>
        <span className="availability-meta-item">
          <FiClock size={14} /> Usually replies within 24 hours
        </span>
      </div>
    </div>
  );
}
