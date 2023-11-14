import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function CreateUser(){

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = axios.post('http://localhost/react/api-php/saveUser.php', inputs);
        navigate('/');
    }
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <div className="box">
            <div className="container">
                <div className="title"><h2>Create User</h2></div>
                <form method="post" onSubmit={handleSubmit}>
                    <span>User:</span>
                    <input type="text" name="user" onChange={handleChange} />

                    <span>Password:</span>
                    <input type="text" name="password" onChange={handleChange} />

                    <button>Create</button>
                </form>
            </div>
        </div>
        
    )
}