import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signin from './pages/SignIn/SignIn.jsx'
import LogIn from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children:[{
      path: "",
      element: <LogIn />
    },{
      path: "/",
      element: <LogIn/>
    },{
      path: "signin",
      element: <Signin />
    },{
      path: "login",
      element: <LogIn />
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
