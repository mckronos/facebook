import React from "react";

const Ava = ({ ava }) => {
  const styleAva = {
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    background: ava,
  };
  return <div style={styleAva}></div>;
};
export default Ava;
