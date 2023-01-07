import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1 className="vertical-center">Employee Management ReactJS</h1>
      <div className="vertical-center margin-bottom">
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
