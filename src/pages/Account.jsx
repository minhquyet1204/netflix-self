import React from "react";
import FavorMovies from "../components/FavorMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white relative">
        <img
          className="w-full h-[600px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 absolute top-0 left-0 w-[full] h-[600px]"></div>
        <div className="absolute bottom-0 w-[1440px] m-auto left-0 right-0 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Favorite Movie</h1>
        </div>
      </div>
      <FavorMovies />
    </>
  );
};

export default Account;
