import { useEffect } from "react";
import { useState } from "react";
import "./Contacto.css";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = (event) => {
    setWidth(event.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="contenedorFormContacto">

      <form action="#" method="post">

        <div className="contenedorItemForm"><label htmlFor="nombre">Nombre</label>
        <input className="contenedorItemForm" type="text" id="nombre" /></div>
        <div className="contenedorItemForm"><label htmlFor="apellido">Apellido</label>
        <input className="contenedorItemForm" type="text" id="apellido" /></div>
        <div className="contenedorItemForm"><label htmlFor="correo">Correo</label>
        <input className="contenedorItemForm" type="text" id="correo" /></div>
        <div className="contenedorItemForm"><label htmlFor="mensaje">Mensaje</label>
        <textarea className="contenedorItemAreaForm" name="mensaje" id="mensaje" placeholder="Dejanos tu mensaje!"></textarea></div>

        <button className="botonEnviarContacto" type="button">Enviar</button>

      </form>
      <div>
        <img src="././public/foto5.jpg" alt="" className="imgContacto" />
        </div>

      


    </div>
  );
}
