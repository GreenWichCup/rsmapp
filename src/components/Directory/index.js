import React from "react";
import { Link } from 'react-router-dom';

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
          <Link to="/search/reactdesktop">React Desktop</Link>
        </div>
        <div 
        className="item"
          style={{ backgroundImage: `url(${mobilereact})`}}>
          <Link to="/search/reactmobile">Mobile Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
