import Boton from './Boton';
import './Tarjeta.css';

const Tarjeta = ({ imagen, nombre = 'No disponible', precio }) => {
	// desestructurar props
	// parametros por defecto
	return (
		<div className="tarjeta">
			<img
				src={
					precio > 6000 ? (
						'https://i.pinimg.com/originals/dd/5c/e1/dd5ce1c953981b9d80a05dfe30c99f87.jpg'
					) : (
						imagen
					)
				}
				alt="cucha gatito"
			/>
			<p>{nombre}</p>
			<p>{precio}</p>
			<Boton />
		</div>
	);
};

export default Tarjeta;
