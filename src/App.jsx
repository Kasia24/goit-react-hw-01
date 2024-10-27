import React from "react";
import Profile from "./Profile/profile";
import FriendList from "./FriendList/FriendList";
import userData from "./userData.json";
import friends from "./FriendList/friends.json";

const App = () => {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
