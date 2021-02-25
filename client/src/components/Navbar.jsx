import React from "react";
import { Row, Col } from "antd";

const classes = {
  col: {
    fontFamily: "'Playfair Display SC', serif",
    fontSize: 40,
    fontWeight: "bold",
    paddingLeft: 20
  },
  iconContainer: {
    color: "white",
    background: "#2800d7",
    marginTop: 10,
    padding: "0px 5px",
    borderRadius: 10,
    transition: "all 0.1s ease-in-out"
  }
};

const Navbar = () => {
  return (
    <>
      <Row>
        <Col style={classes.col}>
          <div style={classes.iconContainer} id="amp-logo">
            &*
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
