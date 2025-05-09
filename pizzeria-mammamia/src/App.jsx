import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CardPizza from "./components/CardPizza";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <NavBar />
      <Register />
      {/* <Login /> */}
      {/* <Home />
      <div className="wrapper row justify-content-center">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
        />
        <CardPizza
          name="Española"
          price={7950}
          ingredients={["queso", "tomates", "champinon", "orégano"]}
          img="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg"
        />
        <CardPizza
          name="Pepperoni"
          price={8950}
          ingredients={["peperoni", "queso", "aceitunas", "orégano"]}
          img="https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501057_1280.jpg"
        />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
