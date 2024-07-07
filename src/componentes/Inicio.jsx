import '../App.css';
import Menu from './Menu';
import Pie from './Pie';
import "../Styles/imagenes.css"

function Inicio() {
  return (
    <>
      <Menu />
      <div className="main-content">
        <img src={Logo} className="logo" alt="Logo del sitio web" />
        <div className="collection-section">
          <h2>Colecciones de items 1 disponibles</h2>
          <CollectionComponent title="Colección de items 1 disponibles para la venta" />
          <h2>Colecciones de items 2 disponibles</h2>
          <CollectionComponent title="Colección de items 2 disponibles para la venta" />
          <h2>Colecciones de items 3 disponibles</h2>
          <CollectionComponent title="Colección de items 2 disponibles para la venta" />
        </div>
        <div className="new-items-section">
          <h2>Nuevos</h2>
          <NewItemComponent title="Nuevos items disponibles para la venta" />
        </div>
      </div>
      <Pie />
    </>
  );
}

export default Inicio;