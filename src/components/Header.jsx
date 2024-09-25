import React from 'react';
import { Navbar, Button } from 'flowbite-react';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`cler ${isDarkMode ? 'bg-[rgb(35,37,58)] text-white' : ''}`}>
      <Navbar fluid rounded className={`hr ${isDarkMode ? 'bg-[rgb(42,42,66)] text-white' : 'bg-white text-black'}`}>
        <Navbar.Brand href="/">
          <img
            src="/public/icony.png"
            height="100"
            width="60"
            className="mr-3 h-6 sm:h-9"
            alt="Type Fury"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Type Fury
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" >
            Home
          </Navbar.Link>
          <Navbar.Link href="/type-speed" >Test your type speed</Navbar.Link>
          <Navbar.Link href="#" >Products</Navbar.Link>
          <Navbar.Link href="#" >Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
