import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPet = () => {
    const { id } = useParams();
    const [ name, setName ] = useState("");
    const [companion, setCompanion] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [frameNotFoundError, setFrameNotFoundError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/warframes/${id}`)
        .then((res) => {
            setName(res.data.name);
            setCompanion(res.data.companion);
            setDescription(res.data.description);

        })
        .catch((err) => {
            console.log(err.response);
            setFrameNotFoundError(`Frame not found using that ID`);
        });
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/warframes/${id}`, 
        {
            name,
            companion,
            description,

        })
        .then((res) => {
            console.log(res.data)
            navigate("/warframes");
        })
        .catch((err) => {
            console.log(err.response.data);
            setErrors(err.response.data.err.errors);
        });
    };


return (
    <div className="Display-page">
        <div>
        <h2> Edit Your Concept</h2>
        <Link className="Link" to="/warframes">Back to Home</Link>
        </div>

        <form onSubmit={editHandler} className="create-edit-form">
        {frameNotFoundError ? (
            <h2>
              {frameNotFoundError} <Link to="/warframes/new">Add a WarFrame</Link>
            </h2>
          ) : null}
        <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
    <br/>

            <label>Companion</label>
            <input
              type="text"
              name="companion"
              value={companion}
              onChange={(e) => setCompanion(e.target.value)}
            />
    <br/>

            <label>description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description ? <p>{errors.description.message}</p> : null}
    <br/>
        <button className="submit-button" type="submit">Edit Warframe</button>
    </div>

    </form>
    </div>
      );
    };

export default EditPet;
