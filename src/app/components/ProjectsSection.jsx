"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sistema de Gestion de Inventario",
    description: "Sistema de gestion de inventario y generacion de varios tipos de reportes y etiquetas",
    image: "/images/projects/1.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Invcontrol-Back/dasfrontend",
    previewUrl: "https://github.com/Invcontrol-Back/dasfrontend",
  },
  {
    id: 2,
    title: "Sistema de amortización",
    description: "Simulador de un sistema de amortizacion con diferentes roles, generacion de pdfs y configuracion de intereses",
    image: "/images/projects/2.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Katerin2001/amortizacion.git",
    previewUrl: "https://github.com/Katerin2001/amortizacion.git",
  },
  {
    id: 3,
    title: "Sistema de Control y gestion de Estudiantes- Java Web",
    description: "Gestión de estudiantes",
    image: "/images/projects/3.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Katerin2001/spring.git",
    previewUrl: "https://github.com/Katerin2001/spring.git",
  },
  {
    id: 4,
    title: "Tienda veterinaria",
    description: "Tienda virtual para una veterinaria, manejo de roles (Admin-Visitante)",
    image: "/images/projects/4.jpg",
    tag: ["Todos", "Movil"],
    gitUrl: "https://github.com/Katerin2001/AppVet",
    previewUrl: "https://github.com/Katerin2001/AppVet",
  },
  {
    id: 5,
    title: "Aula Virtual Moodle",
    description: "Replica Moodle Uta, con administracion de roles y actualizacion de foto mediante camara web",
    image: "/images/projects/5.JPG",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Katerin2001/AulaVirtual.git",
    previewUrl: "https://github.com/Katerin2001/AulaVirtual.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("Todos")}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Movil")}
          name="Movil"
          isSelected={tag === "Movil"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
