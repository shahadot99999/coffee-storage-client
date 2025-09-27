
import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const CoffeeDetails = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/coffees/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data));
    }, [id]);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Coffee Details</h2>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={coffee.photo} alt={coffee.name} className="w-64 h-64 mx-auto rounded-lg mb-4" />
                
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{coffee.name}</h3>
                    <p><strong>Price:</strong> ${coffee.price}</p>
                    <p><strong>Quantity:</strong> {coffee.quantity}</p>
                    <p><strong>Supplier:</strong> {coffee.supplier}</p>
                    <p><strong>Taste:</strong> {coffee.taste}</p>
                    <p><strong>Details:</strong> {coffee.details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;