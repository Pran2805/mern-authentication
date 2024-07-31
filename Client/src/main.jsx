import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import SignIn from './pages/Signin/SignIn.jsx'
import Login from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children:[{
      path: "",
      element: <Login />
    },{
      path: "/",
      element: <Login/>
    },{
      path: "signin",
      element: <SignIn />
    },{
      path: "login",
      element: <Login />
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
