import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="flex justify-between flex-col gap-4 lg:hidden items-center px-3 border-top border-[#0a0a0a] w-full">
      <section className="flex items-center gap-2">
        <a
          className="flex items-center justify-between w-full text-gray-300"
          href="https://github.com/Olatoy2000"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#0a192f] p-2 h-[2.5rem] w-[2.5rem] rounded-[50%]">
            <Icon icon="cib:github" color="white" width="25" height="25" />
          </button>
        </a>
        <a
          className="flex items-center justify-between w-full text-gray-300"
          href="https://www.linkedin.com/in/toyyib-oladejo-8161bb203"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-blue-700 p-2 h-[2.5rem] w-[2.5rem] rounded-[50%]">
            <Icon
              icon="ri:linkedin-line"
              color="white"
              width="25"
              height="25"
            />
          </div>
        </a>
        <a
          className="flex items-center justify-between w-full text-gray-300"
          href="https://www.olatoyconsult@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#6fc2b0] p-2 h-[2.5rem] w-[2.5rem] rounded-[50%]">
            <Icon
              icon="arcticons:googlemail"
              color="white"
              width="25"
              height="25"
            />{" "}
          </button>
        </a>
        <a
          className="flex items-center justify-between w-full text-gray-300"
          href="abiodun-toyyib.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-[#565f69] p-2 h-[2.5rem] w-[2.5rem] rounded-[50%]">
          <Icon icon="ri:contacts-line" color="white" width="25" height="25" />
          </button>
        </a>
      </section>
      <div className="text-base sm:text-[12px] sm:text-justify text-gray-300">
        Copyright &copy; {getFullYear} | Olatoy Consult All right reserved
      </div>
    </footer>
  );
};

// 
export default Footer;
