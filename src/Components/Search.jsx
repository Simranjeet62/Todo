import { useEffect, useRef } from "react";
import Styles from "./Search.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Search({ setFData, fData }) {
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.atask.value) return alert("No input detected");
    if (fData.find((el) => el.task === e.target.atask.value))
      return alert(`${e.target.atask.value} already exists`);
    setFData((prev) => [...prev, { task: e.target.atask.value, id: uuidv4() }]);
  }

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label to="atask">Add Task</label>
        <input type="text" placeholder="Add Task" id="atask" ref={inputEl} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
