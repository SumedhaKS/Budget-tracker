import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form';
import Expense from './DLform';
import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('download.jpeg')`, // Put your image in public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Expense />} />
        </Routes>
      </Router>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
