import { useState } from "react";
import "./App.css";
import "./index.css";
import { data } from "./data";
import Final from "./Final";

function App() {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "gardening",
  });
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Watching Tv");
  const displayPerson = () => {
    setPerson({ name: "John", age: 29, hobby: "gaming" });
  };
  return (
    <div>
      <p>Name : {person.name}</p>
      <p>Age : {person.age}</p>
      <p>Hobby : {person.hobby}</p>
      <button onClick={displayPerson} className="btn btn-primary">
        Show John
      </button>
    </div>
  );
}

export default App;

//USE STATE ARRAY EXAMPLE
{
  /*function App() {
  const [count, setCount] = useState(0);

  const func = () => {
    setCount(count + 1);
  };
  const [dataList, removeItem] = useState(data);
  const removeListItem = (id) => {
    const newList = dataList.filter((each) => each.id != id);
    removeItem(newList);
  };

  return (
    <div>
{/*       
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <ul style={{ listStyleType: "none" }}>
        {dataList.map((each) => (
          <Final
            name={each.name}
            id={each.id}
            key={each.id}
            remove={removeListItem}
          />
        ))}
      </ul>
      <button onClick={() => removeItem([])} className="btn btn-warning">
        Clear All
      </button>
       }
       
      </div>*/
}
