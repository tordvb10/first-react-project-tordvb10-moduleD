import React from 'react'
//import { ReactDOM } from 'react'
import './App.css'
import content from "../verses.json"
//import scripturesFetch from './scripturesFetch.js'
function ComponentBibleVerse() {
  const verse = content.verseId[Math.floor(Math.random()*content.verseId.length)]
  const listItems =  <li key={verse}>{verse}</li>
  return (
    <React.Fragment>  
      <ul className='lister'>{listItems}</ul>
    </React.Fragment>
  )
}
function App() {
  return (
    <React.Fragment>
      <ComponentBibleVerse />
      <ComponentBibleVerse />
      <ComponentBibleVerse />
      <ComponentBibleVerse />
    </React.Fragment>
  )  
}

export default App
