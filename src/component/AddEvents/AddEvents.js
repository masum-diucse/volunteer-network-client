import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');
const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl,setImageUrl]=useState(null);
    const handleImageUpload=(event) => {
        console.log(event.target.files[0])
        const imageData=new FormData();
        imageData.set('key','acf4bf1ed9badbca5bd6940704c04aff')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = data =>{ 
        const eventData={
            name:data.name,
            imageURL:imageUrl
        };
        const url='https://volunteer-network-newserver.herokuapp.com/addEvent';
        fetch(url,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(eventData)
        }).then(res=>res.json())
        .then(result=>console.log(result))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" placeholder="Event Name" ref={register({ required: true })} /> <br/>
          <input name="exampleRequired" type="file" onChange={handleImageUpload} /> <br/>
          <p>{imageUrl && <span>Image Uploaded</span>}</p>
          <input type="submit" />
        </form>
    );
};

export default AddEvents;