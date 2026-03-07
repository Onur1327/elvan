import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '25px 0',
      transition: 'var(--transition)',
      backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#" style={{
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
            color: scrolled ? 'var(--secondary)' : 'var(--white)',
            fontSize: '3rem',
            fontWeight: '900',
            lineHeight: '1',
            marginLeft: '2px'
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

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{
            color: 'var(--white)',
            fontWeight: '500',
            fontSize: '1rem',
            opacity: 0.9
          }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Anasayfa</a>

          <a href="#hakkimizda" style={{
            color: 'var(--white)',
            fontWeight: '500',
            fontSize: '1rem',
            opacity: 0.9
          }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Hakkımızda</a>

          <a href="#kategoriler" style={{
            color: 'var(--white)',
            fontWeight: '500',
            fontSize: '1rem',
            opacity: 0.9
          }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--white)'}>Koleksiyonlar</a>

          <a href="#iletisim" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            İletişim
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
