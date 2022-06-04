import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Players = (props) => {
  return (
    <div style={{ backgroundColor: props.color }} className="playersCircle">
      {props.player}
      <BsFillCheckCircleFill
        style={{ visibility: props.visibl }}
        className="readyIcon"
        onClick={() => props.remove(props.obj)}
      />
    </div>
  );
};

export default Players;
