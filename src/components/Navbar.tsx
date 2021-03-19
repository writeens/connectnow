import React from 'react';

const NavbarItem = ({ text, bgText }:{text:string, bgText?:string}) => {
  console.log('object');
  return (
    <div className="flex relative lg:mr-24 mb-4 lg:mb-0">
      <p className="z-10 text-xl">{text}</p>
      {bgText && <p className="text-5xl absolute -top-5 lg:-top-7 -left-6 lg:-left-10 opacity-20">{bgText}</p>}
    </div>
  );
};

NavbarItem.defaultProps = {
  bgText: '',
};

const Navbar = () => {
  console.log('object');
  return (
    <div className="flex flex-col lg:flex-row font-montserrat">
      <NavbarItem text="VIDEO GAMES" bgText="VIDEO" />
      <NavbarItem text="CONTACT" />
    </div>
  );
};

export default Navbar;
