import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import StickySocials from './components/StickySocials';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
      </main>
      <Footer />
      <StickySocials />
    </>
  );
}

export default App;
