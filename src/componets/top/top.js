import React from "react";
import "./../facebook.css";
import Ava from "./exComp/ava";
import Name from "./exComp/name";

const Top = (props) => {
  const { ava, title } = props.data;
  return (
    <div className="Top">
      <Ava ava={ava} />
      <Name name={title} />
      <p>...</p>
    </div>
  );
};
export default Top;
