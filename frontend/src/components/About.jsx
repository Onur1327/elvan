import React from 'react';

const About = () => {
  return (
    <section id="hakkimizda" style={{ padding: '6rem 0', backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Image Side */}
          <div className="about-image" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="/images/hero_bg.jpeg" 
              alt="Mağazamız" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="glass" style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Kurumsal ve Güvenilir</h3>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Yılların deneyimi ile hizmetinizdeyiz.</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-content">
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>Hakkımızda</h4>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Zarafetin ve Kalitenin Buluşma Noktası</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Mağazamız, züccaciye, porselen, kozmetik ve daha birçok kategoride en seçkin ürünleri sizlere sunmayı ilke edinmiştir. Geniş ürün yelpazemizle evinizin her ihtiyacına cevap veriyoruz.
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Kaliteden ödün vermeyen anlayışımız ve müşteri memnuniyeti odaklı hizmetimiz ile sektörde öncü olmaktan gurur duyuyoruz. Sizi mağazamızda ağırlamaktan mutluluk duyarız.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>1000+</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: '500' }}>Seçkin Ürün</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>%100</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: '500' }}>Orijinal Kalite</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
