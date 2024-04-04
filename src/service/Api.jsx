import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../components/CardAPI/CardUser.css';
import Card from '../components/CardAPI/CardUser.jsx';
import {  toggleFavorite } from '../slices/newUser/newUser.jsx';

const API_User = () => {

  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        const allUsers = [...data.data];
        setUsers(allUsers);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  
  }, []);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <div className='container-card'>
        {users.map((user) => (
          
          <Card key={user.id} user={user} handleToggleFavorite={handleToggleFavorite} />
        ))}
        
      </div>
    </div>
  );
};

export default API_User;