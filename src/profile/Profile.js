import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="Text">
      <h1>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <button
        className="button"
        onClick={() => {
          props.handleName(`this is ${props.fullName}`);
        }}
      >
        Click me
      </button>
      <h3>{props.bio}</h3>
      {props.children}
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Mohamed Baatour",
  profession: "HTML,CSS,JS",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
