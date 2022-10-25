import { React, useState } from "react"
import List from "./Components/List"
import "./App.css"

function App() {
  const [inputText, setInputText] = useState("")
  console.log(inputText)
  const inputHandler = (e) => {
    // chuyển đổi input đầu vào thành chữ thường
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <div className="main">
      <h1>React Search</h1>
      <input onChange={inputHandler} 
      />
      <List
      input={inputText} />
    </div>
  )
}

export default App;