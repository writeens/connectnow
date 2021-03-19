/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import fetchData, { FetchDataResponse } from '../api/handler';
import Content from '../components/Content';
import Filter from '../components/Filter';
import FullScreenLoader from '../components/FullScreenLoader';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialEntries:FetchDataResponse[] = [];
  const [allEntries, setAllEntries] = useState(initialEntries);
  const [filteredContent, setFilteredContent] = useState(initialEntries);
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const [score, setScore] = useState(0);

  /// FETCH DATA IN COMPONENT
  const handleFetch = async () => {
    setIsLoading(true);
    const response = await fetchData();
    if (response.status === 'OK') {
      setIsLoading(false);
      if (response.data) {
        setAllEntries(response.data);
      }
    }
  };

  /// ON MOUNT
  /// FETCH
  useEffect(() => {
    handleFetch();
  }, []);

  /// FILTER
  useEffect(() => {
    if (name === '' && score === 0 && order === '') {
      return setFilteredContent(allEntries);
    }
    let newContent = allEntries
      .filter((entry) => (name ? entry.name.toLowerCase().includes(name.toLowerCase()) : true))
      .filter((entry) => (score ? `${Math.floor(entry.rating)}`.includes(`${score}`) : true));

    if (order === 'release') {
      newContent = newContent.sort((a, b) => b.first_release_date - a.first_release_date);
    }

    if (order === 'score') {
      newContent = newContent.sort((a, b) => b.rating - a.rating);
    }

    if (order === 'name') {
      newContent = newContent.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    setFilteredContent(newContent);
  }, [name, score, order, allEntries]);

  return (
    <div className="bg-gradient-to-b from-c-light-blue to-c-dark-blue w-screen py-4 px-4 md:px-8 lg:px-20 md:pt-8 lg:pt-16 text-c-gray min-h-screen">
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col lg:flex-row lg:mt-8 mt-2">
          <Filter
            handleChangeName={(value:string) => setName(value)}
            handleChangeScore={(value:number) => setScore(value)}
            handleChangeOrder={(value:string) => setOrder(value)}
          />
          <Content data={filteredContent} />
        </div>
      </div>
      <FullScreenLoader isVisible={isLoading} />
    </div>
  );
};

export default Home;
