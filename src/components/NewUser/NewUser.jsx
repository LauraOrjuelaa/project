import './NewUser.css';
import Title from '../Title/Title.jsx';
import Favorites from '../../pages/Favorite/Favorite.jsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,toggleFavorite } from '../../slices/newUser/newUser.jsx';
import '../CardUser/Card.jsx'

function Form() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    isFavorite: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    if (userData.isFavorite) {
      dispatch(toggleFavorite(userData.id));
    }
    setUserData({
      first_name: "",
      last_name: "",
      email: "",
      isFavorite: false,
    });
  };
  console.log(userData);
  return (
    <>
      <Title text="New User" />
      <form className="form-create" onSubmit={handleSubmit}>
        <input className="user" value={userData.first_name} onChange={handleChange} type="text" name="first_name" placeholder="First name" />
        <input className="user" value={userData.last_name} onChange={handleChange} type="text" name="last_name" placeholder="Last name" />
        <input className="user" value={userData.email} onChange={handleChange} type="text" name="email" placeholder="Email" />

        <label className='checkbox' htmlFor="isFavorite">Enable favorites</label>
        <input className='checkbox-enable' type="checkbox" id="isFavorite" name="isFavorite" checked={userData.isFavorite} onChange={handleChange} />
        <button className="btn" type="submit">Save</button>
      </form>
      <Favorites />
    </>
  );
}

export default Form;