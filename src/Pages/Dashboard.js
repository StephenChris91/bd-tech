import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";

import axios from "axios";
import useGetProfile from "../Hooks/useGetProfile";

import Profile from "./Profile";

//styling
import "./Dashboard.css";

const Dashboard = () => {
  const [userProfiles, setUserProfiles] = useState(null);
  const [profiles] = useGetProfile();

  console.log(profiles);

  useEffect(() => {
    setUserProfiles(profiles);
  }, []);


  return (
    <div id="user-wrapper">
      <h2 className="flex text-center font-bold text-2xl">
        <HiUserGroup />
        All Profiles
      </h2>
      <div className="grid grid-cols-3 mx-auto gap-5">
        {!userProfiles ? (
          <p>No Profiles Found</p>
        ) : (
          userProfiles.profiles.map((item) => (
            <div key={item.id}>
              <Profile {...item} id={item.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
