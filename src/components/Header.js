import React from "react";

const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="brand notbold">
          Quiz<span className="brand">Mania</span>
        </h1>
        <h3 className="notbold flexEnd">{userName}</h3>
      </div>
    </header>
  );
};

export default Header;
