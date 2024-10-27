import React from "react";
import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img
        src={avatar}
        alt={`${name} avatar`}
        width="48"
        className="friend-avatar"
      />
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
