import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Intake from "./pages/IntakeForm/Intake";
import PreRegistration from "./pages/PreRegistration/PreRegistration";
import Registration from "./pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home/intake-form",
    element: <Intake />,
  },
  {
    path: "/pre-registration",
    element: <PreRegistration />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "success",
    element: <div>SUCCESS</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
