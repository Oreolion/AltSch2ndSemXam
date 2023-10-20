import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/about/:repositoryName" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
};

export default App;
