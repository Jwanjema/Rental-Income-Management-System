import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">
                <Navbar />
                <div className="p-4">
                    <AppRoutes />
                </div>
            </main>
        </div>
    );
}

export default App;