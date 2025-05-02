function Titulo({ name, frase }) {
  return (
    <header class="banner">
      <h1 class="display-4 fw-bold">{name}</h1>
      <p class="lead">{frase}</p>
    </header>
  );
}
export default Titulo;
