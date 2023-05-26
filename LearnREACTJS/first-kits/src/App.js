import { Routes, Route } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import "./App.css";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContextC } from "context/ThemeContext";
import { useContext } from "react";

const lightTheme = {
  body: "#e5e5e5",
};

const darkTheme = {
  body: "black",
};

function App() {
  const context = useContext(ThemeContextC);

  const isDarkTheme = context.theme === "dark";
  // let element = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "about", element: <About /> },
  //   { path: "login", element: <Login /> },
  //   { path: "*", element: <NotFoundPage /> },
  // ]);
  // return <MainLayout>{element}</MainLayout>;
  return (
    // <div className="app">
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/dashboard" />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
