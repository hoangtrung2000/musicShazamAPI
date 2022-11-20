import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { links } from '../assets/constants';

const style = {
  wrapper: 'md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]',
  image: 'w-full h-14 object-contain',
  navLink:
    'flex flex-row justify-start items-center gap-2 my-8 text-sm font-medium text-gray-400 hover:text-cyan-400',
  icon: 'w-6 h-6',
  mobileNavIcon: 'absolute md:hidden block top-6 right-3',
  mobileIcon: 'w-6 h-6 mr-2 text-white',
  wrapperNavMobile:
    'absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden',
};

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        to={link.to}
        onClick={() => handleClick && handleClick()}
        className={style.navLink}
        key={link.name}
      >
        <link.icon className={style.icon} />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className={style.wrapper}>
        <img className={style.image} src={logo} alt="logo" />
        <NavLinks />
      </div>
      <div className={style.mobileNavIcon}>
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className={style.mobileIcon}
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className={style.mobileIcon}
          />
        )}
      </div>
      <div
        className={`${style.wrapperNavMobile} ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img className={style.image} src={logo} alt="logo" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
