import React from "react";

import logo from "../../images/ignacio-c.-webdev-logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <a href="https://www.linkedin.com/in/ignacioceaglio/" target="_blank" rel="noreferrer">
          <img src={logo} alt="logo" className="w-32" href="https://www.linkedin.com/in/ignacioceaglio/" target="_blank" />
        </a>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <a href="mailto:ignacioceaglio@gmail.com">
        <p className="text-white text-sm text-center font-medium mt-2">ignacioceaglio@protonmail.com</p>
      </a>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <a href="https://github.com/Nachoxt17" target="_blank" rel="noreferrer">
        <p className="text-white text-left text-xs">@Nachoxt17</p>
      </a>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
