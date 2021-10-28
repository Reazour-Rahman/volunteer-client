import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './RegisterVolunteer.css'
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const RegisterVolunteer = () => {
    const [services, setServices] = useState([]);
    const { register, handleSubmit , reset} = useForm()
    const {volunteerId} = useParams();

    useEffect(() =>{
        fetch('https://frozen-taiga-27625.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    /* take input and send to server */
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-taiga-27625.herokuapp.com/volunteers', data)
        .then(res => {
            if (res.data.insertedId) {
                alert("Added successfully")
                reset();
            }
        })
    };
    

    return (
        <div>
            {services.map(service => service._id == volunteerId ?
                <div className="d-flex justify-content-center my-4">
                    <div className=" border-1 border p-5 form">
                        <h3>Register as volunteer</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("name")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Full Name"
                                type="search"
                                variant="standard"
                            />
                            <TextField
                                {...register("email")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Username or Email"
                                type="email"
                                variant="standard"
                            />
                            <TextField
                            {...register("date")}
                                className="w-100 mt-4"
                                id="standard-search"
                                type="date"
                                variant="standard"
                            />
                            <TextField
                                {...register("description")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label="Description"
                                type="search"
                                variant="standard"
                            />
                            <TextField
                            {...register("title")}
                                className="w-100 mt-4"
                                id="standard-search"
                                label={service.title}
                                value={service.title}
                                type="search"
                                variant="standard"
                            />
                            <input type="submit" value="Registration" class="btn btn-primary w-100 mt-4 rounded-0" />
                        </form>
                    </div>
                </div>:<div></div>
            )}
        </div>
    );
};

export default RegisterVolunteer;



/* 



            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>





*/