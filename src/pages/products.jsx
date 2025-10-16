import Nav from '../components/navbar';
import StaggeredMenu from '../components/StaggeredMenu';
import './products.css';
import armImg from '../assets/arm.png';

const menuItems = [
  { label: 'A-001', ariaLabel: 'Go to home page', link: '/about' },
  { label: 'Robot ABC', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Robot EGH', ariaLabel: 'View our services', link: '/about' },
  { label: 'Robot JKL', ariaLabel: 'Get in touch', link: '/about' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Products() {
  return (
    <div className="products-page">
      <div style={{ height: '120px' }}>
        <Nav />
      </div>
      <div className="staggered-wrapper-container">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          isFixed={true}
          hideLogo={true}
          hideHeaderToggle={true}
          colors={[ '#D1E3FF', '#2977f5' ]}
          logoUrl="/src/assets/logo.png"
          accentColor="#DE3163"
        />
      </div>

      <header className="products-hero">
        <div className="hero-left">
          <h1>Your teammates, your tools. Meet <span style={{ color: '#DE3163'}}>Theseus Cybernetics.</span></h1>
          <p>Our wide range of Cybernetics aim to help you enhance every aspect of living while retaining who you are.</p>
          <button
            className="cta-button sm-toggle"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('staggered-menu-open', { detail: { action: 'open' } }));
            }}
            aria-label="Open menu"
            type="button"
          >
            <span className="sm-toggle-textWrap" aria-hidden="true">
              <span className="sm-toggle-textInner">
                <span className="sm-toggle-line">Menu</span>
              </span>
            </span>
          </button>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <img src={armImg} alt="arm" />
          </div>
        </div>
      </header>
    </div>
  );
}
