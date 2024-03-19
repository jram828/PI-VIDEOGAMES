require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games?key=";
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const cleanVideogameAPI = require("../utils/cleanVideogameAPI");
const cleanVideogameDB = require("../utils/cleanVideogameDB");

const getVideogames = async (req, res) => {
  try {
    const responseDB = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
  const videogamesDB = responseDB.map((videogame) => {
  return cleanVideogameDB(videogame);
});
    console.log("Videogame con Genre: ", videogamesDB);

    console.log("URL:", `${URL}${APIKEY}`);

    const response = await axios.get(`${URL}${APIKEY}`);
    // if (response.data.results.length !== 0) {
    const videogamesAPI = response.data.results.map((videogame) => {
      return cleanVideogameAPI(videogame);
    });
    res.status(200).json([...videogamesDB, ...videogamesAPI]);
    // } else {
    //   res.status(400).json({ message: "No genres were found" });
    //   console.log(res.status);
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
