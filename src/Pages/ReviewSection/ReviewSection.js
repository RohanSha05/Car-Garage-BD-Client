import React from 'react';
import img1 from '../../images/section1/image1.png';
import img2 from '../../images/section1/image2.png';
import img3 from '../../images/section1/image3.png';
import img4 from '../../images/section1/image4.png';

const ReviewSection = () => {
    return (
        <div classNameName='p-3'>
            <div className="card-group m-5">
                <div className="card">
                    <img src={img1} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bolder">Results Driven</h5>
                        <p className="card-text text-center">Results of our driven car is very impressive. The result is average 90% good. We are trying to increase the result as much as possible.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img2} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bolder">Proven Technology</h5>
                        <p className="card-text text-center">We have proven technology that have good features.Our cars have a highly rated technology's in todays world.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img3} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center text-center fw-bolder">Winning Culture</h5>
                        <p className="card-text text-center">We always try to continue the winning culture of our industry.We provide cars that always have the winning culture.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img4} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bolder">Top Performance</h5>
                        <p className="card-text text-center">The cars we are proving have the top performances.Almost every car have the top performance strategy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;