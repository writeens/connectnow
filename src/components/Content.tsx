import React from 'react';
import Entry from './Entry';

const Content = () => {
  console.log('Content');
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  );
};

export default Content;
