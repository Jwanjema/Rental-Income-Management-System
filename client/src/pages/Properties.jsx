import React, { useState, useEffect } from 'react';
import { getProperties, deleteProperty } from '../services/propertyService';

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await getProperties();
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProperty(id);
            setProperties(properties.filter(prop => prop.id !== id));
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    return (
        <div className="space-y-4 p-6">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold">Properties</h1>
                    <p className="text-slate-500">Manage your properties and availability</p>
                </div>
            </div>
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="table-head">
                            <tr className="text-left text-slate-500 text-sm">
                                <th className="py-3 px-4">Address</th>
                                <th className="py-3 px-4">Rent</th>
                                <th className="py-3 px-4">Beds</th>
                                <th className="py-3 px-4">Baths</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Agent</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {properties.map(prop => (
                                <tr key={prop.id} className="hover:bg-slate-50">
                                    <td className="py-3 px-4 font-medium">{prop.address}</td>
                                    <td className="py-3 px-4">KSH {prop.rent.toLocaleString()}</td>
                                    <td className="py-3 px-4">{prop.beds}</td>
                                    <td className="py-3 px-4">{prop.baths}</td>
                                    <td className="py-3 px-4">{prop.status}</td>
                                    <td className="py-3 px-4">{prop.agent}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            <button className="btn px-3 py-1.5 bg-primary-50 text-primary-600">Edit</button>
                                            <button
                                                onClick={() => handleDelete(prop.id)}
                                                className="btn px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Properties;