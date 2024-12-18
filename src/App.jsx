import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./home/Index";
import Home from "./home/Home";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        { path: "/", element: <Home /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
