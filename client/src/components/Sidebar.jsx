import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', name: 'Dashboard' },
    { to: '/properties', name: 'Properties' },
    { to: '/agents', name: 'Agents' },
    { to: '/tenants', name: 'Tenants' },
    { to: '/leases', name: 'Leases' },
    { to: '/payments', name: 'Payments' },
    { to: '/reports', name: 'Reports' },
    { to: '/settings', name: 'Settings' },
];

const Sidebar = () => {
    return (
        <aside className="w-72 border-r border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold bg-primary-600">
                    RI
                </div>
                <div>
                    <div className="font-extrabold text-lg">Rentals & Income</div>
                    <div className="text-slate-500 text-sm">Management System</div>
                </div>
            </div>
            <nav className="mt-4">
                <ul className="space-y-1">
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 font-medium ${
                                        isActive ? 'bg-primary-50 text-primary-600' : 'hover:bg-slate-50 text-slate-700'
                                    }`
                                }
                            >
                                <span className={`w-2 h-2 rounded-full ${item.name === 'Properties' ? 'bg-primary-600' : 'bg-slate-300'}`}></span>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto p-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-600 text-sm">
                    Tip: Use the + Add button on each data page to create new items.
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;