import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';


const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { Condition, categoryId, description, imageUrl, isAdvertised, location, originalPrice, productName, resalePrice, sellerEmail, sellerName, todayDate, usesTime, _id, isVerified, phone, } = product;

    const navigate = useNavigate()

    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const buyerName = form.name.value;
        const buyerPhone = form.buyerPhone.value;
        const buyerEmail = form.email.value;
        const metingLocation = form.metingLocation.value;


        const bookingItem = {
            productId: _id,
            productName: productName,
            sellerEmail: sellerEmail,
            imageUrl: imageUrl,
            resalePrice,
            buyerName: buyerName,
            buyerPhone: buyerPhone,
            buyerEmail: buyerEmail,
            metingLocation: metingLocation,
            usesTime: usesTime,
            allReadyBook: true,
            payment: false,
        }
        fetch('http://localhost:4000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${productName} Booking Confirmed`);
                    navigate('/dashboard/myOrders')
                    // AI khane up date korte hobe
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">{productName}</h3>
                    <p className='text-secondary mt-1'>Price:{resalePrice}</p>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-11 w-11/12 mx-auto'>

                        <input name='name' disabled defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered input-accent w-full " />

                        <input name='email' disabled defaultValue={user?.email} type="email" className="input input-bordered input-accent w-full " />

                        <input name='buyerPhone' type="text" placeholder="Your Phone" className="input input-bordered input-accent w-full " required />

                        <input name='metingLocation' type="text" placeholder="Meeting Location" className="input input-bordered input-accent w-full " required />

                        <input className='btn btn-primary w-full mt-3' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;