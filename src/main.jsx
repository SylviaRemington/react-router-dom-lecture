import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the browser router around the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// If can't remember what to do for React Router, can go to 'React Router docs' 
// and use the following:

// Declarative
// Declarative mode enables basic routing features like matching URLs to components, navigating around the app, and providing active states with APIs like <Link>, useNavigate, and useLocation.

// import { BrowserRouter } from "react-router";

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );