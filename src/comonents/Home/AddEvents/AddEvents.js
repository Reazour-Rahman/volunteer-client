import React from 'react';
import { Link } from 'react-router-dom';
import iconAdd from '../../../images/logos/users-alt 1.png'
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddEvents = () => {
    const { register, handleSubmit , reset} = useForm()


    /* take input and send to server */
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-taiga-27625.herokuapp.com/events', data)
        .then(res => {
            if (res.data.insertedId) {
                alert("Added successfully")
                reset();
            }
        })
    };


    return (
        <div>
            <div className="mx-3 mt-2">
                <div className="row">

                    <div className="col-2 mt-5">
                    <Link className="text-decoration-none" to='/volunteersRegisterList'><p className="text-primary fw-bold hover-Volunteer" style={{fontSize:"16px"}}><img style={{width:"17px", filter:"sepia(100%) hue-rotate(190deg) saturate(500%)"}} src={iconAdd} alt="" /> Volunteer Register List</p></Link>
                        <p className="hover-Volunteer"><Link to='/addEvents'><span className="fs-4 fw-bold">+ </span>  Add Event</Link></p>
                    </div>

                    <div className="col-10 pe-5 ps-4" style={{backgroundColor:"#e6ffff", height:"100vh"}}>
                        <div style={{borderRadius:"15px"}} className="px-5 bg-white mt-4">

                            <form class="row py-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Event Title</label>
                                        <input required {...register("eventTitle")} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter title"/>
                                        </div>
                                        <div class="mb-3">
                                        <label  for="exampleFormControlTextarea1" class="form-label">Description</label>
                                        <textarea {...register("eventDescription")} class="form-control" required placeholder="Enter Description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>                         
                                <div className="col">
                                    <div class="mb-3">
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput" class="form-label">Event date</label>
                                            <input required {...register("date")} type="date" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                                            </div>
                                        <div class="mb-3">
                                            <label for="formFile" class="form-label">Banner Image URL</label>
                                            <input required {...register("imageURL")} class="form-control" type="text" id="formFile" placeholder="Enter Banner URL"/>
                                        </div>
                                        <div class="mb-3">
                                        <input type="submit" value="Submit" class="btn btn-primary btn-sm w-100"/>
                                        </div>
                                    </div>
                                </div>                         
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;