import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PeriodicTable from './components/ChemistryTable';
import ThreeDModel from './components/Show3dModel';
import AboutProject from './components/AboutProject';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PeriodicTable />} />
          <Route path="/3d-model" element={<ThreeDModel />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;