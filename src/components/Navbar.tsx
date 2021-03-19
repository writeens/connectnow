import React from 'react';
import { useHistory } from 'react-router-dom';

const NavbarItem = ({ text, bgText, handleClick }
  :{text:string, bgText?:string, handleClick:Function}) => (
    <button type="button" onClick={() => handleClick()} className="flex relative lg:mr-24 mb-4 lg:mb-0">
      <p className="z-10 text-xl">{text}</p>
      {bgText && <p className="text-5xl absolute -top-5 lg:-top-7 -left-6 lg:-left-10 opacity-20">{bgText}</p>}
    </button>
);

NavbarItem.defaultProps = {
  bgText: '',
};

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col lg:flex-row font-montserrat">
      <NavbarItem
        handleClick={() => history.push('/')}
        text="VIDEO GAMES"
        bgText={`${history.location.pathname === '/' ? 'VIDEO' : ''}`}
      />
      <NavbarItem
        handleClick={() => history.push('/contact')}
        text="CONTACT"
        bgText={`${history.location.pathname === '/contact' ? 'CONTACT' : ''}`}
      />
    </div>
  );
};

export default Navbar;
