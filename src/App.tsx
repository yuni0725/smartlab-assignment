import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import CreateAccount from "./routes/create-account";
import Login from "./routes/login";
import Home from "./routes/home";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import Loading from "./components/loading-screen";
import { auth } from "./firebase";
import Task from "./routes/task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
  {
    path: "create-account",
    element: <CreateAccount />,
  },
  {
    path: "Login",
    element: <Login />,
  },
]);

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing : border-box;
        color : white;
        --highlight-color : #53e3c3;
        background-color : #121212;
      }
      body {
        font-family : Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
      }
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
