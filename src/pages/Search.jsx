import { useLocation } from "react-router-dom";

export default function Search() {

  const query = new URLSearchParams(useLocation().search);

  const type = query.get("type");
  const location = query.get("location");

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">
        {type} near {location}
      </h1>
    </div>
  );
}