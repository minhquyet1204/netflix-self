import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [favor, setFavor] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const favorMovies = async () => {
    if (user?.email) {
      setFavor(!favor);
      await updateDoc(movieID, {
        favorMovie: arrayUnion({
          id: item.id,
          title: item.title,
          image: item.poster_path,
        }),
      });
    } else {
      setHasUser(true);
    }
  };
  return (
    <>
      <div className="w-[200px] sm:w-[230px] md:w-[260px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100 ">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={favorMovies}>
            {favor ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
      {/* 
      {hasUser && (
        <div className="fixed inset-0 bg-black/40 z-10">
          <div className="flex justify-center items-center h-full">
            <div className="lg:w-[900px] w-full text-center flex items-center justify-center h-[100px] bg-[#0f0f0f] animate-dropDown">
              Please{" "}
              <Link to="/login" className="italic font-bold ">
                log in{" "}
              </Link>
              first
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Movie;
