import React from "react";
import PropTypes from "prop-types";

const EmptyFrame = ({ children }) => {
  const sections = [];
  React.Children.map(children, (child, i) => {
    sections.push(child);
  });

  return (
    <div className="container py-3">
      {sections[0]}
      {sections[1]}
      {sections[2]}
      {sections[3]}
      {sections[4]}
    </div>
  );
};

EmptyFrame.propTypes = {
  children: PropTypes.node,
};
EmptyFrame.defaultProps = {
  children: [null, null, null, null, null],
};

export default EmptyFrame;
