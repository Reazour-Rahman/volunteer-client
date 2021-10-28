import React, { useEffect, useState } from 'react';
import './EventsAdded.css'

const EventsAdded = () => {
    const [events, setEvents] = useState([])

    useEffect(()=>{
            fetch('https://frozen-taiga-27625.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    },[]);

    // delete 
    const handleDelete = (id) =>{
    const confirm = window.confirm("are you sure ?");

    if (confirm === true) {
        const url = `https://frozen-taiga-27625.herokuapp.com/events/${id}`
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert("deleted successfully")
                const remaining = events.filter(service => service._id !== id);
                setEvents(remaining);
            }
            
        })
    }
    
    }

    return (
        <div className="bg-light border border-top-1" style={{height:"100vh"}}>
            <div className="container">
            <section style={{marginTop:""}} className="row row-cols-1 row-cols-md-2 g-4 mt-md-5 mt-sm-3">
            {
                events.map(singleEvent => 
                    <div class="col d-flex justify-content-center align-items-center" >
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={singleEvent.imageURL} style={{height:"100px"}} class="img-fluid rounded-start h-100" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{singleEvent.eventTitle}</h5>
                                    <p class="card-text">{singleEvent.eventDescription}.</p>
                                    <div className="d-flex justify-content-between">
                                    <p class="card-text"><small class="fw-bold">{singleEvent.date}</small></p>
                                    <button onClick={()=>handleDelete(singleEvent._id)} type="button" class="btn btn-light">Cancel</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
            </section>
            </div>
        </div>
    );
};

export default EventsAdded;

