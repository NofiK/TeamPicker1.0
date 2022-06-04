import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Players from "./Players";
import PickerSection from "./PickerSection";
const AddPlayer = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [players, addPlayers] = useState([
    {
      id: "eddpepse32r23p",
      player: "🔑",
      color: randomColor,
    },
  ]);
  const [player, addPlayer] = useState("");

  const fetchPlayerByClick = () => {
    if (player === "") {
      alert("Add the name of player!");
    } else {
      const newObj = {
        id: Date.now(),
        player,
        color: randomColor,
      };
      addPlayers([...players, newObj]);
      addPlayer("");
    }
  };
  const fetchPlayerByEnter = (event) => {
    if (event.key === "Enter") {
      if (player === "") {
        alert("Add the name of player!");
      } else {
        const newObj = {
          id: Date.now(),
          player,
          color: randomColor,
        };
        addPlayers([...players, newObj]);
        addPlayer("");
      }
    }
  };
  const removePlayer = (player) => {
    addPlayers(players.filter((p) => p.id !== player.id));
  };

  return (
    <div className="addPlayer">
      <div className="pikrDiv">
        <input
          placeholder="Add Player"
          className="pikrInput"
          type="text"
          onChange={(e) => addPlayer(e.target.value)}
          value={player}
          onKeyDown={fetchPlayerByEnter}
        />
        <AiOutlinePlus onClick={fetchPlayerByClick} className="plusIcon" />
      </div>

      <p className="playerP">Players{": " + players.length}</p>
      <div className="playersList">
        {players.map((item) => (
          <Players
            remove={removePlayer}
            color={item.color}
            key={item.id}
            player={item.player}
            obj={item}
          />
        ))}
      </div>
      <p className="playerP">Teams</p>
      <PickerSection players={players} />
    </div>
  );
};

export default AddPlayer;
