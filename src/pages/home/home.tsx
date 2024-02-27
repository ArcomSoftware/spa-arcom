import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Portfolio from '../../components/portfolio/Porfolio';
//import Testimonial from '../../components/testimonial/Testimonial';
//import Services from '../../components/serv/Services';
const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
