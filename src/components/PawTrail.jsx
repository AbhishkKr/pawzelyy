import { useEffect } from "react";

export default function PawTrail() {
  useEffect(() => {
    const handleMove = (e) => {
      const paw = document.createElement("img");

      paw.src = "/image/paww.png"; // your paw icon
      paw.className = "paw-trail";

      paw.style.left = e.pageX + "px";
      paw.style.top = e.pageY + "px";

      document.body.appendChild(paw);

      setTimeout(() => {
        paw.remove();
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}