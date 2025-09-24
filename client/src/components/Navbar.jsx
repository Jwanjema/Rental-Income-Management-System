import React from 'react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 p-4 flex items-center justify-between">
            <div className="relative flex-1 max-w-xl">
                <input type="text" placeholder="Search this page..." className="input w-full pl-10" />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</div>
            </div>
            <button className="btn bg-primary-600 text-white px-4 py-2 shadow-sm">+ Add</button>
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold bg-tealx-600">U</div>
                <div className="hidden sm:block">
                    <div className="font-semibold leading-5">Admin</div>
                    <div className="text-slate-500 text-xs -mt-0.5">admin@rentals.co</div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;