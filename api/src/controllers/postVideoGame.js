const { Videogame } = require("../db");

const postVideoGame = async (req, res) => {
  const { id, name, description, platforms,image,launchDate,rating,idGenre} = req.body;
  if (!id || !name || !description || !platforms||!image||!launchDate||!rating) {
    res.status(400).send("Faltan datos");
  } else {
    try {
      const newVideogame = await Videogame.findOrCreate({
        where: { id, name, description, platforms, image, launchDate, rating ,idGenre},
      });
      return res.status(200).json(newVideogame);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = postVideoGame;
