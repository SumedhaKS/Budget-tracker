import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Expense from './DLform';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/home" element={<Expense />} />
        </Routes>
      </Router>

    </div>


  );
}



export default App;
