import React from "react";
import ReactDom from "react-dom";
import Facebook from "./componets/face-book";
import "./index.css";

const arrPost = [
  {
    ava: "red",
    nameTitle: "Виктор Янукович",
    text:
      "существует множество непонятных выражений и жаргонизмов, которые используют местные чёрные парни повседневной американской речи, преимущественно в гетто, ",
    view: "https://www.youtube.com/embed/MRIMT0xPXFI",
  },
  {
    ava: "gray",
    nameTitle: "Лукашенко Алексндр",
    text:
      "повседневной американской речи, преимущественно в гетто, существует множество непонятных выражений и жаргонизмов, которые используют местные чёрные парни",
    view: "https://www.youtube.com/embed/sVxBVvlnJsM",
  },
  {
    ava: "green",
    nameTitle: "Мікола Янович",
    text:
      "повсHave you ever wondered what the day of corporate software developer looks like? Here is your chance to peek into the awesome Amazon offices in London. Enjoy!",
    view: "https://www.youtube.com/embed/c8dd9f5MamU",
  },
];

function App() {
  return (
    <div className="forBlock">
      {arrPost.map(({ ava, nameTitle, text, view }, idx) => {
        return (
          <Facebook
            key={idx}
            ava={ava}
            title={nameTitle}
            text={text}
            view={view}
          />
        );
      })}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
