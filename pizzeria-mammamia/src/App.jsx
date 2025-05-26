import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <NavBar />
      {/* <Formulario /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
