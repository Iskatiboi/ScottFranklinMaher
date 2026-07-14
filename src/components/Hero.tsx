import { useNavigate } from 'react-router-dom';
import { LiquidMetalButton } from '@/components/ui/liquid-metal';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-name">SCOTT<br />MAHER</h1>
          <p className="hero-roles">Web Developer · IT Specialist · Adventurer</p>
        </div>

        <div className="hero-right">
          <div className="hero-phrases">
            <p>Passionate about creating seamless digital experiences</p>
            <p>Turning complex problems into simple solutions</p>
            <p>Always exploring, always learning. Let's build something great together</p>
          </div>
          <LiquidMetalButton onClick={() => navigate('/projects')}>
            View My Work →
          </LiquidMetalButton>
        </div>
      </div>
    </section>
  );
}
