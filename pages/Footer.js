import React, { Fragment } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer>
        <br />
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            // position: "fixed",
            padding: "10px 10px 0px 10px",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            height: "50px",
            background: "#3e4444",
          }}
        >
          Copyright © {year}
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
