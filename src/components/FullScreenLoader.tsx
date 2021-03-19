import React from 'react';

const FullScreenLoader = ({ isVisible }:{isVisible:boolean}) => (
  <div style={{ backgroundColor: '#00000080' }} className={`${isVisible ? 'flex' : 'hidden'} fixed z-20 inset-0 flex-col items-center justify-center`}>
    <div className="loadingio-spinner-rolling-5kcwe81bj9a">
      <div className="ldio-rjnrubu985">
        <div style={{ width: `${100}px`, height: `${100}px` }} />
      </div>
    </div>
    <p className="font-montserrat text-lg">Fetching Video Games</p>
  </div>
);

export default FullScreenLoader;
