import Titulo from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../Utils/pizzas";

function Home() {
  return (
    <>
      <Titulo
        name={"¡Pizzería Mamma Mia!"}
        frase={"¡Tenemos las mejores pizzas que podrás encontrar!"}
      />
      <div className="wrapper row justify-content-center">
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
