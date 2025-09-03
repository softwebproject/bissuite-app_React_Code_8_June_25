import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-10 py-10 gap-4">
        <div className="w-full md:w-1/4">
          <ProfileCard />
        </div>
        <div className="w-full md:w-3/4 ">
          <ProfileDetails />
        </div>
      </div>
    </>
  );
};

export default Profile;
