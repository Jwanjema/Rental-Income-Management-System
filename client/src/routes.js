import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Properties from './pages/Properties.jsx';
// Import other pages...

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/properties" element={<Properties />} />
                {/* Add routes for other pages */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;