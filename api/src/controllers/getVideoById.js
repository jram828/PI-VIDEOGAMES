//https://api.rawg.io/api/games/{id}
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games/";
const axios = require("axios");

const getVideoById = async (req, res) => {
  const ID = req.params.idVideogame;
  try {
    const response = await axios.get(`${URL}${ID}?key=${APIKEY}`);
    //console.log('Response:',response)
    if (!response.data.results) {
      const { id, name, description, platforms, image, launchDate, rating,genres } =
        response.data;

      const videogame = {
        id,
        name,
        description,
        platforms,
        image,
        launchDate,
        rating,
        genres
      };
      res.status(200).json(videogame);
    } else {
      res.status(400).json({ message: "Not found" });
      console.log(res.status);
    }
  } catch (error) {
    // console.log('Aqui se rompe');
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideoById;