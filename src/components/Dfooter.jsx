import React from 'react';
import { Footer } from 'flowbite-react';

const Dfooter = ({ isDarkMode }) => {
  return (
    <div>
      <section>
        <Footer
          container
          className={`${
            isDarkMode ? 'bg-[rgb(19,21,41)] text-white' : 'bg-gray-100 text-black'
          }`}
        >
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="#"
                src="/icony2.jpg"
                alt="Type Fury Logo"
                name="Type Fury"
              />
              <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="Type Fury™" year={2024} />
          </div>
        </Footer>
      </section>
    </div>
  );
};

export default Dfooter;
