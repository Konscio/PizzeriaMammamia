import React from "react";

export default function PriceFormatter({ precio }) {
  const precioFormateado = precio
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return <>${precioFormateado}</>;
}
