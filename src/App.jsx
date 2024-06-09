import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Themeprovider } from "styled-components"

import  Home from "./pages/Home"


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

