import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List({ fData, handleFilter }) {
  return (
    <div className={styles.container}>
      {fData.map((el) => (
        <ListItem
          task={el.task}
          id={el.id}
          key={el.id}
          handleFilter={handleFilter}
        />
      ))}
    </div>
  );
}
