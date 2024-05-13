import { useState } from "react";
import DatePicker from "./dateExp";

export default function AddGroceryItem() {
  const [groceryItem, setGroceryItem] = useState("");
  const [updateList, setList] = useState([]);
  const [expDate, setExpDate] = useState([]);

  const expDateOutput = (event) => {
    setExpDate(event.target.value);
  };
  const groceryInput = (event) => {
    setGroceryItem(event.target.value);
  };

  const checkItem = () => {
    if (groceryItem.length > 0) {
      setExpDate([...expDate, expDateOutput]);
      setList([...updateList, groceryItem]);
      setGroceryItem("");
      console.log(updateList);
      console.log(expDate);
    }
  };

  return (
    <section className="p-1 mr-10 border-2 rounded border-black">
      <form className="grid grid-cols-3">
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
        <div className="flex-start">
          <h3>Expiration Date</h3>
          <input
            className="flex-center"
            aria-label="Date"
            type="date"
            onChange={expDateOutput}
          />
        </div>
        <div className="flex-start">
          <button
            className="outline-none border-2 border-black rounded p-2"
            type="button"
            onClick={checkItem}
          >
            Add to list
          </button>
        </div>
      </form>
    </section>
  );
}
