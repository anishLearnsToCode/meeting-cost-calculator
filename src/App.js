import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ApplicationDashboard from './components/ApplicationDashboard';
import Error404NotFoundPage from './components/pages/Error404NotFoundPage';

function App() {
  return (
    <Router>
        <ApplicationDashboard />
        <Routes>
            <Route path='*' element={<Error404NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
