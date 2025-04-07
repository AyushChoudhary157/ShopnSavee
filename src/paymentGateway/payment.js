import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate('/order-placed');
    };

    return (
        <div className="payButtonWrapper">
            <button className="payButton" onClick={handlePayment}>
                <span>Pay </span>
                <span className="finalPrice">$100</span>
            </button>
        </div>
    );
};

export default Payment;
