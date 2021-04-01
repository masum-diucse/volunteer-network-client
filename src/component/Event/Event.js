import React from 'react';

const Event = ({ev}) => {
    const {_id,name,imageURL}=ev;
    const handleDeleteEvent=(id) => {
        fetch(`https://volunteer-network-newserver.herokuapp.com/deleteEvent/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                console.log("deleted")
            }
        })
    }
    return (
        <div className="col-md-3 text-center">
            {/* <img style={{height:'250px'}} src={require(`../../images/${event.img}`).default} alt=""/> */}
            <img style={{height:'250px'}} src={imageURL} alt=""/>
            <h4>{name} <button onClick={()=>handleDeleteEvent(_id)}>Delete</button> </h4>
           
        </div>
    );
};

export default Event;