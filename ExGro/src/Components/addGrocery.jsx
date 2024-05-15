import { useState } from "react";
import DatePicker from "./dateExp";

//TODO SEE LINE 5
//remove line 16 to have one less state tracker, make grocery item name and expiration date an object instead
class groceryItemObject {
  constructor(itemName, myDate) {
    this.name = itemName;
    this.expDate = myDate;
  }
}

export default function AddGroceryItem() {
  const [groceryItem, setGroceryItem] = useState("");
  const [updateList, setList] = useState([]);
  const [selectDate, updateSelectedDate] = useState("");
  const [expDate, setExpDate] = useState([]);

  const expDateOutput = (event) => {
    updateSelectedDate(event.target.value);
  };
  const groceryInput = (event) => {
    setGroceryItem(event.target.value);
  };

  const checkItem = () => {
    if (groceryItem.length > 0 && selectDate.length > 1) {
      setList([...updateList, groceryItem]);
      setGroceryItem("");
      let reformatDate = `${selectDate.substring(5, 7)}-${selectDate.substring(8, 10)}-${selectDate.substring(0, 5)}`
      setExpDate([...expDate, reformatDate]);
      console.log(updateList);
      console.log(expDate);
    }
  };

  //TODO: LOOK INTO <table> instead of a list for the items
  //TODO: Need to also make a remove button for each option
  //TODO: Need to figure out how to sort expiration dates
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
        <div className="ml-2 grid grid-rows-2">
          <h3>Expiration Date</h3>
          <input
            className="flex-center"
            aria-label="Date"
            value={selectDate}
            type="date"
            onChange={expDateOutput}
          />
          <ul>
            {expDate.map((item, index) => (
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
