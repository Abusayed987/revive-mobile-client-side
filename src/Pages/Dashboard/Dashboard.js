import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';
import AllBuyers from './AllBuyers/AllBuyers';
import MyOrders from './MyOrders/MyOrders';
import MyProducts from './MyProducts/MyProducts';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;

    const { data: userInfo = {} } = useQuery({
        queryKey: ["userInfo"],
        queryFn: () => fetch(`https://revive-mobile-server-abusayed987.vercel.app/allUser/${email}`).then(res => res.json())
    })
    const { role } = userInfo;

    return (
        <div>
            {(role === "buyer") &&
                <MyOrders></MyOrders>
            }

            {(role === "seller") &&
                <MyProducts></MyProducts>
            }

            {(role === "admin") &&
                <AllBuyers></AllBuyers>
            }
        </div>
    );
};

export default Dashboard;