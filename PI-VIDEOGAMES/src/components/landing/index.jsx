

    //import React from "react"
import "../../App.css";
// import './about.css'
//import ReactPlayer from 'react-player'
//import videoRyM from '../../assets/videoRyM.mp4'

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
      {/* <div className="divFoto">
        <img className="fotoAbout" src={foto} alt="Foto Autor" />
      </div> */}

      <br />
      <div className="video">
        {/* <ReactPlayer
          url={videoRyM}
          height={"100%"}
          width={"100%"}
          controls
          playing
          loop
        /> */}
      </div>
    </div>
  );
};
export default Landing;
