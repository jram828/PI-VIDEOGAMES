const validar=(input)=> {
  const errors = {};

  if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  }
  if (input.description.length > 255) {
    errors.description = "Máximo 255 caracteres";
  }
  if (input.image.length > 255) {
    errors.image = "Máximo 255 caracteres";
  }

  if (Number(input.rating)>5) {
    errors.rating = "El rating debe ser menor a 5";
  }
  if (input.launchDate.length < 10) {
    errors.launchDate = "Debe seleccionar una fecha";
  }
  //console.log(errors);
  return errors;
}
export default validar;
