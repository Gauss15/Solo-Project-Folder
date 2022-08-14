import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'

const DisplayAll = () => {    
    const [ frameList, setFrameList ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/warframes")
            .then((res) => {
                console.log(res.data);
                setFrameList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
      <div>
        <h1>Create Your Conecpt</h1>
      <div>
        <Link className="Link" to="/warframes/new">Create a Warframe</Link>
        </div>
        <h2>Concepts Created By The Community</h2>
        <table className="tableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>Companion</th>
                <th>Actions</th>
              </tr>
                </thead>
                <tbody>
                  { frameList.map((frames, index) => {
                    return (
                      <tr key={frames._id}>
                        <td>{frames.name}</td>
                        <td>{frames.companion}</td>
                        <td>
                          <Link className="Link" to= {`/warframes/${frames._id}`}>Details</Link> | 
                          <Link className="Link" to={`/warframes/${frames._id}/edit`}> Edit</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
        </div>
      );
    };

    export default DisplayAll;