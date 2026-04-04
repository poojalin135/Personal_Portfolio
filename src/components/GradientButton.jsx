import React from "react";

const GradientButton = ({ text, link, className = "" }) => {
  return (
    <a
      href={link}
      className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] lg:py-3 px-12 py-2 rounded-full ${className}`}
    >
      {text}
    </a>
  );
};

export default GradientButton;