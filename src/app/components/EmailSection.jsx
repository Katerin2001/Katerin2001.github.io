"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const mailtoLink = "https://mail.google.com/mail/u/0/#inbox?compose=new";

  const handleClick = () => {
    window.location.href = "https://wa.me/5930979310095";
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contáctame</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada
          siempre está abierta. ¡Haré lo posible por responderte!
        </p>
        <div className="socials flex flex-row gap-2 mb-4">
          <Link href="https://github.com/Katerin2001">
            <Image src={GithubIcon} alt="Github Icon" width={60} height={60} />
          </Link>
          <Link href="https://www.linkedin.com/in/katerin-cecen-rubio-894a741a9/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={60} height={60} />
          </Link>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        <form className="flex flex-col">
          <button
            type="button"
            onClick={handleClick}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Abrir WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
