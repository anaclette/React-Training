import Tarjeta from './Tarjeta';
import "./Contenedor-tarjetas.css"
import imagenProducto from "../components/img/cucha.jpg"

const tarjetas = () => {
	let precios = ['7000', '8000', '5000', '4500', '6350', '8900', '6500', '7000']
	return (
		<div className="contenedor-tarjetas">
			{precios.map((precio, index) => 
					<Tarjeta precio={precio} key={index} nombre="Cucha gatito" imagen={imagenProducto} />
				
			)}
		</div>
	)
};

export default tarjetas;
