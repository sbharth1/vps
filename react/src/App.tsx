import  { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/check", {
      method: "GET",
      headers: {
        "Contetn-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-2xl flex justify-center min-h-screen items-center flex-col">
      <p className=" p-2"> hello react vite.</p>
      <p className=" p-2"> {data} </p>
    </div>
  );
};

export default App;
