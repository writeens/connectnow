import React from 'react';

const Entry = () => {
  console.log('object');
  return (
    <div className="flex flex-col md:flex-row text-c-gray mb-5 md:mb-3 bg-c-firefly shadow-xl relative">
      <div className=" flex h-36 md:h-28 w-full md:w-28 mr-4 bg-black" />
      <div className="flex-1 flex flex-col justify-center px-5 py-3 md:p-0">
        <p className=" font-montserrat font-semibold">Game Title</p>
        <p className=" font-mulish text-sm mb-1">Release Date: DD/MM/YYYY</p>
        <p className=" font-mulish text-xs">
          [Summary]: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestias perspiciatis deleniti perferendis tempora iure maxime ut!
          Iste ut nihil mollitia doloribus laudantium rerum eligendi cumque
          eos architecto unde! Ab, minus.
        </p>
      </div>
      <div className="flex justify-center items-center w-16 md:relative absolute right-2 md:right-0 md:top-0 top-4">
        <p className="bg-c-accent-blue text-white rounded-full w-8 h-8 text-xl flex justify-center items-center ">10</p>
      </div>
    </div>
  );
};

export default Entry;
