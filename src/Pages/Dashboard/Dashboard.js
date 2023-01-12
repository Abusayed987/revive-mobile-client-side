import React from 'react';
import { Link } from 'react-router-dom';
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    return (
        <div>
            <MyOrders></MyOrders>
        </div>
    );
};

export default Dashboard;