import React from 'react';
import Content from '../components/Content';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';

const Home = () => {
  console.log('home');
  return (
    <div className="bg-gradient-to-b from-c-light-blue to-c-dark-blue w-screen py-4 px-4 md:px-8 lg:px-20 md:pt-8 lg:pt-16 text-c-gray">
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col lg:flex-row lg:mt-8 mt-2">
          <Filter />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
