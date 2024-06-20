import React from "react";
import Image from "next/image";
import fileIcon from "../../../public/file.png"; // Asegúrate de ajustar la ruta según tu estructura de proyecto

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src={fileIcon} alt="File Icon" width={500} height={500} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
