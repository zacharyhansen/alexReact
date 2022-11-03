import styles from "../styles/Home.module.css";
import { Fragment, useEffect, useState } from "react";
import Item from "../components/Item";

// Add delete to each item
// Add a form to create a new item

const Home = () => {
  const [items, setItems] = useState(["Coffee", "Tea", "Milk"]);

  const handleMove = (position: number, move: number) => {
    console.log("position: ", position);
    if (position + move < 0 || position + move >= items.length) {
      return;
    }
    const newArray = items.slice();
    const tempItem = newArray[position + move];
    newArray[position + move] = newArray[position];
    newArray[position] = tempItem;
    setItems(newArray);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ol>
          {items.map((itemInfo, index) => (
            <Item
              key={itemInfo}
              index={index}
              item={itemInfo}
              onMoveUp={handleMove}
            />
          ))}
        </ol>
      </main>
    </div>
  );
};

export default Home;
