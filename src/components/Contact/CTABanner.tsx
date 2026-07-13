import { LiquidMetalButton } from '@/components/ui/liquid-metal';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-row">
        <h3 className="cta-heading">Have an idea or opportunity?</h3>
        <LiquidMetalButton
          onClick={() => window.location.href = 'mailto:scottfranklinmaher@gmail.com'}
          metalConfig={{
            colorBack: '#a855f7',
            colorTint: '#d8b4fe',
            speed: 0.5,
            distortion: 0.15,
          }}
        >
          Let's Connect
        </LiquidMetalButton>
      </div>
      <p className="cta-sub">Let's build something amazing together.</p>
    </div>
  );
}
