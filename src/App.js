import './App.css';
import Page from "./Components/Page/Page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Page />} />
        </Routes>
    </Router>
  );
}

export default App;
