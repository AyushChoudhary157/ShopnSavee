import React from 'react';
import './orderPlaced.css';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
    return (
        <div className='Order'>
            <h1>🎉 Order Successfully Placed!</h1>
            <p>Thank you for your purchase.</p>
            <Link to="/">
                <div>Shop Again</div>
            </Link>
        </div>
    );
};

export default OrderPlaced;
