import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  // İletişim bilgileri artık doğrudan burada (React içinde) bulunuyor.
  // Bu bilgileri değiştirmek isterseniz direkt olarak bu dosyayı güncelleyebilirsiniz.
  const storeInfo = {
    name: "ON9 AVM",
    address: "Bahçelievler Mahallesi Mehmet Akif Ersoy Caddesi No:120/A",
    phone: "0545 732 10 56",
    email: "bilgi@on9avm.com",
    working_hours: "Pazartesi - Cumartesi: 09:00 - 20:00",
    map_embed_url: "" // Google Haritalar embed URL'sini buraya yapıştırabilirsiniz
  };

  return (
    <footer id="iletisim" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--white)', paddingTop: '5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>

          {/* Brand Info */}
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline' }}>
              ON<span style={{ fontFamily: 'var(--font-body)' }}>9</span> AVM
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Kaliteli ve şık tasarımlarla evinizin havasını değiştiriyoruz.
              Züccaciye, porselen ve daha fazlası için mağazamızı ziyaret edin.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.instagram.com/on9avm?igsh=MXQzcWhiMDRsd3F3eA==" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/18TXQTnowj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>İletişim Bilgilerimiz</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                <MapPin color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{storeInfo.address}</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <Phone color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{storeInfo.phone}</span>
              </li>
              {storeInfo.email && (
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                  <Mail color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>{storeInfo.email}</span>
                </li>
              )}
              {storeInfo.working_hours && (
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                  <Clock color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>{storeInfo.working_hours}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Lokasyon</h3>
            <div style={{
              width: '100%',
              height: '250px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}>
              {storeInfo.map_embed_url ? (
                <div dangerouslySetInnerHTML={{ __html: storeInfo.map_embed_url }} style={{ width: '100%', height: '100%' }} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.5)' }}>
                  Harita Yükleniyor...
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '2rem 0',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} {storeInfo.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
