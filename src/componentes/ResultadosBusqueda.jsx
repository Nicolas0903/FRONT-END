import { useState, useEffect } from "react";
import '../App.css'
import Menu from './Menu'
import Pie from './Pie'

function ResultadoDeBusqueda() {
  const [Productos, Producto] = useState([])

  useEffect(() => {
    fetch('http://localhost:3080/api/resultadosBusqueda/findAll')
      .then((res) => res.json())
      .then((res) => setPeliculas(res))
      .finally(() => {
        console.log("ya terminamos")
      })
  }, [])

  return (
    <>
      <Cabecera />
      <Menu />
      <div>
        <ol>
          {Productos &&
            Productos.map((p, index) => (
              <li key={p.nombre}> {p.imagen} {p.precio} {p.marca} </li>
            ))}9
        </ol>
      </div>
      <Pie />
    </>
  );
}

export default ResultadoDeBusqueda;







