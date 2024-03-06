import './App.css'


function App() {
  
  const stuff = ["en","to","tre","fire"]  
  const listItems = stuff.map(number => 
    <li key={number}>{number}
    </li>
  )
  console.log(listItems)

  return (
    <>  
      
      <ul>{listItems}</ul>
    </>
  )
}

export default App
