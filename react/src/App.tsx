import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) {
      console.error("VITE_API_URL is not defined");
      return;
    }

    fetch(`${API_URL}/api/check`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setData(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, [API_URL]);

  return (
    <div className="text-2xl flex justify-center min-h-screen items-center flex-col">
      <h3 className="p-2">{data}</h3>

    </div>
  );
};

export default App;
  