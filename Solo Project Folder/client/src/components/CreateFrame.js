import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const CreateFrame = () => {
  const [name, setName] = useState("");
  const [companion, setCompanion] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);


  const submitHandler = (e)=> {
    e.preventDefault();

    axios.post("http://localhost:8000/api/warframes", {
      name,
      companion,
      description,
    }, { withCredentials: true},
  )
    .then((res)=>{
      console.log(res);
      navigate("/warframes");
    })
    .catch( (err) => { console.log(err.response.data);
      setErrors(err.response.data.err.errors);
  });
  }

return (
    <div className="Display-page">
        <div >
          <h1> Create Your Warframe Concept</h1>
          <Link className="Link" to="/warframes">Back to Home</Link>
        </div>

          <form onSubmit={submitHandler} className="create-edit-form">
            <div>
              <label>Warframe Name:</label>
              <input
                type="text"
                name = "name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
    <br/>
              <label>Companion:</label>
              <input
                type="text"
                name = "companion"
                value={companion}
                onChange={(e) => setCompanion(e.target.value)}
              />
    <br/>
              <label>Description:</label>
              <textarea
                type="text"
                name = "description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description ? <p>{errors.description.message}</p> : null}
    <br/>
    <button className="submit-button" type="submit">Add Warframe</button>
          </div>

          </form>
        </div>

  );
};

export default CreateFrame;