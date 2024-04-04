import './CardUser.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, toggleFavorite } from '../../slices/newUser/newUser.jsx';

function CardUser ({ user }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.users.favorites); 
  console.log(useSelector((state) => state.users))

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id)); 
    console.log(id)
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const isFavorite = favorites.some((fav) => fav.id === user.id);
  return (
    <div key={user.id} className={`card-user ${isFavorite ? "favorite" : ""}`}>
      <img
        src={user.avatar}
        className={`user-image ${isFavorite ? "favorite-image" : ""}`}
      />
      <p className='name'>
        {user.first_name}  {user.last_name}
      </p>
      <p className='email'>
        {user.email}
      </p>
      <hr className='card-line' />
      <div className="btn-container">
        <button className='btn-favorite' onClick={() => handleToggleFavorite(user.id)}>
          <FontAwesomeIcon icon={faHeart} style={{ color: "#C1D72F" }} />
        </button>
        <button className='btn-delete' onClick={() => handleRemoveUser(user.id)}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "#db1414" }} />
        </button>
      </div>
    </div>
  );
}

CardUser.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CardUser;
