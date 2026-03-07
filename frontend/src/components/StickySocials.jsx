import React from 'react';
import { Instagram } from 'lucide-react';

const StickySocials = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 1000,
    }}>
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/905457321056" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '55px',
          height: '55px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#128C7E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#25D366';
        }}
        title="WhatsApp üzerinden bizimle iletişime geçin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12.012 2c5.506 0 9.989 4.478 9.99 9.984a9.964 9.964 0 0 1-1.332 5.011l1.328 4.852-4.966-1.303A9.97 9.97 0 0 1 12.01 21.98c-5.506 0-9.989-4.477-9.99-9.983a9.984 9.984 0 0 1 2.924-7.065A9.957 9.957 0 0 1 12.012 2zm0 1.66c-4.584 0-8.312 3.725-8.314 8.307a8.28 8.28 0 0 0 1.258 4.385l-1.092 3.99 4.085-1.071A8.297 8.297 0 0 0 12.012 20.29c4.584 0 8.312-3.725 8.313-8.306 0-4.583-3.73-8.308-8.313-8.308zm-4.108 3.868c.22-.008.43.082.593.256.402.43 1.05 1.15 1.554 2.146.103.203.076.446-.067.625l-.578.718a.333.333 0 0 0 .041.46c.883.824 1.838 1.547 2.85 2.155a.333.333 0 0 0 .425-.084l.583-.757a.553.553 0 0 1 .64-.17c1.037.408 1.832.744 2.302.97.185.088.308.271.326.474l.012.164c0 1.48-.908 2.053-2.071 2.053-1.637 0-3.693-1.298-5.385-2.99-1.692-1.693-2.99-3.748-2.99-5.386 0-1.163.573-2.071 2.054-2.071l.164.012c.162.011.314.073.435.18.106.094.195.207.254.34zm.232.553C7.456 8.08 7.31 8.89 7.31 10.054c0 1.45 1.196 3.328 2.768 4.9 1.571 1.572 3.449 2.768 4.899 2.768 1.165 0 1.975-.146 1.975-.826l-.004-.08a.381.381 0 0 0-.256-.341c-.604-.29-1.258-.583-2.12-.907-.06-.023-.127 0-.166.05l-.658.852a1.442 1.442 0 0 1-1.742.365c-1.171-.62-2.196-1.399-3.058-2.316-.917-.863-1.696-1.888-2.316-3.057a1.444 1.444 0 0 1 .364-1.743l.643-.8a.222.222 0 0 0 .034-.23c-.324-.86-.618-1.516-.908-2.12a.382.382 0 0 0-.34-.257l-.08-.004z"></path>
        </svg>
      </a>

      {/* Instagram Icon */}
      <a 
        href="https://www.instagram.com/on9avm?igsh=MXQzcWhiMDRsd3F3eA==" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '55px',
          height: '55px',
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        title="Bizi Instagram'da takip edin"
      >
        <Instagram size={30} />
      </a>
    </div>
  );
};

export default StickySocials;
