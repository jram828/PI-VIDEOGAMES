const { Videogame, Genre} = require("../db");


const postVideoGame = async (req, res) => {
  const { name, description, platforms, image, launchDate, rating, genres } = req.body;
  
  console.log('GEnres: ', genres)
  if (!name || !description || !platforms||!image||!launchDate||!rating) {
    res.status(400).send("Faltan datos");
  } else {
    try {
      var newVideogame = await Videogame.create(
        { name, description, platforms, image, launchDate, rating},
      );
      newVideogame.addGenres(genres);
      console.log("GEnres: ", genres);

      return res.status(200).json(newVideogame);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = postVideoGame;
