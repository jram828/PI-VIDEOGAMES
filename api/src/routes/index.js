const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoByName = require("../controllers/getVideoByName");
const getVideogames = require("../controllers/getVideogames");
const getVideoById = require("../controllers/getVideoById");
const getGenres=require("../controllers/getGenres");
const postVideoGame = require("../controllers/postVideoGame");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames/name=", getVideoByName);
router.get("/videogames", getVideogames);
router.get("/videogames/:idVideogame", getVideoById);
router.get("/genres", getGenres);
router.post("/videogames", postVideoGame);


module.exports = router;




