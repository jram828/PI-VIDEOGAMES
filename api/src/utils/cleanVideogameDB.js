const cleanVideogameDB = (results) => {
  //console.log('results clean:',results)
  if (results.length !== 0) {
    const {
      id,
      name,
      description,
      image,
      launchDate,
      rating,
      platforms,
      genres,
    } = results;

    const genresFlat = genres.map((genre) => genre.name);

    return {
      id,
      name,
      description,
      platforms,
      image,
      launchDate,
      rating,
      genres: genresFlat,
    };
  } else {
    return {};
  }
};

module.exports = cleanVideogameDB;
