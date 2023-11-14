import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

export default function DeleteUser(){
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() =>{
        async function deleteUser(){
            await axios.post(`http://localhost/react/api-php/deleteUser.php?id=${id}`);
        }
        deleteUser();
        navigate('/');
    }, []);
}