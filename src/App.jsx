/* archivo App.jsx en carpeta src */ 

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Rentals from "./components/Rentals";
import "./App.css";
import "../dist/output.css";

function App() {


  const [selectedCity, setSelectedCity] = useState(null);

  const handleClick = (city) => {
    selectedCity(city);
 };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <Nav data={data} onCityClick={handleClick} isOpen={ isMenuOpen } />
      <Rentals data={data} selectedCity={selectedCity} />
    </>
  );
}

export default App;
