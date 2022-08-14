import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DisplayAll from '../components/DisplayAll';
import Login from '../components/Login';
import Register from '../components/Register';

const Display = (props) => {
    const [user, setUser] = useState([]);
    const [ frameList, setFrameList ] = useState([]);


    return( 
        <div>
            <Header
                user={user}
                setUser={setUser}
            />

            <DisplayAll
                frameList={frameList}
                setFrameList={setFrameList}
            />
        </div>
    )
}

export default Display;