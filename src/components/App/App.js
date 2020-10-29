import React, { useState } from "react";
import "./App.css";
import Riddle from "../Riddle/Riddle";
import Background from "../Background/Background";
import Timer from "../Timer/Timer";
import Keypad from "../Keypad/Keypad";
import { riddles } from "../../containers/RiddleContainer/riddles";

const items = ["showerhead", "saw", "trash", "light"];

export default function App(props) {
  const [source, setSource] = useState("bathroom");
  const [visible, setVisible] = useState(false);
  const [keyVis, setKeyVis] = useState(false);
  const [count, setCount] = useState(0);

  //Event handlers
  const handleSourceChange = (src) => {
    setSource(src);
  };

  const toggleVisibility = (item) => {
    item === "keypad" ? setKeyVis(!keyVis) : setVisible(!visible);
  };

  const countUp = () => {
    setCount((prevCount) => prevCount + 1);
    toggleVisibility();
    riddles.shift();
  };

  // Style conditional for riddle div display
  let riddleStyle;

  !visible && (riddleStyle = { display: "none" });

  // Style conditional for pad div display
  let padStyle;

  !keyVis && (padStyle = { display: "none" });

  return (
    <div className="app">
      <div className="background">
        <Background source={source} count={count} />
      </div>
      <div className="timer">
        {props.start ? <Timer start={props.start} time={props.time} /> : null}
      </div>
      <div className="count">
        <h3>Correct: {count} of 4</h3>
      </div>
      <div className="items">
        {items.map((item) => {
          return (
            <div
              className={item}
              key={items.indexOf(item)}
              onMouseEnter={() => handleSourceChange(item)}
              onMouseLeave={() => handleSourceChange("bathroom")}
              onClick={() => toggleVisibility("item")}
            ></div>
          );
        })}
        <div
          className="keypad"
          onMouseEnter={() => handleSourceChange("keypad")}
          onMouseLeave={() => handleSourceChange("bathroom")}
          onClick={() => toggleVisibility("keypad")}
        ></div>
      </div>
      <div className="riddle" style={riddleStyle}>
        {visible ? (
          <Riddle
            riddle={riddles[0].riddle}
            answer={riddles[0].answer}
            id={riddles[0].id}
            visible={visible}
            count={countUp}
          />
        ) : null}
      </div>
      <div className="numpad" style={padStyle}>
        {keyVis ? <Keypad win={props.win} /> : null}
      </div>
    </div>
  );
}
