import React from 'react';
import Jumbotron from './jumbotron';
import Advertising from './advertising';
import Features from './features';
import About from './about';
import UserRate from './userRate';
import Footer from './footer';
import Navbar from './navbar';

const Component: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Advertising />
      <About />
      <Features />
      <UserRate />
      <Footer />
    </div>
  );
};

export default Component;
