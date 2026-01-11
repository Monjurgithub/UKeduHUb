import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from './component/Home/Home';

import { Root } from './component/Root/Root';
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy';
import UnderConstruction from './component/UnderConstraction/UnderConstraction';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "about", Component: UnderConstruction },
      { path: "universities", Component: UnderConstruction },
      { path: "english-club", Component: UnderConstruction },
      { path: "success-stories", Component: UnderConstruction },
      { path: "blog", Component: UnderConstruction },
      { path: "contact", Component: UnderConstruction },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
