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
    <div>

      <form action="#" method="post">

<label htmlFor="nombre">Nombre</label>
<input type="text" id="nombre" />
<label htmlFor="apellido">Apellido</label>
<input type="text" id="apellido" />
<label htmlFor="correo">Correo</label>
<input type="text" id="correo" />
<label htmlFor="mensaje">Mensaje</label>
<textarea name="mensaje" id="mensaje" placeholder="Dejanos tu mensaje!"></textarea>

<button type="button">Enviar</button>

      </form>
       

    </div>
  );
}
