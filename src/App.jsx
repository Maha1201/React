import { useState, useEffect } from 'react'
import './App.css'
import Api from './composants/Api'
import Post from './composants/Post'

function App() {

  return (
    <>
      <Api />
      <Post />
    </>
  )
}

export default App