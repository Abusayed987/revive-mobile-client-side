import React, { useEffect, useState } from 'react';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(null);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/allUser/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === "admin") {
                        //atao hote pare je setIsAdmin(true) r okhane (false)
                        setIsAdmin(data.role)
                        setIsAdminLoading(false)
                    }
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]

};

export default useAdmin;