import { useState } from "react";

export default function AddGroceryItem() {
  const [groceryItem, setGroceryItem] = useState("");
  const [updateList, setList] = useState([]);

  const groceryInput = (event) => {
    setGroceryItem(event.target.value);
  };

  const checkItem = () => {
    if (groceryItem.length > 0) {
      setList([...updateList, groceryItem]);
      setGroceryItem("");
    }
  };

  return (
    <section className="p-1 mr-10 border-2 rounded border-black">
      <form className="grid grid-cols-2">
        <div className="grid grid-rows-2">
          <h3>Grocery Item</h3>
          <input
            type="text"
            name="name"
            value={groceryItem}
            onChange={groceryInput}
            className="outline-none border-2 rounded border-black"
          ></input>
          <ul>
            {updateList.map((item, index) => (
              <li
                key={index}
                className="outline-none border-2 border-black mt-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button type="button" onClick={checkItem}>
          Add
        </button>
      </form>
    </section>
  );
}
