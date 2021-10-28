import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="mt-4">
                <div className="text-center">
                    <p className="fw-bold fs-2">I GROW BY PEOPLE HELPING IN NEED.</p>

                    <div className="d-flex justify-content-center align-items-center">

                        <div className="search mt-3">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;