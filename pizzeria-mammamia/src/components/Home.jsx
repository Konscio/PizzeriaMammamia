import Titulo from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPizzas() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      console.log(data);
      setPizzas(data);
    } catch {
      alert("¡Algo salio mal! Recarga la pagina.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <Titulo
        name={"¡Pizzería Mamma Mia!"}
        frase={"¡Tenemos las mejores pizzas que podrás encontrar!"}
      />
      <div className="wrapper row justify-content-center">
        {isLoading ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
        ) : null}
        {pizzas.map((pizza) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={pizza.id}>
            <CardPizza {...pizza} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;
