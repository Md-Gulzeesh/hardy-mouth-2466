import React from 'react'

const Button = ({ children, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="custom-btn">
        {children}
      </button>
    </div>
  );
};

export default Button