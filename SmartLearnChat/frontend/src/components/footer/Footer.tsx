import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
           Team C:
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://github.com/josedtovar/csci401w-sandbox"}
            >
              Github Repository
            </Link>

            <Link
            style={{ color: "white" }}
            className="nav-link"
            to={"https://trello.com/b/dXfz9OY7/csci401w-team-c"}
            >
            Trello Board 
            </Link>

          </span>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;