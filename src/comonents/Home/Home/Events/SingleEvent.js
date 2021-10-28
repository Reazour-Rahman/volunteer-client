import React from 'react';
import { Link } from 'react-router-dom';
import './Event..css'

const SingleEvent = (props) => {
    const {title, img, _id} = props.service;
    return (
        <Link to={`registerVolunteer/${_id}`} className="text-decoration-none text-dark">
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <img src={img} class="card-img-top" style={{width:"270px", height:"240px"}} alt="..."/>
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <p style={{fontSize:"20px", fontWeight:"600"}} className="card-text text-center">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleEvent;
