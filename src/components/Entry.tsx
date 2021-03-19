import dayjs from 'dayjs';
import React from 'react';
import { FetchDataResponse } from '../api/handler';

const Entry = ({ data }:{data:FetchDataResponse}) => {
  console.log('object');
  return (
    <div className="flex flex-col md:flex-row text-c-gray mb-5 md:mb-3 bg-c-firefly shadow-xl relative">
      <div className=" flex min-h-full h-40  md:w-28 md:h-28 mr-4 bg-black" />
      <div className="flex-1 flex flex-col justify-center px-5 py-3 md:px-0 md:py-2">
        <p className=" font-montserrat font-semibold">{data.name}</p>
        <p className=" font-mulish text-sm mb-1">{`Release Date: ${dayjs(data.first_release_date).format('DD/MM/YYYY')}`}</p>
        <p className=" font-mulish text-xs">
          {`[Summary]: ${data.summary.substring(0, 350)}...`}
        </p>
      </div>
      <div className="flex justify-center items-center w-16 md:relative absolute right-2 md:right-0 md:top-0 top-4">
        <p className="bg-c-accent-blue text-white rounded-full w-9 h-9 text-xl flex justify-center items-center ">{Math.floor(data.rating)}</p>
      </div>
    </div>
  );
};

export default Entry;
