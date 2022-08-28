import React from "react";
import Building from "../components/Building";
import Navigation from "../components/Navigation";

const Cv = () => {
  return (
    <div>
      <div className="top">
        <div className="nav">
          <Navigation />
          <Building />
        </div>
      </div>
    </div>
  );
};

export default Cv;
