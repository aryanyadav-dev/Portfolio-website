import React, { useState } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="px-8 py-6 transition-all duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card cursor-pointer hover:scale-105"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 rounded-full sm:mx-4 ring-4 ring-gray-300 transition-all duration-300"
          src={props.image}
          alt=""
        />

        <div className="mt-3 sm:mx-4 sm:mt-0">
          <h1 className="text-lg font-semibold font-poppins text-gray-700 capitalize md:text-xl group-hover:text-white text-gradient transition-colors duration-300">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-2">Tech Stack</p>
          <div className="flex sm:flex-row mt-2">
            {props.stack.map((tech) => (
              <div key={tech.id} className="text-dimWhite mr-4 text-[18px] hover:text-teal-200 tooltip transform hover:scale-110 transition-transform duration-200">
                {React.createElement(tech.icon)}
                <span className="tooltiptext">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins transition-colors duration-300">
        {props.content}
      </p>

      <div className="flex mt-3 -mx-2">
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub 
              size="2rem" 
              className="text-white mr-1 hover:text-teal-200 transform hover:scale-110 transition-all duration-200" 
            />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg 
              size="2rem" 
              className="text-white hover:text-teal-200 transform hover:scale-110 transition-all duration-200" 
            />
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
      <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[35px] text-white ss:leading-[70px] leading-[70px]">
        Projects
      </h1>

      <div className="container px-2 py-8 mx-auto mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 mt-6 md:mt-12 md:grid-cols-2"
          >
            {currentProjects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {projects.length > projectsPerPage && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2 transition-opacity duration-300 hover:bg-gray-600"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === pageCount - 1}
              className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2 transition-opacity duration-300 hover:bg-gray-600"
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