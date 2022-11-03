import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";

// props: {
//   item: item
// }

const Item = ({ item, onMoveUp, index }) => {
  const [checked, setChecked] = useState(false);

  // checked -> false / boolean to track a peice state (this case if its been clicked)
  // setChecked -> function to change boolean of checked, the value that you now want checked to be
  // all it does is set checked to the new value provided
  const handleClick = (e) => {
    setChecked(!checked);
  };

  const handleMoveUp = (e) => {
    console.log("e: ", e);
    onMoveUp(index, -1);
  };

  const handleMoveDown = (e) => {
    console.log("e: ", e);
    onMoveUp(index, 1);
  };

  return (
    <li>
      <label className="switch">
        <input checked={checked} type="checkbox" onChange={handleClick} />
        <span className="slider"></span>
        {item}
      </label>
      <button onClick={handleMoveUp}>move up</button>
      <button onClick={handleMoveDown}>move down</button>
    </li>
  );
};

export default Item;
