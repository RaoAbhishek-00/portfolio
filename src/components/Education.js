import React, { useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold py-4 mx-8 text-center">Education</h1>
      <h2 className="text-center text-lg">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </h2>

      <ul className="">
        <li
          className="my-4"
          onClick={toggleVisibility}
        >
          <div className="border-2 w-2/3 mx-auto p-2 flex cursor-pointer"           onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}>
            <img
              src="/btech.jpeg"
              alt="graduation image"
              className="w-32 h-32"
            />
            <div className="my-auto">
              <h2 className="mx-8 ">Graduation</h2>
              <div className="   mx-8">
                <div>Dr. A.P.J. Abdul Kalam Technical University</div>
                <div className=" ">(2015-2019)</div>
              </div>
              {isVisible && (
                <div className="mx-8 my-2">
                  Bachelor of Technology (B.Tech.) degree in India is an
                  undergraduate academic degree conferred after the completion
                  of a four-year full-time engineering program from All India
                  Council for Technical Education recognised institute.
                </div>
              )}
            </div>
          </div>
        </li>

        <li
          className="py-4"
          onClick={toggleVisibility2}
        >
          <div className="border-2 w-2/3 mx-auto p-2 flex cursor-pointer" 
          onMouseEnter={() => setIsVisible2(true)}
          onMouseLeave={() => setIsVisible2(false)}>
            <img src="/cdac.jpeg" alt="cdac image" className="w-32 h-32" />
            <div className="my-auto">
              <h2 className="mx-8 ">Diploma in Advanced Computing</h2>
              <div className="mx-8 ">
                <div>
                  Centre for Development of Advanced Computing (C-DAC) Bengaluru
                </div>
                <div className="">(2022-2023)</div>
              </div>
              {isVisible2 && (
                <div className="mx-8 my-2">
                  The Centre for Development of Advanced Computing (C-DAC) is an
                  Indian autonomous scientific society, operating under the
                  Ministry of Electronics and Information Technology. C-DAC
                  provides several courses in the field of advanced computing
                  and software development. Among these are the HPC
                  certification course- C-DAC Certified HPC Professional
                  Certification Programme. C-DAC organises advanced computing
                  diploma programmes through the Advanced Computing Training
                  School (ACTS) located all over India
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
