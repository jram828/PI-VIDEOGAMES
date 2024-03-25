import "../../App.css";


const Landing = ({ signIn }) => {
  
  return (
    <div className="divLanding">
      <h1>Proyecto Individual Soy HENRY</h1>
      <br />
      <br />
      <h1>Videogames</h1>
      <br />
      <br />
      <button className="buttonLanding" onClick={signIn}>🎮 </button>


      <br />
    </div>
  );
};
export default Landing;
