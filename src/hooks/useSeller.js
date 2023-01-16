import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(null);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        if (email) {
            fetch(`https://revive-mobile-server-abusayed987.vercel.app/allUser/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === "seller") {
                        setIsSeller(data.role)
                        setIsSellerLoading(false)
                    }
                    else {
                        logout()
                    }
                })
        }
    }, [email, logout])

    return [isSeller, isSellerLoading]

};

export default useSeller;