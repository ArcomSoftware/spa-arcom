import { useEffect } from "react"
import Main from "./pages/Main/main"
import {Routes, Route } from "react-router-dom"

function App() {
 
const setCookie = (name: string, value: string, expire: string) => {

  document.cookie = `${name} = ${value}; max-age=${expire}; samesite=none; path=/;`
}

useEffect(()=>{
  setCookie('hello', 'cookie','0')
},[])

  return (
    <>
      <Main/>
    </>
  )
}

export default App

