import React, { useEffect, useState } from "react";

const getItems = () => {
  let itemss = localStorage.getItem("itemss");

  if (itemss) {
    return JSON.parse(localStorage.getItem("itemss"));
  }

  return [];
};

const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getItems);

  const addItemHandler = () => {
    if (data.trim().length > 0) {
      setItems([...items, data]);
      setData("");
    }

    console.log(items);
    //console.log(data);
  };

  const deleteItemHandler = (id) => {
    console.log(id);
    const updatedItems = items.filter((x, i) => {
      return i !== id;
    });

    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("itemss", JSON.stringify(items));
  }, [items]);

  return (
    <div className="todo-div">
      <div className="addItems">
        <input
          type="text"
          name="ip"
          placeholder="enter items"
          value={data}
          onChange={(event) => setData(event.target.value)}
        ></input>
        <button onClick={addItemHandler}>Add Item</button>

        <div>
          {items.map((x, i) => {
            return (
              <div className="child-div" key={i}>
                <p>{x}</p>
                <button onClick={() => deleteItemHandler(i)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
