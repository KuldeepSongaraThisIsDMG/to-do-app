import * as React from "react";
import "./App.css";
const axios = require("axios");

export default function App() {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");
  const handleChange = (e) => setText(e.target.value);

  axios
    .get("http://webcode.me")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text && !text.length) {
      return;
    }

    const newItem = {
      text: text,
      id: items.length + 1
    };

    setText("");
    setItems(items.concat(newItem));
  };

  const handleCompleted = (item) => {
    const tempData = items.filter((element) => element.id !== item.id);
    setItems(tempData);
  };

  return (
    <div>
      <h1 id="heading">To-Do List</h1>
      <form onSubmit={handleSubmit} className="FormStyling">
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}
          placeholder="Enter item"
        />
        <button>Add #{items.length + 1}</button>
      </form>

      <div>
        {items.map((item) => {
          return (
            <div className="ListItemStyling" key={item.id}>
              <p
                id={`todo${item.id}`}
                className="ListText"
                onClick={() => handleCompleted(item)}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
