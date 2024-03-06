import React from 'react'
import { ReactDOM } from 'react'
import './App.css'
import content from "../verses"
//import scripturesFetch from './scripturesFetch.js'
console.log(content)

function App() {
  const verse = content.verseId[Math.floor(Math.random()*content.verseId.length)]
  const listItems = (
    <li key={verse}>{verse}
    </li>
  )
  console.log(verse)
  console.log(listItems)

  return (
    <React.Fragment>  
      <ul className='lister'>{listItems}</ul>
    </React.Fragment>
  )
}

export default App
