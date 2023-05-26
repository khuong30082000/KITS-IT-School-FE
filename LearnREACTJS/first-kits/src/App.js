import { Routes, Route } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import "./App.css";
import { Navigate } from "react-router-dom";

// import { useRoutes } from "react-router-dom";

function App() {
  // let element = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "about", element: <About /> },
  //   { path: "login", element: <Login /> },
  //   { path: "*", element: <NotFoundPage /> },
  // ]);
  // return <MainLayout>{element}</MainLayout>;
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Navigate to="/dashboard" />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
