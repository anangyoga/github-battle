import React from "react";
import { battle } from "../utils/api";
import { FaCompass, FaBriefcase, FaUsers, FaUser, FaUserFriends, FaCode } from "react-icons/fa";
import Card from "./Card";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Tooltip from "./Tooltip";

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

function ProfileList({ profile }) {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115" size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <Tooltip text="User's Location">
            <FaCompass size={22} color="rgb(144,116,255)" />
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's Company">
            <FaBriefcase size={22} color="#764448" />
            {profile.company}
          </Tooltip>
        </li>
      )}
      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  );
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }
  componentDidMount() {
    const { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  }
  render() {
    const { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <Loading text="Battling" speed={500} />;
    }

    if (error === true) {
      return <p className="center-text error">{error}</p>;
    }
    return (
      <React.Fragment>
        <div className="grid space-around container-sm">
          <Card header={winner.score === loser.score ? "Tie" : "Winner"} subheader={`Score: ${winner.score.toLocaleString()}`} avatar={winner.profile.avatar_url} href={winner.profile.html_url} name={winner.profile.login}>
            <ProfileList profile={winner.profile} />
          </Card>

          {/* separate */}

          <Card header={winner.score === loser.score ? "Tie" : "Loser"} subheader={`Score: ${loser.score.toLocaleString()}`} avatar={loser.profile.avatar_url} href={loser.profile.html_url} name={loser.profile.login}>
            <ProfileList profile={loser.profile} />
          </Card>
        </div>
        <button className="btn dark-btn btn-space" onClick={this.props.onReset}>
          Reset
        </button>
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
