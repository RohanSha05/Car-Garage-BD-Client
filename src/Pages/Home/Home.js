import React from 'react';
import logo from './logo.png'
import banner1 from './banner1.png'
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import '../Home/Home.css'
import DisplayItems from '../Inventory/DisplayItems/DisplayItems';

const Home = () => {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        <div className='mt-5'>
                            <div className='d-flex w-75 justify-content-center align-items-center'>
                                <img className='w-25' src={logo} alt="" />
                                <h2 className=' d-flex align-items-center semi-bold fw-bolder home-title'>Let’s Start Shipping.</h2>
                            </div>
                            <p className='w-100 text-center mt-3 d-flex align-items-center fs-5'>
                                It is an increasingly data-driven business as CDG seeks to make the process of delivering all those cars as safe and efficient as possible.
                                “We have around 120 trucks on the roads,” says Kirill Makarov, CG’s senior systems engineer.
                                “We are in the process of upgrading the digital systems on those trucks to monitor things like mileage and driver behaviour to give us more insights into our business."</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className=''>
                            <img className='' src={banner1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ReviewSection></ReviewSection>
            <ServiceSection></ServiceSection>
            <h3 className='text-center bg-info p-3 mt-3'>Inventory Items</h3>
            <DisplayItems></DisplayItems>
        </div>
    );
};

export default Home;