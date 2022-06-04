import React, { useState } from "react";
import Players from "./Players";
import vsLine from "./vsLine.png";
const PickerSection = (props) => {
  const [rightTeam, setRightTeam] = useState([]);
  const [leftTeam, setLeftTeam] = useState([]);

  const divideTheTeams = () => {
    let shuffled = props.players
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const a = shuffled.slice(0, shuffled.length / 2);
    setRightTeam(a);
    const b = shuffled.slice(shuffled.length / 2);
    setLeftTeam(b);
  };

  return (
    <div>
      <div className="teamPicker">
        <div className="leftTeam">
          {leftTeam.map((item) => (
            <Players
              visibl={"hidden"}
              color={"red"}
              key={item.id}
              player={item.player}
            />
          ))}
        </div>
        <img className="vsLine" src={vsLine} alt="" />
        <div className="rightTeam">
          {rightTeam.map((item) => (
            <Players
              visibl={"hidden"}
              color={"blue"}
              key={item.id}
              player={item.player}
            />
          ))}
        </div>
      </div>
      <button onClick={divideTheTeams} className="pickBtn">
        Pick Again
      </button>
    </div>
  );
};

export default PickerSection;
