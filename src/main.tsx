import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer/Footer.tsx'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import store from './store/index.ts'
import LoginPage from './pages/Login/login.tsx'
import HomePage from './pages/home/home.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
      <Footer/>
    </Provider>
  </React.StrictMode>
 
  
)
