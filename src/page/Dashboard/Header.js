import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee Management ReactJS</h1>
      <div style={{ marginTop: "50px", marginBottom: "15px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Button
        </button>
      </div>
    </header>
  );
}

export default Header;
