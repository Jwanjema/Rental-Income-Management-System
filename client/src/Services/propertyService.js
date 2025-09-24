import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const getProperties = () => axios.get(`${API_URL}/properties`);
export const createProperty = (propertyData) => axios.post(`${API_URL}/properties`, propertyData);
export const updateProperty = (id, propertyData) => axios.put(`${API_URL}/properties/${id}`, propertyData);
export const deleteProperty = (id) => axios.delete(`${API_URL}/properties/${id}`);