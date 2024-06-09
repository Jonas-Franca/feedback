import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Themeprovider } from "styled-components"

import  Home from "./pages/Home"
import {theme} from "./styles/theme.js"
import  {GlobalStyle}  from "./styles/global.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export function App() {
  return (
    <Themeprovider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Themeprovider>
      
  )
}

