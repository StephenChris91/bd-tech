import { useEffect, useState } from "react";

const useGetProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch(
        "https://fa.bdtechnologies.ch/api/v1/profiles"
      );
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  const fetchProfileById = async (id) => {
    const response = await fetch(
      `https://fa.bdtechnologies.ch/api/v1/profiles/${id}`
    );
    const data = await response.json();
    setProfile(data);
  };

  return { profiles, profile, fetchProfileById };
};

export default useGetProfile;
