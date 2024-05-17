import { useState } from "react";
import DeleteButton from './deleteItem'
import DatePicker from "./dateExp";

//TODO SEE LINE 5
//remove line 16 to have one less state tracker, make grocery item name and expiration date an object instead
class groceryItemObject {
  constructor(itemName, myDate, DeleteButton) {
    this.name = itemName;
    this.expDate = myDate;
    this.delete = DeleteButton
  }
}

export default function AddGroceryItem() {
  const [groceryItem, setGroceryItem] = useState("");
  const [updateList, setList] = useState([]);
  const [selectDate, updateSelectedDate] = useState("");

  const expDateOutput = (event) => {
    updateSelectedDate(event.target.value);
  };
  const groceryInput = (event) => {
    setGroceryItem(event.target.value);
  };

  const checkItem = () => {
    if (selectDate.length === 0 && groceryItem.length === 0) {
      alert('Must enter a Grocery Item and Expiration Date')
    }
    else if (selectDate.length === 0) {
      alert('Must enter an expiration date')
    }
    else if (groceryItem.length === 0) {
      alert('Must enter a Grocery Item')
    }
    else if (groceryItem.length > 0 && selectDate.length > 0) {
      let reformatDate = `${selectDate.substring(5, 7)}/${selectDate.substring(8, 10)}/${selectDate.substring(0, 4)}`
      setList([...updateList, new groceryItemObject(groceryItem, reformatDate, DeleteButton)])
      // setList([...updateList, groceryItem]);
      // setGroceryItem("");
      // setExpDate([...expDate, reformatDate]);
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
                {item.name}
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
          {/* mapping over each grocery item objects expiration date */}
          <>
            <ul>

              {updateList.map((item, index) => (
                <li
                  key={index}
                  className="grid-cols-1 outline-none border-2 border-black mt-1"
                >
                  {item.expDate}

                </li>
              ))}
            </ul>
          </>
        </div>
        {/* Add to list button that's calling on the checkItem function when clicked to add a new grocery item */}
        <div className="flex-start ml-2">
          <button
            className="outline-none border-2 border-black rounded p-2"
            type="button"
            onClick={checkItem}
          >
            Add to list
          </button>
          <div
            className="mt-4">
          </div>
          <ul>
            {updateList.map((item, index) => (
              <li
                key={index}
                className="outline-none border-2 rounded border-black mt-1 p-1 bg-red-600 w-fit"
              >
                {<item.delete />}

              </li>
            ))}
          </ul>
        </div>
      </form>
    </section>
  );
}
