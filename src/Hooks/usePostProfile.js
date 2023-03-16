import { useState } from "react";

function usePostProfile() {
  const [response, setResponse] = useState(null);

  const makePostRequest = async (url, data) => {
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return [response, makePostRequest];
}

export default usePostProfile;
