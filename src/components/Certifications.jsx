import React, { useState, useEffect } from "react";
import { certifications } from "../constants";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs"; 

const Certification = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col">
        <a
          className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px] hover:text-teal-200"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
        <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
          {props.institution}
        </p>
        {/* Link Icon */}
        <div className="mt-2">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg className="text-white hover:text-teal-200 text-[20px]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [certificationList, setCertificationList] = useState([]);

  useEffect(() => {
    setCertificationList(certifications); // Replace with API call or data fetch
  }, []);

  return (
    <section id="certifications">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Certifications
      </h1>

      <div className="container px-2 py-5 mx-auto mb-8">
        <div className="grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 md:grid-cols-3 sm:grid-cols-2">
          {certificationList.map((certification) => (
            <Certification key={certification.id} {...certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
