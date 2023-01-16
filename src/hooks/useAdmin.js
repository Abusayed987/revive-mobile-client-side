import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(null);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        if (email) {
            fetch(`https://revive-mobile-server-abusayed987.vercel.app/allUser/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === "admin") {
                        setIsAdmin(data.role)
                        setIsAdminLoading(false)
                    }
                    else {
                        logout()
                    }
                })
        }
    }, [email, logout])

    return [isAdmin, isAdminLoading]

};

export default useAdmin;