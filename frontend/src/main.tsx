import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./component/Home.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <Routes>
              <Route path="/home" element={<Home />}>
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
