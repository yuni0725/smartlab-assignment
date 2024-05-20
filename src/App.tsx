import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import CreateAccount from "./routes/create-account";
import Login from "./routes/login";
import Home from "./routes/home";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Loading from "./components/loading-screen";
import { auth } from "./firebase";
import { reset } from "styled-reset";
import TaskMenu from "./routes/task-menu";
import Task from "./routes/task";
import ProtectedRoute from "./components/auth-protected-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/task",
        element: <TaskMenu />,
      },
      {
        path: "/task/:fileID",
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
        --highlight-color : #C28FFF;
        background-color : #121212;
      }
      body {
        font-family : Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        &::-webkit-scrollbar {
          display : none;
        }
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
