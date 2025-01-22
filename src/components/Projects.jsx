import React, { useState } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3">Tech Stack</p>
          <div className="flex sm:flex-row mt-2">
            {props.stack.map((tech) => (
              <div key={tech.id} className="text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip">
                {React.createElement(tech.icon)}
                <span className="tooltiptext">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.content}
      </p>

      <div className="flex mt-4 -mx-2">
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2rem" className="text-white mr-1 hover:text-teal-200" />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg size="2rem" className="text-white hover:text-teal-200" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="min-h-screen">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"
          >
            {currentProjects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {projects.length > projectsPerPage && (
          <div className="flex justify-end mt-8">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2 transition-opacity duration-300"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === pageCount - 1}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2 transition-opacity duration-300"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;