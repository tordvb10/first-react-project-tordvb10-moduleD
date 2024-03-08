import React from 'react'
//import { ReactDOM } from 'react'
import './App.css'
import content from "../verses.json"
import picture from "./assets/nasa-hubble-space-telescope-SkInLcVMCUI-unsplash.jpg"

import.meta.env.VITE_API_KEY
const secret = import.meta.env.VITE_API_KEY
console.log(secret)

//import scripturesFetch from './scripturesFetch.js'
function ComponentBibleVerse() {
  const verse = content.verseId[Math.floor(Math.random()*content.verseId.length)]
  const listItems =  <li key={verse}>{verse}</li>
  return (
    <React.Fragment>  
      <img className="bilder" src={picture} alt="picture" />
      <ul className='lister'>{listItems}</ul>
    </React.Fragment>
  )
}
function App() {
  return (
    <React.Fragment>
      <ComponentBibleVerse />
    </React.Fragment>
  )  
}

export default App
