// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form';
import Expense from './DLform';
import './App.css';
import Pattern from "./Pattern";

function App() {
  return (
    <Pattern>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Expense />} />
        </Routes>
      </Router>
    </Pattern>
  );
}

export default App;
