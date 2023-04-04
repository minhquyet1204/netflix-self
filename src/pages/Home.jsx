import React from "react";
import tmdbApi from "../api/tmdbApi";
import Header from "../components/Header";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Row rowID="1" title="Popular" fetchURL={tmdbApi.moviePopular()} />
        <Row rowID="2" title="Top Rated" fetchURL={tmdbApi.movieToprated()} />
      </main>
    </>
  );
};

export default Home;
