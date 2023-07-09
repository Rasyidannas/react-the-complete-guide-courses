import React, { useCallback, useState, useMemo } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  //this is useCallback for function and avoid rerender function
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  //this is useMemo for store data and avoid rerender when data not change
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
