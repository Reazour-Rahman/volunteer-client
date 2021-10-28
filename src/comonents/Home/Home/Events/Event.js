import React, { useEffect, useState } from 'react';
import SingleEvent from './SingleEvent';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './Event..css'


const Event = () => {

    const [services, setServices] = useState([]);

    
    useEffect(()=>{
        setTimeout(() => {

            fetch('https://frozen-taiga-27625.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

        }, 2500);
    },[]);


    console.log(services);

    return (
        <div className="container">
            <div id="elementId" className="row row-cols-1 row-cols-md-4 gy-5 mt-2 mb-5">
                {
                    services.length < 1?<section className="funTimes"><main className="row row-cols-1 row-cols-md-4 gy-5 mt-2 mb-5"><Stack spacing={1}>
                    <div className="col d-flex justify-content-center align-items-center">
                        <div style={{width:"270px", height:"320px"}}>
                            <div className="card h-100">
                                <Skeleton variant="rectangular" width={270} height={240} />
                                <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                                    <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack><Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack></main></section>:services.map(service => <SingleEvent key={service._id} service={service}></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default Event;

/* 

        <Stack spacing={1}>
            <div className="col d-flex justify-content-center align-items-center">
                <div style={{width:"270px", height:"320px"}}>
                    <div className="card h-100">
                        <Skeleton variant="rectangular" width={270} height={240} />
                        <div style={{borderRadius:"20px"}} className="card-body pt-2 ">
                            <Skeleton style={{fontSize:"20px", fontWeight:"600"}} variant="text" />
                        </div>
                    </div>
                </div>
            </div>
        </Stack>

*/


/* import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
 */