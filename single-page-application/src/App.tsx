import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import IdentifyDifference from './components/IdentifyDifference';
import MemoryCheck from './components/MemoryCheck';
import PageNotFound from './components/PageNotFound';
import { Header } from './components/shared/index';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identify-difference" element={<IdentifyDifference />} />
        <Route path="/memory-check" element={<MemoryCheck />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>      
    </Router>
  );
};
export default App;