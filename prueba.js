function recomendarPelicula() {
  const edad = document.getElementById("edad").value;

  let recomendaciones = ""; // Declaramos la variable aquí

  switch (true) {
    case edad < 7:
      recomendaciones = "Películas animadas y educativas";
      break;
    case edad >= 7 && edad <= 17:
      recomendaciones = "Películas adecuadas para la familia, como animaciones, aventuras y comedias familiares";
      break;
    case edad >= 18 && edad <= 30:
      recomendaciones = "Películas como acción, drama, comedia y ciencia ficción";
      break;
    default:
      recomendaciones = "Películas clásicas y dramas";
  }

  document.getElementById("recomendacion").innerHTML = `Te recomendamos ${recomendaciones}`;
}