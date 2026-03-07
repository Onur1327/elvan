import React from 'react';
import { categories } from '../data/categories';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card" style={{
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      transition: 'var(--transition)',
      position: 'relative',
      height: '350px',
      cursor: 'pointer',
      backgroundColor: 'var(--bg-light)'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        const img = e.currentTarget.querySelector('img');
        if(img) img.style.transform = 'scale(1.1)';
        const overlay = e.currentTarget.querySelector('.content-overlay');
        if(overlay) overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        const img = e.currentTarget.querySelector('img');
        if(img) img.style.transform = 'scale(1)';
        const overlay = e.currentTarget.querySelector('.content-overlay');
        if(overlay) overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1), transparent)';
    }}
    >
      <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
        <img 
          src={category.image} 
          alt={category.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'var(--transition)',
          }}
          onError={(e) => { e.target.src = 'https://placehold.co/600x400/1a1a1a/c39b6b?text=' + category.title }}
        />
      </div>
      
      <div className="content-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1), transparent)',
        transition: 'var(--transition)',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '60%'
      }}>
        <h3 style={{ 
          color: 'var(--primary)', 
          margin: '0 0 0.5rem 0', 
          fontSize: '1.5rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          {category.title}
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: '0.95rem', 
          color: 'rgba(255,255,255,0.9)'
        }}>
          {category.desc}
        </p>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section id="kategoriler" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Koleksiyonlarımız</h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-light)', 
          maxWidth: '700px', 
          margin: '0 auto 4rem',
          fontSize: '1.1rem'
        }}>
          Geniş ürün yelpazemizle yaşam alanlarınıza şıklık katacak, ihtiyaçlarınıza 
          kaliteli çözümler sunacak kategorilerimizi keşfedin.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
