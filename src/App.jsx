import { useEffect, useState } from "react";
import Search from "./Components/Search";
import List from "./Components/List";
import Heading from "./Components/Heading";

export default function App() {
  const [fData, setFData] = useState(function () {
    const storedValue = localStorage.getItem("formData");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleFilter(id) {
    setFData((prev) => prev.filter((el) => el.id !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("formData", JSON.stringify(fData));
    },
    [fData]
  );

  return (
    <>
      <Heading />
      <Search setFData={setFData} fData={fData} />
      <List fData={fData} handleFilter={handleFilter} />
    </>
  );
}
