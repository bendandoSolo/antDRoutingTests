import React from "react";

const FakeHome = () => {
  return (
    <div>
      <h2>We are pretending to be the home screen</h2>
      <p>We are using withRouter to set the antd menu based on the location</p>
      <p style={{ color: "#a8071a" }}>
        NB: ONLY WORKS IF THE ROUTER IS OUTSIDE OF THE COMPONENT AND PASSES DATA
        IN
      </p>
      <p>Check by navigating by tying in the URLs </p>
    </div>
  );
};

export default FakeHome;
