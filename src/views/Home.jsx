import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";

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
      <img style={{width:"1850px", height:"500px"}} className="imgHome" src="./w1.jpg" alt="" />
    </div>
  );
}
