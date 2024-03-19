import Card from "../card";

export const Cards = ({ videogames, onClose }) => {

  console.log('Videogames Cards: ',videogames[0])
  return (
    <div className="cards">
      {/* {videogames.map((videogame) => {
        return (
          <div key={videogame.name}>
            <Card character={videogame} onClose={onClose} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Cards;
