import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form';
import Expense from './DLform';
import './App.css';
import Pattern from './Pattern';


function App() {
  return (
    <div>
      <Pattern />
       <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Expense />} />
        </Routes>
      </Router>
      <Pattern />
    </div>


  );
}

export default App;
