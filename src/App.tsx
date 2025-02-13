import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import ThreeDModelPage from "@/pages/3d-model";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ThreeDModelPage />} path="/3d-model" />
    </Routes>
  );
}

export default App;
