import React, { useEffect, useState } from 'react';
import iconAdd from '../../../images/logos/users-alt 1.png'
import deleteIcon from '../../../images/logos/trash-2 9.png'
import './ValunteerRegisterList.css'
import { Link } from 'react-router-dom';

const ValunteerRegisterList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/volunteers')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    },[])

        // delete 
    const handleDelete = (id) =>{
        const confirm = window.confirm("are you sure ?");
    
        if (confirm === true) {
            const url = `http://localhost:5000/volunteers/${id}`
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = volunteers.filter(service => service._id !== id);
                    setVolunteers(remaining);
                }
                
            })
        }
        
    }

    return (
        <div className="mx-3 mt-2">
            <div className="row">
                <div className="col-2 mt-5">
                    <Link to='/volunteersRegisterList'><p className="text-primary fw-bold hover-Volunteer" style={{fontSize:"16px"}}><img style={{width:"17px", filter:"sepia(100%) hue-rotate(190deg) saturate(500%)"}} src={iconAdd} alt="" /> Volunteer Register List</p></Link>
                    <p className="hover-Volunteer fw-bold"><Link className="text-decoration-none" to='/addEvents'><span className="fs-4 fw-bold">+ </span>  Add Event</Link></p>
                </div>
                <div className="col-10 pe-5 ps-4" style={{backgroundColor:"#e6ffff", height:"100vh"}}>
                    <div style={{borderRadius:"15px"}} className="px-5 bg-white mt-4">
                        <table class="table table-white table-hover ">
                            <thead style={{backgroundColor:"#F5F6FA"}}>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Registering Date</th>
                                <th scope="col">Volunteer List</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {volunteers.map(volunteer => <tbody>
                                <tr>
                                    <th scope="row">{volunteer.name}</th>
                                    <td>{volunteer.email}</td>
                                    <td>{volunteer.date}</td>
                                    <td>{volunteer.title}</td>
                                    <td ><button onClick={()=>handleDelete(volunteer._id)} className="bg-danger d-flex justify-content-center p-1" type="button" style={{width:"32px", height:"32px", borderRadius:"5px"}}><img style={{width:"21px"}} src={deleteIcon} alt="" /></button></td>
                                </tr>
                            </tbody>)}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValunteerRegisterList;
