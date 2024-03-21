import { useState } from "react";

export default function AddGroceryItem() {
  const [groceryItem, setGroceryItem] = useState("");

  const groceryInput = (event) => {
    setGroceryItem(event.target.value);
    console.log(groceryItem);
  };


  const checkItem = () => {
    console.log(groceryItem);
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
        </div>
        <button type="button" onClick={checkItem}>
          Add
        </button>
      </form>
    </section>
  );
}
