import { useState } from "react";

import "../../App.css";
import { Button3 } from "../Mystyles";


const CrearUsuario = ({crearUsuario}) => {

  const [userDataCrear, setUserDataCrear] = useState({
    email: "",
    password: "",
  });

  const handleChangeCrear = (e) => {
    setUserDataCrear({
      ...userDataCrear,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });

    // setErrors(
    //   validar({
    //     ...userDataCrear,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearUsuario(userDataCrear)
  };

  return (
    <div>
      <h1>Proyecto Individual Soy HENRY</h1>
      <br />
      <h1>Videogames</h1>
      <br />
      <form onSubmit={submitHandlerCrear}>
        <h2
          style={{
            color: "white",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}
        >
          CREAR USUARIO
        </h2>

        <div className="InputLogin">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            name="email"
            type="text"
            placeholder="Ingrese su Email"
            value={userDataCrear.email}
            onChange={handleChangeCrear}
          />
          <br />
          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userDataCrear.password}
            onChange={handleChangeCrear}
          />
          <hr style={{ borderStyle: "none" }} />
          <Button3
            type="submit"
            disabled={!userDataCrear.email || !userDataCrear.password}
          >
            CREAR
          </Button3>
        </div>
      </form>
    </div>
  );
};
export default CrearUsuario;
