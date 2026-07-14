import Aurora from './Aurora';
import Lanyard from './Lanyard/Lanyard';
import Carousel, { type CarouselItem } from './Carousel';
import LogoLoop from './LogoLoop';
import TextType from './TextType';
import { SiReact, SiPython, SiNodedotjs, SiMysql } from 'react-icons/si';
import { FiServer, FiGrid, FiShield, FiGlobe } from 'react-icons/fi';
import face from './Lanyard/face.jpg';
import './About.css';

const techLogos = [
  { node: <SiReact color="#a855f7" />, title: 'React' },
  { node: <SiPython color="#a855f7" />, title: 'Python' },
  { node: <SiNodedotjs color="#a855f7" />, title: 'Node.js' },
  { node: <SiMysql color="#a855f7" />, title: 'MySQL' }
];

const networkingItems: CarouselItem[] = [
  {
    title: 'Routing & Switching',
    description: 'Network traffic management with Cisco and VLANs.',
    id: 1,
    icon: <FiServer className="carousel-icon" />
  },
  {
    title: 'Subnetting',
    description: 'IP addressing and efficient network segmentation.',
    id: 2,
    icon: <FiGrid className="carousel-icon" />
  },
  {
    title: 'Firewalls',
    description: 'ACLs, NAT, and network security policies.',
    id: 3,
    icon: <FiShield className="carousel-icon" />
  },
  {
    title: 'DNS & DHCP',
    description: 'Name resolution and dynamic IP allocation.',
    id: 4,
    icon: <FiGlobe className="carousel-icon" />
  }
];

export default function About() {
  return (
    <section className="about">
      <div className="about-bg">
        <Aurora
          colorStops={['#7cff67', '#B497CF', '#5227FF']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="about-overlay">
        <div className="about-left">
          <div className="about-content">
            <TextType
              text={["HI, I'M SCOTT"]}
              as="h2"
              typingSpeed={100}
              initialDelay={500}
              showCursor={true}
              loop={true}
              className="about-title"
            />

            <div className="about-bio">
              <p>
                I'm a passionate web developer and IT specialist who thrives on
                creating seamless digital experiences. With a love for both
                technology and adventure, I bring a unique perspective to every
                project.
              </p>
              <p>
                From building responsive web applications to solving complex
                technical challenges, I'm always exploring new ways to push
                boundaries and deliver exceptional results.
              </p>
            </div>

            <div className="about-skills">
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={20}
                gap={40}
                fadeOut
                fadeOutColor="#0a0a0a"
              />
              <div className="about-carousels">
                <div className="about-carousel-col">
                  <Carousel
                    baseWidth={290}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
                <div className="about-carousel-col">
                  <Carousel
                    items={networkingItems}
                    baseWidth={290}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <Lanyard
            position={[0, 1, 38]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent={true}
            frontImage={face}
            imageFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
