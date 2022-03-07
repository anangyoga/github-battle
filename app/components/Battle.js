import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">
            Enter two Githb users
            <FaUserFriends className="bg-light" color="rgb(255,191,116)" size={140} />
          </h3>
        </li>
        <li>
          <h3 className="header-sm">
            Enter two Githb users
            <FaFighterJet className="bg-light" color="#727272" size={140} />
          </h3>
        </li>
        <li>
          <h3 className="header-sm">
            Enter two Githb users
            <FaTrophy className="bg-light" color="rgb(255,215, 0)" size={140} />
          </h3>
        </li>
      </ol>
    </div>
  );
}

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    );
  }
}