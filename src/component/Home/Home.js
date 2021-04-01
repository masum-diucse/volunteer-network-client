import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('https://volunteer-network-newserver.herokuapp.com/getAllEvents')
    .then(res=>res.json())
    .then(data=>{
        setEvents(data)
    })
    },[])
    
    return (
        <div className="row">
            {
                events.map(event=><Event ev={event}></Event>)
            }
        </div>
    );
};

export default Home;