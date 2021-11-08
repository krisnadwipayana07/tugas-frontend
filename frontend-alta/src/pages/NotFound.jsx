import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center m-5">
      <h1 style={{ fontSize: "200px" }}>404</h1>
      <h1>Sorry The page that u looking isn't found</h1>
      <a href="/" className="btn btn-primary m-5">
        Homepage
      </a>
    </div>
  );
}
