//https://api.rawg.io/api/games/{id}
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games/";
const axios = require("axios");
const {Videogame} = require("../db");

const getVideoById = async (req, res) => {
  const ID = req.params.idVideogame;
  try {
    
    //console.log('Response:',response)
 
      
      if (ID.length === 36) {
            var videogame = await Videogame.findAll({
              where: {
                id: ID,
                },
            },
            );
      } else {
        const response = await axios.get(`${URL}${ID}?key=${APIKEY}`);
        const { id, name, description, platforms, image, launchDate, rating, genres } =
          response.data;

        var videogame = {
          id,
          name,
          description,
          platforms,
          image,
          launchDate,
          rating,
          genres
        };
      }
        res.status(200).json(videogame);
      // } else {
      //   res.status(400).json({ message: "Not found" });
      //   console.log(res.status);
      // }
    
  } catch (error) {
    // console.log('Aqui se rompe');
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideoById;