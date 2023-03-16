import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button, Avatar, Rating } from "flowbite-react";
import { FaHeart, FaEnvelope, FaStar } from "react-icons/fa";

//hook
import usePostRequest from "../Hooks/usePostProfile";

import defaultImg from "../Images/avatar2.png";

const Profile = ({ id, name, city, age }) => {
  const [response, makePostRequest] = usePostRequest();

  const handleButtonClick = async () => {
    const url = "https://fa.bdtechnologies.ch/api/v1/favorites";

    const data = {
      profileId: id,
    };

    await makePostRequest(url, data);
    console.log(response);
  };
  return (
    <>
      <div className="max-w-sm">
        <Card className="overflow-hidden">
          <div className="w-full bg-slate-900 p-10">
            <Button
              className="z-50"
              icon={<FaStar />}
              onClick={handleButtonClick}
            >
              <FaStar />
            </Button>
            <Link to={`/profile/${id}`}>
              <Avatar
                img={defaultImg}
                size="xl"
                rounded={true}
                bordered={true}
                color="light"
              />
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {name} - {age}yrs
          </h2>
          <p className="text-center">{city}</p>
          <div className="text-center justify-center items-center flex flex-wrap gap-2 mb-2 mx-auto text-blueGray-600 mt-10">
            <div>
              <Button className="w-32">
                <FaEnvelope className="mr-3" /> Message
              </Button>
            </div>
            <div>
              <Button className="w-32">
                <FaHeart className="mr-3" /> Flirt
              </Button>
            </div>
          </div>
          <p className=" text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium ipsum tenetur perspiciatis ab deleniti cupiditate
            pariatur quibusdam et sapiente placeat.
          </p>
          <div className="mx-auto">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Profile;
