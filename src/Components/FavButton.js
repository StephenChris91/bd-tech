import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";

const FavButton = ({ icon, children, profId, handleClick }) => {
  return (
    <>
      <Button
        className="bg-pink-500 active:bg-pink-600 uppercase ml-64 text-center text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <span className="mr-2">{icon}</span>
        {children}
      </Button>
    </>
  );
};

export default FavButton;
