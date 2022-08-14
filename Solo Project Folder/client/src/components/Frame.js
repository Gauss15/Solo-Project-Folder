import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Frame = (props) => {
    const { id } = useParams();
    const [oneFrame, setOneFrame] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/warframes/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneFrame(res.data);
        })
        .catch( (err) => { console.log(err) });
    }, [id]);

    // const deleteHandle = () => {
    //     axios.delete(`http://localhost:8000/api/warframes/${id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         navigate("/warframes");
    //     })
    //     .catch( (err) => { console.log("Error Deleting Frame (FE)",err) });
    // }


    return (
    <div>
        <div>
        </div>
        <h1 className='display-header'>Details about: {oneFrame.name}</h1> 
        <Link className="Link" to="/warframes">Back to Home</Link>
        <div>
        </div>

        <div className="display-text">
            <p>Name: {oneFrame.name}</p>
            <p>Companion: {oneFrame.companion}</p>
            <p>Description: {oneFrame.description}</p>
        </div>

        <div>
            <p>Concept added by: {oneFrame.createdBy} </p>
        </div>

    </div>
    );
};

export default Frame;