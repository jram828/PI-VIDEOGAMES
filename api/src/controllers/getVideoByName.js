//https://api.rawg.io/api/games?search={game}
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
const { Videogame } = require("../db");
const cleanVideogame = require("../utils/cleanVideogameAPI");
const { Op } = require("sequelize");

const getVideoByName = async (req, res) => {
  const { name } = req.query;
  console.log("Name: ", name);
  let videogamesDB = [];
  let videogamesAPI = [];
  let videogames = [];
  try {
    videogamesDB = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    });

    //console.log("Videogames DB: ", videogamesDB);
    //console.log("URL", `${URL}?search=${name.name}&key=${APIKEY}`);
    const response = await axios.get(`${URL}?search=${name}&key=${APIKEY}`);
    //console.log("Response:", response.data.results);
    videogamesAPI = response.data.results.map((videogame) => {
      return cleanVideogame(videogame);
    });
    videogames = [...videogamesDB,... videogamesAPI].slice(0, 15);

    console.log("Videogame API:", videogamesAPI);
    res.status(200).json(videogames);
  } catch (error) {
    // console.log('Aqui se rompe');
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideoByName;
