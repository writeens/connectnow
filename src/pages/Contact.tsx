import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  console.log('object');
  return (
    <div className="bg-gradient-to-b from-c-light-blue to-c-dark-blue w-screen py-4 px-4 md:px-8 lg:px-20 md:pt-8 lg:pt-16 text-c-gray h-full min-h-screen">
      <div className="h-full w-full flex flex-col text-c-gray ">
        <Navbar />
        <div className=" flex-1 flex flex-col mt-8 md:mt-16 justify-center items-center">
          <div className="flex flex-col w-full lg:w-1/2 max-w-2xl">
            <p className="font-montserrat text-xl font-semibold mb-4">GET IN TOUCH</p>
            <p className="font-mulish mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quae ducimus odio nulla quasi delectus placeat suscipit omnis doloremque.
              Fuga alias blanditiis dolor maiores reiciendis, eius minima sequi omnis
              error molestiae?
            </p>
            <div className="shadow-lg flex flex-col p-3 bg-c-firefly">
              <p className="mb-4 font-semibold">Contact Form</p>
              <div className="flex flex-col md:flex-row mb-6">
                <label htmlFor="name" className="md:mr-6 mb-6 md:mb-0 flex flex-col flex-1">
                  <p className="text-sm mb-1">Name</p>
                  <input
                    id="name"
                    type="text"
                    className=" bg-c-stone w-full text-sm h-10 pl-2"
                    onChange={() => {}}
                  />
                </label>
                <label htmlFor="name" className="flex flex-col flex-1">
                  <p className="text-sm mb-1">Email Address</p>
                  <input
                    id="name"
                    type="text"
                    className=" bg-c-stone w-full text-sm h-10 pl-2"
                    onChange={() => {}}
                  />
                </label>
              </div>
              <label htmlFor="name" className="flex flex-col flex-1 mb-6">
                <p className="text-sm mb-1">Message</p>
                <textarea className="h-28 bg-c-stone" />
              </label>
              <button
                type="button"
                className=" bg-c-accent-blue text-sm self-end px-6 py-1"
              >
                Send

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
