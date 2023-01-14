import React from 'react';



const BookingModal = ({ successAction, modalData, user }) => {
    // const { imageUrl, location, productName, resalePrice, sellerEmail, sellerName, usesTime, _id } = modalData;

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">{modalData?.productName}</h3>
                    <p className='text-secondary mt-1'>Price:{modalData?.resalePrice}</p>
                    <form onSubmit={(event) => successAction(modalData, event)} className='grid grid-cols-1 gap-4 mt-11 w-11/12 mx-auto'>

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