import { useEffect } from "react";
import { useState } from "react";
import "./Blends.css"

export default function Blends() {
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
    <div className="blendContainer">

      <div >
        <img className="imgBlend" src="./A1.jpg" alt="" />
        <p className="tituloBlend">A1</p>
      </div>
      
      <div>
        <img className="imgBlend" src="./A2.jpg" alt="" />
        <p className="tituloBlend">A2</p>
      </div>
      
      <div >
        <img className="imgBlend" src="./B1.jpg" alt="" />
        <p className="tituloBlend">B1</p>
      </div>
      
      <div >
        <img className="imgBlend" src="./B2.jpg" alt="" />
        <p className="tituloBlend">B2</p>
      </div>
      
      <div >
        <img className="imgBlend" src="./N1.jpg" alt="" />
        <p className="tituloBlend">N1</p>
      </div>
      <div >
        <img className="imgBlend" src="./N2.jpg" alt="" />
        <p className="tituloBlend">N2</p>
      </div>
      

    </div>
  );
}
