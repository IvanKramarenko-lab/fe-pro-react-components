import React from 'react';
import Header from './components/header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default Application;
