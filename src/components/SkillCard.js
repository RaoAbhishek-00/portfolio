import React, { useState } from 'react';

const SkillCard = ({name, img}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
  return (
    <div className='border-solid flex flex-col border-2 w-54 p-4 cursor-pointer' onClick={toggleVisibility}>
      <h1 className='text-xl text-center font-bold'>{name}</h1>
      <div className='flex justify-center '> 
        <img src={img} alt=' Logo' className='w-48 h-auto' />
      </div>
      {!isVisible && <div>HTML, or HyperText Markup ......</div>}
      {/* <button 
          onClick={toggleVisibility} 
          className='bg-blue-500 text-white px-4 py-2 rounded'>
          {isVisible ? 'Hide Info' : 'Show Info'}
        </button> */}
        {isVisible &&<div className='text-center '  >HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It provides the basic structure for web content and allows you to embed various elements like text, images, links, and multimedia</div>  }
    </div>
  );
}

export default SkillCard;
