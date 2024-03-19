const cleanVideogameAPI = (results) => {
  //console.log('results clean:',results)
  if (results.length!==0) {
  const {
    id,
    name,
    description,
    background_image,
    released,
    rating,
    platforms,
    genres,
    } = results;
    
    const platformsFlat = platforms.map((element) => element.platform.name)
      // .filter((name, index, arr) => arr.indexOf(name) === index);
    const genresFlat = genres.map((genre) => genre.name);

  return {
    id,
    name,
    description:"Not Available",
    platforms:platformsFlat,
    image:background_image,
    launchDate:released,
    rating,
    genres:genresFlat,
  };
  } else {
    return {};
  }
}

module.exports =cleanVideogameAPI;
