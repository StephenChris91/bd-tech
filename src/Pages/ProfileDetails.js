import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Avatar } from "flowbite-react";
import { FaHeart, FaEnvelope, FaStar } from "react-icons/fa";
import FavButton from "../Components/FavButton";

//import default image
import defaultImg from "../Images/avatar2.png";

//hook
import usePostRequest from "../Hooks/usePostProfile";
import useGetProfile from "../Hooks/useGetProfile";

const ProfileDetails = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [response, makePostRequest] = usePostRequest();
  const [fetchProfileById, profile] = useGetProfile();
  console.log(profile);

  //console.log(makePostRequest(id));

  const handleButtonClick = async () => {
    const url = "https://fa.bdtechnologies.ch/api/v1/favorites";
    // const data = id;

    const data = {
      profileId: profile.id,
    };

    await makePostRequest(url, data);
    console.log(response);
  };

  useEffect(() => {
    fetchProfileById(id);
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="profile-page pt-80">
        <section className="relative block h-500">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(
                "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"
              )`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button onClick={handleButtonClick}>
                        <FaStar />
                        Favorites
                      </Button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <Avatar
                    img={defaultImg}
                    size="xl"
                    rounded={true}
                    bordered={true}
                    color="light"
                  />
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    <span className="">{profile.name}</span>
                    <span> - </span>
                    <span>{profile.age}yrs</span>
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {profile.city}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {profile.relationship_status}
                  </div>
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
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iste sed illo reiciendis rerum explicabo atque,
                        non, necessitatibus cumque, libero consectetur
                        cupiditate? Quas blanditiis nostrum, esse quos in,
                        expedita nam porro quo architecto fugit iste excepturi
                        inventore. Dolores magni nemo ullam vero eligendi
                        excepturi vel. Quia maiores impedit vel laboriosam quos.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      <FaHeart className="text-red-800 inline" />
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Stephen Chris
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default ProfileDetails;
