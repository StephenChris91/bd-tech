import { useState } from "react";

function usePostProfile() {
  const [response, setResponse] = useState(null);

  const makePostRequest = async (url, data) => {
    console.log(JSON.stringify(data));
    data = {
      method: "POST",
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, data);

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return [response, makePostRequest];
}

export default usePostProfile;
