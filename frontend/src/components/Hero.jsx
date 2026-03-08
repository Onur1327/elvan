import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-container" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero_bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 1 }}>
        <div className="hero-content animate-fade-up glass-dark" style={{
          padding: '3rem',
          maxWidth: '600px',
          borderRadius: 'var(--radius-lg)'
        }}>
          <h1 style={{ color: 'var(--white)', fontSize: '3.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
            Evinize Değer Katan <span style={{ color: 'var(--primary)' }}>Detaylar</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Kaliteyi ve şıklığı bir araya getiren züccaciye, porselen ve ev tasarım ürünleriyle 
            yaşam alanlarınıza ilham verin. Yılların tecrübesiyle mağazamızda sizleri bekliyoruz.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#kategoriler" className="btn btn-primary">
              Koleksiyonları Keşfet
            </a>
            <a href="#iletisim" className="btn btn-outline" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              Mağazamızı Ziyaret Et <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
