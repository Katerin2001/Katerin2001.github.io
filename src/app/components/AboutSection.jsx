"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Angular</li>
        <li>Firebase</li>
        <li>Flutter</li>
        <li>JavaScript</li>
        <li>Html</li>
        <li>Css</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidada Tecnica de Ambtao</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificado de Participación CSEI 2021 - UTA</li>
        <li>CCNAv7: Introducción a Redes - CISCO</li>
        <li>Certificado de Participación CSEI 2022 - UTA</li>
        <li>Certificado de Participación FLISOL (Sede Ambato)</li>
        <li>Redes Neuronales para Inteligencia Artificial - UTA</li>
        <li>Certificado de Participación CSEI 2023 - UTA</li>
        <li>Organización Hatunsoft - UTA</li>
        <li>Participación Hatunsoft - UTA</li>
        <li>Diplomado en PHP - Politécnico de Colombia</li>
        <li>Diplomado en Auditoría de Sistemas de Información - Politécnico Intercontinental</li>
        
    </ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
          Como ingeniera de software, 
          mi pasión radica en crear experiencias digitales impactantes a través del desarrollo frontend.
           Con habilidades sólidas en HTML, CSS y JavaScript, me especializo en la creación de interfaces 
           de usuario intuitivas y atractivas
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
