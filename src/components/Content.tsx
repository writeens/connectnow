/* eslint-disable no-unused-vars */
import React from 'react';
import { FetchDataResponse } from '../api/handler';
import Entry from './Entry';

const Content = ({ data }:{data:FetchDataResponse[]}) => {
  console.log('Content');
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      {data.length > 0 && data.map((item) => <Entry key={item.id} data={item} />)}
    </div>
  );
};

export default Content;
