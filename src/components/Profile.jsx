import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.svg";
import profile from "../assets/images/profile.svg";
import { getProfile } from "../api/userRequest";

const Profile = () => {
  const [userDetails, setuserDetails] = useState({});
  const getUser = async () => {
    const data = await getProfile();

    setuserDetails(data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <nav className="h-[72px] max-w-[1920px] w-full flex justify-between px-10 border-b-2 border-gray-500 items-center">
        <div>
          <img src={hero} alt="" />
        </div>
        <div className="flex flex-col text-sm">
          <span className="text-lightGrey">{userDetails.fullName}</span>
          <span>NK admin</span>
          <span className="cursor-pointer">Log out</span>
        </div>
      </nav>
      <div className="flex justify-center items-start gap-10 mt-5">
        <div className="profile-pic h-[140px] w-[140px] bg-[#F7F8FA] rounded-full flex items-center justify-center">
          <img src={profile} alt="" />
        </div>
        <div className="profile text-[#7181A1] border-[2px] border-gray-400 p-10">
          <div className="text-lg">Profile</div>
          <div className="grid grid-cols-2 gap-3 text-[#7181A1] text-xs mt-5">
            <span className="">Name</span>
            <span>{userDetails.fullName}</span>
            <span>Email</span>
            <span>{userDetails.email}</span>
            <span>DOB</span>
            <span>{userDetails.dateOfBirth}</span>
            <span>Phone number</span>
            <span>{userDetails.phoneNumber}</span>
            <span>Address</span>
            <span>{userDetails.address}</span>
            <span>City</span>
            <span>{userDetails.city}</span>
            <span>State</span>
            <span>{userDetails.state}</span>
            <span>Zip code</span>
            <span>{userDetails.zipcode}</span>
            <span>Country</span>
            <span>{userDetails.country}</span>
            <span>Security</span>
            <span>{userDetails.security}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
