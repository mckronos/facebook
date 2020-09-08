import React from "react";
import "./facebook.css";
import Top from "./top/top";
//learn: props
const Facebook = (props) => {
  const { ava, title, text, view } = props;
  console.log("face-book", props);

  return (
    <div className="mainDiv">
      <Top data={props} />
      <div style={{ margin: 10 }}>
        <p className="text">{text}</p>
      </div>
      <div>
        <iframe
          title="0"
          width="100%"
          height="150"
          src={view}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="Top">
        <p>нравится</p>
        <p>комментировать</p>
        <p>Поделиться</p>
      </div>
    </div>
  );
};
export default Facebook;
