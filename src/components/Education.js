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
      <h1 className="text-3xl text-bold my-4 mx-8 text-center">Education</h1>
      <h2 className="text-center text-lg">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </h2>

      <ul>
        <li className="my-4" onClick={toggleVisibility}>
          <div className="border-2 w-2/3 mx-auto p-2 ">
            <img src="" alt="graduation image" />
            <div>
              <h2 className="mx-8 ">Graduation</h2>
              <div className="flex justify-between mx-8">
                <span>Dr. A.P.J. Abdul Kalam Technical University</span>
                <span>2015-2019</span>
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

        <li className="my-4" onClick={toggleVisibility2}>
          <div className="border-2 w-2/3 mx-auto p-2 ">
            <img src="" alt="cdac image" />
            <div>
              <h2 className="mx-8 ">Diploma in Advanced Computing</h2>
              <div className="flex justify-between mx-8">
                <span>
                  Centre for Development of Advanced Computing (C-DAC) Bengaluru
                </span>
                <span>2022-2023</span>
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
