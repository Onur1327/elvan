import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '25px 0',
      transition: 'var(--transition)',
      backgroundColor: scrolled || mobileMenuOpen ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#" onClick={closeMenu} style={{
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '1px'
        }}>
          <span style={{
            color: 'var(--primary)',
            fontSize: '3rem',
            fontWeight: '900',
            lineHeight: '1'
          }}>ON</span>
          <span style={{
            color: scrolled || mobileMenuOpen ? 'var(--secondary)' : 'var(--white)',
            fontSize: '3rem',
            fontWeight: '900',
            lineHeight: '1',
            marginLeft: '2px',
            transition: 'color 0.3s ease'
          }}>9</span>
          <span style={{
            backgroundColor: 'var(--primary)',
            color: '#000',
            fontSize: '1.2rem',
            padding: '4px 8px',
            borderRadius: '4px',
            marginLeft: '8px',
            textTransform: 'uppercase',
            fontWeight: '800',
            lineHeight: '1',

          }}>AVM</span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1rem', opacity: 0.9 }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Anasayfa</a>
          <a href="#hakkimizda" style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1rem', opacity: 0.9 }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Hakkımızda</a>
          <a href="#kategoriler" style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1rem', opacity: 0.9 }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Kategoriler</a>
          <a href="#iletisim" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>İletişim</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', color: 'var(--white)', display: 'none', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown animate-fade-up" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(26, 26, 26, 0.98)',
          padding: '1rem 20px 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
        }}>
          <a href="#" onClick={closeMenu} style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Anasayfa</a>
          <a href="#hakkimizda" onClick={closeMenu} style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Hakkımızda</a>
          <a href="#kategoriler" onClick={closeMenu} style={{ color: 'var(--white)', fontWeight: '500', fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Kategoriler</a>
          <a href="#iletisim" onClick={closeMenu} className="btn btn-primary" style={{ textAlign: 'center', marginTop: '10px' }}>İletişim</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
