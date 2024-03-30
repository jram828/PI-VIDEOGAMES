const validar=(input)=> {
  const errors = {};
  // const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const regexnumber = /.*\d.*/;


  if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  }
  if (!input.description) {
    errors.description = "Debe ingresar una descripción";
  }
  if (input.image.length > 255) {
    errors.image = "La URL de la imagen debe contener máximo 255 caracteres";
  }

  //validacion del password
  // if (!regexnumber.test(input.password)) {
  //   errors.password = "La contrasena debe tener un numero";
  // }
  console.log(typeof input.rating)
  if (Number(input.rating)>5) {
    errors.rating = "El rating debe ser menor a 5";
  }
  if (input.launchDate.length < 10) {
    errors.launchDate = "Debe seleccionar una fecha";
  }
  console.log(errors);
  return errors;
}
export default validar;
