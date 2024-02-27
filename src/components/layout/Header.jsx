import React from "react";
import logo from "../../images/react.png";

const Header = () => {
  return (
    <div className="pt-3 pl-2">
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="offset-5 h2 pt-4 text-white-50">travelOpedia</span>
    </div>
  );
};

export default Header;
