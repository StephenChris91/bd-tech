import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const useToggleFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async (id) => {
    const url = "https://fa.bdtechnologies.ch/api/v1/favorites";
    const data = { profileId: id };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response;
      if (isFavorite) {
        // Send a DELETE request to remove the profile from the favorites list
        response = await axios.delete(url, { data }, config);
        toast.error("🦄 Favorites removed!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // Send a POST request to add the profile to the favorites list
        response = await axios.post(url, JSON.stringify(data), config);
        toast.success("🦄 Favorites added successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      const responseData = response.data;
      console.log(responseData);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  return [isFavorite, toggleFavorite];
};

export default useToggleFavorite;
