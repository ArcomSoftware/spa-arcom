import { useEffect } from "react"
import Home from "./pages/home/home"

function App() {
 
const setCookie = (name: string, value: string, expire: string) => {

  document.cookie = `${name} = ${value}; max-age=${expire}; samesite=none; path=/;`
}

useEffect(()=>{
  setCookie('hello', 'cookie','0')
},[])

  return (
    <>
      <Home/>
    </>
  )
}

export default App

