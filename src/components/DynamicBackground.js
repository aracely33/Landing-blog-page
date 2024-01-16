// DynamicBackground.js
import React, {useState, useEffect} from "react";

const DynamicBackground = () => {
  const [background, setBackground] = useState(getRandomGradient);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground(getRandomGradient());
    }, 2000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  function getRandomGradient() {
    const colors = ["#060A3A", "#E69243", "#8BF9F2"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `linear-gradient(to right, ${colors[randomIndex]}, ${
      colors[(randomIndex + 1) % colors.length]
    })`;
  }

  return (
    <div className="dynamic-background" style={{background}}>
      {/* Contenido del componente */}
    </div>
  );
};

export default DynamicBackground;
