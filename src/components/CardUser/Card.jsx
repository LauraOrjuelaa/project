import './Card.css'
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png'
import {  useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../slices/newUser/newUser.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';

function Card({ user }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.users.favorites);
  const isFavorite = favorites.some((fav) => fav.id === user.id);

  const handleRemoveUser = () => {
    dispatch(removeUser(user.id));
  };

  return (
    <div key={user.id} className={`card-user ${isFavorite ? "favorite" : ""}`}>
      <img
        src={Logo}
        className={`user-image ${isFavorite ? "favorite-image" : ""}`}
        alt="User"
      />
      <p className="name">
        {user.first_name} {user.last_name}
      </p>
      <p className="email">{user.email}</p>
      <hr className="card-line" />
        <button onClick={handleRemoveUser} className="btn-remove">
          <FontAwesomeIcon className='btn-icon' icon={faX} style={{ color: "#df1616" }} />
          REMOVE
        </button>
    </div>
  );
}
Card.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Card;
