import React from "react";
import './api-item.component.scss'
import { withRouter } from "react-router-dom";

const ApiItem = ({ title}) => {
  return (

      
      <div className="content">
        <h1 className="title">{title}</h1>{" "}
    </div>
  );
};
export default withRouter(ApiItem); //wrapping a comp inside a HOC