import React,{useState} from 'react';
import Button from './Button/Button'
import ContadorConteiner from './Contador/ContadorConteiner';
import List from './List/List'
import './App.css';

function App() {

  const [user, setUser] = useState({
    name: "Emmanuel",
    edad: 22
  })

  const handlerUser = () => {
    setUser({
      name: "Marisol",
      Edad: 20
    })
    const newColor = color === "red" ? "green" : "red"
    setColor(newColor)
  }

  const [color,setColor] = useState("red")

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome {user.name} to react!
        </h1>
        <Button handlerClick={handlerUser} color={color} text={"Click me!"} />
        <ContadorConteiner />
        <List />
      </header>
    </div>
  );
}

export default App;
