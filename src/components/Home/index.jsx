import React from "react";
import "./index.css";
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div className="bg-page">
      <div>
        <h1 className="text-home">{props.title}</h1>
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  title: PropTypes.string.isRequired
}