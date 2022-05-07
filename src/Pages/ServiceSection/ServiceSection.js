import React from 'react';
import pic1 from '../../images/section2/pic1.png';
import pic2 from '../../images/section2/pic2.png';
import pic3 from '../../images/section2/pic3.png';

const ServiceSection = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img className='w-75 mx-auto' src={pic1} alt="" />
                        <h4 className='text-center'>1.Connect</h4>
                        <p className='text-center w-75'>Connect your online store, import your products, then send us your inventory.</p>
                    </div>
                    <div class="col">
                        <img className='w-75 mx-auto' src={pic2} alt="" />
                        <h4 className='text-center'>2. Store</h4>
                        <p className='text-center w-75'>We store your inventory in a combination of our fulfillment centers.</p>
                    </div>
                    <div class="col">
                        <img className='w-75 mx-auto' src={pic3} alt="" />
                        <h4 className='text-center'>3 .Ship</h4>
                        <p className='text-center w-75'>As soon as a customer places an order, we ship it from the nearest fulfillment center.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;