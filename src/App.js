import "./App.css";
import React, { useState } from "react";
import Movie from "./componets/Movie";
import Add from "./componets/Add";
import NavBar from "./componets/NavBar";
import Overview from "./componets/Overview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movie, setmovie] = useState([
    {
      id: 1,
      title: "Captain America",
      img: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg",
      rate: "4",
      description: " Action ",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/W4DlMggBPvc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 2,
      title: "The A Team",
      img: "https://images.moviesanywhere.com/023153b7817f12dd40c602e7449d1979/927a4c0e-b0b3-4f97-b74c-141b45ccc48b.jpg",
      rate: "5",
      description: "Action",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/exyzEFrmLuM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 3,
      title: "JUMANJI",
      img: "https://fr.web.img4.acsta.net/pictures/19/11/07/12/52/2054035.jpg",
      rate: "5",
      description: "Comedy",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/rBxcF-r9Ibs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 4,
      title: "Doctor strange",
      img: "https://fr.web.img2.acsta.net/pictures/16/09/09/08/57/518191.jpg",
      rate: "4",
      description: " Fantasy ",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/HSzx-zryEgM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 5,
      title: "The Meg",
      img: "https://poweredbyrobotsblog.files.wordpress.com/2019/12/the-meg.jpg",
      rate: "3",
      description: "Action",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/udm5jUA-2bs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 6,
      title: "SAW",
      img: "https://fr.web.img6.acsta.net/pictures/17/10/04/11/04/3025573.jpg",
      rate: "2",
      description: "Horror",
      trailer: (
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/X744nrej8_4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);

  const addMovieHandler = (newMovie) => {
    setmovie([...movie, newMovie]);
  };

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  return (
    <Router>
      <Switch>
        <div>
          <NavBar search={search} setSearch={setSearch} setRating={setRating} />
          <Route path="/" exact>
            <Movie movie={movie} search={search} rating={rating} />
            <Add addMovieHandler={addMovieHandler} />
          </Route>
          <Route path="/Overview/:Id">
            <Overview movie={movie} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
