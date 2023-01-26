import React, { Component } from "react";
import PropTypes from "prop-types";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = { summary: props.summary };
  }
  render() {
    const { summary } = this.state;
    return <h2>{summary}</h2>;
  }
}

Summary.propTypes = {
  summary: PropTypes.string,
};
Summary.defaultProps = {
  summary: "Default Summary",
};

export default Summary;
