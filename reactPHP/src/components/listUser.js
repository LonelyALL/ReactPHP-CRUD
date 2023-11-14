import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/listUser.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost/react/api-php/getUsers.php');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  });

  return (
    <div className='container-table'>
      <h2>List Users</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Password</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.user}</td>
              <td>{item.pass}</td>
              <td><Link to={`/user/${item.id}/edit`} className='linkButtonEdit'>Edit</Link></td>
              <td><Link to={`/user/${item.id}/delete`} className='linkButtonDelete'>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
