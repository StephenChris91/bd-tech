import { useState, useEffect } from "react";
import { HiUserGroup } from "react-icons/hi";
import { SyncLoader } from "react-spinners";

import useGetProfile from "../Hooks/useGetProfile";
import Profile from "./Profile";

//styling
import "./Dashboard.css";

const Dashboard = () => {
  const [userProfiles, setUserProfiles] = useState(null);
  const { profiles } = useGetProfile();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

  useEffect(() => {
    setUserProfiles(profiles.profiles);
  }, [profiles.profiles]);

  return (
    <div id="user-wrapper">
      <div className="w-full bg-blue-800 flex justify-center text-white p-5 text-center mx-auto mb-5">
        <h2 className="flex items-center justify-between font-bold text-2xl">
          <HiUserGroup className="mr-3" />
          All Profiles
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-5">
        {!userProfiles ? (
          <SyncLoader
            cssOverride={override}
            size={10}
            color="blue"
            className="mt-96"
          />
        ) : (
          userProfiles.map((item) => (
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
