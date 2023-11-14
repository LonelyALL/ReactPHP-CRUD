import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost/react/api-php/getSingleUser.php?id=${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response2 = await axios.post(`http://localhost/react/api-php/editUser.php?id=${id}`, inputs);
    navigate('/');  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="box">
      <div className="container">
        <div className="title">
          <h2>Edit User</h2>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <span>User:</span>
            <input type="text" name="user" onChange={handleChange} />

            <span>Password:</span>
            <input type="text" name="password" onChange={handleChange} />
          </div>
          <button>Edit</button>
        </form>
      </div>
    </div>
  );
}
