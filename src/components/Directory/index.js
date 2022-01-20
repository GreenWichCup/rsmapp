import React from "react";
import webreact from "./../../assets/webreact.png";
import mobilereact from "./../../assets/mobilereact.png";
import './styles.scss'

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div 
            className="item" 
            style={{ backgroundImage: `url(${webreact})` }}>
          <a>React Projects</a>
        </div>
        <div 
        className="item"
          style={{ backgroundImage: `url(${mobilereact})` }}>
          <a>Mobile Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
