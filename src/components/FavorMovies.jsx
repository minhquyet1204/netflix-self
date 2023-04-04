import React, { useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

import { AiOutlineClose } from "react-icons/ai";

const FavorMovies = () => {
  const { user } = UserAuth();
  const [favorMovies, setFavorMovies] = useState([]);
  const movieDB = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(movieDB, (doc) => {
      setFavorMovies(doc.data()?.favorMovie);
    });
  }, [user?.email]);

  const deleteFavorMovie = (id) => {
    const filterMovie = favorMovies.filter((movie) => movie.id !== id);
    console.log(filterMovie);
    updateDoc(movieDB, { favorMovie: filterMovie });
  };

  return (
    <section className="flex flex-wrap gap-8 mt-10 max-w-[1440px] m-auto px-4">
      {favorMovies?.map((movie) => (
        <div key={movie.id}>
          <div className="relative group">
            <img
              className="w-52 rounded-xl"
              src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
              alt=""
            />
            <div className="absolute inset-0 hover:bg-black/40">
              <button
                className="absolute top-0 right-0 p-4"
                onClick={() => deleteFavorMovie(movie.id)}
              >
                <AiOutlineClose
                  size={28}
                  className="opacity-0 group-hover:opacity-100 hover:text-red-600 "
                />
              </button>
            </div>
          </div>
          <h2 className="w-52 mt-2 font-semibold ">{movie.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default FavorMovies;
