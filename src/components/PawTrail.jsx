import { useEffect } from "react";

export default function PawTrail() {
  useEffect(() => {
    let isLeft = true;
    let lastSpawn = 0;

    const handleMove = (e) => {
      const now = Date.now();

      // limit paw spawn speed
      if (now - lastSpawn < 80) return;
      lastSpawn = now;

      const paw = document.createElement("img");

      paw.src = "/image/paww.png";
      paw.className = "paw-trail";

      // alternate paws
      const offset = isLeft ? -12 : 12;
      const rotation = isLeft ? -20 : 20;

      paw.style.left = e.pageX + offset + "px";
      paw.style.top = e.pageY + "px";
      paw.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

      isLeft = !isLeft;

      document.body.appendChild(paw);

      setTimeout(() => {
        paw.remove();
      }, 900);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}